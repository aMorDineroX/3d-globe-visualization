import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { gsap } from 'gsap';
import { geoToCartesian } from '../utils/helpers.js';
import { createMarker, createTooltip } from './Markers.js';
import { assetManager } from '../utils/AssetManager.js';
import { WeatherService } from '../services/WeatherService.js';
import { FlightService } from '../services/FlightService.js';
import { createWeatherMarker } from './WeatherMarker.js';
import { createFlightMarker } from './FlightMarker.js';
import { textureChecker } from '../utils/TextureChecker.js';

export class Globe {
  constructor(container, data) {
    this.container = container;
    this.data = data;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.globe = null;
    this.atmosphere = null;
    this.markers = [];
    this.hoverMarker = null;
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.radius = 5;
    this.isInitialized = false;
    this.tooltipElement = null;
    this.sun = null;
    this.moon = null;
    this.moonOrbitRadius = 25;
    this.moonOrbitSpeed = 0.002;
    this.moonRotation = 0;
    this.skybox = null;
    this.timeOfDay = 12; // Heure du jour (0-24)
    this.dayNightMix = 0; // Mélange jour/nuit (0 = jour, 1 = nuit)
    this.nightLights = null; // Texture des lumières de nuit

    // Services pour les données en temps réel - API keys mis à jour
    this.weatherService = new WeatherService(); // Utilise la clé par défaut dans le service
    this.flightService = new FlightService(); // Utilise les données mock par défaut
    
    // Option de configuration pour résoudre les problèmes CORS
    this.textureLoadRetries = 3; // Nombre de tentatives pour charger les textures
    
    // Support pour différentes extensions de textures
    this.textureExtensions = {
      clouds: ['jpg', 'png'],  // Priorité JPG car earth_clouds.jpg existe
      earth: ['jpg', 'png'],
      bump: ['jpg', 'png'],
      specular: ['tif', 'jpg', 'png'],  // Priorité TIF car earth_specularmap.tif existe
      night: ['jpg', 'png'],
      stars: ['jpg', 'png'],
      water: ['jpg', 'png']
    };
    
    // Liste des textures disponibles dans les assets
    this.availableTextures = [
      '8k_moon.jpg',
      '8k_stars_milky_way.jpg',
      '8k_stars.jpg',
      '8k_sun.jpg',
      'earth_clouds.jpg',
      'earth_bumpmap.jpg',
      'earth_daymap.jpg',
      'earth_specularmap.tif'
    ];
    
    // Groupes pour organiser les marqueurs par type
    this.weatherMarkers = [];
    this.flightMarkers = [];
    
    // Contrôle du temps
    this.date = new Date();
    this.timeMultiplier = 1; // Vitesse d'écoulement du temps (1 = temps réel)
    this.autoTimeUpdate = false;
    
    // Groupes de marqueurs
    this.markersGroup = null;
    this.weatherMarkersGroup = null;
    this.flightMarkersGroup = null;
  }

  async init() {
    // Vérifier les textures avant l'initialisation
    console.log("🌐 Démarrage de la vérification des textures...");
    const textureResult = await textureChecker.checkLocalTextures();
    
    console.log("Textures locales détectées:", textureChecker.localTextures);
    
    // Vérifier si nous avons les textures essentielles
    const hasEarthTexture = textureChecker.localTextures.some(t => 
      t === 'earth_daymap.jpg' || t === '2_no_clouds_4k.jpg');
    
    if (hasEarthTexture) {
      console.log("✅ Texture principale de la Terre trouvée!");
    } else {
      console.warn("⚠️ Aucune texture principale de la Terre n'a été trouvée localement.");
    }
    
    // Mettre à jour les chemins d'accès dans l'AssetManager
    if (textureChecker.localTextures.length > 0) {
      console.log(`Utilisation prioritaire des ${textureChecker.localTextures.length} textures locales trouvées`);
      assetManager.preferProceduralFallbacks = false;
      
      // Créer un inventaire de textures - priorité aux extensions .jpg qui existent
      const textureInventory = {
        earth: textureChecker.localTextures.find(t => 
          t === 'earth_daymap.jpg' || t === 'ipcc_bluemarble_west_lrg.jpg' || t === 'ipcc_bluemarble_east_lrg.jpg'),
        bump: textureChecker.localTextures.find(t => 
          t === 'earth_bumpmap.jpg' || t === 'Land_topography_Earth\'s_surface_21600x10800.png'),
        clouds: textureChecker.localTextures.find(t => 
          t === 'earth_clouds.jpg' || t === 'earth_clouds.png' || t === 'cloud_combined_2048.jpg'),
        specular: textureChecker.localTextures.find(t => 
          t === 'earth_specularmap.jpg' || t === 'earth_specularmap.tif' || t === 'Bathymetry is the underwater equivalent of land topography_3600x1800_color.jpg'),
        stars: textureChecker.localTextures.find(t => 
          t === '8k_stars_milky_way.jpg' || t === '8k_stars.jpg'),
        sun: textureChecker.localTextures.find(t => 
          t === '8k_sun.jpg'),
        moon: textureChecker.localTextures.find(t => 
          t === '8k_moon.jpg')
      };
      
      console.log("📦 Inventaire des textures disponibles:", textureInventory);
      
      // Stocker l'inventaire pour utilisation dans createGlobe et autres méthodes
      this.textureInventory = textureInventory;
    }
    
    // Créer la scène
    this.scene = new THREE.Scene();
    
    // Configurer la caméra
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 15;
    
    // Configurer le renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.container.appendChild(this.renderer.domElement);
    
    // Ajouter un éclairage
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(directionalLight);
    
    // Créer le globe
    await this.createGlobe();
    
    // Ajouter l'atmosphère
    this.createAtmosphere();
    
    // Ajouter le fond étoilé avec la texture fournie
    await this.createSkybox();
    
    // Ajouter le soleil et la lune
    await this.createCelestialBodies();
    
    // Créer des groupes pour organiser les marqueurs
    this.markersGroup = new THREE.Group();
    this.weatherMarkersGroup = new THREE.Group();
    this.flightMarkersGroup = new THREE.Group();
    
    this.scene.add(this.markersGroup);
    this.scene.add(this.weatherMarkersGroup);
    this.scene.add(this.flightMarkersGroup);
    
    // Ajouter des points d'intérêt basés sur les données
    this.addMarkers();
    
    // Charger les données météo
    this.loadWeatherData();
    
    // Charger les données de vol
    this.loadFlightData();
    
    // Configurer les contrôles
    this.setupControls();
    
    // Configurer les événements
    this.setupEventListeners();
    
    // Créer l'élément tooltip
    this.tooltipElement = createTooltip();
    document.body.appendChild(this.tooltipElement);
    
    // Mettre à jour les contrôles de temps
    this.updateDayNightCycle();
    
    // Créer les contrôles d'UI pour le cycle jour/nuit
    this.createDayNightControls();
    
    // Créer les contrôles d'UI pour le temps
    this.createTimeControls();
    
    this.isInitialized = true;
    
    // Attendre un moment pour que toutes les textures soient complètement chargées
    setTimeout(() => {
      this.logLoadedTextures();
      
      // Créer un bouton pour rafraîchir le diagnostic des textures
      const diagButton = document.createElement('button');
      diagButton.textContent = 'Diagnostic des textures';
      diagButton.style.position = 'absolute';
      diagButton.style.bottom = '80px';
      diagButton.style.left = '20px';
      diagButton.style.padding = '5px 10px';
      diagButton.style.background = 'rgba(0, 0, 0, 0.5)';
      diagButton.style.color = 'white';
      diagButton.style.border = 'none';
      diagButton.style.borderRadius = '5px';
      diagButton.style.fontFamily = 'Arial, sans-serif';
      diagButton.style.cursor = 'pointer';
      diagButton.addEventListener('click', () => {
        this.showTextureStatus();
      });
      document.body.appendChild(diagButton);
    }, 1000);
    
    return this;
  }

  async createGlobe() {
    // Charger les textures
    const textureLoader = new THREE.TextureLoader();
    
    try {
      console.log("Début du chargement des textures du globe...");
      
      // Utiliser notre inventaire de textures si disponible
      const inventory = this.textureInventory || {};
      console.log("Utilisation de l'inventaire de textures:", inventory);
      
      // Ajout de logs détaillés pour le chargement des textures
      if (inventory.specular) {
        console.log("Tentative de chargement de la texture spéculaire:", inventory.specular);
      }
      
      // Utiliser AssetManager pour charger les textures avec meilleure gestion d'erreurs
      const texturePromises = [
        // Earth texture - essayer d'abord les textures locales connues
        inventory.earth 
          ? assetManager.loadTexture(inventory.earth, true)
          : assetManager.loadTexture('earth_daymap.jpg', true).catch(err => {
              console.warn("Fallback vers texture Earth alternative:", err);
              return assetManager.loadTexture('ipcc_bluemarble_west_lrg.jpg', true).catch(() => 
                assetManager.loadTexture('North_Africa_Europe.jpg', true)); 
            }),
            
        // Bump map
        inventory.bump
          ? assetManager.loadTexture(inventory.bump, true)
          : assetManager.loadTexture('earth_bumpmap.jpg', true).catch(err => {
              console.warn("Fallback vers texture Bump alternative:", err);
              return assetManager.loadTexture('Land_topography_Earth\'s_surface_21600x10800.png', true);
            }),
            
        // Specular/Water map - Meilleure gestion des fichiers TIF
        inventory.specular
          ? assetManager.loadTexture(inventory.specular, true).catch(err => {
              console.warn(`Échec du chargement de la texture spéculaire ${inventory.specular}:`, err);
              
              // Si c'est un fichier TIF, essayer de charger une version JPG
              const baseName = inventory.specular.split('.').slice(0, -1).join('.');
              return assetManager.loadTexture(`${baseName}.jpg`, true)
                .catch(() => assetManager.createFallbackTexture('specular'));
            })
          : assetManager.loadTexture('earth_specularmap.jpg', true).catch(err => {
              console.warn("Tentative de chargement alternatif pour la texture spéculaire");
              return assetManager.loadTexture('water_4k.png', true)
                .catch(() => assetManager.createFallbackTexture('specular'));
            }),
            
        // Clouds texture - priorité à earth_clouds.jpg qui existe
        inventory.clouds
          ? assetManager.loadTexture(inventory.clouds, true)
          : assetManager.loadTexture('earth_clouds.jpg', true).catch(err => {
              console.warn("Fallback vers texture Clouds alternative:", err);
              return assetManager.loadTexture('cloud_combined_2048.jpg', true).catch(() => {
                return assetManager.loadTexture('earth_clouds.png', true).catch(() => {
                  console.log("Génération d'une texture de nuages procédurale");
                  return assetManager.createFallbackTexture('clouds');
                });
              });
            }),
            
        // Night lights texture - Essayer plusieurs alternatives avec un meilleur ordre
        inventory.night
          ? assetManager.loadTexture(inventory.night, true)
          : assetManager.loadTexture('earth_nightlights.jpg', true).catch(err => {
              return assetManager.loadTexture('night_lights.jpg', true).catch(err => {
                return assetManager.loadTexture('earth-night.jpg', true).catch(err => {
                  console.warn("Création d'une texture de nuit procédurale améliorée");
                  return assetManager.createFallbackTexture('night_lights');
                });
              });
            })
      ];

      // Attendre que toutes les textures soient chargées
      const [earthTexture, bumpMap, specularMap, cloudsTexture, nightLightsTexture] = await Promise.all(texturePromises);
      console.log("Toutes les textures ont été chargées ou ont des fallbacks");
      
      // Ajouter des attributs pour l'inspection et le debugging
      earthTexture.name = "earth";
      bumpMap.name = "bump";
      specularMap.name = "specular";
      cloudsTexture.name = "clouds";
      nightLightsTexture.name = "night";
      
      // Afficher les textures chargées pour debug
      console.log("Textures chargées:", {
        earth: earthTexture.isProcedural ? "procédurale" : (earthTexture.url || "chargée"),
        bump: bumpMap.isProcedural ? "procédurale" : (bumpMap.url || "chargée"),
        specular: specularMap.isProcedural ? "procédurale" : (specularMap.url || "chargée"),
        clouds: cloudsTexture.isProcedural ? "procédurale" : (cloudsTexture.url || "chargée"),
        night: nightLightsTexture.isProcedural ? "procédurale" : (nightLightsTexture.url || "chargée")
      });
      
      this.nightLights = nightLightsTexture;
      
      // Créer la sphère du globe avec un shader personnalisé pour la transition jour/nuit
      const geometry = new THREE.SphereGeometry(this.radius, 64, 64);
      
      // Shader personnalisé pour mélanger les textures jour et nuit
      const material = new THREE.ShaderMaterial({
        uniforms: {
          dayTexture: { value: earthTexture },
          nightTexture: { value: nightLightsTexture },
          bumpMap: { value: bumpMap },
          specularMap: { value: specularMap },
          dayNightMix: { value: this.dayNightMix },
          lightPosition: { value: new THREE.Vector3(100, 20, -100) } // Position du soleil
        },
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vNormal;
          varying vec3 vPosition;
          
          void main() {
            vUv = uv;
            vNormal = normalize(normalMatrix * normal);
            vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform sampler2D dayTexture;
          uniform sampler2D nightTexture;
          uniform sampler2D bumpMap;
          uniform sampler2D specularMap;
          uniform float dayNightMix;
          uniform vec3 lightPosition;
          
          varying vec2 vUv;
          varying vec3 vNormal;
          varying vec3 vPosition;
          
          void main() {
            // Direction de la lumière (soleil)
            vec3 lightDir = normalize(lightPosition - vPosition);
            
            // Facteur d'illumination basé sur l'angle entre la normale et la lumière
            float diffuseFactor = max(dot(vNormal, lightDir), 0.0);
            
            // Texture de jour et de nuit
            vec4 dayColor = texture2D(dayTexture, vUv);
            vec4 nightColor = texture2D(nightTexture, vUv);
            
            // Déterminer si ce point est du côté nuit (face opposée au soleil)
            float nightSide = clamp(1.0 - diffuseFactor * 2.0, 0.0, 1.0);
            
            // Mélanger les textures jour et nuit en fonction de la position et du cycle jour/nuit
            vec4 finalColor = mix(dayColor, nightColor, nightSide * dayNightMix);
            
            // Ajouter un peu de lumière ambiante pour que le côté nuit ne soit pas complètement noir
            finalColor = mix(finalColor, nightColor * 0.5, nightSide * 0.8);
            
            gl_FragColor = finalColor;
          }
        `
      });
      
      this.globe = new THREE.Mesh(geometry, material);
      this.scene.add(this.globe);
      
      // Ajouter une couche de nuages
      const cloudsGeometry = new THREE.SphereGeometry(this.radius + 0.03, 64, 64);
      const cloudsMaterial = new THREE.MeshPhongMaterial({
        map: cloudsTexture,
        transparent: true,
        opacity: 0.4
      });
      
      this.clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
      this.scene.add(this.clouds);
    } catch (error) {
      console.error("Erreur lors du chargement des textures:", error);
      
      // Fallback plus robuste en cas d'erreur complète
      console.warn("Création d'un globe basique sans textures...");
      
      const geometry = new THREE.SphereGeometry(this.radius, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: 0x2233ff,  // Bleu pour l'océan
        shininess: 25
      });
      
      this.globe = new THREE.Mesh(geometry, material);
      this.scene.add(this.globe);
      
      // Créer des continents simples pour simuler la Terre
      this.createSimpleContinents();
    }
  }

  // Reste des méthodes de la classe...
  
  createSimpleContinents() {
    const continentData = [
      { lat: 40, lng: -95, scale: 3.5, name: "Amérique du Nord" },   // Amérique du Nord
      { lat: -10, lng: -60, scale: 3, name: "Amérique du Sud" },     // Amérique du Sud
      { lat: 30, lng: 80, scale: 3, name: "Asie" },                 // Asie
      { lat: -25, lng: 135, scale: 2, name: "Australie" }            // Australie
    ];
    
    continentData.forEach(continent => {
      const position = geoToCartesian(continent.lat, continent.lng, this.radius + 0.01);
      const continentGeometry = new THREE.SphereGeometry(0.2 * continent.scale, 32, 16);
      const continentMaterial = new THREE.MeshPhongMaterial({ color: 0x228822 });  // Vert pour les continents
      const continentMesh = new THREE.Mesh(continentGeometry, continentMaterial);
      
      continentMesh.position.set(position.x, position.y, position.z);
      continentMesh.lookAt(0, 0, 0);
      continentMesh.scale.z = 0.1;  // Aplatir pour qu'il soit comme une élévation à la surface
      
      // Ajouter le continent au globe
      this.globe.add(continentMesh);
    });
  }

  async createSkybox() {
    try {
      // Utiliser l'inventaire de textures si disponible
      const inventory = this.textureInventory || {};
      
      // Utiliser l'AssetManager pour charger la texture du skybox
      const starTexture = inventory.stars
        ? await assetManager.loadTexture(inventory.stars, true)
        : await assetManager.loadTexture('8k_stars_milky_way.jpg');
      
      console.log("Skybox chargé:", starTexture.isProcedural ? "procédural" : (starTexture.url || "chargé"));
      
      // Créer une grande sphère pour le skybox
      const skyboxGeometry = new THREE.SphereGeometry(500, 60, 40);
      // Inverser les faces de la sphère pour que la texture soit visible de l'intérieur
      skyboxGeometry.scale(-1, 1, 1);
      
      const skyboxMaterial = new THREE.MeshBasicMaterial({
        map: starTexture,
        side: THREE.BackSide
      });
      
      this.skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
      this.scene.add(this.skybox);
    } catch (error) {
      console.warn("Impossible de charger la texture de la voie lactée:", error);
      // Utiliser la méthode de secours pour créer des étoiles procédurales
      this.createStars();
    }
  }

  async createCelestialBodies() {
    try {
      // Utiliser l'inventaire de textures si disponible
      const inventory = this.textureInventory || {};
      
      // Charger la texture du soleil
      const sunTexture = inventory.sun
        ? await assetManager.loadTexture(inventory.sun, true)
        : await assetManager.loadTexture('8k_sun.jpg');
      
      console.log("Soleil chargé:", sunTexture.isProcedural ? "procédural" : (sunTexture.url || "chargé"));
      
      const sunGeometry = new THREE.SphereGeometry(10, 32, 32);
      const sunMaterial = new THREE.MeshPhongMaterial({
        map: sunTexture,
        emissive: 0xffff00,
        emissiveIntensity: 0.5,
        shininess: 0 // Pas de reflets brillants pour le soleil
      });
      
      this.sun = new THREE.Mesh(sunGeometry, sunMaterial);
      this.sun.position.set(100, 20, -100); // Placer le soleil loin de la Terre
      this.scene.add(this.sun);
      
      // Ajouter une lumière au soleil
      const sunLight = new THREE.PointLight(0xffffff, 1.5, 300);
      this.sun.add(sunLight);
      
      // Charger la texture de la lune
      const moonTexture = inventory.moon
        ? await assetManager.loadTexture(inventory.moon, true)
        : await assetManager.loadTexture('8k_moon.jpg');
      
      console.log("Lune chargée:", moonTexture.isProcedural ? "procédurale" : (moonTexture.url || "chargé"));
      
      const moonGeometry = new THREE.SphereGeometry(1.2, 32, 32);
      const moonMaterial = new THREE.MeshPhongMaterial({
        map: moonTexture,
        bumpMap: moonTexture,
        bumpScale: 0.02
      });
      
      this.moon = new THREE.Mesh(moonGeometry, moonMaterial);
      this.updateMoonPosition();
      this.scene.add(this.moon);
    } catch (error) {
      console.error("Erreur lors du chargement des textures des corps célestes:", error);
      
      // Créer un soleil et une lune basiques en cas d'erreur
      const sunGeometry = new THREE.SphereGeometry(10, 32, 32);
      const sunMaterial = new THREE.MeshPhongMaterial({
        color: 0xffdd00,
        emissive: 0xffff00,
        emissiveIntensity: 0.5,
        shininess: 0
      });
      
      this.sun = new THREE.Mesh(sunGeometry, sunMaterial);
      this.sun.position.set(100, 20, -100);
      this.scene.add(this.sun);
      
      const sunLight = new THREE.PointLight(0xffffff, 1.5, 300);
      this.sun.add(sunLight);
      
      const moonGeometry = new THREE.SphereGeometry(1.2, 32, 32);
      const moonMaterial = new THREE.MeshPhongMaterial({
        color: 0xcccccc,
        bumpScale: 0.02
      });
      
      this.moon = new THREE.Mesh(moonGeometry, moonMaterial);
      this.updateMoonPosition();
      this.scene.add(this.moon);
    }
  }

  updateMoonPosition() {
    // Calculer la position de la lune sur son orbite
    const moonX = this.moonOrbitRadius * Math.cos(this.moonRotation);
    const moonZ = this.moonOrbitRadius * Math.sin(this.moonRotation);
    
    this.moon.position.set(moonX, 0, moonZ);
    this.moon.lookAt(0, 0, 0); // La lune fait toujours face à la Terre
  }

  createAtmosphere() {
    // Créer l'effet d'atmosphère (halo autour du globe)
    const atmosphereGeometry = new THREE.SphereGeometry(this.radius + 0.1, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    
    this.atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    this.atmosphere.scale.set(1.1, 1.1, 1.1);
    this.scene.add(this.atmosphere);
  }

  createStars() {
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 10000;
    const positions = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 2000;
      positions[i + 1] = (Math.random() - 0.5) * 2000;
      positions[i + 2] = (Math.random() - 0.5) * 2000;
    }
    
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      transparent: true
    });
    
    const stars = new THREE.Points(starGeometry, starMaterial);
    this.scene.add(stars);
  }

  addMarkers() {
    if (!this.data || !this.data.points) return;
    
    this.data.points.forEach(point => {
      const marker = createMarker(point);
      const position = geoToCartesian(point.lat, point.lng, this.radius + 0.05);
      
      marker.position.set(position.x, position.y, position.z);
      marker.lookAt(0, 0, 0);
      marker.userData = { point };
      
      this.globe.add(marker);
      this.markers.push(marker);
    });
  }

  async loadWeatherData() {
    try {
      const weatherData = await this.weatherService.getGlobalWeatherData();
      
      // Nettoyer les anciens marqueurs météo
      this.weatherMarkers.forEach(marker => {
        this.weatherMarkersGroup.remove(marker);
      });
      this.weatherMarkers = [];
      
      // Créer de nouveaux marqueurs météo
      for (const cityData of weatherData) {
        const marker = await createWeatherMarker(cityData);
        const position = geoToCartesian(cityData.lat, cityData.lon, this.radius + 0.2);
        
        marker.position.set(position.x, position.y, position.z);
        marker.lookAt(0, 0, 0);
        
        this.weatherMarkersGroup.add(marker);
        this.weatherMarkers.push(marker);
      }
    } catch (error) {
      console.error('Error loading weather data:', error);
    }
  }

  async loadFlightData() {
    try {
      const flightData = await this.flightService.getFlights();
      
      // Nettoyer les anciens marqueurs de vol
      this.flightMarkers.forEach(marker => {
        this.flightMarkersGroup.remove(marker);
      });
      this.flightMarkers = [];
      
      for (const flight of flightData) {
        if (!flight.geography?.latitude || !flight.geography?.longitude) continue;
        
        const marker = createFlightMarker(flight, this.radius);
        this.flightMarkersGroup.add(marker);
        this.flightMarkers.push(marker);
      }
    } catch (error) {
      console.error('Error loading flight data:', error);
    }
  }

  setupControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.rotateSpeed = 0.5;
    this.controls.zoomSpeed = 0.8;
    this.controls.minDistance = this.radius + 1;
    this.controls.maxDistance = 30;
    
    // Limiter l'angle vertical pour éviter de "passer à travers" le globe
    this.controls.minPolarAngle = Math.PI * 0.1;
    this.controls.maxPolarAngle = Math.PI * 0.9;
  }

  setupEventListeners() {
    window.addEventListener('resize', this.onWindowResize.bind(this));
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    window.addEventListener('click', this.onMouseClick.bind(this));
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onMouseMove(event) {
    // Calculer la position de la souris en coordonnées normalisées
    this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Mise à jour du raycaster
    this.raycaster.setFromCamera(this.pointer, this.camera);
    
    // Vérifier les intersections avec tous les types de marqueurs
    const allMarkers = [...this.markers, ...this.weatherMarkers, ...this.flightMarkers];
    const intersects = this.raycaster.intersectObjects(allMarkers, true); // Ajout du paramètre 'true' pour vérifier les descendants
    
    if (intersects.length > 0) {
      // Obtenir le parent qui est le groupe de marqueur ou l'objet lui-même s'il n'a pas de parent
      const intersectedObject = intersects[0].object;
      const intersectedMarker = intersectedObject.parent && intersectedObject.parent.userData.point ? 
                               intersectedObject.parent : intersectedObject;
      
      if (this.hoverMarker !== intersectedMarker) {
        // Reset previous hover
        if (this.hoverMarker) {
          gsap.to(this.hoverMarker.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
        }
        
        // Set new hover
        this.hoverMarker = intersectedMarker;
        gsap.to(this.hoverMarker.scale, { x: 1.3, y: 1.3, z: 1.3, duration: 0.3 });
        
        // Récupérer le point depuis userData
        const point = intersectedMarker.userData.point;
        
        // Vérifier que point existe avant d'utiliser ses propriétés
        if (point) {
          this.tooltipElement.innerHTML = `
            <strong>${point.name}</strong>
            ${point.description ? `<br>${point.description}` : ''}
          `;
          this.tooltipElement.style.opacity = 1;
        }
      }
      
      // Mettre à jour la position du tooltip
      const vector = new THREE.Vector3();
      vector.copy(intersectedMarker.position);
      vector.project(this.camera);
      
      const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
      const y = (vector.y * -0.5 + 0.5) * window.innerHeight;
      
      this.tooltipElement.style.left = `${x}px`;
      this.tooltipElement.style.top = `${y - 10}px`;
      
      document.body.style.cursor = 'pointer';
    } else {
      // Si on ne survole plus de marqueur
      if (this.hoverMarker) {
        gsap.to(this.hoverMarker.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
        this.hoverMarker = null;
        this.tooltipElement.style.opacity = 0;
      }
      
      document.body.style.cursor = 'auto';
    }
  }

  onMouseClick(event) {
    if (this.hoverMarker && this.hoverMarker.userData && this.hoverMarker.userData.point) {
      const point = this.hoverMarker.userData.point;
      
      // Animer le déplacement de la caméra vers ce point
      const position = geoToCartesian(point.lat, point.lng, this.radius + 2);
      gsap.to(this.camera.position, {
        x: position.x * 1.5,
        y: position.y * 1.5,
        z: position.z * 1.5,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          this.camera.lookAt(this.globe.position);
        }
      });
      
      // Afficher des informations supplémentaires si nécessaire
      // Par exemple, afficher un panneau d'informations, etc.
    }
  }

  createDayNightControls() {
    // Créer un contrôleur simple pour l'heure du jour
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.bottom = '20px';
    container.style.left = '20px';
    container.style.background = 'rgba(0, 0, 0, 0.5)';
    container.style.color = 'white';
    container.style.padding = '10px';
    container.style.borderRadius = '5px';
    container.style.fontFamily = 'Arial, sans-serif';
    
    const title = document.createElement('div');
    title.textContent = 'Contrôle temps';
    title.style.marginBottom = '10px';
    container.appendChild(title);
    
    const timeSlider = document.createElement('input');
    timeSlider.type = 'range';
    timeSlider.min = '0';
    timeSlider.max = '24';
    timeSlider.step = '0.1';
    timeSlider.value = this.timeOfDay.toString();
    timeSlider.style.width = '200px';
    timeSlider.addEventListener('input', (e) => {
      this.timeOfDay = parseFloat(e.target.value);
      this.updateDayNightCycle();
      timeValue.textContent = `${this.timeOfDay.toFixed(1)}h`;
    });
    container.appendChild(timeSlider);
    
    const timeValue = document.createElement('span');
    timeValue.textContent = `${this.timeOfDay.toFixed(1)}h`;
    timeValue.style.marginLeft = '10px';
    container.appendChild(timeValue);
    
    document.body.appendChild(container);
  }

  createTimeControls() {
    // Container principal pour les contrôles
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '20px';
    container.style.right = '20px';
    container.style.background = 'rgba(0, 0, 0, 0.5)';
    container.style.color = 'white';
    container.style.padding = '10px';
    container.style.borderRadius = '5px';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.zIndex = '1000';
    
    // Titre
    const title = document.createElement('div');
    title.textContent = 'Contrôle du temps';
    title.style.fontWeight = 'bold';
    title.style.marginBottom = '10px';
    container.appendChild(title);
    
    // Affichage de la date et de l'heure
    const dateDisplay = document.createElement('div');
    dateDisplay.id = 'date-display';
    dateDisplay.style.marginBottom = '10px';
    dateDisplay.textContent = this.date.toLocaleString();
    container.appendChild(dateDisplay);
    
    // Slider pour la vitesse du temps
    const speedContainer = document.createElement('div');
    speedContainer.style.marginBottom = '10px';
    
    const speedLabel = document.createElement('label');
    speedLabel.textContent = 'Vitesse: ';
    speedContainer.appendChild(speedLabel);
    
    const speedValue = document.createElement('span');
    speedValue.id = 'speed-value';
    speedValue.textContent = `${this.timeMultiplier}x`;
    speedContainer.appendChild(speedValue);
    
    const speedSlider = document.createElement('input');
    speedSlider.type = 'range';
    speedSlider.min = '0';
    speedSlider.max = '100';
    speedSlider.step = '1';
    speedSlider.value = this.timeMultiplier.toString();
    speedSlider.style.width = '100%';
    speedSlider.style.marginTop = '5px';
    speedSlider.addEventListener('input', (e) => {
      this.timeMultiplier = parseInt(e.target.value);
      speedValue.textContent = `${this.timeMultiplier}x`;
    });
    speedContainer.appendChild(speedSlider);
    container.appendChild(speedContainer);
    
    // Checkbox pour l'auto-update
    const autoContainer = document.createElement('div');
    
    const autoCheckbox = document.createElement('input');
    autoCheckbox.type = 'checkbox';
    autoCheckbox.id = 'auto-update';
    autoCheckbox.checked = this.autoTimeUpdate;
    autoCheckbox.addEventListener('change', (e) => {
      this.autoTimeUpdate = e.target.checked;
    });
    autoContainer.appendChild(autoCheckbox);
    
    const autoLabel = document.createElement('label');
    autoLabel.htmlFor = 'auto-update';
    autoLabel.textContent = ' Avance automatique du temps';
    autoContainer.appendChild(autoLabel);
    container.appendChild(autoContainer);
    
    // Boutons pour contrôler la date/heure
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.marginTop = '10px';
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.justifyContent = 'space-between';
    
    ['-1h', '-1j', 'Maintenant', '+1j', '+1h'].forEach(label => {
      const button = document.createElement('button');
      button.textContent = label;
      button.style.flex = '1';
      button.style.margin = '0 2px';
      button.style.padding = '5px';
      
      button.addEventListener('click', () => {
        const now = new Date();
        
        switch(label) {
          case '-1h':
            this.date.setHours(this.date.getHours() - 1);
            break;
          case '-1j':
            this.date.setDate(this.date.getDate() - 1);
            break;
          case 'Maintenant':
            this.date = new Date();
            break;
          case '+1j':
            this.date.setDate(this.date.getDate() + 1);
            break;
          case '+1h':
            this.date.setHours(this.date.getHours() + 1);
            break;
        }
        
        this.updateTimeDisplay();
        this.updateTimeOfDay();
      });
      
      buttonsContainer.appendChild(button);
    });
    
    container.appendChild(buttonsContainer);
    document.body.appendChild(container);
  }

  updateTimeDisplay() {
    const dateDisplay = document.getElementById('date-display');
    if (dateDisplay) {
      dateDisplay.textContent = this.date.toLocaleString();  
    }
  }

  updateTimeOfDay() {
    this.timeOfDay = this.date.getHours() + this.date.getMinutes() / 60;
    this.updateDayNightCycle();
  }

  updateDayNightCycle() {
    // Calculer le mélange jour/nuit (0 = jour complet, 1 = nuit complète)
    this.dayNightMix = 0;
    
    if (this.timeOfDay < 6 || this.timeOfDay > 18) {
      // Nuit
      this.dayNightMix = 1;
    } else if (this.timeOfDay < 8 || this.timeOfDay > 16) {
      // Aube ou crépuscule
      if (this.timeOfDay < 8) {
        // Aube: 6h -> 8h (nuit->jour)
        this.dayNightMix = 1 - (this.timeOfDay - 6) / 2;
      } else {
        // Crépuscule: 16h -> 18h (jour->nuit)
        this.dayNightMix = (this.timeOfDay - 16) / 2;
      }
    }
    
    // Mettre à jour la position du soleil en fonction de l'heure
    this.updateCelestialPositions();
    
    // Mettre à jour le matériau du globe si disponible
    if (this.globe && this.globe.material && this.globe.material.uniforms) {
      this.globe.material.uniforms.dayNightMix.value = this.dayNightMix;
      this.globe.material.uniforms.lightPosition.value.copy(this.sun.position);
    }
  }

  updateCelestialPositions() {
    if (!this.sun) return;
    
    // Angle du soleil basé sur l'heure (0 à 24h -> 0 à 2π)
    const sunAngle = ((this.timeOfDay / 24) * Math.PI * 2) - Math.PI/2;
    
    // Position du soleil sur un grand cercle
    const sunRadius = 150;
    const sunX = sunRadius * Math.cos(sunAngle);
    const sunY = 20 * Math.sin(sunAngle); // Variation verticale
    const sunZ = sunRadius * Math.sin(sunAngle);
    
    this.sun.position.set(sunX, sunY, sunZ);
    
    // Réduire l'intensité la nuit
    if (this.sun.children.length > 0 && this.sun.children[0] instanceof THREE.PointLight) {
      const light = this.sun.children[0];
      
      if (this.timeOfDay < 6 || this.timeOfDay > 18) {
        light.intensity = 0.2;
      } else {
        light.intensity = 1.5;
      }
    }
  }

  animate() {
    if (!this.isInitialized) return;

    requestAnimationFrame(this.animate.bind(this));
    
    // Rotation lente des nuages
    if (this.clouds) {
      this.clouds.rotation.y += 0.0005;
    }
    
    // Rotation lente de la skybox
    if (this.skybox) {
      this.skybox.rotation.y += 0.0001;
    }
    
    // Animation de la lune
    if (this.moon) {
      this.moonRotation += this.moonOrbitSpeed;
      this.updateMoonPosition();
      this.moon.rotation.y += 0.001; // Rotation de la lune sur elle-même
    }
    
    // Animation du soleil
    if (this.sun) {
      this.sun.rotation.y += 0.0002; // Rotation lente du soleil
    }
    
    // Mettre à jour les contrôles
    this.controls.update();
    
    // Mise à jour du temps si auto-update est activé
    if (this.autoTimeUpdate) {
      const newDate = new Date(this.date.getTime() + 1000 * this.timeMultiplier);
      this.date = newDate;
      this.updateTimeDisplay();
      this.updateTimeOfDay();
      
      // Rafraîchir les données de vol toutes les minutes simulées
      if (Math.floor(this.date.getTime() / 60000) !== Math.floor(new Date().getTime() / 60000)) {
        this.loadFlightData();
      }
      
      // Rafraîchir les données météo toutes les heures simulées
      if (this.date.getMinutes() === 0 && this.date.getSeconds() < 5) {
        this.loadWeatherData();
      }
    }
    
    // Rendu de la scène
    this.renderer.render(this.scene, this.camera);
  }

  // Ajouter une méthode pour déboguer les textures chargées
  logLoadedTextures(returnData = false) {
    const textureInfo = {};
    
    // Fonction pour extraire les détails d'une texture
    const getTextureDetails = (texture, name) => {
      if (!texture) return { name, isProcedural: false, source: "Non définie" };
      
      const isProcedural = !!texture.isProcedural;
      const source = texture.source?.data?.src || texture.url || null;
      const size = texture.image ? `${texture.image.width}x${texture.image.height}` : null;
      
      return {
        name,
        isProcedural,
        source: source ? (size ? `${source.split('/').pop()} (${size})` : source.split('/').pop()) : (isProcedural ? "Procédurale" : "Source inconnue")
      };
    };
    
    if (this.globe && this.globe.material && this.globe.material.uniforms) {
      const uniforms = this.globe.material.uniforms;
      
      textureInfo.earth_daymap = getTextureDetails(uniforms.dayTexture.value, "earth_daymap");
      textureInfo.earth_bumpmap = getTextureDetails(uniforms.bumpMap.value, "earth_bumpmap");
      textureInfo.earth_specularmap = getTextureDetails(uniforms.specularMap.value, "earth_specularmap");
      textureInfo.earth_nightlights = getTextureDetails(uniforms.nightTexture.value, "earth_nightlights");
    }
    
    if (this.clouds && this.clouds.material.map) {
      textureInfo.earth_clouds = getTextureDetails(this.clouds.material.map, "earth_clouds");
    }
    
    if (this.skybox && this.skybox.material.map) {
      textureInfo.skybox = getTextureDetails(this.skybox.material.map, "skybox");
    }
    
    if (!returnData) {
      console.log("===== TEXTURES CHARGÉES =====");
      Object.entries(textureInfo).forEach(([name, info]) => {
        console.log(`${name}: ${info.isProcedural ? "(procédurale)" : ""} ${info.source}`);
      });
      console.log("============================");
    }
    
    return textureInfo;
  }

  // Améliorer la méthode d'affichage du diagnostic des textures
  showTextureStatus() {
    const textures = this.logLoadedTextures(true);
    
    // Créer un panneau de diagnostic
    let panel = document.getElementById('texture-diagnostic-panel');
    if (!panel) {
      panel = document.createElement('div');
      panel.id = 'texture-diagnostic-panel';
      panel.style.position = 'absolute';
      panel.style.top = '20px';
      panel.style.left = '20px';
      panel.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      panel.style.color = 'white';
      panel.style.padding = '15px';
      panel.style.borderRadius = '5px';
      panel.style.fontFamily = 'Arial, sans-serif';
      panel.style.maxWidth = '400px';
      panel.style.maxHeight = '80vh';
      panel.style.overflowY = 'auto';
      panel.style.zIndex = '1000';
      
      // Bouton pour fermer le panneau
      const closeButton = document.createElement('button');
      closeButton.textContent = 'X';
      closeButton.style.position = 'absolute';
      closeButton.style.top = '5px';
      closeButton.style.right = '5px';
      closeButton.style.background = 'none';
      closeButton.style.border = 'none';
      closeButton.style.color = 'white';
      closeButton.style.fontSize = '16px';
      closeButton.style.cursor = 'pointer';
      closeButton.addEventListener('click', () => {
        panel.remove();
      });
      panel.appendChild(closeButton);
      
      document.body.appendChild(panel);
    }
    
    // Effacer le contenu actuel
    panel.innerHTML = '';
    
    // Titre
    const title = document.createElement('h3');
    title.textContent = 'Diagnostic des textures';
    title.style.marginTop = '0';
    panel.appendChild(title);
    
    // Conteneur des infos
    const content = document.createElement('div');
    
    // Liste des textures chargées
    let procedurals = 0;
    let locals = 0;
    
    Object.entries(textures).forEach(([name, info]) => {
      const row = document.createElement('div');
      row.style.marginBottom = '5px';
      
      // Icône d'état
      const statusIcon = document.createElement('span');
      statusIcon.textContent = info.isProcedural ? '⚠️' : '✅';
      row.appendChild(statusIcon);
      
      // Nom de la texture
      const textureName = document.createElement('span');
      textureName.textContent = ` ${name}`;
      textureName.style.fontWeight = 'bold';
      row.appendChild(textureName);
      
      // Source de la texture
      if (info.source) {
        const source = document.createElement('div');
        source.textContent = info.source;
        source.style.fontSize = '12px';
        source.style.marginLeft = '20px';
        source.style.color = '#aaa';
        row.appendChild(source);
      }
      
      content.appendChild(row);
      
      // Compter les types de textures
      if (info.isProcedural) procedurals++;
      else locals++;
    });
    
    // Ajouter les statistiques
    const stats = document.createElement('div');
    stats.style.marginTop = '10px';
    stats.style.borderTop = '1px solid #666';
    stats.style.paddingTop = '10px';
    stats.innerHTML = `
      <strong>Total:</strong> ${Object.keys(textures).length} texture(s)<br>
      <strong>Procédurales:</strong> ${procedurals}<br>
      <strong>Locales/CDN:</strong> ${locals}
    `;
    
    // Bouton pour rafraîchir
    const refreshButton = document.createElement('button');
    refreshButton.textContent = 'Rafraîchir';
    refreshButton.style.marginTop = '10px';
    refreshButton.style.padding = '5px 10px';
    refreshButton.style.background = '#444';
    refreshButton.style.color = 'white';
    refreshButton.style.border = 'none';
    refreshButton.style.borderRadius = '3px';
    refreshButton.style.cursor = 'pointer';
    refreshButton.addEventListener('click', () => {
      this.showTextureStatus();
    });
    
    panel.appendChild(content);
    panel.appendChild(stats);
    panel.appendChild(refreshButton);
    
    // Ajouter un bouton pour convertir le TIF -> JPG si disponible
    if (textures.earth_specularmap && textures.earth_specularmap.isProcedural) {
      const convertButton = document.createElement('button');
      convertButton.textContent = 'Corriger earth_specularmap.tif';
      convertButton.style.marginTop = '10px';
      convertButton.style.padding = '5px 10px';
      convertButton.style.background = '#664400';
      convertButton.style.color = 'white';
      convertButton.style.border = 'none';
      convertButton.style.borderRadius = '3px';
      convertButton.style.cursor = 'pointer';
      convertButton.addEventListener('click', () => {
        this.fixSpecularTexture();
      });
      
      panel.appendChild(convertButton);
    }
    
    // Ajouter un bouton pour corriger la texture de nuit si elle est procédurale
    if (textures.earth_nightlights && textures.earth_nightlights.isProcedural) {
      const nightFixButton = document.createElement('button');
      nightFixButton.textContent = 'Corriger night_lights.jpg';
      nightFixButton.style.marginTop = '10px';
      nightFixButton.style.marginLeft = '10px';
      nightFixButton.style.padding = '5px 10px';
      nightFixButton.style.background = '#664400';
      nightFixButton.style.color = 'white';
      nightFixButton.style.border = 'none';
      nightFixButton.style.borderRadius = '3px';
      nightFixButton.style.cursor = 'pointer';
      nightFixButton.addEventListener('click', () => {
        this.fixNightTexture();
      });
      
      panel.appendChild(nightFixButton);
    }
    
    return textures;
  }

  // Nouvelle méthode pour fixer la texture specular
  async fixSpecularTexture() {
    console.log("🔧 Tentative de correction de la texture earth_specularmap.tif");
    
    // Forcer le rechargement avec une version JPG depuis CDN
    try {
      const texture = await assetManager.loadTexture('earth_specularmap.jpg', false);
      
      // Mettre à jour le shader si la texture a été chargée
      if (this.globe && this.globe.material && this.globe.material.uniforms) {
        this.globe.material.uniforms.specularMap.value = texture;
        console.log("✅ Texture specular corrigée avec succès!");
        
        // Rafraîchir le diagnostic
        this.showTextureStatus();
      }
    } catch (error) {
      console.error("❌ Échec de la correction de la texture specular:", error);
    }
  }

  // Nouvelle méthode pour fixer la texture de nuit
  async fixNightTexture() {
    console.log("🔧 Tentative de correction de la texture night_lights.jpg");
    
    // Essayer plusieurs sources alternatives
    const sources = [
      'earth-night.jpg',
      'earth_nightlights.jpg',
      'night_lights.jpg'
    ];
    
    for (const source of sources) {
      try {
        const texture = await assetManager.loadTexture(source, false);
        
        // Mettre à jour le shader si la texture a été chargée
        if (this.globe && this.globe.material && this.globe.material.uniforms) {
          this.globe.material.uniforms.nightTexture.value = texture;
          console.log(`✅ Texture de nuit corrigée avec succès via ${source}!`);
          
          // Rafraîchir le diagnostic
          this.showTextureStatus();
          return;
        }
      } catch (error) {
        console.warn(`Échec du chargement de ${source}:`, error);
      }
    }
    
    console.error("❌ Échec de la correction de la texture de nuit");
  }
}