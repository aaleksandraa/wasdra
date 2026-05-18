import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const rootDir = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const publicDir = path.join(rootDir, "public");
const siteUrl = normalizeSiteUrl(
  process.env.SITE_URL || process.env.VITE_SITE_URL || "https://wasdra.ch"
);
const lastmod = new Date().toISOString().slice(0, 10);

const staticRoutes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/leistungen", changefreq: "weekly", priority: "0.9" },
  { path: "/referenzen", changefreq: "weekly", priority: "0.9" },
  { path: "/ueber-uns", changefreq: "monthly", priority: "0.7" },
  { path: "/kontakt", changefreq: "monthly", priority: "0.8" },
];

const services = await extractSlugs(
  path.join(rootDir, "src", "data", "services.ts"),
  "services"
);
const projects = await extractSlugs(
  path.join(rootDir, "src", "data", "projects.ts"),
  "projects"
);

const routes = [
  ...staticRoutes,
  ...services.map((slug) => ({
    path: `/leistungen/${slug}`,
    changefreq: "monthly",
    priority: "0.75",
  })),
  ...projects.map((slug) => ({
    path: `/referenzen/${slug}`,
    changefreq: "monthly",
    priority: "0.65",
  })),
];

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map(toUrlEntry),
  "</urlset>",
  "",
].join("\n");

await fs.mkdir(publicDir, { recursive: true });
await fs.writeFile(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");

console.log(
  `Generated sitemap.xml with ${routes.length} URLs for ${siteUrl.replace(/\/$/, "")}`
);

function toUrlEntry(route) {
  return [
    "  <url>",
    `    <loc>${escapeXml(new URL(route.path, siteUrl).href)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${route.changefreq}</changefreq>`,
    `    <priority>${route.priority}</priority>`,
    "  </url>",
  ].join("\n");
}

async function extractSlugs(filePath, exportName) {
  const content = await fs.readFile(filePath, "utf8");
  const source = ts.createSourceFile(
    filePath,
    content,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  );
  const declaration = findArrayDeclaration(source, exportName);

  if (!declaration) {
    throw new Error(`Could not find ${exportName} array in ${filePath}`);
  }

  return declaration.elements
    .map((element) => getObjectStringProperty(element, "slug"))
    .filter(Boolean);
}

function findArrayDeclaration(source, exportName) {
  let result;

  source.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) return;

    for (const declaration of node.declarationList.declarations) {
      if (
        ts.isIdentifier(declaration.name) &&
        declaration.name.text === exportName &&
        declaration.initializer &&
        ts.isArrayLiteralExpression(declaration.initializer)
      ) {
        result = declaration.initializer;
      }
    }
  });

  return result;
}

function getObjectStringProperty(node, propertyName) {
  if (!ts.isObjectLiteralExpression(node)) return undefined;

  for (const property of node.properties) {
    if (!ts.isPropertyAssignment(property)) continue;

    const name = property.name;
    const isTarget =
      (ts.isIdentifier(name) || ts.isStringLiteral(name)) &&
      name.text === propertyName;

    if (!isTarget) continue;

    const value = property.initializer;
    if (ts.isStringLiteral(value) || ts.isNoSubstitutionTemplateLiteral(value)) {
      return value.text;
    }
  }

  return undefined;
}

function normalizeSiteUrl(value) {
  const normalized = value.trim().replace(/\/+$/, "");
  return `${normalized}/`;
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
