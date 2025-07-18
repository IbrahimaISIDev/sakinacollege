# Collège Privé Musulman Sakina - Site Web

Ce projet est une application web développée pour le Collège Privé Musulman Sakina, une école islamique à Dakar, Sénégal. Le site est construit avec React.js et Tailwind CSS, en suivant une approche mobile-first pour garantir une expérience utilisateur optimale sur tous les appareils.

## 🌟 Fonctionnalités

### Pages Principales
- **Accueil** : Section hero, statistiques, témoignages, présentation des services
- **À propos** : Histoire, mission/vision, valeurs, timeline de développement
- **Programmes** : Détails par niveau (6ème à 3ème), formation islamique, emploi du temps
- **Inscriptions** : Processus d'inscription, formulaire, documents requis, frais de scolarité
- **Actualités** : Articles avec filtres par catégorie, recherche, newsletter
- **Contact** : Formulaire de contact, informations pratiques, FAQ, localisation

### Caractéristiques Techniques
- **Responsive Design** : Approche mobile-first avec navigation fluide
- **Menu Burger** : Navigation optimisée pour mobile
- **Formulaires Interactifs** : Validation et feedback utilisateur
- **Système de Routing** : Navigation par hash pour SPA
- **Optimisation SEO** : Balises meta, descriptions optimisées
- **Performance** : Images optimisées, code minifié

## 🎨 Charte Graphique

- **Couleurs Principales** :
  - Bleu nuit : `#1e3a8a` (sakina-blue)
  - Doré : `#facc15` (sakina-gold)
  - Blanc : `#ffffff`
- **Police** : Poppins (sans-serif, lisible)
- **Style** : Minimal, professionnel, respectueux des valeurs islamiques

## 🛠️ Technologies Utilisées

- **React.js** : Frontend avec composants réutilisables
- **Tailwind CSS** : Styles responsive et modernes
- **React Router DOM** : Navigation entre les pages (hash routing)
- **Lucide React** : Icônes légères et modernes
- **Vite** : Build rapide et performant

## 📋 Prérequis

- Node.js (version 18 ou supérieure)
- npm ou pnpm

## 🚀 Installation

1. **Clonez le dépôt** :
   ```bash
   git clone <votre-repo-git>
   cd sakinacollege
   ```

2. **Installez les dépendances** :
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Lancez le serveur de développement** :
   ```bash
   pnpm run dev
   # ou
   npm run dev
   ```

4. **Ouvrez votre navigateur** à l'adresse : `http://localhost:5173`

## 📁 Structure du Projet

```
/sakinacollege
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/           # Images du site
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation principale
│   │   └── Footer.jsx        # Pied de page
│   ├── pages/
│   │   ├── Home.jsx          # Page d'accueil
│   │   ├── About.jsx         # Page à propos
│   │   ├── Programs.jsx      # Page programmes
│   │   ├── Admissions.jsx    # Page inscriptions
│   │   ├── News.jsx          # Page actualités
│   │   └── Contact.jsx       # Page contact
│   ├── App.jsx               # Composant principal
│   ├── main.jsx              # Point d'entrée
│   └── App.css               # Styles globaux
├── tailwind.config.js        # Configuration Tailwind
├── package.json
└── README.md
```

## 🎯 Fonctionnalités Détaillées

### Navigation
- Menu responsive avec burger sur mobile
- Navigation par hash (#accueil, #apropos, etc.)
- Liens actifs avec mise en évidence

### Page d'Accueil
- Section hero avec call-to-action
- Statistiques de l'établissement
- Présentation des services
- Témoignages de parents et élèves
- Sections d'engagement

### Page À Propos
- Histoire de l'établissement
- Mission et vision
- Valeurs fondamentales
- Timeline de développement
- Objectifs pédagogiques

### Page Programmes
- Onglets interactifs par niveau de classe
- Détails des matières enseignées
- Programme d'éducation islamique
- Emploi du temps type
- Activités complémentaires

### Page Inscriptions
- Processus d'inscription en 4 étapes
- Formulaire de pré-inscription interactif
- Liste des documents requis
- Grille tarifaire détaillée
- Téléchargement de formulaires

### Page Actualités
- Articles avec système de filtres
- Recherche par mots-clés
- Catégorisation (Académique, Événements, Réussites)
- Articles à la une
- Newsletter

### Page Contact
- Formulaire de contact complet
- Informations de contact par département
- FAQ avec questions fréquentes
- Localisation et horaires
- Liens de contact rapide

## 🔧 Déploiement

### Build de Production
```bash
pnpm run build
# ou
npm run build
```

Le dossier `dist/` contiendra les fichiers optimisés pour la production.

### Options de Déploiement
- **Vercel** : Déploiement automatique depuis Git
- **Netlify** : Drag & drop du dossier dist
- **Hostinger** : Upload via FTP/cPanel
- **GitHub Pages** : Hébergement gratuit

### Configuration pour Hostinger
1. Créez un build de production
2. Uploadez le contenu du dossier `dist/` vers `public_html/`
3. Configurez les redirections si nécessaire

## 🎨 Personnalisation

### Logo et Favicon
- Remplacez `public/favicon.ico` par votre favicon
- Ajoutez votre logo dans `src/assets/images/`
- Mettez à jour les références dans les composants

### Formulaires de Contact
- Intégrez EmailJS pour l'envoi d'emails
- Configurez un backend pour traiter les soumissions
- Ajoutez la validation côté serveur

### Contenu
- Modifiez les textes dans les fichiers de pages
- Ajoutez de vraies images dans `src/assets/images/`
- Personnalisez les couleurs dans `tailwind.config.js`

### Google Maps
- Ajoutez une clé API Google Maps
- Remplacez le placeholder par une vraie carte
- Configurez les marqueurs de localisation

## 📱 Responsive Design

Le site est optimisé pour :
- **Mobile** : 320px - 768px
- **Tablette** : 768px - 1024px
- **Desktop** : 1024px+

### Breakpoints Tailwind
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

## 🔍 SEO et Performance

### Optimisations Incluses
- Balises meta appropriées
- Descriptions optimisées
- Images avec attributs alt
- Structure HTML sémantique
- Chargement optimisé des ressources

### Améliorations Possibles
- Sitemap XML
- Schema.org markup
- Optimisation des images WebP
- Lazy loading des images
- Service Worker pour le cache

## 🚀 Prochaines Étapes

### Intégrations Recommandées
1. **EmailJS** : Pour les formulaires de contact
2. **Google Analytics** : Suivi des visiteurs
3. **Google Maps API** : Carte interactive
4. **CMS Headless** : Gestion du contenu dynamique
5. **Base de données** : Stockage des inscriptions

### Fonctionnalités Avancées
- Espace parent/élève
- Système de paiement en ligne
- Calendrier des événements
- Galerie photos/vidéos
- Blog intégré

## 📞 Support

Pour toute question technique ou personnalisation :
- Email : contact@sakinacollege.sn
- Téléphone : +221 77 532 29 28

## 📄 Licence

Ce projet est développé spécifiquement pour le Collège Privé Musulman Sakina.

---

**Développé avec ❤️ pour l'excellence éducative islamique**

# sakinacollege
