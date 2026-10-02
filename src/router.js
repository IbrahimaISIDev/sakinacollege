import { useSyncExternalStore } from 'react';
import { flushSync } from 'react-dom';
import { navItems, paths } from './data/college';

const NAVIGATE_EVENT = 'sakina:navigate';
const SCROLL_STORAGE_KEY = 'sakina:scroll';

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
  window.addEventListener(NAVIGATE_EVENT, callback);
  return () => window.removeEventListener(NAVIGATE_EVENT, callback);
};

// serverPath : chemin utilisé lors du pré-rendu, où window n'existe pas.
// Pendant l'hydratation, React lit aussi le « snapshot serveur » : dans le navigateur il doit
// renvoyer le vrai chemin, sinon le rendu ne correspondrait pas au HTML pré-rendu.
export function useRoute(serverPath = '/') {
  const getServerSnapshot = () => (typeof window === 'undefined' ? serverPath : window.location.pathname);
  const pathname = useSyncExternalStore(subscribe, () => window.location.pathname, getServerSnapshot);
  return parsePath(pathname);
}

/* ---------- Position de défilement par entrée d'historique ---------- */

// Chaque entrée d'historique reçoit une clé ; la position de défilement y est associée,
// pour la restaurer avec Précédent/Suivant (comme sur un site à pages classiques).
// La position est relevée au moment où l'on quitte une page (clic, Précédent/Suivant, fermeture
// ou rechargement de l'onglet) : avec scrollRestoration = 'manual', elle n'a pas encore bougé.
let scrollPositions = {};
let activeKey = null; // entrée d'historique actuellement affichée

const currentKey = () => window.history.state?.key;
const newKey = () => Math.random().toString(36).slice(2, 10);

function saveScrollPosition() {
  if (!activeKey) return;
  scrollPositions[activeKey] = window.scrollY;
  try {
    sessionStorage.setItem(SCROLL_STORAGE_KEY, JSON.stringify(scrollPositions));
  } catch {
    // stockage indisponible (navigation privée) : les positions restent seulement en mémoire
  }
}

/* ---------- Transition entre pages ---------- */

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Élément visé par une ancre ("#documents-utiles"), s'il existe dans la page
const anchorTarget = (hash) => (hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null);

// Met à jour la page (de façon synchrone, pour que la transition capture le nouvel état) puis
// positionne le défilement : sur l'ancre de l'adresse pour une nouvelle navigation (toAnchor),
// sinon à scrollTop. Fondu léger via la View Transitions API quand elle est disponible.
function renderNavigation(scrollTop, { toAnchor = false } = {}) {
  let done = false;
  const update = () => {
    if (done) return;
    done = true;
    flushSync(() => window.dispatchEvent(new Event(NAVIGATE_EVENT)));
    const target = toAnchor ? anchorTarget(window.location.hash) : null;
    if (target) {
      target.scrollIntoView({ block: 'start', behavior: 'instant' });
    } else {
      window.scrollTo({ top: scrollTop, behavior: 'instant' });
    }
  };

  if (!document.startViewTransition || prefersReducedMotion() || document.visibilityState !== 'visible') {
    update();
    return;
  }
  const transition = document.startViewTransition(update);
  // Si le navigateur abandonne la transition (onglet masqué, délai dépassé…), la page doit
  // quand même changer : on exécute la mise à jour nous-mêmes, une seule fois.
  transition.updateCallbackDone.catch(update);
  transition.ready.catch(() => {});
  transition.finished.catch(() => {});
}

export function navigate(to) {
  saveScrollPosition();
  activeKey = newKey();
  window.history.pushState({ key: activeKey }, '', to);
  renderNavigation(0, { toAnchor: true });
}

// Ancre dans la page courante : défilement jusqu'à l'élément, avec une entrée d'historique
// (Précédent ramène à la position d'avant)
function scrollToAnchor(hash) {
  const target = anchorTarget(hash);
  if (!target) return;
  saveScrollPosition();
  activeKey = newKey();
  window.history.pushState({ key: activeKey }, '', hash);
  target.scrollIntoView({ block: 'start', behavior: prefersReducedMotion() ? 'instant' : 'smooth' });
}

function handlePopState() {
  saveScrollPosition(); // position de la page que l'on quitte
  activeKey = currentKey();
  renderNavigation(scrollPositions[activeKey] ?? 0);
}

// À appeler une fois au démarrage dans le navigateur
export function initRouter() {
  try {
    scrollPositions = JSON.parse(sessionStorage.getItem(SCROLL_STORAGE_KEY)) || {};
  } catch {
    scrollPositions = {};
  }
  window.history.scrollRestoration = 'manual';
  if (!currentKey()) {
    window.history.replaceState({ key: newKey() }, '');
  }
  activeKey = currentKey();
  window.addEventListener('popstate', handlePopState);
  window.addEventListener('pagehide', saveScrollPosition);

  // Rechargement de la page : retrouver la position (le HTML pré-rendu a déjà sa hauteur finale)
  const saved = scrollPositions[activeKey];
  if (saved) {
    requestAnimationFrame(() => window.scrollTo({ top: saved, behavior: 'instant' }));
  }
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
  if (url.origin !== window.location.origin) {
    return;
  }
  event.preventDefault();
  if (url.pathname !== window.location.pathname) {
    navigate(url.pathname + url.hash);
  } else if (url.hash) {
    scrollToAnchor(url.hash);
  }
}

// Anciennes adresses "#apropos" ou "#actualites/2023" -> nouvelles URL
export function redirectLegacyHash() {
  const [page, param] = window.location.hash.replace(/^#\/?/, '').split('/');
  if (page && paths[page] !== undefined) {
    window.history.replaceState(null, '', param ? `${paths[page]}/${param}` : paths[page]);
  }
}
