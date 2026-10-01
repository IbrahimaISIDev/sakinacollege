import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { college, navItems, telHref } from '../data/college';

const Navbar = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Barre de contact supérieure */}
      <div className="bg-sakina-blue text-white py-2 px-4 text-sm hidden lg:block">
        <div className="container mx-auto flex items-center space-x-6">
          <a href={telHref(college.phones.main)} className="flex items-center space-x-2 hover:text-sakina-gold">
            <Phone size={16} aria-hidden="true" />
            <span>{college.phones.main}</span>
          </a>
          <a href={`mailto:${college.emails.main}`} className="flex items-center space-x-2 hover:text-sakina-gold">
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
            <a href="#accueil" className="flex items-center space-x-3" onClick={closeMenu}>
              <div className="w-12 h-12 bg-sakina-blue rounded-full flex items-center justify-center" aria-hidden="true">
                <span className="text-sakina-gold font-bold text-xl">S</span>
              </div>
              <div>
                <p className="text-sakina-blue font-bold text-lg md:text-xl">Collège Privé Musulman</p>
                <p className="text-sakina-gold-dark text-sm font-medium">Sakina</p>
              </div>
            </a>

            {/* Menu desktop */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
              {navItems.map((item) => {
                const isActive = currentPage === item.page;
                return (
                  <a
                    key={item.page}
                    href={`#${item.page}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg ${
                      isActive
                        ? 'text-sakina-blue bg-sakina-blue/10'
                        : 'text-gray-700 hover:text-sakina-blue hover:bg-sakina-blue/5'
                    }`}
                  >
                    {item.name}
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 left-0 h-0.5 bg-sakina-gold transition-all duration-300 ${
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
                href="#inscriptions"
                className="bg-sakina-gold text-sakina-blue px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                S'inscrire
              </a>
            </div>

            {/* Bouton menu mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
              aria-controls="menu-mobile"
              className="md:hidden text-sakina-blue hover:text-sakina-gold-dark transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Menu mobile : inert quand fermé pour sortir les liens de l'ordre de tabulation */}
        <div
          id="menu-mobile"
          inert={!isMenuOpen}
          className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <a
                  key={item.page}
                  href={`#${item.page}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block py-3 px-4 font-medium transition-all duration-300 border-b border-gray-100 last:border-b-0 rounded-lg mx-2 ${
                    isActive
                      ? 'text-white bg-sakina-blue shadow-md'
                      : 'text-gray-700 hover:text-sakina-blue hover:bg-sakina-blue/10'
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-4">
              <a
                href="#inscriptions"
                className="block w-full text-center bg-sakina-gold text-sakina-blue py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300"
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
