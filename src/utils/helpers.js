/**
 * Convertit des coordonnées géographiques (latitude, longitude) en position cartésienne 3D
 * @param {number} lat - Latitude en degrés
 * @param {number} lng - Longitude en degrés
 * @param {number} radius - Rayon du globe
 * @returns {Object} Position cartésienne {x, y, z}
 */
export function geoToCartesian(lat, lng, radius) {
  // Convertir en radians
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  // Calculer les coordonnées cartésiennes
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return { x, y, z };
}

/**
 * Fonction utilitaire pour générer une couleur aléatoire 
 * @returns {number} Couleur hexadécimale
 */
export function randomColor() {
  return Math.floor(Math.random() * 0xffffff);
}

/**
 * Crée un effet de pulsation sur un objet 3D
 * @param {Object} object - L'objet 3D à animer
 * @param {Object} gsap - Instance GSAP
 */
export function createPulseEffect(object, gsap) {
  gsap.to(object.scale, {
    x: 1.2,
    y: 1.2,
    z: 1.2,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}
