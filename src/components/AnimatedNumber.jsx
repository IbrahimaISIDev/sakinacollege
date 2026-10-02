import { useLayoutEffect, useRef, useState } from 'react';

const DURATION = 1200;

// Chiffre qui défile de 0 à sa valeur quand il apparaît à l'écran : "200+" -> 0+, 37+, … 200+.
// Pré-rendu et lecteurs d'écran : la valeur finale, sans animation.
const AnimatedNumber = ({ value }) => {
  const [, prefix = '', digits = '', suffix = ''] = value.match(/^(\D*)(\d+)(.*)$/) || [];
  const target = Number(digits);
  const [current, setCurrent] = useState(target);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!digits || reduce || !('IntersectionObserver' in window)) return undefined;

    let frame;
    setCurrent(0); // avant le premier affichage côté navigateur : pas de saut visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / DURATION, 1);
          const eased = 1 - (1 - progress) ** 3;
          setCurrent(Math.round(target * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [digits, target]);

  if (!digits) return value;
  return (
    <span ref={ref}>
      <span aria-hidden="true">{`${prefix}${current}${suffix}`}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
};

export default AnimatedNumber;
