// ============================================================================
// Contenus officiels à fournir par l'école
// ----------------------------------------------------------------------------
// Tant qu'une rubrique est vide, le site affiche « Bientôt disponible » à la
// place : aucun contenu fictif n'est publié.
//
// Photos : déposer les fichiers dans public/images/equipe/ (format carré,
//   400×400 px environ, en .webp ou .jpg) et indiquer le chemin,
//   ex. '/images/equipe/directrice.webp'.
// Documents PDF : déposer les fichiers dans public/documents/ et indiquer
//   le chemin, ex. '/documents/fournitures-6eme.pdf'.
// ============================================================================

// Mot de la directrice (page « À propos »)
export const director = {
  name: '', // ex. 'Mme Prénom Nom'
  title: 'Directrice',
  photo: '', // ex. '/images/equipe/directrice.webp'
  // Texte validé le 2026-10-02 (un élément par paragraphe). Sans nom renseigné, la signature
  // affiche « Directrice du Collège Sakina » et le logo remplace la photo.
  message: [
    'Chers parents, chers élèves,',
    "C'est avec une grande joie que je vous souhaite la bienvenue au Collège Sakina. Notre établissement, membre du groupe scolaire Sakina aux côtés de Boushra School, est né de la volonté d'hommes et de femmes déterminés à apporter leur contribution au système éducatif du Sénégal.",
    "Notre ambition tient dans notre devise : faire de Sakina « le jardin du savoir et de la vertu ». Nous voulons offrir à chaque élève, de la 6ème à la 3ème, un enseignement exigeant, conforme au programme national, tout en lui transmettant les valeurs de l'Islam : le respect, la rigueur, l'honnêteté et le sens des responsabilités.",
    "Sakina signifie la sérénité. C'est dans ce climat d'apaisement et de confiance que nous accompagnons nos élèves, avec une équipe pédagogique attentive au parcours de chacun, jusqu'aux examens du BFEM et au choix de leur orientation.",
    "Rien de cela n'est possible sans vous, chers parents. L'éducation de nos enfants est une œuvre commune : notre porte vous est toujours ouverte pour échanger, nous rencontrer et construire ensemble leur réussite.",
    'À nos élèves, je dis : soyez curieux, travaillez avec constance et ayez confiance en vos capacités. Vous êtes appelés à devenir des citoyens responsables, équilibrés et ambitieux.',
    'Je souhaite à toutes et à tous une excellente année scolaire.',
  ],
};

// Équipe pédagogique (page « À propos »)
export const team = [
  // Un élément par personne, ex. :
  // { name: 'M. Prénom Nom', role: 'Professeur de mathématiques', photo: '/images/equipe/prenom-nom.webp' },
];

// Documents utiles (page « Inscriptions »)
export const schoolYear = ''; // ex. '2026-2027' (affiché avec les listes de fournitures)

export const supplyLists = [
  { level: '6ème', file: '' }, // ex. '/documents/fournitures-6eme.pdf'
  { level: '5ème', file: '' },
  { level: '4ème', file: '' },
  { level: '3ème', file: '' },
];

export const schoolRules = {
  file: '', // ex. '/documents/reglement-interieur.pdf'
  updated: '', // date de la dernière version, ex. '2026-09-01'
};
