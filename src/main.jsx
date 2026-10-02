import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import { parsePath, redirectLegacyHash } from './router';

redirectLegacyHash();

const root = document.getElementById('root');

// Le HTML pré-rendu correspond-il à l'adresse affichée ? Ce n'est pas le cas après redirection d'une
// ancienne adresse "#page", ni quand l'hébergeur sert l'accueil pour une URL sans "/" final.
const prerendered = root.dataset.prerendered;
const current = parsePath(window.location.pathname);
const matches =
  prerendered !== undefined &&
  JSON.stringify(parsePath(prerendered)) === JSON.stringify(current);
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// HTML pré-rendu de la bonne page : on l'hydrate. Sinon (développement, HTML d'une autre page) : rendu complet.
if (matches) {
  hydrateRoot(root, app);
} else {
  root.textContent = '';
  createRoot(root).render(app);
}
