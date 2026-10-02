import { college } from './college';
import { articlePath, findArticle, isArchiveYear } from './news';

// Adresse publique du site, sans "/" final (ex. https://www.sakinacollege.sn).
// Sert aux URL canoniques, à Open Graph et au sitemap ; à définir via VITE_SITE_URL au moment du build.
export const SITE_URL = (import.meta.env?.VITE_SITE_URL || '').replace(/\/+$/, '');

const SUFFIX = ` | ${college.name}`;

const PAGE_META = {
  accueil: {
    title: `${college.name} - Dakar, Sénégal`,
    description: "Collège privé musulman à Dakar (HLM) : programme national sénégalais de la 6ème à la 3ème, langue arabe, Coran et éducation islamique."
  },
  apropos: {
    title: `À propos${SUFFIX}`,
    description: "Histoire, mission, vision et valeurs du Collège Privé Musulman Sakina, établissement d'enseignement privé à Dakar."
  },
  programmes: {
    title: `Programmes de la 6ème à la 3ème${SUFFIX}`,
    description: "Matières, objectifs et emploi du temps de la 6ème à la 3ème : programme sénégalais, préparation au BFEM, langue arabe, Coran et activités."
  },
  inscriptions: {
    title: `Inscriptions et frais de scolarité${SUFFIX}`,
    description: "Processus d'inscription, formulaire de pré-inscription, documents requis et frais de scolarité du Collège Sakina à Dakar."
  },
  actualites: {
    title: `Actualités${SUFFIX}`,
    description: "Résultats, événements et vie du Collège Privé Musulman Sakina à Dakar."
  },
  contact: {
    title: `Contact et accès${SUFFIX}`,
    description: `Téléphones, e-mails, horaires et plan d'accès du Collège Sakina : ${college.address.street} ${college.address.landmark}, Dakar.`
  },
  introuvable: {
    title: `Page introuvable${SUFFIX}`,
    description: "Cette page n'existe pas ou a été déplacée."
  }
};

export function getPageMeta(page, param) {
  if (page === 'actualites' && param) {
    if (isArchiveYear(param)) {
      return {
        title: `Archives ${param} - Actualités${SUFFIX}`,
        description: `Les actualités ${param} du Collège Privé Musulman Sakina.`
      };
    }
    const article = findArticle(param);
    if (article) {
      return { title: `${article.title}${SUFFIX}`, description: article.excerpt };
    }
    return PAGE_META.introuvable;
  }
  return PAGE_META[page] || PAGE_META.introuvable;
}

// Données structurées schema.org pour les moteurs de recherche (page d'accueil)
export function getSchoolJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'School',
    name: college.name,
    ...(SITE_URL && { url: SITE_URL }),
    email: college.emails.main,
    telephone: college.phones.main.replace(/\s/g, ''),
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${college.address.street} ${college.address.landmark}`,
      addressLocality: 'Dakar',
      addressCountry: 'SN'
    },
    openingHours: ['Mo-Fr 07:30-16:30', 'Sa 08:00-12:00'],
    sameAs: [college.social.facebook]
  };
}

// Données structurées schema.org d'un article (pages /actualites/<article>)
export function getArticleJsonLd(slug) {
  const article = findArticle(slug);
  if (!article) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { '@type': 'Organization', name: `${college.name} - ${article.author}` },
    publisher: { '@type': 'School', name: college.name },
    ...(SITE_URL && { mainEntityOfPage: `${SITE_URL}${articlePath(article)}` })
  };
}
