import * as THREE from 'three';
import { assetManager } from '../utils/AssetManager.js';

// Créer des marqueurs pour les données météo
export async function createWeatherMarker(weatherData) {
  const groupMarker = new THREE.Group();
  
  try {
    // S'assurer que les données weatherData sont bien structurées
    if (!weatherData || !weatherData.weather) {
      throw new Error("Données météo manquantes");
    }
    
    const { weather } = weatherData;
    
    // Vérifier que la structure des données est correcte
    if (!weather.weather || !weather.weather[0] || !weather.main) {
      console.warn("Format de données météo incomplet:", weather);
      throw new Error("Structure de données météo incomplète");
    }
    
    // Choisir l'icône en fonction du type de météo
    let iconName;
    
    if (weather.weather[0].icon) {
      // Utiliser l'icône fournie directement si disponible
      iconName = weather.weather[0].icon;
    } else {
      // Sinon déterminer l'icône en fonction du type de météo
      switch (weather.weather[0].main.toLowerCase()) {
        case 'clouds':
          iconName = 'weather-cloudy.png';
          break;
        case 'rain':
        case 'drizzle':
          iconName = 'weather-rainy.png';
          break;
        case 'snow':
          iconName = 'weather-snowy.png';
          break;
        case 'thunderstorm':
          iconName = 'weather-thunder.png';
          break;
        case 'clear':
        default:
          iconName = 'weather-sunny.png';
      }
    }
    
    // Charger la texture de l'icône
    let iconTexture;
    try {
      iconTexture = await assetManager.loadTexture(iconName);
    } catch (e) {
      // Créer une texture de remplacement si l'icône n'est pas disponible
      iconTexture = createFallbackWeatherIcon(weather.weather[0].main || 'Clear');
    }
    
    // Créer le sprite avec l'icône météo
    const spriteMaterial = new THREE.SpriteMaterial({
      map: iconTexture,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8
    });
    
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(0.5, 0.5, 1);
    sprite.position.set(0, 0.3, 0);
    groupMarker.add(sprite);
    
    // Ajouter la température
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = 128;
    tempCanvas.height = 64;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    tempCtx.fillRect(0, 0, 128, 64);
    tempCtx.font = 'bold 24px Arial';
    tempCtx.fillStyle = 'white';
    tempCtx.textAlign = 'center';
    tempCtx.fillText(`${Math.round(weather.main.temp)}°C`, 64, 32);
    
    const tempTexture = new THREE.CanvasTexture(tempCanvas);
    const tempMaterial = new THREE.SpriteMaterial({
      map: tempTexture,
      transparent: true
    });
    
    const tempSprite = new THREE.Sprite(tempMaterial);
    tempSprite.scale.set(1, 0.5, 1);
    tempSprite.position.set(0, -0.3, 0);
    groupMarker.add(tempSprite);
    
    // Stocker les données météo dans userData pour affichage dans tooltip
    groupMarker.userData = {
      point: {
        name: weatherData.name || weather.name,
        description: `${weather.weather[0].description}<br>Température: ${Math.round(weather.main.temp)}°C<br>Humidité: ${weather.main.humidity}%`,
        lat: weatherData.lat,
        lng: weatherData.lon
      }
    };
    
  } catch (error) {
    console.error('Error creating weather marker:', error);
    // Créer un marqueur simple en cas d'erreur
    const geometry = new THREE.SphereGeometry(0.1, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x0088ff });
    const sphere = new THREE.Mesh(geometry, material);
    groupMarker.add(sphere);
    
    groupMarker.userData = {
      point: {
        name: weatherData.name || "Données météo",
        description: 'Informations météo non disponibles',
        lat: weatherData.lat || 0,
        lng: weatherData.lon || 0
      }
    };
  }
  
  return groupMarker;
}

// Fonction utilitaire pour créer une icône météo de remplacement
function createFallbackWeatherIcon(condition) {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  
  // Fond transparent
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Dessiner l'icône selon la condition météo
  switch (condition.toLowerCase()) {
    case 'clear':
      // Soleil
      ctx.fillStyle = '#FFDD00';
      ctx.beginPath();
      ctx.arc(32, 32, 25, 0, Math.PI * 2);
      ctx.fill();
      break;
    
    case 'clouds':
      // Nuage
      ctx.fillStyle = '#AAAAAA';
      ctx.beginPath();
      ctx.arc(32, 32, 20, 0, Math.PI * 2);
      ctx.fill();
      break;
      
    case 'rain':
    case 'drizzle':
      // Nuage avec pluie
      ctx.fillStyle = '#AAAAAA';
      ctx.beginPath();
      ctx.arc(32, 32, 18, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = '#4444FF';
      ctx.lineWidth = 2;
      for (let i = 0; i < 5; i++) {
        const x = 20 + i * 6;
        ctx.beginPath();
        ctx.moveTo(x, 40);
        ctx.lineTo(x - 3, 55);
        ctx.stroke();
      }
      break;
      
    case 'snow':
      // Flocon de neige
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(32, 32, 22, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = '#AAAAAA';
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(32, 32);
        ctx.lineTo(32 + Math.cos(angle) * 22, 32 + Math.sin(angle) * 22);
        ctx.stroke();
      }
      break;
      
    case 'thunderstorm':
      // Éclair
      ctx.fillStyle = '#555555';
      ctx.beginPath();
      ctx.arc(32, 32, 22, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#FFFF00';
      ctx.beginPath();
      ctx.moveTo(32, 15);
      ctx.lineTo(42, 30);
      ctx.lineTo(35, 32);
      ctx.lineTo(45, 48);
      ctx.lineTo(25, 35);
      ctx.lineTo(32, 33);
      ctx.lineTo(22, 15);
      ctx.closePath();
      ctx.fill();
      break;
      
    default:
      // Icône générique
      ctx.fillStyle = '#CCCCCC';
      ctx.beginPath();
      ctx.arc(32, 32, 20, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = '#444444';
      ctx.lineWidth = 2;
      ctx.strokeRect(20, 20, 24, 24);
  }
  
  return new THREE.CanvasTexture(canvas);
}
