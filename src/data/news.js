// Articles d'actualité et archives, par année.
import studentsImage from '../assets/images/students-classroom.webp';
import islamicEducationImage from '../assets/images/islamic-education.webp';
import studentsGroupImage from '../assets/images/students-group.webp';

export const news = [
  {
    id: 1,
    title: "Excellents résultats au BFEM 2024",
    excerpt: "Nos élèves de 3ème ont brillé aux examens du BFEM avec un taux de réussite exceptionnel de 98%.",
    content: "Cette année encore, le Collège Privé Musulman Sakina confirme son excellence pédagogique avec des résultats remarquables au Brevet de Fin d'Études Moyennes. Sur 45 candidats présentés, 44 ont été admis, soit un taux de réussite de 98%. Parmi eux, 15 élèves ont obtenu une mention Très Bien, 20 une mention Bien et 9 une mention Assez Bien.",
    image: studentsImage,
    category: 'achievements',
    author: 'Direction Pédagogique',
    date: '2024-07-15',
    featured: true
  },
  {
    id: 2,
    title: "Concours de récitation coranique 2024",
    excerpt: "Grande finale du concours annuel de mémorisation et récitation du Saint Coran.",
    content: "Le Collège Sakina a organisé son concours annuel de récitation coranique qui s'est déroulé dans une ambiance spirituelle remarquable. Plus de 80 élèves ont participé à cette compétition qui valorise l'apprentissage du Coran. Les lauréats ont été récompensés lors d'une cérémonie en présence des familles.",
    image: islamicEducationImage,
    category: 'events',
    author: 'Département Islamique',
    date: '2024-06-20',
    featured: true
  },
  {
    id: 3,
    title: "Nouvelle année scolaire 2024-2025",
    excerpt: "Préparatifs en cours pour accueillir nos élèves dans les meilleures conditions.",
    content: "L'équipe du Collège Sakina met tout en œuvre pour préparer la rentrée scolaire 2024-2025. Nouveaux équipements pédagogiques, formation continue des enseignants et amélioration des infrastructures sont au programme pour offrir un environnement d'apprentissage optimal.",
    image: studentsGroupImage,
    category: 'academic',
    author: 'Administration',
    date: '2024-08-01',
    featured: false
  },
  {
    id: 4,
    title: "Formation des enseignants en pédagogie moderne",
    excerpt: "Nos enseignants se forment aux dernières méthodes pédagogiques pour améliorer l'apprentissage.",
    content: "Dans le cadre de notre engagement pour l'excellence éducative, l'ensemble du corps enseignant a participé à une formation intensive sur les méthodes pédagogiques modernes. Cette formation vise à intégrer les nouvelles approches d'enseignement tout en préservant nos valeurs islamiques.",
    image: studentsImage,
    category: 'academic',
    author: 'Formation Continue',
    date: '2024-05-10',
    featured: false
  },
  {
    id: 5,
    title: "Journée portes ouvertes - Mars 2024",
    excerpt: "Découvrez notre établissement lors de notre journée portes ouvertes annuelle.",
    content: "Le Collège Sakina ouvre ses portes aux familles intéressées par notre projet éducatif. Au programme : visite des classes, rencontre avec les enseignants, présentation des programmes et témoignages d'anciens élèves. Une occasion unique de découvrir notre approche pédagogique.",
    image: studentsGroupImage,
    category: 'events',
    author: 'Communication',
    date: '2024-03-15',
    featured: false
  },
  {
    id: 6,
    title: "Prix d'excellence en langue arabe",
    excerpt: "Nos élèves remportent le concours régional de langue arabe organisé par l'Institut Islamique.",
    content: "Fierté pour le Collège Sakina ! Trois de nos élèves ont remporté les premières places du concours régional de langue arabe. Cette victoire témoigne de la qualité de notre enseignement en langue arabe et de l'engagement de nos élèves dans l'apprentissage de cette langue sacrée.",
    image: islamicEducationImage,
    category: 'achievements',
    author: 'Département Arabe',
    date: '2024-04-22',
    featured: false
  }
];

export const archiveData = {
  '2023': [
    {
      id: 101,
      title: "Prix d'excellence académique 2023",
      excerpt: "Le Collège Sakina reçoit le prix régional d'excellence académique pour ses résultats exceptionnels.",
      content: "Une reconnaissance méritée pour notre établissement qui confirme notre engagement pour l'excellence éducative.",
      image: studentsImage,
      category: 'achievements',
      author: 'Direction',
      date: '2023-12-15'
    },
    {
      id: 102,
      title: "Journées culturelles islamiques 2023",
      excerpt: "Semaine dédiée à la culture islamique avec expositions, récitations et conférences.",
      content: "Un événement riche qui a permis aux élèves de découvrir et approfondir leur connaissance de la culture islamique.",
      image: islamicEducationImage,
      category: 'events',
      author: 'Département Culturel',
      date: '2023-11-20'
    },
    {
      id: 103,
      title: "Formation continue des enseignants",
      excerpt: "Session de formation intensive pour l'amélioration des méthodes pédagogiques.",
      content: "Nos enseignants se perfectionnent pour offrir un enseignement toujours plus adapté aux besoins des élèves.",
      image: studentsGroupImage,
      category: 'academic',
      author: 'Formation Continue',
      date: '2023-10-10'
    }
  ],
  '2022': [
    {
      id: 201,
      title: "Inauguration de la nouvelle aile",
      excerpt: "Ouverture d'un nouveau bâtiment avec laboratoires et salles multimédias modernes.",
      content: "Extension de nos infrastructures pour mieux accueillir nos élèves et améliorer les conditions d'apprentissage.",
      image: studentsImage,
      category: 'academic',
      author: 'Administration',
      date: '2022-09-15'
    },
    {
      id: 202,
      title: "Concours de sciences physiques",
      excerpt: "Nos élèves brillent au concours régional de sciences physiques et chimie.",
      content: "Première place remportée par notre équipe lors du concours inter-établissements.",
      image: studentsGroupImage,
      category: 'achievements',
      author: 'Département Sciences',
      date: '2022-05-20'
    }
  ],
  '2021': [
    {
      id: 301,
      title: "Adaptation aux mesures COVID-19",
      excerpt: "Mise en place de protocoles sanitaires et enseignement hybride.",
      content: "Notre établissement s'adapte aux contraintes sanitaires tout en maintenant la qualité de l'enseignement.",
      image: studentsImage,
      category: 'academic',
      author: 'Cellule COVID',
      date: '2021-03-10'
    }
  ],
  '2020': [
    {
      id: 401,
      title: "Continuité pédagogique en ligne",
      excerpt: "Lancement de la plateforme d'enseignement à distance.",
      content: "Innovation pédagogique pour assurer la continuité des cours pendant la pandémie.",
      image: studentsGroupImage,
      category: 'academic',
      author: 'Innovation Pédagogique',
      date: '2020-04-15'
    }
  ],
  '2019': [
    {
      id: 501,
      title: "10 ans du Collège Sakina",
      excerpt: "Célébration du dixième anniversaire de notre établissement.",
      content: "Une décennie d'excellence éducative célébrée avec toute la communauté scolaire.",
      image: islamicEducationImage,
      category: 'events',
      author: 'Comité des Fêtes',
      date: '2019-06-20'
    }
  ]
};

export const archiveYears = Object.keys(archiveData).sort().reverse();

// Adresse lisible d'un article, calculée à partir de son titre :
// "Excellents résultats au BFEM 2024" -> "excellents-resultats-au-bfem-2024"
export const slugify = (text) =>
  text
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

// Tous les articles (actualités récentes et archives), chacun avec son adresse
export const allArticles = [...news, ...Object.values(archiveData).flat()].map((article) => ({
  ...article,
  slug: slugify(article.title),
}));

export const articlePath = (article) => `/actualites/${article.slug ?? slugify(article.title)}`;

export const findArticle = (slug) => allArticles.find((article) => article.slug === slug);

export const isArchiveYear = (param) => /^\d{4}$/.test(param);

export const CATEGORY_NAMES = {
  academic: 'Académique',
  events: 'Événements',
  achievements: 'Réussites'
};

export const CATEGORY_COLORS = {
  academic: 'bg-green-100 text-green-800',
  events: 'bg-red-100 text-red-800',
  achievements: 'bg-yellow-100 text-yellow-800'
};

// Les dates "AAAA-MM-JJ" sont interprétées en UTC : on formate en UTC pour ne pas décaler d'un jour
export const formatArticleDate = (dateString) =>
  new Date(dateString).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
