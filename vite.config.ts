import fs from "fs";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const escapeHtmlAttr = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const isGoogleAnalyticsId = (value?: string): value is string =>
  Boolean(value && /^G-[A-Z0-9]+$/i.test(value));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const googleAnalyticsId = env.VITE_GA_MEASUREMENT_ID?.trim();
  const googleSiteVerification = env.VITE_GOOGLE_SITE_VERIFICATION?.trim();

  return {
    assetsInclude: ["**/*.JPG"],
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      {
        name: "google-analytics",
        transformIndexHtml(html) {
          if (!isGoogleAnalyticsId(googleAnalyticsId)) return html;

          return html.replace(
            "</head>",
            `    <script async src="https://www.googletagmanager.com/gtag/js?id=${escapeHtmlAttr(
              googleAnalyticsId
            )}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${escapeHtmlAttr(googleAnalyticsId)}', { send_page_view: false });
    </script>
  </head>`
          );
        },
      },
      {
        name: "google-site-verification",
        transformIndexHtml(html) {
          if (!googleSiteVerification) return html;

          return html.replace(
            "</head>",
            `    <meta name="google-site-verification" content="${escapeHtmlAttr(
              googleSiteVerification
            )}" />\n  </head>`
          );
        },
      },
      {
        name: "copy-apache-htaccess",
        closeBundle() {
          const source = path.resolve(__dirname, "public/.htaccess");
          const target = path.resolve(__dirname, "dist/.htaccess");

          if (fs.existsSync(source)) {
            fs.copyFileSync(source, target);
          }
        },
      },
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
    },
  };
});
