# 3D Globe Visualization

Une application interactive de visualisation de globe terrestre en 3D avec:
- Cycle jour/nuit réaliste
- Données météorologiques en temps réel
- Suivi des vols
- Marqueurs de points d'intérêt

## Fonctionnalités

- Globe 3D haute définition avec textures réalistes
- Atmosphère et nuages animés
- Marqueurs interactifs pour les villes et points d'intérêt
- Navigation intuitive (rotation, zoom, etc.)
- Effets visuels et animations fluides
- Affichage de données réelles

## Installation

1. Clonez ce dépôt
2. Installez les dépendances

```bash
npm install
```

3. Téléchargez les textures (voir `assets/textures/README.md`)
4. Lancez le serveur de développement

```bash
npm run dev
```

5. Ouvrez votre navigateur à l'adresse indiquée (généralement http://localhost:5173)

## Utilisation

- **Rotation** : Cliquez et faites glisser la souris pour faire pivoter le globe
- **Zoom** : Utilisez la molette de la souris pour zoomer/dézoomer
- **Informations** : Survolez un marqueur pour voir des informations, cliquez dessus pour zoomer sur ce point

## Technologies utilisées

- Three.js
- GSAP pour les animations
- API météo et vols

## Structure du projet
- `src/` - Code source de l'application
  - `components/` - Composants réutilisables (Globe, Markers, etc.)
  - `services/` - Services pour les API externes (météo, vols)
  - `utils/` - Fonctions utilitaires et helpers
- `assets/` - Ressources statiques
  - `textures/` - Textures pour le globe et les éléments 3D

## Déploiement

Pour déployer l'application en production:

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

## Contribution

1. Fork le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Commit vos changements (`git commit -m 'Add some amazing feature'`)
4. Push vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

## Licence

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

## Prochaines étapes du développement

- Ajouter plus de sources de données en temps réel
- Implémenter un système de recherche
- Optimiser les performances pour les appareils mobiles
- Ajouter des animations de transition plus sophistiquées

