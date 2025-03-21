/**
 * Charge les données pour le globe
 * @returns {Promise<Object>} Données pour le globe
 */
export async function loadData() {
  // Dans un projet réel, vous pourriez charger ces données depuis une API
  // Pour l'exemple, nous utilisons des données statiques
  
  // Quelques capitales importantes
  const capitals = [
    { name: "Paris", lat: 48.8566, lng: 2.3522, type: "capital", description: "Capitale de la France" },
    { name: "New York", lat: 40.7128, lng: -74.0060, type: "city", description: "La ville qui ne dort jamais" },
    { name: "Tokyo", lat: 35.6762, lng: 139.6503, type: "capital", description: "Capitale du Japon" },
    { name: "Sydney", lat: -33.8688, lng: 151.2093, type: "city", description: "Plus grande ville d'Australie" },
    { name: "Le Caire", lat: 30.0444, lng: 31.2357, type: "capital", description: "Capitale de l'Égypte" },
    { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729, type: "city", description: "Ville célèbre du Brésil" },
    { name: "Moscou", lat: 55.7558, lng: 37.6173, type: "capital", description: "Capitale de la Russie" },
    { name: "Pékin", lat: 39.9042, lng: 116.4074, type: "capital", description: "Capitale de la Chine" },
    { name: "Cape Town", lat: -33.9249, lng: 18.4241, type: "city", description: "Ville d'Afrique du Sud" },
    { name: "Mexico", lat: 19.4326, lng: -99.1332, type: "capital", description: "Capitale du Mexique" }
  ];

  // Quelques événements notables
  const events = [
    { name: "Parc national de Yellowstone", lat: 44.4280, lng: -110.5885, type: "event", description: "Premier parc national au monde" },
    { name: "Grande barrière de corail", lat: -18.2871, lng: 147.6992, type: "event", description: "Plus grand récif corallien du monde" },
    { name: "Mont Everest", lat: 27.9881, lng: 86.9250, type: "event", description: "Plus haute montagne du monde" },
    { name: "Grand Canyon", lat: 36.1069, lng: -112.1126, type: "event", description: "Formation géologique spectaculaire" },
    { name: "Machu Picchu", lat: -13.1631, lng: -72.5450, type: "event", description: "Ancienne cité inca" }
  ];

  // Combiner toutes les données
  return {
    points: [...capitals, ...events],
    // Vous pourriez ajouter d'autres types de données ici
  };
}
