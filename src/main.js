import { Globe } from './components/Globe.js';
import { loadData } from './utils/dataLoader.js';
import { textureChecker } from './utils/TextureChecker.js';
import { textureDownloader } from './utils/TextureDownloader.js';
import { assetManager } from './utils/AssetManager.js';

// Masquer l'écran de chargement une fois que tout est prêt
document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('globe-container');
  const loadingElement = document.getElementById('loading');
  
  // Afficher le chemin complet pour vérifier l'accès aux textures
  console.log("Chemin d'accès attendu pour les textures:", 
    new URL('./assets/textures/', window.location.href).href);
  
  try {
    // Définir explicitement la préférence des textures locales
    assetManager.preferProceduralFallbacks = false;
    
    // Vérifier si nous pouvons accéder aux textures locales avant tout
    const checkLocalFiles = async () => {
      const testTexture = 'earth_daymap.jpg';
      const paths = [
        './assets/textures/',
        '/assets/textures/',
        '../assets/textures/',
        'assets/textures/'
      ];
      
      console.log("Vérification de l'accès aux textures locales...");
      
      for (const path of paths) {
        try {
          const response = await fetch(`${path}${testTexture}`, { method: 'HEAD' });
          if (response.ok) {
            console.log(`✅ Textures accessibles via le chemin: ${path}`);
            return path;
          }
        } catch (e) {
          console.log(`❌ Échec d'accès via: ${path}`);
        }
      }
      
      console.warn("⚠️ Aucun chemin d'accès aux textures n'a fonctionné!");
      return null;
    };
    
    const workingPath = await checkLocalFiles();
    if (workingPath) {
      // Mettre à jour le chemin principal dans AssetManager
      assetManager.baseUrls.unshift(workingPath);
    }
    
    // Charger les données (capitales, événements, etc.)
    const data = await loadData();
    
    // Initialiser le globe
    const globe = new Globe(container, data);
    await globe.init();
    
    // Commencer l'animation
    globe.animate();
    
    // Masquer l'écran de chargement
    loadingElement.style.opacity = 0;
    setTimeout(() => {
      loadingElement.style.display = 'none';
    }, 500);
    
    // Vérifier le cache final des textures
    textureChecker.checkCachedTextures();
    
    // Ajouter les contrôles d'interface
    setupControls(globe);
    
  } catch (error) {
    console.error("Erreur lors de l'initialisation du globe:", error);
    loadingElement.textContent = "Erreur lors du chargement. Veuillez réessayer.";
  }
});

function setupControls(globe) {
  // Contrôles pour afficher/masquer les éléments célestes
  const sunCheckbox = document.getElementById('show-sun');
  const moonCheckbox = document.getElementById('show-moon');
  const starsCheckbox = document.getElementById('show-stars');
  
  sunCheckbox.addEventListener('change', (e) => {
    if (globe.sun) {
      globe.sun.visible = e.target.checked;
    }
  });
  
  moonCheckbox.addEventListener('change', (e) => {
    if (globe.moon) {
      globe.moon.visible = e.target.checked;
    }
  });
  
  starsCheckbox.addEventListener('change', (e) => {
    if (globe.skybox) {
      globe.skybox.visible = e.target.checked;
    }
  });
}
