import { Phone, Mail, MapPin, Facebook, MessageCircle } from 'lucide-react';
import { college, navItems, telHref } from '../data/college';

const programs = [
  'Classe de 6ème',
  'Classe de 5ème',
  'Classe de 4ème',
  'Classe de 3ème',
  'Éducation Islamique',
  'Langue Arabe',
];

const socialLinks = [
  { label: 'Facebook', href: college.social.facebook, icon: Facebook, hover: 'hover:bg-sakina-gold hover:text-sakina-blue' },
  { label: 'WhatsApp', href: college.social.whatsapp, icon: MessageCircle, hover: 'hover:bg-green-500' },
];

const Footer = () => {
  return (
    <footer className="bg-sakina-blue text-white">
      {/* Section principale du footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations du collège */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-sakina-gold rounded-full flex items-center justify-center" aria-hidden="true">
                <span className="text-sakina-blue font-bold text-lg">S</span>
              </div>
              <div>
                <p className="font-bold text-lg">{college.shortName}</p>
                <p className="text-sakina-gold text-sm">Excellence & Valeurs</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Un établissement scolaire privé islamique à Dakar, dédié à l'excellence académique
              et à l'éducation morale fondée sur l'Islam.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ label, href, icon: Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (nouvel onglet)`}
                  className={`w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${hover}`}
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <nav aria-label="Liens rapides" className="space-y-4">
            <h2 className="font-semibold text-lg text-sakina-gold">Liens Rapides</h2>
            <ul className="space-y-2">
              {navItems.map((link) => (
                <li key={link.page}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-sakina-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Programmes */}
          <div className="space-y-4">
            <h2 className="font-semibold text-lg text-sakina-gold">Nos Programmes</h2>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program}>
                  <a href="/programmes" className="text-gray-300 hover:text-sakina-gold transition-colors duration-300 text-sm">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h2 className="font-semibold text-lg text-sakina-gold">Contact</h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-sakina-gold mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="text-gray-300 text-sm">
                  {college.address.street}<br />
                  {college.address.district}<br />
                  {college.address.city}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={16} className="text-sakina-gold mt-1 flex-shrink-0" aria-hidden="true" />
                <div className="text-sm flex flex-col">
                  {[college.phones.main, college.phones.secondary].map((phone) => (
                    <a key={phone} href={telHref(phone)} className="text-gray-300 hover:text-sakina-gold">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-sakina-gold mt-1 flex-shrink-0" aria-hidden="true" />
                <div className="text-sm flex flex-col">
                  {[college.emails.main, college.emails.contact].map((email) => (
                    <a key={email} href={`mailto:${email}`} className="text-gray-300 hover:text-sakina-gold break-all">
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-300 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {college.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
