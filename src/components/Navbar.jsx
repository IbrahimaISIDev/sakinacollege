import { useEffect, useRef, useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { college, navItems, telHref } from '../data/college';
import logo from '../assets/images/logo-sakina.webp';

const Navbar = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const closeMenu = () => setIsMenuOpen(false);

  // Menu mobile ouvert : la page derrière ne défile plus, et Échap le ferme (focus rendu au bouton)
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Barre de contact supérieure */}
      <div className="bg-sakina-green text-white py-2 px-4 text-sm hidden lg:block">
        <div className="container mx-auto flex items-center space-x-6">
          <a href={telHref(college.phones.main)} className="flex items-center space-x-2 hover:text-sakina-red-light">
            <Phone size={16} aria-hidden="true" />
            <span>{college.phones.main}</span>
          </a>
          <a href={`mailto:${college.emails.main}`} className="flex items-center space-x-2 hover:text-sakina-red-light">
            <Mail size={16} aria-hidden="true" />
            <span>{college.emails.main}</span>
          </a>
          <div className="flex items-center space-x-2">
            <MapPin size={16} aria-hidden="true" />
            <span>{college.address.street}, {college.address.city}</span>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <nav aria-label="Navigation principale" className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 shrink-0" onClick={closeMenu}>
              <img src={logo} alt="Sakina" width="320" height="101" className="h-11 md:h-12 w-auto" />
              {/* Texte masqué quand la place manque (mobile étroit, et menu complet jusqu’aux très grands écrans) */}
              <span className="hidden sm:block md:hidden 2xl:block border-l border-gray-200 pl-3 leading-tight">
                <span className="block text-sakina-green font-semibold">Collège Privé Musulman</span>
                <span className="block text-sakina-red text-sm italic">{college.slogan.toLowerCase()}</span>
              </span>
            </a>

            {/* Menu desktop */}
            <div className="hidden md:flex items-center space-x-1 xl:space-x-6">
              {navItems.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <a
                    key={item.page}
                    href={item.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={`font-medium whitespace-nowrap transition-all duration-300 relative group px-3 py-2 rounded-lg ${
                      isActive
                        ? 'text-sakina-green bg-sakina-green/10'
                        : 'text-gray-700 hover:text-sakina-green hover:bg-sakina-green/5'
                    }`}
                  >
                    {item.name}
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 left-0 h-0.5 bg-sakina-red transition-all duration-300 ${
                        isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}
                    ></span>
                  </a>
                );
              })}
            </div>

            {/* Bouton CTA desktop */}
            <div className="hidden md:block">
              <a
                href="/inscriptions"
                className="bg-sakina-red text-white px-6 py-2 rounded-full font-semibold hover:bg-sakina-red-dark transition-colors duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                S'inscrire
              </a>
            </div>

            {/* Bouton menu mobile */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
              aria-controls="menu-mobile"
              className="md:hidden text-sakina-green hover:text-sakina-red transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Menu mobile : inert quand fermé pour sortir les liens de l'ordre de tabulation */}
        <div
          id="menu-mobile"
          inert={!isMenuOpen}
          className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[calc(100svh-5rem)] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <a
                  key={item.page}
                  href={item.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block py-3 px-4 font-medium transition-all duration-300 border-b border-gray-100 last:border-b-0 rounded-lg mx-2 ${
                    isActive
                      ? 'text-white bg-sakina-green shadow-md'
                      : 'text-gray-700 hover:text-sakina-green hover:bg-sakina-green/10'
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-4">
              <a
                href="/inscriptions"
                className="block w-full text-center bg-sakina-red text-white py-3 rounded-full font-semibold hover:bg-sakina-red-dark transition-colors duration-300"
                onClick={closeMenu}
              >
                S'inscrire
              </a>
            </div>
            {/* Contact mobile */}
            <div className="pt-4 space-y-2 text-sm text-gray-600">
              <a href={telHref(college.phones.main)} className="flex items-center space-x-2">
                <Phone size={16} aria-hidden="true" />
                <span>{college.phones.main}</span>
              </a>
              <a href={`mailto:${college.emails.main}`} className="flex items-center space-x-2">
                <Mail size={16} aria-hidden="true" />
                <span>{college.emails.main}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
