import { readFile, writeFile, rm } from "node:fs/promises";
import { render } from "../dist-ssr/entry-server.js";

const html = await readFile("dist/index.html", "utf-8");
const appHtml = render();

if (!html.includes('<div id="root"></div>')) {
  throw new Error('Could not find <div id="root"></div> placeholder in dist/index.html');
}

const result = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
await writeFile("dist/index.html", result);
await rm("dist-ssr", { recursive: true, force: true });

console.log("Prerendered dist/index.html");
