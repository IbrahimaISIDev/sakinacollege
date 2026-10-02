// Point d'entrée du pré-rendu (voir scripts/prerender.js) : produit le HTML de chaque page au build.
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { navItems } from './data/college';
import { getPageMeta, getSchoolJsonLd, SITE_URL } from './data/seo';
import { parsePath } from './router';
import { archiveYears } from './data/news';

export { getPageMeta, getSchoolJsonLd, SITE_URL, parsePath };

export const routes = [
  ...navItems.map((item) => item.path),
  ...archiveYears.map((year) => `/actualites/${year}`),
];

export function render(url) {
  return renderToString(
    <StrictMode>
      <App url={url} />
    </StrictMode>
  );
}
