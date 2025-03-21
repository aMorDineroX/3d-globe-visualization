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
      
      // Essayer de lister les fichiers dans le répertoire des textures
      try {
        await this.listLocalFiles(basePath);
      } catch (err) {
        console.warn("Impossible de lister les fichiers du répertoire, passage en mode vérification directe");
      }
      
      // Vérifier chaque texture commune avec différentes extensions
      const texturePromises = commonTextureNames.map(async (textureName) => {
        for (const ext of extensions) {
          const fileName = `${textureName}${ext}`;
          
          try {
            // Vérifier d'abord si le fichier existe localement avec un HEAD request
            const response = await fetch(`${basePath}${fileName}`, { method: 'HEAD' });
            if (response.ok) {
              if (!this.localTextures.includes(fileName)) {
                this.localTextures.push(fileName);
              }
              console.log(`✅ Texture trouvée: ${fileName}`);
              return true;
            }
          } catch (error) {
            // Ignorer les erreurs de réseau et continuer
            continue;
          }
        }
        return false;
      });
      
      // Attendre que toutes les vérifications soient terminées
      await Promise.all(texturePromises);
      
      // Vérifier les textures requises
      const requiredGroups = [
        ['earth_daymap.jpg', '2_no_clouds_4k.jpg'],
        ['earth_clouds.png', 'fair_clouds_4k.png'],
        ['earth_bumpmap.jpg', 'elev_bump_4k.jpg']
      ];
      
      const missingRequired = requiredGroups.filter(group => 
        !group.some(texture => this.localTextures.includes(texture))
      );
      
      if (missingRequired.length > 0) {
        console.warn("⚠️ Textures requises manquantes:");
        missingRequired.forEach(group => {
          console.warn(`  - ${group.join(' OU ')}`);
        });
      }
      
      return {
        success: missingRequired.length === 0,
        total: this.localTextures.length,
        missing: missingRequired,
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
    const customOrder = (fileName) => {
      // Donner une priorité plus élevée aux fichiers JPG
      if (fileName.endsWith('.jpg')) return 1;
      if (fileName.endsWith('.png')) return 2;
      if (fileName.endsWith('.tif')) return 3;
      return 4;
    };
    
    try {
      console.log("Recherche de fichiers locaux...");
      
      const textureStatus = {
        required: [],
        optional: [],
        found: [],
        missing: []
      };

      // Définir les textures requises et optionnelles avec leurs alternatives
      const requiredTextures = [
        ['earth_daymap.jpg', '2_no_clouds_4k.jpg'],  // Au moins une des deux est requise
        ['earth_clouds.png', 'fair_clouds_4k.png'],   // Au moins une des deux est requise
        ['earth_bumpmap.jpg', 'elev_bump_4k.jpg']    // Au moins une des deux est requise
      ];

      const optionalTextures = [
        ['earth_nightlights_8k.jpg', 'earth-night.jpg', 'night_lights.jpg'],
        ['8k_stars_milky_way.jpg'],
        ['8k_sun.jpg'],
        ['8k_moon.jpg'],
        ['earth_specularmap.jpg'],
        ['water_4k.png']
      ];

      // Vérifier d'abord directory.json
      try {
        const response = await fetch(`${basePath}directory.json`);
        if (response.ok) {
          const data = await response.json();
          this.localTextures = data.files || [];
          console.log(`📁 ${this.localTextures.length} fichiers listés dans directory.json`);
          return;
        }
      } catch (e) {
        console.log("❌ Pas de directory.json trouvé, vérification manuelle...");
      }

      // Vérifier les textures requises (avec leurs alternatives)
      for (const textureGroup of requiredTextures) {
        let foundInGroup = false;
        for (const texture of textureGroup) {
          try {
            const response = await fetch(`${basePath}${texture}`, { method: 'HEAD' });
            if (response.ok) {
              this.localTextures.push(texture);
              textureStatus.found.push(texture);
              foundInGroup = true;
              console.log(`✅ Texture requise trouvée: ${texture}`);
              break; // On arrête dès qu'on trouve une alternative valide
            }
          } catch (e) {
            continue;
          }
        }
        if (!foundInGroup) {
          textureStatus.missing.push(textureGroup[0]);
          console.log(`❌ Groupe de textures requises manquant: ${textureGroup.join(' ou ')}`);
        }
      }

      // Vérifier les textures optionnelles
      for (const textureGroup of optionalTextures) {
        let foundInGroup = false;
        for (const texture of textureGroup) {
          try {
            const response = await fetch(`${basePath}${texture}`, { method: 'HEAD' });
            if (response.ok) {
              this.localTextures.push(texture);
              textureStatus.found.push(texture);
              foundInGroup = true;
              console.log(`✅ Texture optionnelle trouvée: ${texture}`);
              break;
            }
          } catch (e) {
            continue;
          }
        }
        if (!foundInGroup && textureGroup.length > 0) {
          console.log(`ℹ️ Texture optionnelle non trouvée: ${textureGroup[0]}`);
        }
      }

      // Sort files to prioritize JPG versions
      this.localTextures.sort((a, b) => {
        return customOrder(a) - customOrder(b);
      });

      // Rapport final
      const missingRequired = textureStatus.missing.filter(t => 
        requiredTextures.some(group => group.includes(t))
      );

      console.log("\n📊 Rapport des textures:");
      console.log(`Trouvées: ${textureStatus.found.length}`);
      console.log(`Textures requises: ${requiredTextures.length - missingRequired.length}/${requiredTextures.length}`);

      if (missingRequired.length > 0) {
        console.warn("\n⚠️ Groupes de textures requises manquants:");
        requiredTextures.forEach(group => {
          if (!group.some(t => textureStatus.found.includes(t))) {
            console.warn(`  - ${group.join(' OU ')}`);
          }
        });
        console.warn("\n💡 Consultez assets/textures/README.md pour les instructions de téléchargement");
      }

      return textureStatus;
    } catch (error) {
      console.error("Erreur fatale lors de la vérification des textures:", error);
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

  checkRequiredTextures() {
    const requiredGroups = [
      { name: 'Earth Daytime', files: ['earth_daymap.jpg', '2_no_clouds_4k.jpg'] },
      { name: 'Earth Clouds', files: ['earth_clouds.jpg', 'earth_clouds.png', 'fair_clouds_4k.png', 'fair_clouds_4k.jpg', 'cloud_combined_2048.jpg'] },
      { name: 'Earth Bump Map', files: ['earth_bumpmap.jpg', 'elev_bump_4k.jpg'] }
    ];
    
    // ...continue with existing logic...
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
