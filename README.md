# Collège Privé Musulman Sakina — Site web

Site vitrine du Collège Privé Musulman Sakina (HLM2, Dakar, Sénégal) : présentation de l'établissement, programmes, inscriptions, actualités et contact.

Application **React 19** monopage, stylée avec **Tailwind CSS v4** et construite avec **Vite 6**. Aucun backend.

## Prérequis

- Node.js 18 ou plus
- pnpm (le dépôt fixe la version via `packageManager`)

## Démarrage

```bash
pnpm install
pnpm dev        # serveur de développement : http://localhost:8080
pnpm lint       # ESLint
pnpm build      # build de production dans dist/
pnpm preview    # sert le build localement
```

## Structure

```
index.html                  # point d'entrée HTML (meta, police Poppins)
public/
  favicon.ico
  forms/                    # PDF téléchargeables (inscription, fiche médicale)
src/
  main.jsx                  # montage React
  App.jsx                   # mise en page + choix de la page selon le hash
  App.css                   # Tailwind + charte graphique (@theme)
  data/college.js           # coordonnées du collège et liens du menu (source unique)
  hooks/useHashRoute.js     # routage "#page" ou "#page/param"
  components/
    Navbar.jsx  Footer.jsx  BackToTop.jsx
    PageHero.jsx            # bandeau titre des pages intérieures
    CtaSection.jsx          # bandeau d'appel à l'action en bas de page
    FormField.jsx           # champ de formulaire avec label associé
  pages/
    Home.jsx  About.jsx  Programs.jsx  Admissions.jsx  News.jsx  Contact.jsx
  assets/images/
```

## Navigation

Le routage se fait par le hash de l'URL :

| URL | Page |
|---|---|
| `#accueil` (ou vide) | Accueil |
| `#apropos` | À propos |
| `#programmes` | Programmes |
| `#inscriptions` | Inscriptions |
| `#actualites` | Actualités |
| `#actualites/2023` | Archives d'une année |
| `#contact` | Contact |

Pour ajouter une page : l'ajouter à `navItems` dans `src/data/college.js` et au tableau `PAGES` de `src/App.jsx`.

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
- **Textes, programmes, tarifs, actualités** : directement dans les fichiers de `src/pages/`.

## Limites connues (à traiter avant la mise en ligne)

- **Les formulaires de pré-inscription et de contact n'envoient rien** : la soumission est simulée (voir les `TODO` dans `Admissions.jsx` et `Contact.jsx`). Il faut brancher un service d'envoi (Formspree, EmailJS, Web3Forms…) ou un backend.
- **Le domaine `sakinacollege.sn` n'existe pas** : les adresses `@sakinacollege.sn` ne reçoivent aucun message.
- Certaines images proviennent de banques d'images (dont une avec filigrane) et doivent être remplacées par de vraies photos.
- Les PDF de `public/forms/` ont des accents corrompus et doivent être régénérés.
- Le routage par hash ne permet pas l'indexation séparée des pages par les moteurs de recherche.

## Déploiement

Le contenu de `dist/` (après `pnpm build`) peut être servi par n'importe quel hébergement statique (Netlify, Vercel, GitHub Pages, Hostinger…). Comme le routage utilise le hash, aucune règle de réécriture n'est nécessaire.
