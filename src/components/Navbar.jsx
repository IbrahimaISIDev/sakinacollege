import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Programmes', href: '#programmes' },
    { name: 'Inscriptions', href: '#inscriptions' },
    { name: 'Actualités', href: '#actualites' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Barre de contact supérieure */}
      <div className="bg-sakina-blue text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+221 77 532 29 28</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span>collegesakina@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>HLM2, Villa n°664, Dakar, Sénégal</span>
            </div>
          </div>
        </div>
      </div>
        
      {/* Navigation principale */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-sakina-blue rounded-full flex items-center justify-center">
                <span className="text-sakina-gold font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-sakina-blue font-bold text-lg md:text-xl">
                  Collège Privé Musulman
                </h1>
                <p className="text-sakina-gold text-sm font-medium">Sakina</p>
              </div>
            </div>

            {/* Menu desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-sakina-blue font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sakina-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Bouton CTA desktop */}
            <div className="hidden md:block">
              <a
                href="#inscriptions"
                className="bg-sakina-gold text-sakina-blue px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                S'inscrire
              </a>
            </div>

            {/* Bouton menu mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-sakina-blue hover:text-sakina-gold transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-sakina-blue font-medium transition-colors duration-300 border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#inscriptions"
                className="block w-full text-center bg-sakina-gold text-sakina-blue py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                S'inscrire
              </a>
            </div>
            {/* Contact mobile */}
            <div className="pt-4 space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+221 77 532 29 28</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>collegesakina@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

