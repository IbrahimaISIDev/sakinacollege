# Collège Privé Musulman Sakina — Site web

Site vitrine du Collège Privé Musulman Sakina (HLM2, Dakar, Sénégal) : présentation de l'établissement, programmes, inscriptions, actualités et contact.

Application **React 19** stylée avec **Tailwind CSS v4** et construite avec **Vite 6**. Chaque page est **pré-rendue en HTML** au build (contenu lisible par les moteurs de recherche), puis devient interactive dans le navigateur. Aucun backend.

## Prérequis

- Node.js 18 ou plus
- pnpm (le dépôt fixe la version via `packageManager`)

## Démarrage

```bash
pnpm install
pnpm dev        # serveur de développement : http://localhost:8080
pnpm lint       # ESLint
pnpm build      # build de production + pré-rendu des pages dans dist/
pnpm preview    # sert le build localement

# Avec l'adresse publique du site (URL canoniques, Open Graph, sitemap.xml) :
VITE_SITE_URL=https://www.exemple.sn pnpm build
```

## Structure

```
index.html                  # gabarit HTML (meta, police Poppins)
scripts/prerender.js        # pré-rendu : un HTML par page, 404.html, robots.txt, sitemap.xml
.github/workflows/ci.yml    # CI : lint + build à chaque push sur main et chaque PR
public/
  .htaccess                 # hébergement Apache : page 404, en-têtes de sécurité, cache
  favicon.ico
  forms/                    # PDF téléchargeables (inscription, fiche médicale)
src/
  main.jsx                  # démarrage côté navigateur (hydratation du HTML pré-rendu)
  entry-server.jsx          # rendu côté serveur, utilisé par le pré-rendu
  router.js                 # routage par URL (/a-propos, /actualites/2023…)
  App.jsx                   # mise en page + choix de la page selon l'URL
  App.css                   # Tailwind + charte graphique (@theme)
  data/college.js           # coordonnées du collège et liens du menu (source unique)
  data/news.js              # actualités et archives
  data/seo.js               # titre et description de chaque page, données schema.org
  components/
    Navbar.jsx  Footer.jsx  BackToTop.jsx
    PageHero.jsx            # bandeau titre des pages intérieures
    CtaSection.jsx          # bandeau d'appel à l'action en bas de page
    FormField.jsx           # champ de formulaire avec label associé
  pages/
    Home.jsx  About.jsx  Programs.jsx  Admissions.jsx  News.jsx  Contact.jsx  NotFound.jsx
  assets/images/            # images WebP
```

## Navigation

| URL | Page |
|---|---|
| `/` | Accueil |
| `/a-propos` | À propos |
| `/programmes` | Programmes |
| `/inscriptions` | Inscriptions |
| `/actualites` | Actualités |
| `/actualites/2023` | Archives d'une année |
| `/contact` | Contact |
| autre | Page introuvable (404) |

Les anciennes adresses (`/#apropos`, `/#actualites/2023`…) sont redirigées automatiquement vers les nouvelles.

Pour ajouter une page : l'ajouter à `navItems` dans `src/data/college.js`, au tableau `PAGES` de `src/App.jsx` et à `PAGE_META` dans `src/data/seo.js`.

## Charte graphique

Les couleurs sont déclarées dans le bloc `@theme` de `src/App.css` (Tailwind v4 n'utilise pas de `tailwind.config.js`) :

| Classe | Couleur | Usage |
|---|---|---|
| `sakina-blue` | `#1e3a8a` | couleur principale |
| `sakina-gold` | `#facc15` | accent, sur fond bleu ou en arrière-plan |
| `sakina-gold-dark` | `#a16207` | texte doré sur fond clair (contraste suffisant) |
| `sakina-green`, `sakina-red` | `#16a34a`, `#dc2626` | icônes |

Police : Poppins (Google Fonts, chargée dans `index.html`).

## Modifier le contenu

- **Coordonnées** (téléphones, e-mails, adresse, réseaux) : uniquement dans `src/data/college.js`.
- **Actualités** : `src/data/news.js` (une année d'archive ajoutée est pré-rendue automatiquement).
- **Titres et descriptions pour Google** : `src/data/seo.js`.
- **Carte** : `mapQuery` dans `src/data/college.js` (idéalement les coordonnées GPS exactes du collège).
- **Textes, programmes, tarifs** : directement dans les fichiers de `src/pages/`.

## Limites connues (à traiter avant la mise en ligne)

- **Les formulaires de pré-inscription et de contact n'envoient rien** : la soumission est simulée (voir les `TODO` dans `Admissions.jsx` et `Contact.jsx`). Il faut brancher un service d'envoi (Formspree, EmailJS, Web3Forms…) ou un backend.
- **Le domaine `sakinacollege.sn` n'existe pas** : les adresses `@sakinacollege.sn` ne reçoivent aucun message.
- Certaines images proviennent de banques d'images (dont une avec filigrane) et doivent être remplacées par de vraies photos.
- Les PDF de `public/forms/` ont des accents corrompus et doivent être régénérés.
- La carte pointe pour l'instant sur « Auchan HLM, Dakar » : à remplacer par les coordonnées exactes.
- L'adresse publique du site n'est pas encore connue : sans `VITE_SITE_URL`, pas de sitemap ni d'URL canonique.

## Déploiement

Publier le contenu de `dist/` (après `pnpm build`) sur un hébergement statique. Chaque page existe sous forme de fichier (`a-propos/index.html`…), aucune règle de réécriture n'est nécessaire.

- **Netlify, Vercel, GitHub Pages** : utilisent automatiquement `404.html`.
- **Apache (Hostinger, cPanel)** : le fichier `.htaccess` fourni configure la page 404, des en-têtes de sécurité et le cache des fichiers versionnés.
