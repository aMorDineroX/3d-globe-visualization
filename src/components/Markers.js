import * as THREE from 'three';

export function createMarker(point) {
  // Déterminer la couleur et la taille en fonction du type de point
  let color, size;
  
  switch (point.type) {
    case 'capital':
      color = 0xffffff;
      size = 0.12;
      break;
    case 'city':
      color = 0x89CFF0;
      size = 0.08;
      break;
    case 'event':
      color = 0xFF5733;
      size = 0.1;
      break;
    default:
      color = 0xffff00;
      size = 0.07;
  }

  // Créer le marqueur avec une géométrie et un matériel adaptés
  const geometry = new THREE.SphereGeometry(size, 16, 16);
  const material = new THREE.MeshBasicMaterial({
    color: color,
    transparent: true,
    opacity: 0.8
  });
  
  // Créer un halo autour du marqueur
  const marker = new THREE.Group();
  // Stocker les données du point dans userData du groupe
  marker.userData = { point };
  
  const markerMesh = new THREE.Mesh(geometry, material);
  // Également stocker les données dans chaque mesh pour faciliter l'accès
  markerMesh.userData = { point };
  marker.add(markerMesh);
  
  // Ajouter un effet de halo si c'est un point important
  if (point.type === 'capital' || point.type === 'event') {
    const haloGeometry = new THREE.SphereGeometry(size * 1.5, 16, 16);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.3
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    // Également stocker les données dans le halo
    halo.userData = { point };
    marker.add(halo);
  }
  
  return marker;
}

export function createTooltip() {
  const tooltip = document.createElement('div');
  tooltip.className = 'marker-tooltip';
  tooltip.style.opacity = 0;
  return tooltip;
}
