// Pré-rendu statique : après `vite build` (client) et `vite build --ssr` (serveur),
// écrit un fichier HTML complet par page dans dist/, plus 404.html, robots.txt et sitemap.xml.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const ssrDir = path.join(rootDir, 'dist-ssr');

const { render, routes, getPageMeta, getSchoolJsonLd, getArticleJsonLd, parsePath, SITE_URL } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const escapeHtml = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Image de partage (Open Graph), servie depuis public/
const OG_IMAGE = { path: '/og-image.jpg', width: 1200, height: 630, alt: 'Logo et nom du Collège Privé Musulman Sakina' };

function buildHead(url, { indexable }) {
  const { page, param } = parsePath(url);
  const { title, description } = getPageMeta(page, param);
  const tags = [
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="fr_FR" />`,
    `<meta property="og:site_name" content="Collège Privé Musulman Sakina" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ];

  if (SITE_URL) {
    tags.push(`<link rel="canonical" href="${SITE_URL}${url}" />`);
    tags.push(`<meta property="og:url" content="${SITE_URL}${url}" />`);
    tags.push(`<meta property="og:image" content="${SITE_URL}${OG_IMAGE.path}" />`);
    tags.push(`<meta property="og:image:width" content="${OG_IMAGE.width}" />`);
    tags.push(`<meta property="og:image:height" content="${OG_IMAGE.height}" />`);
    tags.push(`<meta property="og:image:alt" content="${escapeHtml(OG_IMAGE.alt)}" />`);
  }
  if (!indexable) {
    tags.push(`<meta name="robots" content="noindex" />`);
  }
  // Données structurées : l'établissement sur l'accueil, l'article sur les pages d'actualité
  const jsonLd = page === 'accueil' ? getSchoolJsonLd() : page === 'actualites' && param ? getArticleJsonLd(param) : null;
  if (jsonLd) {
    // "<" échappé pour qu'aucune donnée ne puisse fermer la balise <script>
    tags.push(`<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`);
  }

  return { title, description, tags };
}

function writePage(url, outputFile, { indexable = true } = {}) {
  const { title, description, tags } = buildHead(url, { indexable });
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace('</head>', `    ${tags.join('\n    ')}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root" data-prerendered="${escapeHtml(url)}">${render(url)}</div>`);

  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, html);
  console.log(`  ${path.relative(rootDir, outputFile)}`);
}

console.log('Pré-rendu des pages :');
for (const url of routes) {
  const file = url === '/' ? path.join(distDir, 'index.html') : path.join(distDir, url, 'index.html');
  writePage(url, file);
}
writePage('/404', path.join(distDir, '404.html'), { indexable: false });

const robots = ['User-agent: *', 'Allow: /'];
if (SITE_URL) {
  const today = new Date().toISOString().slice(0, 10);
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map((url) => `  <url><loc>${SITE_URL}${url}</loc><lastmod>${today}</lastmod></url>`),
    '</urlset>',
    '',
  ].join('\n');
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
  robots.push(`Sitemap: ${SITE_URL}/sitemap.xml`);
  console.log('  dist/sitemap.xml');
} else {
  console.warn(
    '\n⚠ VITE_SITE_URL non défini : pas de sitemap.xml, d\'URL canonique ni d\'image Open Graph.\n' +
      '  Exemple : VITE_SITE_URL=https://www.exemple.sn pnpm build\n'
  );
}
fs.writeFileSync(path.join(distDir, 'robots.txt'), `${robots.join('\n')}\n`);
console.log('  dist/robots.txt');

fs.rmSync(ssrDir, { recursive: true, force: true });
