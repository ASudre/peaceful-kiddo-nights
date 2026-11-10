import { readdir, readFile } from "node:fs/promises";

const SRC = "content/blog";

export function parse(raw, file) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error(`${file}: missing frontmatter`);
  const meta = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i < 0) continue;
    meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^"(.*)"$/, "$1");
  }
  for (const k of ["title", "description", "date"]) {
    if (!meta[k]) throw new Error(`${file}: frontmatter "${k}" is required`);
  }
  return { meta, body: m[2] };
}

/** Published posts (drafts excluded), newest first. */
export async function readPosts() {
  const files = (await readdir(SRC)).filter((f) => f.endsWith(".md"));
  const today = new Date().toISOString().slice(0, 10);
  const posts = [];
  for (const f of files) {
    const { meta, body } = parse(await readFile(`${SRC}/${f}`, "utf-8"), f);
    if (meta.draft === "true") continue;
    // Scheduled publishing: posts dated in the future go live on their date
    // (the daily rebuild in .github/workflows/deploy.yml picks them up).
    if (meta.date > today) continue;
    posts.push({ slug: f.replace(/\.md$/, ""), meta, body });
  }
  posts.sort((a, b) => b.meta.date.localeCompare(a.meta.date));
  return posts;
}
