import * as THREE from 'three';
import { geoToCartesian } from '../utils/helpers.js';

export function createFlightMarker(flightData, globeRadius) {
  const group = new THREE.Group();
  
  try {
    // Créer un avion simple
    const coneGeometry = new THREE.ConeGeometry(0.05, 0.2, 8);
    coneGeometry.rotateX(Math.PI / 2);
    
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      emissive: 0x555555
    });
    
    const plane = new THREE.Mesh(coneGeometry, material);
    
    // Ajouter des ailes
    const wingGeometry = new THREE.BoxGeometry(0.2, 0.02, 0.05);
    const wing = new THREE.Mesh(wingGeometry, material);
    wing.position.set(0, 0, 0);
    
    group.add(plane);
    group.add(wing);
    
    // Ajouter une piste de traînée (trail)
    const trailPoints = [];
    for (let i = 0; i < 20; i++) {
      trailPoints.push(new THREE.Vector3(i * -0.05, 0, 0));
    }
    
    const trailGeometry = new THREE.BufferGeometry().setFromPoints(trailPoints);
    const trailMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.6
    });
    
    const trail = new THREE.Line(trailGeometry, trailMaterial);
    group.add(trail);
    
    // Stocker les informations de vol
    const flightInfo = {
      number: flightData.flight?.number || 'N/A',
      altitude: flightData.geography?.altitude || 0,
      speed: flightData.speed?.horizontal || 0,
      from: flightData.departure?.iataCode || 'N/A',
      to: flightData.arrival?.iataCode || 'N/A'
    };
    
    // Créer un point avec les coordonnées
    const latitude = flightData.geography?.latitude || 0;
    const longitude = flightData.geography?.longitude || 0;
    
    group.userData = {
      point: {
        name: `Vol ${flightInfo.number}`,
        description: `De: ${flightInfo.from}<br>À: ${flightInfo.to}<br>Altitude: ${flightInfo.altitude} ft<br>Vitesse: ${flightInfo.speed} km/h`,
        lat: latitude,
        lng: longitude,
        type: 'flight'
      },
      flightInfo
    };
    
    // Positionnement plus élevé que la surface du globe pour montrer l'altitude
    const altitude = 1 + (flightInfo.altitude / 100000);  // Échelle non linéaire
    const position = geoToCartesian(latitude, longitude, globeRadius * altitude);
    group.position.copy(position);
    
    // Orientation dans la direction du vol
    group.lookAt(0, 0, 0);
    group.rotateY(Math.PI);
    
  } catch (error) {
    console.error('Error creating flight marker:', error);
    
    // Marqueur de secours en cas d'erreur
    const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);
    group.add(cube);
  }
  
  return group;
}
