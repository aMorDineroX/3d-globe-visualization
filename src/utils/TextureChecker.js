import * as THREE from 'three';
import { assetManager } from './AssetManager.js';

export class TextureChecker {
  constructor() {
    this.textureLoader = new THREE.TextureLoader();
    this.resultsList = [];
    this.totalTextures = 0;
    this.loadedTextures = 0;
    this.failedTextures = 0;
    this.localTextures = [];
    this.proceduralTextures = 0;
  }

  /**
   * Vérifie l'existence et le chargement des textures dans un dossier local
   * Cette méthode utilise la fetch API pour tenter de vérifier les fichiers locaux
   */
  async checkLocalTextures(basePath = './assets/textures/') {
    console.log("🔍 Vérification des textures locales dans:", basePath);
    
    try {
      // Liste des extensions d'image courantes à vérifier
      const extensions = ['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff'];
      
      // Textures communes pour les globes terrestres
      const commonTextureNames = [
        'earth_daymap', 'earth_bumpmap', 'earth_specularmap', 'earth_clouds',
        'earth_nightlights', 'earth-night', '2_no_clouds_4k', 'elev_bump_4k',
        'water_4k', 'fair_clouds_4k', '8k_stars_milky_way', '8k_sun', '8k_moon'
      ];
      
      // Essayez d'abord de lister les fichiers dans le répertoire des textures
      try {
        await this.listLocalFiles(basePath);
      } catch (err) {
        console.warn("Impossible de lister les fichiers du répertoire:", err);
      }
      
      // Vérifier chaque texture commune avec différentes extensions
      for (const textureName of commonTextureNames) {
        let textureLoaded = false;
        
        for (const ext of extensions) {
          const fileName = `${textureName}${ext}`;
          const fullPath = `${basePath}${fileName}`;
          
          try {
            // Vérifier si ce fichier est dans notre liste de textures locales détectées
            const isInLocalList = this.localTextures.includes(fileName);
            
            if (isInLocalList) {
              console.log(`Texture locale détectée: ${fileName}`);
            }
            
            // Essayer de charger via assetManager (priorité aux locales si détectées)
            const texture = await assetManager.loadTexture(fileName, isInLocalList);
            
            // Vérifier si la texture est procédurale
            const isProcedural = texture.isProcedural === true;
            
            this.recordResult(
              fileName, 
              true, 
              isProcedural 
                ? "Texture procédurale générée" 
                : (isInLocalList ? "Chargée depuis le disque local" : "Chargée via AssetManager/CDN")
            );
            
            if (isProcedural) {
              this.proceduralTextures++;
            }
            
            textureLoaded = true;
            break; // Une fois chargée avec succès, pas besoin de tester d'autres extensions
          } catch (error) {
            // Continue avec l'extension suivante
          }
        }
        
        if (!textureLoaded) {
          this.recordResult(`${textureName}.*`, false, "Aucune version trouvée");
        }
      }

      // Rapport final
      console.log("📊 Rapport de vérification des textures:");
      console.log(`Total vérifié: ${this.totalTextures}`);
      console.log(`Chargées avec succès: ${this.loadedTextures}`);
      console.log(`   dont procédurales: ${this.proceduralTextures}`);
      console.log(`Échecs: ${this.failedTextures}`);
      
      // Afficher les détails des textures qui ont réussi
      console.log("✅ Textures chargées:");
      this.resultsList
        .filter(result => result.success)
        .forEach(result => console.log(`  - ${result.name}: ${result.details}`));
      
      // Afficher les détails des textures qui ont échoué
      if (this.failedTextures > 0) {
        console.log("❌ Textures manquantes ou non chargées:");
        this.resultsList
          .filter(result => !result.success)
          .forEach(result => console.log(`  - ${result.name}: ${result.details}`));
      }
      
      // Ajout d'informations sur comment télécharger les textures manquantes
      if (this.failedTextures > 0) {
        console.log("\n🔄 Pour télécharger les textures manquantes, utilisez l'utilitaire TextureDownloader.");
        console.log("   Voir TextureDownloader.js pour plus d'informations.");
      }
      
      return {
        success: this.failedTextures === 0,
        total: this.totalTextures,
        loaded: this.loadedTextures,
        procedural: this.proceduralTextures,
        failed: this.failedTextures,
        details: this.resultsList,
        localTextures: this.localTextures
      };
    } catch (error) {
      console.error("Erreur lors de la vérification des textures:", error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Liste les fichiers dans le répertoire des textures
   */
  async listLocalFiles(basePath) {
    try {
      // Cette méthode tente de lister les fichiers dans le répertoire des textures
      // en utilisant une approche simple: essayer de charger un fichier spécial 'directory.json'
      // qui contiendrait la liste des fichiers, ou à défaut, tester les fichiers individuellement
      
      console.log("Recherche de fichiers locaux...");
      
      // Essayer d'abord de charger un fichier directory.json qui pourrait exister
      try {
        const response = await fetch(`${basePath}directory.json`);
        if (response.ok) {
          const data = await response.json();
          this.localTextures = data.files || [];
          console.log(`${this.localTextures.length} fichiers trouvés dans directory.json`);
          return;
        }
      } catch (e) {
        // Pas de directory.json, continuons avec des méthodes alternatives
      }
      
      // Méthode manuelle: vérifier l'existence de quelques fichiers de texture courants
      const testFiles = [
        'earth_daymap.jpg', '2_no_clouds_4k.jpg', 'earth_clouds.png',
        'elev_bump_4k.jpg', 'earth_nightlights_8k.jpg',
        '8k_stars_milky_way.jpg', '8k_sun.jpg', '8k_moon.jpg'
      ];
      
      this.localTextures = [];
      
      for (const file of testFiles) {
        try {
          const response = await fetch(`${basePath}${file}`, { method: 'HEAD' });
          if (response.ok) {
            this.localTextures.push(file);
            console.log(`Fichier local détecté: ${file}`);
          }
        } catch (e) {
          // Ignorer les erreurs, ce fichier n'existe probablement pas
        }
      }
      
      console.log(`${this.localTextures.length} fichiers trouvés localement`);
    } catch (error) {
      console.error("Échec de la liste des fichiers locaux:", error);
      throw error;
    }
  }

  /**
   * Enregistre le résultat de la vérification d'une texture
   */
  recordResult(name, success, details) {
    this.totalTextures++;
    if (success) {
      this.loadedTextures++;
    } else {
      this.failedTextures++;
    }
    
    this.resultsList.push({
      name,
      success,
      details
    });
  }

  /**
   * Vérifie les textures actuellement chargées dans le cache de l'AssetManager
   */
  checkCachedTextures() {
    console.log("🔍 Vérification des textures en cache dans l'AssetManager:");
    
    const cache = assetManager.getTextureCache();
    const cachedTextures = Array.from(cache.keys());
    
    console.log(`Nombre de textures en cache: ${cachedTextures.length}`);
    if (cachedTextures.length > 0) {
      console.log("Textures en cache:");
      cachedTextures.forEach(name => {
        const source = cache.get(name).source;
        const isProcedurale = source && source.data instanceof HTMLCanvasElement;
        console.log(`  - ${name}${isProcedurale ? ' (procédurale)' : ''}`);
      });
    } else {
      console.log("Aucune texture n'est actuellement en cache.");
    }
    
    return cachedTextures;
  }

  /**
   * Ajoute une interface utilisateur pour diagnostiquer les problèmes de texture
   */
  createDiagnosticUI() {
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.bottom = '100px';
    container.style.right = '20px';
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    container.style.color = 'white';
    container.style.padding = '15px';
    container.style.borderRadius = '5px';
    container.style.maxWidth = '300px';
    container.style.maxHeight = '400px';
    container.style.overflowY = 'auto';
    container.style.zIndex = '1000';
    container.style.fontFamily = 'monospace';
    container.style.fontSize = '12px';
    container.style.display = 'none';
    container.id = 'texture-diagnostic';
    
    const title = document.createElement('h3');
    title.textContent = '🖼️ Diagnostic des textures';
    title.style.margin = '0 0 10px 0';
    container.appendChild(title);
    
    const content = document.createElement('div');
    content.id = 'texture-diagnostic-content';
    container.appendChild(content);
    
    const button = document.createElement('button');
    button.textContent = 'Rafraîchir';
    button.style.marginTop = '10px';
    button.style.padding = '5px 10px';
    button.style.cursor = 'pointer';
    button.addEventListener('click', () => this.updateDiagnosticUI());
    container.appendChild(button);
    
    // Bouton pour ouvrir/fermer le panneau de diagnostic
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '🖼️';
    toggleButton.style.position = 'absolute';
    toggleButton.style.bottom = '20px';
    toggleButton.style.right = '20px';
    toggleButton.style.width = '40px';
    toggleButton.style.height = '40px';
    toggleButton.style.borderRadius = '50%';
    toggleButton.style.fontSize = '20px';
    toggleButton.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    toggleButton.style.color = 'white';
    toggleButton.style.border = 'none';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.zIndex = '1001';
    
    toggleButton.addEventListener('click', () => {
      if (container.style.display === 'none') {
        container.style.display = 'block';
        this.updateDiagnosticUI();
      } else {
        container.style.display = 'none';
      }
    });
    
    document.body.appendChild(container);
    document.body.appendChild(toggleButton);
  }
  
  /**
   * Met à jour le contenu de l'interface de diagnostic
   */
  updateDiagnosticUI() {
    const content = document.getElementById('texture-diagnostic-content');
    if (!content) return;
    
    // Vider le contenu actuel
    content.innerHTML = '';
    
    // Obtenir les textures en cache
    const cache = assetManager.getTextureCache();
    const cachedTextures = Array.from(cache.keys());
    
    // Compter les textures procédurales
    const proceduralCount = Array.from(cache.values())
      .filter(texture => texture.isProcedural).length;
    
    // Créer une liste des textures
    const list = document.createElement('ul');
    list.style.paddingLeft = '20px';
    list.style.margin = '0';
    
    if (cachedTextures.length === 0) {
      const item = document.createElement('li');
      item.textContent = 'Aucune texture en cache';
      list.appendChild(item);
    } else {
      cachedTextures.forEach(name => {
        const texture = cache.get(name);
        const isProcedural = texture.isProcedural === true;
        
        const item = document.createElement('li');
        item.textContent = `${name}${isProcedural ? ' (procédurale)' : ''}`;
        item.style.color = isProcedural ? 'orange' : 'lightgreen';
        list.appendChild(item);
      });
    }
    
    content.appendChild(list);
    
    // Ajouter un résumé
    const summary = document.createElement('p');
    summary.innerHTML = `Total: ${cachedTextures.length} texture(s)<br>
                        Procédurales: ${proceduralCount}<br>
                        Locales/CDN: ${cachedTextures.length - proceduralCount}`;
    content.appendChild(summary);
    
    // Ajouter des suggestions si beaucoup de textures sont procédurales
    if (proceduralCount > 3) {
      const suggestions = document.createElement('div');
      suggestions.style.marginTop = '10px';
      suggestions.style.padding = '10px';
      suggestions.style.backgroundColor = 'rgba(255, 200, 50, 0.2)';
      suggestions.style.borderRadius = '5px';
      
      suggestions.innerHTML = `
        <strong>⚠️ Nombreuses textures procédurales</strong>
        <p>Pour améliorer la qualité visuelle, téléchargez les textures manquantes 
        avec l'utilitaire de téléchargement (📥).</p>
      `;
      
      content.appendChild(suggestions);
    }
  }
}

// Export d'une instance pour utilisation simple
export const textureChecker = new TextureChecker();

// Ajouter l'interface de diagnostic au chargement du DOM
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    textureChecker.createDiagnosticUI();
  });
}
