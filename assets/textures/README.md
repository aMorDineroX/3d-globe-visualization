# Textures pour le Globe Terrestre

Pour que le globe fonctionne correctement, vous devez ajouter les textures suivantes dans ce dossier :

## Textures requises

1. `earth_daymap.jpg` - Texture de la Terre (vue de jour)
2. `earth_bumpmap.jpg` - Carte de relief pour donner du volume
3. `earth_specularmap.tif` - Carte spéculaire pour les reflets (format TIF)
4. `earth_clouds.png` - Texture de nuages (avec transparence)

## Où obtenir ces textures

Vous pouvez télécharger des textures de haute qualité depuis les sources suivantes :

- [NASA Visible Earth](https://visibleearth.nasa.gov/)
- [Solar System Scope](https://www.solarsystemscope.com/textures/)
- [Planetary Pixel Emporium](http://planetpixelemporium.com/earth.html)

## Instructions de téléchargement

1. Téléchargez les fichiers de texture depuis l'une des sources ci-dessus
2. Renommez-les selon les noms indiqués ci-dessus
3. Placez-les dans ce dossier (`assets/textures/`)

Note : Assurez-vous que les textures ont une résolution suffisante (idéalement 2048x1024 ou 4096x2048) pour un rendu de qualité.

## À propos du format TIF
Le format TIF peut nécessiter une conversion pour être utilisé directement par Three.js. Si vous rencontrez des problèmes avec le chargement de la texture specular, vous pouvez essayer de convertir le fichier TIF en JPG ou PNG à l'aide d'un logiciel d'édition d'image comme GIMP ou Photoshop.
