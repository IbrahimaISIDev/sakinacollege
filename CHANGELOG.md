# Changelog

## [Non publié]

### Expérience utilisateur
- Une page par actualité (`/actualites/<titre>`) avec fil d'Ariane, partage WhatsApp/Facebook, copie du lien et suggestions « À lire aussi » ; les cartes d'actualité sont entièrement cliquables. Pages pré-rendues avec données structurées `NewsArticle`.
- Navigation : léger fondu entre les pages, position de lecture restaurée avec Précédent/Suivant et au rechargement, focus sur le titre et annonce de la page pour les lecteurs d'écran.
- Chiffres clés de l'accueil animés à leur apparition ; sections qui apparaissent en douceur au défilement. Sans effet pour les personnes qui réduisent les animations, et contenu complet dans le HTML pré-rendu.
- Bouton WhatsApp flottant avec message pré-rempli.
- Accueil : bandeau d'introduction à la hauteur de son contenu (il occupait tout l'écran).
- Menu mobile : fermeture avec Échap, page bloquée derrière le menu ouvert, menu défilable sur les petits écrans.
- Police Poppins hébergée avec le site (plus de requête vers Google Fonts).
- Image d'aperçu dédiée pour les liens partagés (logo et nom du collège, 1200×630).


### Identité visuelle
- Intégration du logo officiel dans la barre de navigation et le pied de page ; nouveau favicon et icône Apple tirés du « S » du logo.
- Charte graphique alignée sur le logo : vert `#14461e` (remplace le bleu nuit) et rouge `#c02424` (remplace le doré), avec un rouge clair pour les accents sur fond vert. Contrastes conformes WCAG AA.
- Slogan officiel « Le jardin du savoir et de la vertu » affiché sous le logo.


### SEO et URL
- Vraies URL (`/a-propos`, `/programmes`, `/actualites/2023`…) à la place du routage par hash ; les anciennes adresses `#page` sont redirigées.
- Pré-rendu HTML de chaque page au build : contenu indexable sans JavaScript, titre et description propres à chaque page.
- Open Graph, données structurées schema.org (School), robots.txt, et avec `VITE_SITE_URL` : URL canoniques et sitemap.xml.
- Page 404 dédiée.

### Performance
- Images converties en WebP et redimensionnées : 1,17 Mo → 220 Ko.

### Ajouté
- Carte Google Maps intégrée sur la page Contact (sans clé d'API).
- `.htaccess` pour Apache : page 404, en-têtes de sécurité, cache.
- Intégration continue GitHub Actions (lint + build).


### Corrigé
- Charte graphique : les couleurs `sakina-*` sont déclarées dans `@theme` (Tailwind v4 ignorait `tailwind.config.js`). Dégradés des en-têtes, survols, focus et état actif du menu fonctionnent à nouveau.
- Police Poppins réellement chargée (lien dans `index.html`).
- Actualités : « Lire la suite » affiche l'article ; les articles à la une ne disparaissent plus avec un filtre ; message « aucun résultat » fiable ; compteurs calculés ; recherche insensible aux accents ; archives accessibles par URL (`#actualites/2023`) avec retour navigateur ; archive 2024 vide supprimée.
- Le formulaire newsletter, qui rechargeait la page et renvoyait à l'accueil, est remplacé par des liens Facebook et WhatsApp.
- Liens morts du pied de page supprimés (Instagram, YouTube, mentions légales, confidentialité) ; lien Facebook réel.
- Téléphones et e-mails cliquables (`tel:` et `mailto:`) ; année du copyright dynamique.
- Tableau des frais lisible sur mobile (cartes) ; frise chronologique sur une colonne sur mobile.
- Un hash inconnu affiche l'accueil avec le bon lien actif.

### Accessibilité
- Labels liés aux champs, champs obligatoires signalés, messages de confirmation annoncés (`aria-live`).
- Menu mobile : `aria-label`, `aria-expanded`, liens hors tabulation quand il est fermé.
- Onglets des programmes avec rôles ARIA et navigation aux flèches.
- Un seul `h1` par page, `aria-current` sur le lien actif, lien « Aller au contenu ».
- Texte doré sur fond clair remplacé par `sakina-gold-dark` (contraste AA) ; respect de `prefers-reduced-motion`.

### Technique
- Suppression de 46 composants shadcn/ui inutilisés et de 48 dépendances inutilisées ; mise à jour des dépendances (0 vulnérabilité connue).
- Coordonnées centralisées dans `src/data/college.js` ; composants partagés `PageHero`, `CtaSection` et `FormField` ; hook `useHashRoute`.
- ESLint sans erreur, avec `react/jsx-uses-vars` à la place de l'exception `^[A-Z_]` qui masquait les imports inutilisés.
- `dist/` et `.vite/` retirés du dépôt et ignorés.

## 2025-07-20
- Ajout du bouton « retour en haut », des formulaires PDF et des archives d'actualités.

## 2025-07-18
- Initialisation du projet.
