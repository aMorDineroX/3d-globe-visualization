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
    await textureChecker.checkLocalTextures();
    
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
    return this;
  }

  async createGlobe() {
    // Charger les textures
    const textureLoader = new THREE.TextureLoader();
    
    try {
      console.log("Début du chargement des textures du globe...");
      
      // Utiliser AssetManager pour charger les textures avec meilleure gestion d'erreurs
      const texturePromises = [
        assetManager.loadTexture('2_no_clouds_4k.jpg').catch(err => {
          console.warn("Fallback vers texture Earth depuis CDN:", err);
          return assetManager.loadTexture('earth_daymap.jpg'); 
        }),
        assetManager.loadTexture('elev_bump_4k.jpg').catch(err => {
          console.warn("Fallback vers texture Bump depuis CDN:", err);
          return assetManager.loadTexture('earth_bumpmap.jpg');
        }),
        assetManager.loadTexture('water_4k.png').catch(err => {
          console.warn("Fallback vers texture Water depuis CDN:", err);
          return new THREE.Texture(); // Texture vide si non disponible
        }),
        assetManager.loadTexture('fair_clouds_4k.png').catch(err => {
          console.warn("Fallback vers texture Clouds depuis CDN:", err);
          return assetManager.loadTexture('earth_clouds.png');
        }),
        assetManager.loadTexture('earth_nightlights_8k.jpg')
          .catch(err => {
            console.warn("Fallback vers textures de nuit alternatives:", err);
            return assetManager.loadTexture('earth-night.jpg')
              .catch(() => assetManager.loadTexture('night_lights.jpg'))
              .catch(() => assetManager.createFallbackTexture('earth_nightlights_8k.jpg'));
          })
      ];

      // Attendre que toutes les textures soient chargées
      const [earthTexture, bumpMap, specularMap, cloudsTexture, nightLightsTexture] = await Promise.all(texturePromises);
      console.log("Toutes les textures ont été chargées ou ont des fallbacks");
      
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

  // Méthode additionnelle pour créer une représentation basique des continents
  createSimpleContinents() {
    const continentData = [
      { lat: 40, lng: -95, scale: 3.5, name: "Amérique du Nord" },   // Amérique du Nord
      { lat: -10, lng: -60, scale: 3, name: "Amérique du Sud" },     // Amérique du Sud
      { lat: 55, lng: 10, scale: 1.6, name: "Europe" },             // Europe
      { lat: 0, lng: 20, scale: 3.5, name: "Afrique" },              // Afrique
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
      // Utiliser l'AssetManager pour charger la texture du skybox
      const starTexture = await assetManager.loadTexture('8k_stars_milky_way.jpg');
      
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
      // Charger la texture du soleil
      const sunTexture = await assetManager.loadTexture('8k_sun.jpg');
      
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
      const moonTexture = await assetManager.loadTexture('8k_moon.jpg');
      
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

  loadTexture(loader, url) {
    return new Promise((resolve, reject) => {
      loader.load(
        url, 
        (texture) => {
          resolve(texture);
        },
        undefined,
        (error) => {
          console.warn(`Erreur lors du chargement de la texture ${url}:`, error);
          reject(error);
        }
      );
    });
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
      
      // Créer de nouveaux marqueurs de vol
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
    
    // Configurer les contrôles pour une bonne expérience utilisateur
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
    // Jour complet à 12h, nuit complète à 0h/24h
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
    
    // Ajuster l'intensité de la lumière du soleil
    if (this.sun.children.length > 0 && this.sun.children[0] instanceof THREE.PointLight) {
      const light = this.sun.children[0];
      
      // Réduire l'intensité la nuit
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
}
