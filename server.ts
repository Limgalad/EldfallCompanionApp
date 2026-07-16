import express from "express";
import helmet from "helmet";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const isProduction = process.env.NODE_ENV === "production";

  // Security headers. In production we enforce a tailored Content-Security-Policy
  // that allowlists every external origin the app actually loads (Google Fonts,
  // Google Analytics/Tag Manager, and the Unsplash hero image). In development we
  // keep all of helmet's other protections but disable CSP so it can't interfere
  // with the Vite dev middleware / HMR.
  if (isProduction) {
    app.use(
      helmet({
        contentSecurityPolicy: {
          directives: {
            defaultSrc: ["'self'"],
            // Tailwind emits inline styles; Google Fonts stylesheet is external.
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            // Unsplash hero image + inline data: URIs; GA uses tracking pixels.
            imgSrc: [
              "'self'",
              "data:",
              "https://images.unsplash.com",
              "https://www.google-analytics.com",
              "https://www.googletagmanager.com",
            ],
            // GA/GTM tags load and run inline bootstrap script.
            scriptSrc: [
              "'self'",
              "'unsafe-inline'",
              "https://www.googletagmanager.com",
              "https://www.google-analytics.com",
            ],
            connectSrc: [
              "'self'",
              "https://www.google-analytics.com",
              "https://www.googletagmanager.com",
            ],
          },
        },
      }),
    );
  } else {
    app.use(helmet({ contentSecurityPolicy: false }));
  }

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
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
