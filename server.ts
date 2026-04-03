import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Bug Reports
  app.post("/api/report-bug", async (req, res) => {
    const { report, captcha } = req.body;

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
