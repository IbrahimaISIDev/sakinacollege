import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sakina-blue text-white">
      {/* Section principale du footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations du collège */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-sakina-gold rounded-full flex items-center justify-center">
                <span className="text-sakina-blue font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Collège Sakina</h3>
                <p className="text-sakina-gold text-sm">Excellence & Valeurs</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Un établissement scolaire privé islamique à Dakar, dédié à l'excellence académique 
              et à l'éducation morale fondée sur l'Islam.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-sakina-gold hover:text-sakina-blue transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-sakina-gold hover:text-sakina-blue transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-sakina-gold hover:text-sakina-blue transition-all duration-300"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://wa.me/221775322928"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-300"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-sakina-gold">Liens Rapides</h4>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', href: '#accueil' },
                { name: 'À propos', href: '#apropos' },
                { name: 'Programmes', href: '#programmes' },
                { name: 'Inscriptions', href: '#inscriptions' },
                { name: 'Actualités', href: '#actualites' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-sakina-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-sakina-gold">Nos Programmes</h4>
            <ul className="space-y-2">
              {[
                'Classe de 6ème',
                'Classe de 5ème',
                'Classe de 4ème',
                'Classe de 3ème',
                'Éducation Islamique',
                'Langue Arabe',
              ].map((program) => (
                <li key={program}>
                  <span className="text-gray-300 text-sm">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-sakina-gold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-sakina-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    HLM2, Villa n°664<br />
                    Quartier HLM<br />
                    Dakar, Sénégal
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-sakina-gold flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-300">+221 77 532 29 28</p>
                  <p className="text-gray-300">+221 77 681 30 88</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-sakina-gold flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-300">collegesakina@gmail.com</p>
                  <p className="text-gray-300">contact@sakinacollege.sn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm text-center md:text-left">
              © 2025 Collège Privé Musulman Sakina. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-sakina-gold transition-colors duration-300">
                Mentions légales
              </a>
              <a href="#" className="text-gray-300 hover:text-sakina-gold transition-colors duration-300">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

