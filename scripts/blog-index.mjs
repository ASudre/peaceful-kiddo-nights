// Writes src/lib/blog-index.json (title/description/slug of published posts)
// so the landing page can list the latest articles. Runs before dev/build.
import { writeFile } from "node:fs/promises";
import { readPosts } from "./blog-lib.mjs";

const posts = await readPosts();
const index = posts.map((p) => ({
  slug: p.slug,
  title: p.meta.title,
  description: p.meta.description,
  date: p.meta.date,
}));
await writeFile("src/lib/blog-index.json", JSON.stringify(index, null, 2) + "\n");
console.log(`Blog index: ${index.length} post(s)`);
