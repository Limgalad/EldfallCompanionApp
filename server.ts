import express from "express";
import path from "path";
import crypto from "crypto";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// --- Bug-report abuse protections -------------------------------------------

// Secret used to sign CAPTCHA tokens. If not provided, a random one is generated
// per process start (tokens then won't survive a restart, which is acceptable).
const CAPTCHA_SECRET =
  process.env.CAPTCHA_SECRET || crypto.randomBytes(32).toString("hex");
if (!process.env.CAPTCHA_SECRET) {
  console.warn(
    "WARNING: CAPTCHA_SECRET not set — using a random per-process secret. " +
      "Existing CAPTCHA tokens are invalidated on every restart.",
  );
}

const CAPTCHA_TTL_MS = 5 * 60 * 1000; // 5 minutes
const MAX_REPORT_LENGTH = 5000;

// Issue a challenge: two small addends plus a signed, expiring token. The token
// commits to the correct sum, so the server never has to trust client-side math.
const makeCaptcha = () => {
  const a = crypto.randomInt(1, 11);
  const b = crypto.randomInt(1, 11);
  const expiresAt = Date.now() + CAPTCHA_TTL_MS;
  const sig = crypto
    .createHmac("sha256", CAPTCHA_SECRET)
    .update(`${a + b}.${expiresAt}`)
    .digest("hex");
  return { a, b, token: `${expiresAt}.${sig}` };
};

// A correct answer reproduces the signature; anything else (or an expired /
// malformed token) fails. Comparison is timing-safe.
const verifyCaptcha = (token: unknown, answer: unknown): boolean => {
  if (typeof token !== "string") return false;
  if (typeof answer !== "number" || !Number.isFinite(answer)) return false;

  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [expiresRaw, sig] = parts;

  const expiresAt = Number(expiresRaw);
  if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) return false;

  const expected = crypto
    .createHmac("sha256", CAPTCHA_SECRET)
    .update(`${answer}.${expiresAt}`)
    .digest("hex");

  const sigBuf = Buffer.from(sig);
  const expBuf = Buffer.from(expected);
  if (sigBuf.length !== expBuf.length) return false;
  return crypto.timingSafeEqual(sigBuf, expBuf);
};

// Simple in-memory sliding-window rate limiter keyed by client IP.
const rateBuckets = new Map<string, number[]>();
const isRateLimited = (ip: string, max: number, windowMs: number): boolean => {
  const now = Date.now();
  const hits = (rateBuckets.get(ip) || []).filter((t) => now - t < windowMs);
  if (hits.length >= max) {
    rateBuckets.set(ip, hits);
    return true;
  }
  hits.push(now);
  rateBuckets.set(ip, hits);
  return false;
};

// Periodically drop empty/stale buckets so the map can't grow unbounded.
const RATE_SWEEP_WINDOW_MS = 60 * 60 * 1000;
setInterval(() => {
  const now = Date.now();
  for (const [ip, hits] of rateBuckets) {
    const fresh = hits.filter((t) => now - t < RATE_SWEEP_WINDOW_MS);
    if (fresh.length === 0) rateBuckets.delete(ip);
    else rateBuckets.set(ip, fresh);
  }
}, RATE_SWEEP_WINDOW_MS).unref();

// Validate required environment variables on startup
const validateEnv = () => {
  const missingVars: string[] = [];
  // If SMTP_HOST is not provided, we check if SMTP_USER is a gmail account. If not, we warn.
  if (!process.env.SMTP_HOST && !process.env.SMTP_USER?.endsWith("@gmail.com")) {
    console.warn("WARNING: SMTP_HOST is not set and SMTP_USER is not a Gmail address. Email sending may fail.");
  }
  if (!process.env.SMTP_USER) missingVars.push("SMTP_USER");
  if (!process.env.SMTP_PASS) missingVars.push("SMTP_PASS");

  if (missingVars.length > 0) {
    console.warn(`WARNING: Missing SMTP environment variables: ${missingVars.join(", ")}. Bug reports will be logged to the console instead of emailed.`);
  } else {
    console.log("SUCCESS: SMTP configuration found. Bug reports will be emailed.");
  }
};

async function startServer() {
  validateEnv();
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "16kb" }));

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Issue a fresh, server-signed CAPTCHA challenge.
  app.get("/api/captcha", (req, res) => {
    if (isRateLimited(`captcha:${req.ip}`, 30, 60 * 60 * 1000)) {
      return res
        .status(429)
        .json({ success: false, message: "Too many requests. Please try again later." });
    }
    res.json(makeCaptcha());
  });

  // API Route for Bug Reports
  app.post("/api/report-bug", async (req, res) => {
    // Rate limit: at most 5 reports per IP per hour.
    if (isRateLimited(`report:${req.ip}`, 5, 60 * 60 * 1000)) {
      return res
        .status(429)
        .json({ success: false, message: "Too many bug reports. Please try again later." });
    }

    const { report, captcha } = req.body ?? {};

    // Validate bug report content
    if (!report || typeof report !== "string" || report.trim().length < 10) {
      return res.status(400).json({ success: false, message: "Bug report must be at least 10 characters long." });
    }

    if (report.length > MAX_REPORT_LENGTH) {
      return res.status(400).json({
        success: false,
        message: `Bug report must be ${MAX_REPORT_LENGTH} characters or fewer.`,
      });
    }

    // Verify CAPTCHA against the server-signed token (client math is not trusted)
    if (!captcha || !verifyCaptcha(captcha.token, captcha.answer)) {
      return res
        .status(400)
        .json({ success: false, message: "Security check failed. Please try again." });
    }

    const targetEmail = process.env.BUG_REPORT_EMAIL || "koendeurloo1987@gmail.com";

    console.log(`Received bug report for ${targetEmail}: ${report}`);

    // If SMTP is configured, send the email
    const smtpHost = process.env.SMTP_HOST || (process.env.SMTP_USER?.endsWith("@gmail.com") ? "smtp.gmail.com" : null);
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: process.env.SMTP_SECURE === "true" || smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Eldfall Companion Bug Reporter" <${process.env.SMTP_USER}>`,
          to: targetEmail,
          subject: "Eldfall Companion Bug Report",
          text: report,
        });

        return res.json({ success: true, message: "Bug report sent successfully!" });
      } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ success: false, message: "Failed to send email. Check server logs." });
      }
    } else {
      // If not configured, just log it and simulate success
      console.warn("SMTP not configured. Bug report logged to console.");
      return res.json({ 
        success: true, 
        message: "Bug report received! (Note: SMTP not configured, report logged to server console.)" 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        hmr: false,
        watch: null
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
