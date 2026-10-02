// Source unique des coordonnées du collège : toute modification se fait ici.

export const telHref = (phone) => `tel:${phone.replace(/[^\d+]/g, '')}`;

export const college = {
  name: 'Collège Privé Musulman Sakina',
  shortName: 'Collège Sakina',
  address: {
    street: 'HLM2, Villa n°664',
    landmark: '(à côté de Auchan HLM)',
    district: 'Quartier HLM',
    city: 'Dakar, Sénégal',
  },
  phones: {
    main: '+221 77 532 29 28',
    landline: '+221 33 848 98 33',
    secondary: '+221 77 681 30 88',
    accounting: '+221 77 328 04 11',
  },
  // ATTENTION : le domaine sakinacollege.sn n'existe pas (NXDOMAIN au 01/10/2026).
  // Les adresses @sakinacollege.sn ne recevront aucun message tant qu'il n'est pas enregistré.
  emails: {
    main: 'collegesakina@gmail.com',
    contact: 'contact@sakinacollege.sn',
    direction: 'direction@sakinacollege.sn',
    admissions: 'admissions@sakinacollege.sn',
    schoolLife: 'viesco@sakinacollege.sn',
    accounting: 'comptabilite@sakinacollege.sn',
  },
  social: {
    facebook: 'https://facebook.com/sakinacollege',
    whatsapp: 'https://wa.me/221775322928',
  },
  hours: [
    'Lundi - Vendredi : 7h30 - 16h30',
    'Samedi : 8h00 - 12h00',
    'Dimanche : Fermé',
  ],
};

export const allPhones = [
  college.phones.main,
  college.phones.landline,
  college.phones.secondary,
  college.phones.accounting,
];

export const navItems = [
  { name: 'Accueil', page: 'accueil', path: '/' },
  { name: 'À propos', page: 'apropos', path: '/a-propos' },
  { name: 'Programmes', page: 'programmes', path: '/programmes' },
  { name: 'Inscriptions', page: 'inscriptions', path: '/inscriptions' },
  { name: 'Actualités', page: 'actualites', path: '/actualites' },
  { name: 'Contact', page: 'contact', path: '/contact' },
];

// Chemin d'une page à partir de son identifiant : paths.contact -> '/contact'
export const paths = Object.fromEntries(navItems.map((item) => [item.page, item.path]));
