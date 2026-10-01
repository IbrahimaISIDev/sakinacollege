import { useEffect, useState } from 'react';
import { navItems } from '../data/college';

const PAGES = navItems.map((item) => item.page);
const DEFAULT_PAGE = 'accueil';

// Lit "#page/param" : "#actualites/2023" -> { page: 'actualites', param: '2023' }
const parseHash = () => {
  const [page, param = null] = window.location.hash.replace(/^#\/?/, '').split('/');
  return PAGES.includes(page) ? { page, param } : { page: DEFAULT_PAGE, param: null };
};

export function useHashRoute() {
  const [route, setRoute] = useState(parseHash);

  useEffect(() => {
    const handleHashChange = () => setRoute(parseHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return route;
}
