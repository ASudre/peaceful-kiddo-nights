// Builds static blog pages from content/blog/*.md into dist/blog/.
// Runs after prerender. Posts with `draft: true` are skipped.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { marked } from "marked";
import { readPosts } from "./blog-lib.mjs";

const SITE = "https://accompagnement-sommeil-bebe.fr";
const AUTHOR = { name: "Nathalie Sudre", jobTitle: "Sage-femme à la retraite & psychanalyste" };

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const fmtDate = (d) => new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

const CSS = `
:root{color-scheme:light}
body{margin:0;background:#f5f0e8;color:#2d2d2d;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;line-height:1.7}
main{max-width:42rem;margin:0 auto;padding:2.5rem 1.5rem 5rem}
h1{font-size:2rem;line-height:1.25;margin:.5rem 0 1rem}
h2{font-size:1.4rem;margin-top:2.25rem;color:#5f7e58}
a{color:#5f7e58}
.nav{font-size:.9rem;margin-bottom:2rem}
.meta{color:#6b6b6b;font-size:.9rem;margin-bottom:2rem}
.cta{background:#fff;border-radius:12px;padding:1.5rem;margin-top:3rem;text-align:center}
.cta a.btn{display:inline-block;background:#7d9b76;color:#fff;padding:.75rem 1.5rem;border-radius:999px;text-decoration:none;font-weight:600}
.note{font-size:.85rem;color:#6b6b6b;border-top:1px solid #ddd5c5;margin-top:2rem;padding-top:1rem}
ul.posts{list-style:none;padding:0}ul.posts li{margin-bottom:1.5rem}ul.posts a{font-size:1.15rem;font-weight:600}
`;

function page({ title, description, path, body, schema }) {
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="canonical" href="${SITE}${path}" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(description)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${SITE}${path}" />
<meta property="og:image" content="${SITE}/og-image.jpg" />
<meta property="og:locale" content="fr_FR" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(title)}" />
<meta name="twitter:description" content="${esc(description)}" />
<meta name="twitter:image" content="${SITE}/og-image.jpg" />
<style>${CSS}</style>
<script type="application/ld+json">${JSON.stringify(schema)}</script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "5861f1252d234b27b118026874a1c2b7"}'></script>
</head>
<body>
<main>
${body}
</main>
</body>
</html>`;
}

const posts = (await readPosts()).map((p) => ({ ...p, html: marked.parse(p.body) }));

if (posts.length === 0) {
  console.log("Blog: no published posts, skipping");
  process.exit(0);
}

// Build FAQPage entries from "## ...?" headings: the answer is the first paragraph after.
function faqFrom(html) {
  const out = [];
  const re = /<h2[^>]*>([^<]*\?)<\/h2>\s*<p>([\s\S]*?)<\/p>/g;
  let m;
  while ((m = re.exec(html))) {
    out.push({
      "@type": "Question",
      name: m[1].trim(),
      acceptedAnswer: { "@type": "Answer", text: m[2].replace(/<[^>]+>/g, "").trim() },
    });
  }
  return out;
}

for (const p of posts) {
  const path = `/blog/${p.slug}/`;
  const body = `<div class="nav"><a href="/">Douce Nuit</a> &rsaquo; <a href="/blog/">Blog</a></div>
<article>
<h1>${esc(p.meta.title)}</h1>
<div class="meta">Par ${AUTHOR.name}, ${AUTHOR.jobTitle} · ${fmtDate(p.meta.updated || p.meta.date)}</div>
${p.html}
<div class="cta"><p><strong>Besoin d'un accompagnement personnalisé ?</strong><br />Une consultation par téléphone ou WhatsApp, partout en France.</p><a class="btn" href="/#tarifs">Réserver une consultation</a></div>
<p class="note">Ces informations sont d'ordre général et ne remplacent pas l'avis d'un professionnel de santé. En cas de doute ou de symptômes inhabituels, consultez votre médecin ou votre pédiatre.</p>
</article>`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: p.meta.title,
      description: p.meta.description,
      datePublished: p.meta.date,
      dateModified: p.meta.updated || p.meta.date,
      inLanguage: "fr-FR",
      mainEntityOfPage: `${SITE}${path}`,
      image: `${SITE}/og-image.jpg`,
      author: { "@type": "Person", ...AUTHOR, url: `${SITE}/` },
      publisher: { "@type": "Organization", name: "Douce Nuit", url: `${SITE}/` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Douce Nuit", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog/` },
        { "@type": "ListItem", position: 3, name: p.meta.title, item: `${SITE}${path}` },
      ],
    },
  ];
  const faq = faqFrom(p.html);
  if (faq.length >= 2) schema.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq });
  await mkdir(`dist/blog/${p.slug}`, { recursive: true });
  await writeFile(
    `dist/blog/${p.slug}/index.html`,
    page({ title: `${p.meta.title} | Douce Nuit`, description: p.meta.description, path, body, schema }),
  );
}

const listBody = `<div class="nav"><a href="/">&larr; Douce Nuit</a></div>
<h1>Blog : le sommeil de bébé</h1>
<p>Conseils bienveillants pour accompagner le sommeil de votre enfant, par Nathalie Sudre, sage-femme.</p>
<ul class="posts">
${posts.map((p) => `<li><a href="/blog/${p.slug}/">${esc(p.meta.title)}</a><br /><span class="meta">${fmtDate(p.meta.date)}</span><br />${esc(p.meta.description)}</li>`).join("\n")}
</ul>`;
await writeFile(
  "dist/blog/index.html",
  page({
    title: "Blog : le sommeil de bébé | Douce Nuit",
    description: "Conseils bienveillants pour accompagner le sommeil de votre bébé, par une sage-femme.",
    path: "/blog/",
    body: listBody,
    schema: { "@context": "https://schema.org", "@type": "CollectionPage", name: "Blog Douce Nuit", url: `${SITE}/blog/`, inLanguage: "fr-FR" },
  }),
);

// Add blog URLs to the sitemap
let sitemap = await readFile("dist/sitemap.xml", "utf-8");
const urls = [
  { loc: `${SITE}/blog/`, lastmod: posts[0].meta.updated || posts[0].meta.date, priority: "0.7" },
  ...posts.map((p) => ({ loc: `${SITE}/blog/${p.slug}/`, lastmod: p.meta.updated || p.meta.date, priority: "0.8" })),
];
const xml = urls
  .map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`)
  .join("\n");
sitemap = sitemap.replace("</urlset>", `${xml}\n</urlset>`);
await writeFile("dist/sitemap.xml", sitemap);

const llms = `# Douce Nuit

> Accompagnement doux et personnalisé au sommeil des bébés et jeunes enfants (de la naissance à environ 2 ans), par téléphone ou WhatsApp, partout en France. Par Nathalie Sudre, sage-femme pendant près de 40 ans, psychanalyste. Consultation à 80 €, sans jugement et sans laisser pleurer.

## Pages principales

- [Accueil](${SITE}/): présentation, approche, tarifs et prise de rendez-vous
- [Blog](${SITE}/blog/): conseils sur le sommeil de bébé

## Articles

${posts.map((p) => `- [${p.meta.title}](${SITE}/blog/${p.slug}/): ${p.meta.description}`).join("\n")}

## Mentions

- [Mentions légales](${SITE}/mentions-legales.html)
- [Politique de confidentialité](${SITE}/confidentialite.html)
`;
await writeFile("dist/llms.txt", llms);

console.log(`Blog: built ${posts.length} post(s)`);
