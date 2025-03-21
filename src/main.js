import { Globe } from './components/Globe.js';
import { loadData } from './utils/dataLoader.js';
import { textureChecker } from './utils/TextureChecker.js';
import { textureDownloader } from './utils/TextureDownloader.js'; // Import du nouveau module

// Masquer l'écran de chargement une fois que tout est prêt
document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('globe-container');
  const loadingElement = document.getElementById('loading');
  
  try {
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
