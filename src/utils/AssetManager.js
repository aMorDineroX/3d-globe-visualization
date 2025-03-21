import * as THREE from 'three';
import { corsProxyHelper } from './CorsProxyHelper.js';

export class AssetManager {
  constructor() {
    this.textureLoader = new THREE.TextureLoader();
    this.cache = new Map();
    
    // Chemins locaux à essayer en premier
    this.baseUrls = [
      './assets/textures/',
      '/assets/textures/',
      '/',
      '../assets/textures/'
    ];
    
    // URLs de secours en ligne pour les textures courantes
    this.cdnTextures = {
      // Textures alternatives pour la Terre - sources multiples pour redondance
      '2_no_clouds_4k.jpg': [
        'https://raw.githubusercontent.com/turban/webgl-earth/master/images/2_no_clouds_4k.jpg',
        'https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73909/world.topo.bathy.200412.3x5400x2700.jpg'
      ],
      'earth_daymap.jpg': [
        'https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73909/world.topo.bathy.200412.3x5400x2700.jpg',
        'https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/earth.jpg'
      ],
      'elev_bump_4k.jpg': [
        'https://raw.githubusercontent.com/turban/webgl-earth/master/images/elev_bump_4k.jpg',
        'https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/bump.jpg'
      ],
      'earth_bumpmap.jpg': [
        'https://svs.gsfc.nasa.gov/vis/a000000/a002900/a002915/bluemarble-2048.jpg',
        'https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/bump.jpg'
      ],
      'water_4k.png': [
        'https://raw.githubusercontent.com/turban/webgl-earth/master/images/water_4k.png',
        'https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/clouds.png'
      ],
      'fair_clouds_4k.png': [
        'https://raw.githubusercontent.com/turban/webgl-earth/master/images/fair_clouds_4k.png',
        'https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/clouds.png'
      ],
      'earth_clouds.png': [
        'https://svs.gsfc.nasa.gov/vis/a000000/a004700/a004770/clouds_8192.png',
        'https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/clouds.png'
      ],
      
      // CORS-friendly alternatives for night lights
      'earth_nightlights_8k.jpg': [
        'https://raw.githubusercontent.com/turban/webgl-earth/master/images/earth-night.jpg',
        'https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/night.jpg'
      ],
      'earth-night.jpg': [
        'https://raw.githubusercontent.com/turban/webgl-earth/master/images/earth-night.jpg',
        'https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/night.jpg'
      ],
      'night_lights.jpg': [
        'https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/night.jpg',
        'https://raw.githubusercontent.com/turban/webgl-earth/master/images/earth-night.jpg'
      ],
      
      // Other textures
      '8k_stars_milky_way.jpg': [
        'https://raw.githubusercontent.com/shaders/webgl-globe/master/textures/starfield.png',
        'https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/star.jpg'
      ],
      '8k_sun.jpg': [
        'https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/sun.jpg'
      ],
      '8k_moon.jpg': [
        'https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/moon.jpg'
      ]
    };
    
    // Textures météo
    this.cdnTextures['weather-sunny.png'] = ['https://cdn-icons-png.flaticon.com/512/6974/6974833.png'];
    this.cdnTextures['weather-cloudy.png'] = ['https://cdn-icons-png.flaticon.com/512/6974/6974847.png'];
    this.cdnTextures['weather-rainy.png'] = ['https://cdn-icons-png.flaticon.com/512/6974/6974848.png'];
    this.cdnTextures['weather-snowy.png'] = ['https://cdn-icons-png.flaticon.com/512/6974/6974851.png'];
    this.cdnTextures['weather-thunder.png'] = ['https://cdn-icons-png.flaticon.com/512/6974/6974857.png'];
    
    // Nombre maximal de tentatives de chargement par texture
    this.maxLoadAttempts = 3;
    
    // Préférer les textures procédurales pour éviter les problèmes CORS
    this.preferProceduralFallbacks = true;
  }

  async loadTexture(name, preferLocal = false) {
    // Check if texture is already cached
    if (this.cache.has(name)) {
      return this.cache.get(name);
    }

    console.log(`Tentative de chargement de la texture: ${name} (priorité ${preferLocal ? 'locale' : 'CDN'})`);
    
    // Déterminer si on devrait utiliser directement une texture procédurale
    if (this.preferProceduralFallbacks) {
      // Créer une texture procédurale immédiatement pour éviter les délais de timeout
      const fallbackTexture = this.createFallbackTexture(name);
      
      // Pour les textures non critiques, on peut retourner directement la texture procédurale
      const nonCriticalTextures = ['water_4k.png', 'weather-'];
      if (nonCriticalTextures.some(pattern => name.includes(pattern))) {
        console.log(`Utilisation directe d'une texture procédurale pour ${name}`);
        this.cache.set(name, fallbackTexture);
        // Continuer à charger en arrière-plan pour les prochaines utilisations
        this._tryLoadTextureInBackground(name, preferLocal);
        return fallbackTexture;
      }
    }
    
    // Special handling for night lights texture
    if (name === 'earth_nightlights_8k.jpg') {
      try {
        // Try each of these alternatives in sequence
        const nightLightOptions = [
          'earth_nightlights_8k.jpg',
          'earth-night.jpg',
          'night_lights.jpg'
        ];
        
        for (const option of nightLightOptions) {
          if (this.cdnTextures[option]) {
            try {
              console.log(`Essai de chargement de texture nuit depuis: ${option}`);
              const texture = await this._loadTextureFromAnySource(option, true);
              this.cache.set(name, texture);
              console.log(`Texture de nuit chargée depuis: ${option}`);
              return texture;
            } catch (e) {
              console.warn(`Échec du chargement de la texture nuit depuis: ${option}`, e);
            }
          }
        }
        // If we get here, all alternatives failed
        throw new Error("Impossible de charger une texture de nuit");
      } catch (error) {
        console.warn("Tous les essais pour les textures de nuit ont échoué. Créant une texture procédurale.");
        const fallbackTexture = this.createFallbackTexture(name);
        this.cache.set(name, fallbackTexture);
        return fallbackTexture;
      }
    }
    
    try {
      // Essayer de charger la texture depuis n'importe quelle source disponible
      const texture = await this._loadTextureFromAnySource(name, preferLocal);
      this.cache.set(name, texture);
      return texture;
    } catch (error) {
      console.warn(`Échec du chargement de la texture ${name}. Création d'une texture procédurale.`, error);
      
      // If all attempts fail, create a procedural texture as last resort
      const fallbackTexture = this.createFallbackTexture(name);
      this.cache.set(name, fallbackTexture);
      return fallbackTexture;
    }
  }
  
  // Nouvelle méthode pour tenter le chargement depuis toutes les sources possibles
  async _loadTextureFromAnySource(name, preferLocal) {
    // Tableau pour stocker toutes les erreurs rencontrées
    const errors = [];
    
    // Si preferLocal est vrai, essayer d'abord les chemins locaux
    if (preferLocal) {
      for (const baseUrl of this.baseUrls) {
        try {
          const url = `${baseUrl}${name}`;
          console.log(`Essai de chargement local prioritaire: ${url}`);
          const texture = await this._loadTexturePromise(url);
          console.log(`Texture chargée localement depuis: ${url}`);
          return texture;
        } catch (error) {
          errors.push(`Échec du chargement local depuis ${baseUrl}${name}: ${error.message}`);
        }
      }
    }
    
    // Essayer de charger depuis les CDN si disponibles
    if (this.cdnTextures[name]) {
      const cdnUrls = Array.isArray(this.cdnTextures[name]) 
        ? this.cdnTextures[name] 
        : [this.cdnTextures[name]];
      
      for (const cdnUrl of cdnUrls) {
        try {
          console.log(`Essai de chargement depuis CDN: ${cdnUrl}`);
          const texture = await this._loadTexturePromise(cdnUrl);
          console.log(`Texture chargée depuis CDN: ${cdnUrl}`);
          return texture;
        } catch (error) {
          errors.push(`Échec du chargement depuis CDN (${cdnUrl}): ${error.message}`);
        }
      }
    }
    
    // Si preferLocal est faux, essayer les chemins locaux après le CDN
    if (!preferLocal) {
      for (const baseUrl of this.baseUrls) {
        try {
          const url = `${baseUrl}${name}`;
          console.log(`Essai de chargement local: ${url}`);
          const texture = await this._loadTexturePromise(url);
          console.log(`Texture chargée depuis: ${url}`);
          return texture;
        } catch (error) {
          errors.push(`Échec du chargement depuis ${baseUrl}${name}: ${error.message}`);
        }
      }
    }
    
    // Si toutes les tentatives échouent, lancer une erreur avec le détail des erreurs
    throw new Error(`Impossible de charger la texture ${name} depuis aucune source: ${errors.join('; ')}`);
  }
  
  // Méthode pour charger une texture en arrière-plan sans bloquer l'interface
  _tryLoadTextureInBackground(name, preferLocal) {
    this._loadTextureFromAnySource(name, preferLocal)
      .then(texture => {
        this.cache.set(name, texture);
        console.log(`Texture ${name} chargée en arrière-plan avec succès`);
      })
      .catch(error => {
        console.warn(`Échec du chargement en arrière-plan de ${name}`, error);
      });
  }

  // Enhanced error handling for texture loading
  _loadTexturePromise(url) {
    return new Promise((resolve, reject) => {
      console.log(`Démarrage du chargement de texture depuis: ${url}`);
      
      // Vérifier si un proxy CORS est nécessaire
      const needsProxy = corsProxyHelper.needsProxy(url);
      let finalUrl = url;
      
      if (needsProxy) {
        finalUrl = corsProxyHelper.applyProxy(url);
        console.log(`Utilisation de proxy CORS pour: ${url}`);
      }
      
      // Add a timeout to detect hanging requests
      const timeoutId = setTimeout(() => {
        reject(new Error(`Délai d'attente dépassé pour le chargement de: ${url}`));
      }, 10000); // 10 seconds timeout
      
      this.textureLoader.load(
        finalUrl,
        texture => {
          clearTimeout(timeoutId);
          console.log(`Chargement réussi de: ${url}`);
          texture.url = url; // Stocker l'URL d'origine pour référence
          resolve(texture);
        },
        // Progress callback
        progress => {
          if (progress.lengthComputable) {
            const percentComplete = (progress.loaded / progress.total) * 100;
            console.log(`Chargement de texture: ${percentComplete.toFixed(1)}% - ${url}`);
          }
        },
        error => {
          clearTimeout(timeoutId);
          console.warn(`Erreur de chargement pour: ${finalUrl}`, error);
          
          // Si l'erreur est survenue avec un proxy, essayer un autre proxy
          if (needsProxy) {
            corsProxyHelper.rotateProxy();
            console.log(`Tentative avec un autre proxy pour: ${url}`);
            this._loadTexturePromise(url)
              .then(resolve)
              .catch(reject);
          } else {
            reject(error);
          }
        }
      );
    });
  }
  
  createFallbackTexture(name) {
    // Créer une texture procédurale de secours basée sur le type de texture demandé
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    // Couleur de base en fonction du type de texture
    if (name.includes('earth') || name.includes('no_clouds')) {
      // Earth texture (bleu/vert)
      ctx.fillStyle = '#1A4077';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Dessiner quelques continents approximatifs
      ctx.fillStyle = '#2D6822';
      
      // Amélioration pour dessiner des continents plus réalistes
      const continents = [
        {x: 256, y: 150, width: 180, height: 100}, // Amérique du Nord
        {x: 280, y: 260, width: 100, height: 120}, // Amérique du Sud
        {x: 450, y: 170, width: 120, height: 100}, // Europe/Afrique
        {x: 50, y: 190, width: 200, height: 100}, // Asie
        {x: 100, y: 320, width: 80, height: 60}  // Australie
      ];
      
      continents.forEach(c => {
        ctx.beginPath();
        ctx.ellipse(c.x, c.y, c.width/2, c.height/2, 0, 0, Math.PI * 2);
        ctx.fill();
      });
    } else if (name.includes('nightlights')) {
      // Night lights texture (noir avec points lumineux)
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Dessiner les continents avec des points lumineux
      const continents = [
        {x: 256, y: 150, width: 180, height: 100, density: 40}, // Amérique du Nord
        {x: 280, y: 260, width: 100, height: 120, density: 30}, // Amérique du Sud
        {x: 450, y: 170, width: 120, height: 100, density: 50}, // Europe/Afrique
        {x: 50, y: 190, width: 200, height: 100, density: 60}, // Asie
        {x: 100, y: 320, width: 80, height: 60, density: 20}  // Australie
      ];
      
      // Fonction pour vérifier si un point est dans une ellipse
      const isInEllipse = (x, y, ellipse) => {
        const dx = (x - ellipse.x) / (ellipse.width/2);
        const dy = (y - ellipse.y) / (ellipse.height/2);
        return (dx*dx + dy*dy) <= 1;
      };
      
      ctx.fillStyle = '#FFFF88';
      
      // Dessiner des points lumineux concentrés sur les continents
      continents.forEach(continent => {
        const pointCount = continent.density * 5;
        for (let i = 0; i < pointCount; i++) {
          // Ajouter un peu de variation autour du centre du continent
          const variance = 0.8; // 80% de la taille pour rester principalement dans l'ellipse
          const x = continent.x + (Math.random() - 0.5) * continent.width * variance;
          const y = continent.y + (Math.random() - 0.5) * continent.height * variance;
          
          if (isInEllipse(x, y, continent)) {
            const size = Math.random() * 1.5 + 0.5;
            const brightness = Math.random() * 0.7 + 0.3;
            ctx.globalAlpha = brightness;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });
      
      // Réinitialiser l'alpha
      ctx.globalAlpha = 1.0;
      
    } else if (name.includes('bump') || name.includes('elev')) {
      // Bump/height map (relief en niveaux de gris)
      ctx.fillStyle = '#777777';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Créer un effet de relief aléatoire
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // Générer des montagnes et des vallées
      for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
          const i = (y * canvas.width + x) * 4;
          
          // Utiliser un bruit de Perlin simplifié pour un relief plus naturel
          const noise = Math.sin(x * 0.01) * Math.cos(y * 0.01) * 20 + 
                       Math.sin(x * 0.02 + y * 0.01) * 15 + 
                       Math.cos(x * 0.01 + y * 0.02) * 10;
          
          const value = 127 + noise;
          data[i] = data[i+1] = data[i+2] = value;
          data[i+3] = 255; // Alpha
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      
    } else if (name.includes('clouds')) {
      // Cloud texture (blanc transparent)
      ctx.fillStyle = 'rgba(255, 255, 255, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Créer des nuages plus réalistes
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 60 + 20;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (name.includes('stars') || name.includes('milky_way')) {
      // Stars texture (noir avec étoiles)
      ctx.fillStyle = '#000010';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Ajouter des étoiles plus réalistes
      for (let i = 0; i < 1500; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 1.5 + 0.5;
        const brightness = Math.random() * 0.5 + 0.5;
        
        // Couleurs d'étoiles variées
        const colors = [
          `rgba(255, 255, 255, ${brightness})`, // Blanc
          `rgba(255, 240, 220, ${brightness})`, // Jaune chaud
          `rgba(220, 240, 255, ${brightness})`, // Bleu clair
          `rgba(255, 220, 220, ${brightness})`, // Rouge pâle
        ];
        
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Ajouter des éclats pour certaines étoiles
        if (Math.random() > 0.8) {
          const glow = ctx.createRadialGradient(x, y, 0, x, y, size * 4);
          glow.addColorStop(0, `rgba(255, 255, 255, ${brightness * 0.5})`);
          glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(x, y, size * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Ajouter une nébuleuse pour simuler la voie lactée
      const nebulaGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      nebulaGradient.addColorStop(0, 'rgba(75, 50, 120, 0)');
      nebulaGradient.addColorStop(0.5, 'rgba(75, 50, 120, 0.1)');
      nebulaGradient.addColorStop(1, 'rgba(75, 50, 120, 0)');
      
      ctx.fillStyle = nebulaGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
    } else if (name.includes('sun')) {
      // Sun texture (gradient jaune-rouge)
      const gradient = ctx.createRadialGradient(
        canvas.width/2, canvas.height/2, 0,
        canvas.width/2, canvas.height/2, canvas.width/2
      );
      gradient.addColorStop(0, '#FFFFCC');
      gradient.addColorStop(0.2, '#FFFF88');
      gradient.addColorStop(0.4, '#FFDD44');
      gradient.addColorStop(0.7, '#FF8800');
      gradient.addColorStop(1, '#FF4400');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Ajouter des détails de surface (activité solaire)
      for (let i = 0; i < 15; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * canvas.width * 0.4;
        const x = canvas.width/2 + Math.cos(angle) * distance;
        const y = canvas.height/2 + Math.sin(angle) * distance;
        
        const spotGradient = ctx.createRadialGradient(x, y, 0, x, y, 20 + Math.random() * 30);
        spotGradient.addColorStop(0, 'rgba(255, 200, 50, 0.7)');
        spotGradient.addColorStop(1, 'rgba(255, 100, 0, 0)');
        
        ctx.fillStyle = spotGradient;
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, Math.PI * 2);
        ctx.fill();
      }
      
    } else if (name.includes('moon')) {
      // Moon texture (gris avec cratères)
      ctx.fillStyle = '#CCCCCC';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Ajouter des variations de terrain
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
          const i = (y * canvas.width + x) * 4;
          
          // Variation légère de couleur pour la surface
          const noise = Math.sin(x * 0.05) * Math.cos(y * 0.05) * 10 + 
                       Math.sin(x * 0.1 + y * 0.05) * 5 + 
                       Math.cos(x * 0.05 + y * 0.1) * 8;
          
          const value = 204 + noise;
          data[i] = data[i+1] = data[i+2] = value;
          data[i+3] = 255; // Alpha
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      
      // Ajouter des cratères
      for (let i = 0; i < 40; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 30 + 5;
        
        // Bordure du cratère (plus claire)
        ctx.fillStyle = '#DDDDDD';
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Intérieur du cratère (plus sombre)
        ctx.fillStyle = '#999999';
        ctx.beginPath();
        ctx.arc(x, y, size * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }
      
    } else if (name.includes('weather')) {
      // Icônes météo simplifiées
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Rendre l'arrière-plan transparent
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (name.includes('sunny')) {
        // Soleil
        ctx.fillStyle = '#FFDD00';
        ctx.beginPath();
        ctx.arc(canvas.width/2, canvas.height/2, 80, 0, Math.PI * 2);
        ctx.fill();
        
        // Rayons
        ctx.strokeStyle = '#FFDD00';
        ctx.lineWidth = 8;
        for (let i = 0; i < 12; i++) {
          const angle = (i / 12) * Math.PI * 2;
          const startRadius = 90;
          const endRadius = 120;
          
          ctx.beginPath();
          ctx.moveTo(
            canvas.width/2 + Math.cos(angle) * startRadius, 
            canvas.height/2 + Math.sin(angle) * startRadius
          );
          ctx.lineTo(
            canvas.width/2 + Math.cos(angle) * endRadius, 
            canvas.height/2 + Math.sin(angle) * endRadius
          );
          ctx.stroke();
        }
        
      } else if (name.includes('cloudy')) {
        // Nuages
        const drawCloud = (x, y, scale = 1) => {
          ctx.fillStyle = '#DDDDDD';
          ctx.beginPath();
          ctx.arc(x - 25 * scale, y, 35 * scale, Math.PI * 0.5, Math.PI * 1.5);
          ctx.arc(x + 25 * scale, y - 15 * scale, 40 * scale, Math.PI * 1, Math.PI * 2);
          ctx.arc(x + 75 * scale, y, 35 * scale, Math.PI * 0.5, Math.PI * 1.5, true);
          ctx.arc(x + 25 * scale, y + 15 * scale, 40 * scale, 0, Math.PI * 1);
          ctx.fill();
        };
        
        drawCloud(canvas.width/2 - 20, canvas.height/2 - 20, 1.5);
        drawCloud(canvas.width/2 + 50, canvas.height/2 + 30, 1.2);
        
      } else if (name.includes('rainy')) {
        // Nuages avec pluie
        ctx.fillStyle = '#AAAAAA';
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 - 50, 100, 60, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Gouttes de pluie
        ctx.strokeStyle = '#4444FF';
        ctx.lineWidth = 5;
        for (let i = 0; i < 10; i++) {
          const x = canvas.width/2 - 80 + i * 20;
          const startY = canvas.height/2;
          
          ctx.beginPath();
          ctx.moveTo(x, startY);
          ctx.lineTo(x - 10, startY + 60);
          ctx.stroke();
        }
        
      } else if (name.includes('snowy')) {
        // Nuages avec neige
        ctx.fillStyle = '#AAAAAA';
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 - 50, 100, 60, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Flocons de neige
        ctx.fillStyle = '#FFFFFF';
        for (let i = 0; i < 20; i++) {
          const x = canvas.width/2 - 100 + i * 15;
          const y = canvas.height/2 + 20 + (i % 3) * 25;
          
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fill();
          
          // Branches du flocon
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 2;
          for (let j = 0; j < 6; j++) {
            const angle = (j / 6) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(
              x + Math.cos(angle) * 10,
              y + Math.sin(angle) * 10
            );
            ctx.stroke();
          }
        }
        
      } else if (name.includes('thunder')) {
        // Nuage avec éclair
        ctx.fillStyle = '#555555';
        ctx.beginPath();
        ctx.ellipse(canvas.width/2, canvas.height/2 - 50, 120, 70, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Éclair
        ctx.fillStyle = '#FFFF00';
        ctx.beginPath();
        ctx.moveTo(canvas.width/2 - 20, canvas.height/2 - 20);
        ctx.lineTo(canvas.width/2 + 30, canvas.height/2 + 30);
        ctx.lineTo(canvas.width/2, canvas.height/2 + 40);
        ctx.lineTo(canvas.width/2 + 50, canvas.height/2 + 100);
        ctx.lineTo(canvas.width/2 - 30, canvas.height/2 + 60);
        ctx.lineTo(canvas.width/2, canvas.height/2 + 50);
        ctx.lineTo(canvas.width/2 - 40, canvas.height/2);
        ctx.closePath();
        ctx.fill();
      }
      
    } else {
      // Texture générique (damier)
      const tileSize = 64;
      for (let y = 0; y < canvas.height; y += tileSize) {
        for (let x = 0; x < canvas.width; x += tileSize) {
          ctx.fillStyle = (x + y) % (tileSize * 2) === 0 ? '#BBBBBB' : '#888888';
          ctx.fillRect(x, y, tileSize, tileSize);
        }
      }
      
      // Ajouter le nom de la texture manquante
      ctx.fillStyle = '#FF0000';
      ctx.font = '24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(`Missing: ${name}`, canvas.width/2, canvas.height/2);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    
    // Indiquer que c'est une texture procédurale
    texture.isProcedural = true;
    texture.name = `procedural_${name}`;
    
    return texture;
  }
  
  /**
   * Retourne le cache de textures pour inspection
   */
  getTextureCache() {
    return this.cache;
  }
}

// Singleton instance
export const assetManager = new AssetManager();
