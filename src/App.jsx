import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import News from './pages/News';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { useRoute, interceptLinkClicks } from './router';
import { getPageMeta } from './data/seo';
import './App.css';

const PAGES = {
  accueil: Home,
  apropos: About,
  programmes: Programs,
  inscriptions: Admissions,
  actualites: News,
  contact: Contact,
  introuvable: NotFound,
};

// url : chemin à rendre lors du pré-rendu (ignoré dans le navigateur)
function App({ url }) {
  const { page, param } = useRoute(url);
  const Page = PAGES[page];

  useEffect(() => {
    document.addEventListener('click', interceptLinkClicks);
    return () => document.removeEventListener('click', interceptLinkClicks);
  }, []);

  const [announcement, setAnnouncement] = useState('');
  const isFirstRender = useRef(true);

  // À chaque changement de page : titre et description, puis (sauf au premier affichage)
  // focus sur le titre de la page et annonce pour les lecteurs d'écran. Le défilement est géré par le routeur.
  useEffect(() => {
    const { title, description } = getPageMeta(page, param);
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const heading = document.querySelector('#contenu h1');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
    setAnnouncement(`Page chargée : ${heading?.textContent || title}`);
  }, [page, param]);

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#contenu"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('contenu')?.focus();
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-sakina-red focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        Aller au contenu
      </a>
      <Navbar currentPage={page} />
      <main id="contenu" tabIndex={-1} className="flex-1 focus:outline-none">
        <Page param={param} />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <div className="sr-only" role="status" aria-live="polite">
        {announcement}
      </div>
    </div>
  );
}

export default App;
