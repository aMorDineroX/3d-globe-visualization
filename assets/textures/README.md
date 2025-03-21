# Textures pour le Globe 3D

Les fichiers de textures ne sont pas inclus dans ce dépôt en raison de leur taille.

## Textures nécessaires

Pour que l'application fonctionne correctement, téléchargez ces textures:

- 2_no_clouds_4k.jpg
- elev_bump_4k.jpg
- water_4k.png
- fair_clouds_4k.png
- earth_nightlights_8k.jpg
- 8k_stars_milky_way.jpg
- 8k_sun.jpg
- 8k_moon.jpg

## Textures additionnelles disponibles

Ces textures supplémentaires peuvent être utilisées pour améliorer le rendu ou proposer des alternatives:

- earth_daymap.jpg (texture principale alternative pour la Terre)
- Explorer Base Map.png (carte topographique détaillée)
- ipcc_bluemarble_east_lrg.jpg (hémisphère est en haute résolution)
- ipcc_bluemarble_west_lrg.jpg (hémisphère ouest en haute résolution)
- Land topography is a digital image of the three-dimensional structure of the Earth's surface 21600x10800.png (topographie terrestre)
- North Africa and Europe from Suomi NPP.jpg (vue détaillée de l'Afrique et de l'Europe)
- The View from the Top.jpg (vue polaire)
- world.topo.bathy.200412.3x21600x21600.C1.png (topographie et bathymétrie complètes)

## Sources possibles pour les textures

1. [NASA Visible Earth](https://visibleearth.nasa.gov/collection/1484/blue-marble)
2. [Solar System Scope](https://www.solarsystemscope.com/textures/)
3. [Solar Textures](https://www.solartextures.com/free-textures.html)

Placez les fichiers téléchargés directement dans ce dossier.

## Alternatives pour gérer les textures

1. **Utiliser Git LFS** (Large File Storage):
   ```bash
   git lfs install
   git lfs track "assets/textures/*.jpg" "assets/textures/*.png"
   git add .gitattributes
   ```

2. **Mettre à jour le README** pour expliquer comment télécharger les textures

## Comment changer la texture principale

Pour utiliser une texture alternative comme texture principale:

1. Ouvrez le fichier `src/components/Globe.js`
2. Recherchez le bloc `createGlobe()` 
3. Modifiez la ligne où la texture principale est chargée pour référencer votre texture préférée
