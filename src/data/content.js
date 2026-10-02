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
  message: [
    // Un élément par paragraphe, ex. :
    // 'Chers parents, chers élèves, …',
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
