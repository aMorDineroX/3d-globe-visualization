// Service pour récupérer les données de vols
export class FlightService {
  constructor(apiKey = null) {
    this.apiKey = apiKey; // Peut être null
    this.baseUrl = 'https://aviation-edge.com/v2/public';
    this.cache = new Map();
    this.cacheDuration = 5 * 60 * 1000; // 5 minutes
    
    // Toujours utiliser les données simulées car pas de clé API par défaut
    this.useMockedData = true;
    
    if (!apiKey) {
      console.log("Clé API Aviation non fournie, utilisation des données de vol simulées");
    }
  }

  async getFlights() {
    const cacheKey = 'flights';
    
    // Vérifier le cache
    if (this.cache.has(cacheKey)) {
      const cachedData = this.cache.get(cacheKey);
      if (Date.now() - cachedData.timestamp < this.cacheDuration) {
        return cachedData.data;
      }
    }
    
    // Si pas de clé API ou mode simulé activé, retourner des données simulées
    if (!this.apiKey || this.useMockedData) {
      const mockData = this.getMockFlightData();
      this.cache.set(cacheKey, {
        data: mockData,
        timestamp: Date.now()
      });
      return mockData;
    }
    
    // Récupérer les données depuis l'API
    try {
      const response = await fetch(
        `${this.baseUrl}/flights?key=${this.apiKey}&limit=100`
      );
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Mettre en cache
      this.cache.set(cacheKey, {
        data,
        timestamp: Date.now()
      });
      
      return data;
    } catch (error) {
      console.error('Error fetching flight data:', error);
      
      // En cas d'erreur, renvoyer des données simulées
      return this.getMockFlightData();
    }
  }

  getMockFlightData() {
    // Générer des données de vol simulées pour les tests
    const flights = [];
    const airlines = ['AF', 'LH', 'BA', 'DL', 'UA', 'AA', 'EK', 'QF', 'SQ'];
    const routes = [
      { from: { lat: 48.85, lon: 2.35 }, to: { lat: 40.71, lon: -74.01 } }, // Paris -> New York
      { from: { lat: 51.51, lon: -0.13 }, to: { lat: 35.68, lon: 139.77 } }, // London -> Tokyo
      { from: { lat: 25.27, lon: 55.30 }, to: { lat: -33.87, lon: 151.21 } }, // Dubai -> Sydney
      { from: { lat: 1.35, lon: 103.82 }, to: { lat: 39.91, lon: 116.40 } }, // Singapore -> Beijing
      { from: { lat: 19.43, lon: -99.13 }, to: { lat: 34.05, lon: -118.24 } }, // Mexico City -> Los Angeles
      { from: { lat: 52.52, lon: 13.41 }, to: { lat: -22.91, lon: -43.17 } }, // Berlin -> Rio de Janeiro
      { from: { lat: 41.90, lon: 12.50 }, to: { lat: 31.23, lon: 121.47 } }, // Rome -> Shanghai
      { from: { lat: 59.33, lon: 18.07 }, to: { lat: -26.20, lon: 28.04 } }  // Stockholm -> Johannesburg
    ];
    
    // Créer 20-30 vols aléatoires avec plus de variation
    const flightCount = Math.floor(Math.random() * 11) + 20; // 20-30 vols
    
    for (let i = 0; i < flightCount; i++) {
      const route = routes[Math.floor(Math.random() * routes.length)];
      const progress = Math.random(); // 0-1 pour la progression sur la route
      
      // Interpolation linéaire entre les points de départ et d'arrivée
      const lat = route.from.lat + (route.to.lat - route.from.lat) * progress;
      const lon = route.from.lon + (route.to.lon - route.from.lon) * progress;
      
      // Ajouter une variation aléatoire à la position pour éviter les superpositions
      const latVariation = (Math.random() - 0.5) * 2;
      const lonVariation = (Math.random() - 0.5) * 2;
      
      // Générer un numéro de vol réaliste
      const airline = airlines[Math.floor(Math.random() * airlines.length)];
      const flightNumber = Math.floor(Math.random() * 9000) + 1000;
      
      flights.push({
        flight: {
          number: `${airline}${flightNumber}`
        },
        geography: {
          latitude: lat + latVariation,
          longitude: lon + lonVariation,
          altitude: Math.floor(Math.random() * 10000) + 30000
        },
        speed: { horizontal: Math.floor(Math.random() * 200) + 700 },
        departure: { iataCode: route.from.lat.toFixed(0) + route.from.lon.toFixed(0) },
        arrival: { iataCode: route.to.lat.toFixed(0) + route.to.lon.toFixed(0) }
      });
    }
    
    return flights;
  }
}
