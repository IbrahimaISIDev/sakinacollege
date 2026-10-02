import { useSyncExternalStore } from 'react';
import { navItems, paths } from './data/college';

const NAVIGATE_EVENT = 'sakina:navigate';

// "/actualites/2023/" -> { page: 'actualites', param: '2023' } ; chemin inconnu -> page 'introuvable'
export function parsePath(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  const [, first = '', param = null, ...rest] = clean.split('/');
  const item = navItems.find((nav) => nav.path === `/${first}`);

  if (!item || rest.length > 0 || (param && item.page !== 'actualites')) {
    return { page: 'introuvable', param: null };
  }
  return { page: item.page, param };
}

const subscribe = (callback) => {
  window.addEventListener('popstate', callback);
  window.addEventListener(NAVIGATE_EVENT, callback);
  return () => {
    window.removeEventListener('popstate', callback);
    window.removeEventListener(NAVIGATE_EVENT, callback);
  };
};

// serverPath : chemin utilisé lors du pré-rendu, où window n'existe pas.
// Pendant l'hydratation, React lit aussi le « snapshot serveur » : dans le navigateur il doit
// renvoyer le vrai chemin, sinon le rendu ne correspondrait pas au HTML pré-rendu.
export function useRoute(serverPath = '/') {
  const getServerSnapshot = () => (typeof window === 'undefined' ? serverPath : window.location.pathname);
  const pathname = useSyncExternalStore(subscribe, () => window.location.pathname, getServerSnapshot);
  return parsePath(pathname);
}

export function navigate(to) {
  window.history.pushState(null, '', to);
  window.dispatchEvent(new Event(NAVIGATE_EVENT));
}

// Intercepte les clics sur les liens internes pour naviguer sans recharger la page
export function interceptLinkClicks(event) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return;
  }
  const link = event.target.closest('a[href]');
  if (!link || link.target || link.hasAttribute('download')) {
    return;
  }
  const url = new URL(link.href);
  if (url.origin !== window.location.origin || url.hash) {
    return;
  }
  event.preventDefault();
  if (url.pathname !== window.location.pathname) {
    navigate(url.pathname);
  }
}

// Anciennes adresses "#apropos" ou "#actualites/2023" -> nouvelles URL
export function redirectLegacyHash() {
  const [page, param] = window.location.hash.replace(/^#\/?/, '').split('/');
  if (page && paths[page] !== undefined) {
    window.history.replaceState(null, '', param ? `${paths[page]}/${param}` : paths[page]);
  }
}
