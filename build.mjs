import { mkdir, rm, readFile, writeFile, cp } from "node:fs/promises";
import { join } from "node:path";

const root = new URL(".", import.meta.url).pathname.replace(/^\/(\w):/, "$1:");
const dist = join(root, "dist");
const staticDir = join(dist, "static");

await rm(dist, { recursive: true, force: true });
await mkdir(join(dist, "server"), { recursive: true });
await mkdir(staticDir, { recursive: true });

const files = ["index.html", "data.js", "manifest.webmanifest", "sw.js"];
const assets = {};
for (const file of files) {
  const content = await readFile(join(root, file), "utf8");
  assets[file === "index.html" ? "/" : `/${file}`] = content;
  await writeFile(join(staticDir, file), content);
}

const worker = `const assets = ${JSON.stringify(assets)};
const types = { "/": "text/html; charset=utf-8", "/index.html": "text/html; charset=utf-8", "/data.js": "text/javascript; charset=utf-8", "/manifest.webmanifest": "application/manifest+json", "/sw.js": "text/javascript; charset=utf-8" };
export default { async fetch(request) {
  const url = new URL(request.url);
  const path = url.pathname === "/index.html" ? "/" : url.pathname;
  const body = assets[path];
  if (body == null) return new Response("Not found", { status: 404 });
  return new Response(body, { headers: { "content-type": types[path] || "text/plain; charset=utf-8", "cache-control": path === "/data.js" ? "no-store" : "public, max-age=300" } });
} };`;
await writeFile(join(dist, "server", "index.js"), worker);
console.log(`Built ${files.length} static assets into ${dist}`);
