import { useEffect } from 'react';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Fait apparaître en douceur les sections de la page à mesure qu'elles entrent à l'écran.
// Le contenu reste visible sans JavaScript (HTML pré-rendu) : seules les sections situées
// sous la partie visible sont masquées, après le premier affichage, donc sans clignotement.
export function useScrollReveal(deps) {
  useEffect(() => {
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return undefined;

    let observer;
    // Image suivante : le routeur a déjà positionné le défilement (clic ou Précédent/Suivant)
    const frame = requestAnimationFrame(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -10% 0px' }
      );
      document.querySelectorAll('#contenu section').forEach((section) => {
        if (section.getBoundingClientRect().top > window.innerHeight) {
          section.classList.add('reveal');
          observer.observe(section);
        }
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
