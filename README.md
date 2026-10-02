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
index.html                  # gabarit HTML (meta, icônes)
scripts/prerender.js        # pré-rendu : un HTML par page, 404.html, robots.txt, sitemap.xml
.github/workflows/ci.yml    # CI : lint + build à chaque push sur main et chaque PR
public/
  .htaccess                 # hébergement Apache : page 404, en-têtes de sécurité, cache
  og-image.jpg              # image d'aperçu des liens partagés (1200×630)
  favicon.ico
  forms/                    # PDF téléchargeables (inscription, fiche médicale)
src/
  main.jsx                  # démarrage côté navigateur (hydratation du HTML pré-rendu)
  entry-server.jsx          # rendu côté serveur, utilisé par le pré-rendu
  router.js                 # routage par URL, mémoire de défilement, transitions entre pages
  App.jsx                   # mise en page + choix de la page selon l'URL
  App.css                   # Tailwind + charte graphique (@theme)
  data/college.js           # coordonnées du collège et liens du menu (source unique)
  data/news.js              # actualités, archives, adresses des articles
  data/seo.js               # titre et description de chaque page, données schema.org
  data/content.js           # contenus officiels : mot de la directrice, équipe, documents utiles
  components/
    Navbar.jsx  Footer.jsx  BackToTop.jsx
    PageHero.jsx            # bandeau titre des pages intérieures
    CtaSection.jsx          # bandeau d'appel à l'action en bas de page
    FormField.jsx           # champ de formulaire avec label associé
    ArticleCard.jsx         # carte d'actualité (lien vers la page de l'article)
    AnimatedNumber.jsx      # chiffre animé à l'apparition (chiffres clés de l'accueil)
    WhatsAppButton.jsx      # bouton WhatsApp flottant
    DirectorMessage.jsx     # mot de la directrice (page À propos)
    TeamSection.jsx         # équipe pédagogique (page À propos)
    UsefulDocuments.jsx     # fournitures et règlement intérieur (page Inscriptions)
    Avatar.jsx              # photo ou initiales d'une personne
    ComingSoon.jsx          # encart « Bientôt disponible »
  hooks/useScrollReveal.js  # apparition douce des sections au défilement
  pages/
    Home.jsx  About.jsx  Programs.jsx  Admissions.jsx  News.jsx  Article.jsx  Contact.jsx  NotFound.jsx
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
| `/actualites/excellents-resultats-au-bfem-2024` | Page d'un article (adresse tirée du titre) |
| `/contact` | Contact |
| autre | Page introuvable (404) |

Les anciennes adresses (`/#apropos`, `/#actualites/2023`…) sont redirigées automatiquement vers les nouvelles.

La navigation se fait sans rechargement, avec un léger fondu entre les pages (View Transitions API). Précédent/Suivant restaurent la position de lecture ; après chaque changement de page, le focus passe sur le titre et la page est annoncée aux lecteurs d'écran. Les animations (fondu, chiffres, apparition des sections) sont désactivées si l'utilisateur a choisi de réduire les animations.

Pour ajouter une page : l'ajouter à `navItems` dans `src/data/college.js`, au tableau `PAGES` de `src/App.jsx` et à `PAGE_META` dans `src/data/seo.js`.

## Charte graphique

Les couleurs reprennent celles du **logo officiel** et sont déclarées dans le bloc `@theme` de `src/App.css` (Tailwind v4 n'utilise pas de `tailwind.config.js`) :

| Classe | Couleur | Usage |
|---|---|---|
| `sakina-green` | `#14461e` | couleur principale : bandeaux, titres, pied de page |
| `sakina-green-light` | `#1f6b30` | fin des dégradés, survols |
| `sakina-red` | `#c02424` | accent sur fond clair : boutons, icônes, liens actifs |
| `sakina-red-dark` | `#9b1c1c` | survol des boutons rouges |
| `sakina-red-light` | `#f8b4b4` | accent sur fond vert (le rouge du logo y serait illisible) |

Logo : `src/assets/images/logo-sakina.webp` (mot « Sakina » détouré), posé sur une pastille blanche sur fond vert. Favicon et icône Apple tirés du « S » du logo.

Police : Poppins, hébergée avec le site via `@fontsource/poppins` (sous-ensemble latin, 5 variantes importées dans `src/main.jsx`) : aucune requête vers Google Fonts.

## Modifier le contenu

### Contenus officiels à fournir par l'école

Tout se trouve dans **`src/data/content.js`**. Tant qu'une rubrique est vide, le site affiche « Bientôt disponible » à sa place.

| Rubrique | Où elle s'affiche | Ce qu'il faut renseigner |
|---|---|---|
| Mot de la directrice | À propos | `director` : nom, photo, paragraphes du message |
| Équipe pédagogique | À propos | `team` : une ligne par personne (nom, rôle, photo) |
| Listes de fournitures | Inscriptions › Documents utiles | `schoolYear` et le fichier PDF de chaque classe dans `supplyLists` |
| Règlement intérieur | Inscriptions › Documents utiles | `schoolRules` : fichier PDF et date de la version |

- **Photos** : fichiers carrés (environ 400×400 px, `.webp` ou `.jpg`) dans `public/images/equipe/`, indiqués sous la forme `'/images/equipe/nom.webp'`. Sans photo, les initiales s'affichent. Les photos d'élèves ou de personnels nécessitent leur autorisation.
- **PDF** : fichiers dans `public/documents/`, indiqués sous la forme `'/documents/fournitures-6eme.pdf'`.
- Lien direct vers les documents : `/inscriptions#documents-utiles` (aussi présent dans le pied de page).

### Autres contenus

- **Coordonnées** (téléphones, e-mails, adresse, réseaux) : uniquement dans `src/data/college.js`.
- **Actualités** : `src/data/news.js`. Chaque article, et chaque année d'archive, obtient automatiquement sa page pré-rendue. L'adresse d'un article est tirée de son titre : **modifier le titre change l'adresse**, et les liens déjà partagés ne fonctionneront plus.
- **Titres et descriptions pour Google** : `src/data/seo.js`.
- **Carte** : `mapQuery` dans `src/data/college.js` (idéalement les coordonnées GPS exactes du collège).
- **Textes, programmes, tarifs** : directement dans les fichiers de `src/pages/`.

## Limites connues (à traiter avant la mise en ligne)

- **Les formulaires de pré-inscription et de contact n'envoient rien** : la soumission est simulée (voir les `TODO` dans `Admissions.jsx` et `Contact.jsx`). Il faut brancher un service d'envoi (Formspree, EmailJS, Web3Forms…) ou un backend.
- **Le domaine `sakinacollege.sn` n'existe pas** : les adresses `@sakinacollege.sn` ne reçoivent aucun message.
- Certaines images proviennent de banques d'images (dont une avec filigrane) et doivent être remplacées par de vraies photos.
- Les PDF de `public/forms/` ont des accents corrompus et doivent être régénérés.
- Le fichier du logo fourni est une image basse définition coupée à droite (« l'Excellence » tronqué) : seul le mot « Sakina » est utilisé. Demander à l'école le logo complet en SVG ou en PNG haute définition.
- L'image de calligraphie (page Programmes) porte la mention « Adobe Stock » : à remplacer ou à licencier.
- La carte pointe pour l'instant sur « Auchan HLM, Dakar » : à remplacer par les coordonnées exactes.
- L'adresse publique du site n'est pas encore connue : sans `VITE_SITE_URL`, pas de sitemap ni d'URL canonique.

## Déploiement

Publier le contenu de `dist/` (après `pnpm build`) sur un hébergement statique. Chaque page existe sous forme de fichier (`a-propos/index.html`…), aucune règle de réécriture n'est nécessaire.

- **Netlify, Vercel, GitHub Pages** : utilisent automatiquement `404.html`.
- **Apache (Hostinger, cPanel)** : le fichier `.htaccess` fourni configure la page 404, des en-têtes de sécurité et le cache des fichiers versionnés.
