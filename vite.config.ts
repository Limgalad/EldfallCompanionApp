import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import {defineConfig} from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      VitePWA({
        registerType: "autoUpdate",
        manifestFilename: "manifest.json",
        includeAssets: ["icon.svg", "robots.txt", "sitemap.xml"],
        manifest: {
          name: "Eldfall Chronicles Companion",
          short_name: "Eldfall",
          description: "The ultimate companion app for Eldfall Chronicles tabletop game.",
          theme_color: "#0c0a09",
          background_color: "#0c0a09",
          display: "standalone",
          orientation: "portrait",
          scope: "/",
          start_url: "/",
          icons: [
            {
              src: "icon.svg",
              sizes: "192x192",
              type: "image/svg+xml",
              purpose: "any"
            },
            {
              src: "icon.svg",
              sizes: "512x512",
              type: "image/svg+xml",
              purpose: "any"
            },
            {
              src: "icon.svg",
              sizes: "192x192",
              type: "image/svg+xml",
              purpose: "maskable"
            }
          ]
        },
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "google-fonts-cache",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "gstatic-fonts-cache",
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            }
          ]
        },
        devOptions: {
          enabled: false,
          type: "module",
          navigateFallback: "index.html"
        }
      })
    ],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
      // The default 'threads' pool crashes under Node 24 (@vitest/runner sees an
      // undefined runner during collection); 'forks' is the compatible choice.
      pool: "forks",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
  };
});
