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

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
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
