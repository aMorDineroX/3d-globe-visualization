# Textures pour le Globe 3D

Les fichiers de textures ne sont pas inclus dans ce dépôt en raison de leur taille.

## Textures nécessaires

Pour que l'application fonctionne correctement, téléchargez ces textures:

| Texture | Description | Statut | Lien direct |
|---------|-------------|--------|-------------|
| 2_no_clouds_4k.jpg | Texture principale Terre | ❌ | [Télécharger](https://raw.githubusercontent.com/turban/webgl-earth/master/images/2_no_clouds_4k.jpg) |
| earth_daymap.jpg | Alternative pour texture Terre | ✅ | [Télécharger](https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73909/world.topo.bathy.200412.3x5400x2700.jpg) |
| elev_bump_4k.jpg | Carte de relief | ❌ | [Télécharger](https://raw.githubusercontent.com/turban/webgl-earth/master/images/elev_bump_4k.jpg) |
| earth_bumpmap.jpg | Alternative pour relief | ✅ | [Télécharger](https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/bump.jpg) |
| fair_clouds_4k.png | Couche de nuages | ❌ | [Télécharger](https://raw.githubusercontent.com/turban/webgl-earth/master/images/fair_clouds_4k.png) |
| earth_clouds.png | Alternative pour nuages | ✅ | [Télécharger](https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/clouds.png) |
| earth_nightlights_8k.jpg | Lumières nocturnes | ❌ | [Télécharger](https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/night.jpg) |
| 8k_stars_milky_way.jpg | Fond étoilé | ✅ | - |
| 8k_sun.jpg | Texture du soleil | ✅ | - |
| 8k_moon.jpg | Texture de la lune | ✅ | - |
| earth_specularmap.jpg | Réflexion océans | ❌ | [Télécharger](https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57752/earth_ocean_3600x1800.jpg) |
| water_4k.png | Détails des océans | ✅ | [Télécharger](https://raw.githubusercontent.com/turban/webgl-earth/master/images/water_4k.png) |

**Note**: Les textures marquées ❌ sont actuellement manquantes selon le diagnostic système.

## Textures additionnelles disponibles

Ces textures supplémentaires peuvent être utilisées pour améliorer le rendu ou proposer des alternatives:

- earth_daymap.jpg (texture principale alternative pour la Terre)
- earth_clouds.jpg (alternative à earth_clouds.png)
- earth_specularmap.tif (version TIF de la texture de réflexion océanique)
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

## Résolution des problèmes courants

1. **Erreur avec les fichiers .tif**: Certains navigateurs ne supportent pas les fichiers .tif. Si vous utilisez earth_specularmap.tif et rencontrez des problèmes, téléchargez la version .jpg proposée ci-dessus. Le système a détecté que vous avez actuellement la version .tif qui pourrait causer des problèmes sur certains navigateurs.

2. **Textures de nuages manquantes**: L'application cherche earth_clouds.png ou fair_clouds_4k.png. Si ces textures sont absentes, le globe s'affichera sans nuages.

3. **Problèmes de performance**: Si votre application est lente, essayez d'utiliser des textures de résolution plus basse.

4. **Vérification des textures**: Utilisez le bouton de diagnostic des textures (🖼️) qui apparaît en bas à droite de l'application pour voir quelles textures sont correctement chargées.

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
