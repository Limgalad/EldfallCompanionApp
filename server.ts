import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Validate required environment variables on startup
const validateEnv = () => {
  const missingVars: string[] = [];
  // If SMTP_HOST is not provided, we check if SMTP_USER is a gmail account. If not, we warn.
  if (!process.env.SMTP_HOST && !process.env.SMTP_USER?.endsWith("@gmail.com")) {
    console.warn("⚠️ SMTP_HOST is not set and SMTP_USER is not a Gmail address. Email sending may fail.");
  }
  if (!process.env.SMTP_USER) missingVars.push("SMTP_USER");
  if (!process.env.SMTP_PASS) missingVars.push("SMTP_PASS");

  if (missingVars.length > 0) {
    console.warn(`⚠️ Missing SMTP environment variables: ${missingVars.join(", ")}. Bug reports will be logged to the console instead of emailed.`);
  } else {
    console.log("✅ SMTP configuration found. Bug reports will be emailed.");
  }
};

async function startServer() {
  validateEnv();
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Bug Reports
  app.post("/api/report-bug", async (req, res) => {
    const { report, captcha } = req.body;
    
    // Validate bug report content
    if (!report || typeof report !== 'string' || report.trim().length < 10) {
      return res.status(400).json({ success: false, message: "Bug report must be at least 10 characters long." });
    }

    // Verify CAPTCHA
    if (!captcha || typeof captcha.a !== 'number' || typeof captcha.b !== 'number' || typeof captcha.answer !== 'number') {
      return res.status(400).json({ success: false, message: "Security check missing or invalid." });
    }

    if (captcha.a + captcha.b !== captcha.answer) {
      return res.status(400).json({ success: false, message: "Security check failed. Incorrect answer." });
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
    const vite = await createViteServer({
      server: { middlewareMode: true },
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
