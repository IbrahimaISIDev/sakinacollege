import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 bg-sakina-green text-white p-3 rounded-full shadow-lg hover:bg-sakina-green-light hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      aria-label="Retour en haut"
    >
      <ArrowUp className="w-6 h-6" aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
