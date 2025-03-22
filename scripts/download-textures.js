const https = require('https');
const fs = require('fs');
const path = require('path');

// Définition des textures à télécharger
const textures = [
  {
    name: 'earth_clouds.png',
    url: 'https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/clouds.png',
    required: true
  },
  {
    name: 'earth_specularmap.jpg',
    url: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57752/earth_ocean_3600x1800.jpg',
    required: false
  },
  {
    name: 'earth_nightlights_8k.jpg',
    url: 'https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/night.jpg',
    required: false
  },
  {
    name: 'water_4k.png',
    url: 'https://raw.githubusercontent.com/turban/webgl-earth/master/images/water_4k.png',
    required: false
  }
];

// Dossier de destination
const targetDir = path.join(__dirname, '../assets/textures');

// Création du dossier s'il n'existe pas
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Dossier créé: ${targetDir}`);
}

// Fonction pour télécharger un fichier
function downloadFile(url, filename, isRequired) {
  const filePath = path.join(targetDir, filename);
  
  // Vérifier si le fichier existe déjà
  if (fs.existsSync(filePath)) {
    console.log(`✅ Le fichier ${filename} existe déjà`);
    return Promise.resolve();
  }
  
  return new Promise((resolve, reject) => {
    console.log(`📥 Téléchargement de ${filename}${isRequired ? ' (requis)' : ''} depuis ${url}`);
    
    // Créer un flux d'écriture
    const file = fs.createWriteStream(filePath);
    
    // Télécharger le fichier
    https.get(url, response => {
      if (response.statusCode === 200) {
        // Afficher la progression
        const totalSize = parseInt(response.headers['content-length'], 10);
        let downloadedSize = 0;
        let lastReportedPercent = -1;
        
        response.on('data', chunk => {
          downloadedSize += chunk.length;
          const percent = Math.floor((downloadedSize / totalSize) * 100);
          
          // Afficher la progression tous les 10%
          if (percent % 10 === 0 && percent !== lastReportedPercent) {
            lastReportedPercent = percent;
            console.log(`${filename}: ${percent}% (${(downloadedSize / 1024 / 1024).toFixed(2)} MB)`);
          }
        });
        
        response.pipe(file);
        
        file.on('finish', () => {
          file.close();
          console.log(`✅ Téléchargement de ${filename} terminé`);
          resolve();
        });
      } else {
        // Gérer les erreurs HTTP
        file.close();
        fs.unlinkSync(filePath); // Supprimer le fichier partiellement téléchargé
        console.error(`❌ Erreur HTTP ${response.statusCode} pour ${filename}`);
        
        if (isRequired) {
          reject(new Error(`Échec du téléchargement d'une texture requise: ${filename}`));
        } else {
          console.warn(`⚠️ La texture optionnelle ${filename} n'a pas pu être téléchargée`);
          resolve();
        }
      }
    }).on('error', err => {
      // Gérer les erreurs de connexion
      file.close();
      fs.unlinkSync(filePath); // Supprimer le fichier partiellement téléchargé
      console.error(`❌ Erreur lors du téléchargement de ${filename}: ${err.message}`);
      
      if (isRequired) {
        reject(err);
      } else {
        console.warn(`⚠️ La texture optionnelle ${filename} n'a pas pu être téléchargée`);
        resolve();
      }
    });
  });
}

// Télécharger toutes les textures
async function downloadAllTextures() {
  console.log("🌐 Début du téléchargement des textures manquantes...");
  
  let success = true;
  let requiredSuccess = true;
  let downloaded = 0;
  let errors = 0;
  
  for (const texture of textures) {
    try {
      await downloadFile(texture.url, texture.name, texture.required);
      downloaded++;
    } catch (error) {
      console.error(`❌ Erreur: ${error.message}`);
      if (texture.required) {
        requiredSuccess = false;
      }
      errors++;
      success = false;
    }
  }
  
  // Afficher le résultat
  console.log("\n📋 Rapport de téléchargement:");
  console.log(`Textures téléchargées: ${downloaded}/${textures.length}`);
  
  if (success) {
    console.log("✅ Toutes les textures ont été téléchargées avec succès.");
  } else if (requiredSuccess) {
    console.log("⚠️ Toutes les textures requises ont été téléchargées, mais certaines textures optionnelles ont échoué.");
  } else {
    console.error("❌ ERREUR: Certaines textures requises n'ont pas pu être téléchargées.");
  }
  
  console.log("\n💡 Accédez à votre application pour voir le résultat. Utilisez le bouton de diagnostic des textures (🖼️) pour vérifier si toutes les textures nécessaires sont disponibles.");
}

// Lancer le téléchargement
downloadAllTextures().catch(error => {
  console.error("Erreur fatale:", error);
  process.exit(1);
});
