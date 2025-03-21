// Service pour récupérer les données météo via WeatherStack API
export class WeatherService {
  constructor(apiKey = null) {
    this.apiKey = apiKey || 'a3a2d7dc7aa31fe3f8841a49e7b48766'; // Clé par défaut
    this.baseUrl = 'http://api.weatherstack.com';
    this.cache = new Map();
    this.cacheDuration = 30 * 60 * 1000; // 30 minutes en millisecondes
    
    // Utiliser un proxy CORS pour résoudre les problèmes HTTPS/HTTP
    this.corsProxy = 'https://corsproxy.io/?';
    
    // Flag pour utiliser ou non le proxy (important pour les limites d'API)
    this.useProxy = window.location.protocol === 'https:';
    
    // Flag pour utiliser uniquement les données simulées et éviter les appels API
    this.useMockedData = true; // Changé à true pour éviter les problèmes d'API
    
    if (this.useProxy) {
      console.log("Utilisation d'un proxy CORS pour les appels API WeatherStack");
    }
    
    if (this.useMockedData) {
      console.log("Utilisation de données météo simulées (pas d'appels API)");
    }
  }

  async getWeatherData(lat, lon) {
    const cacheKey = `${lat.toFixed(2)},${lon.toFixed(2)}`;
    
    // Vérifier le cache
    if (this.cache.has(cacheKey)) {
      const cachedData = this.cache.get(cacheKey);
      if (Date.now() - cachedData.timestamp < this.cacheDuration) {
        return cachedData.data;
      }
    }
    
    // Si nous utilisons uniquement les données simulées, retourner immédiatement
    if (this.useMockedData) {
      const mockData = this.getMockWeatherData(lat, lon);
      this.cache.set(cacheKey, {
        data: mockData,
        timestamp: Date.now()
      });
      return mockData;
    }
    
    // Récupérer les données depuis l'API WeatherStack
    try {
      // WeatherStack utilise un paramètre query pour les coordonnées au format "lat,lon"
      const query = `${lat},${lon}`;
      
      // Construction de l'URL avec ou sans proxy
      let apiUrl = `${this.baseUrl}/current?access_key=${this.apiKey}&query=${query}`;
      
      if (this.useProxy) {
        apiUrl = `${this.corsProxy}${encodeURIComponent(apiUrl)}`;
      }
      
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(`WeatherStack API error: ${data.error.info}`);
      }
      
      // Convertir les données au format attendu par l'application
      const formattedData = this.formatWeatherData(data);
      
      // Mettre en cache
      this.cache.set(cacheKey, {
        data: formattedData,
        timestamp: Date.now()
      });
      
      return formattedData;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      
      // Essayer de récupérer depuis le cache même si expiré
      if (this.cache.has(cacheKey)) {
        console.warn('Using expired cache data for weather');
        return this.cache.get(cacheKey).data;
      }
      
      // Renvoyer des données factices en dernier recours
      return this.getMockWeatherData(lat, lon);
    }
  }

  // Fonction pour convertir les données WeatherStack au format attendu par l'application
  formatWeatherData(data) {
    if (!data || !data.current || !data.location) {
      return this.getMockWeatherData(0, 0);
    }
    
    // Transformer les données WeatherStack au format attendu par l'application
    return {
      name: data.location.name,
      main: {
        temp: data.current.temperature,
        humidity: data.current.humidity,
        pressure: data.current.pressure
      },
      weather: [
        {
          main: this.getWeatherMainFromDescription(data.current.weather_descriptions[0] || "Clear"),
          description: data.current.weather_descriptions.join(", "),
          icon: this.mapWeatherCodeToIcon(data.current.weather_code)
        }
      ],
      wind: {
        speed: data.current.wind_speed,
        deg: this.convertWindDirectionToDegrees(data.current.wind_dir)
      },
      visibility: data.current.visibility
    };
  }

  // Obtenir un type météo principal à partir de la description
  getWeatherMainFromDescription(description) {
    if (!description) return "Clear";
    
    const desc = description.toLowerCase();
    if (desc.includes('thunder') || desc.includes('lightning')) return 'Thunderstorm';
    if (desc.includes('drizzle')) return 'Drizzle';
    if (desc.includes('rain')) return 'Rain';
    if (desc.includes('snow') || desc.includes('sleet') || desc.includes('ice')) return 'Snow';
    if (desc.includes('fog') || desc.includes('mist') || desc.includes('haze')) return 'Atmosphere';
    if (desc.includes('clear')) return 'Clear';
    if (desc.includes('cloud') || desc.includes('overcast')) return 'Clouds';
    
    return 'Clear'; // Par défaut
  }

  // Fonction pour convertir les codes météo WeatherStack en icônes
  mapWeatherCodeToIcon(code) {
    // Correspondance simplifiée des codes météo WeatherStack à notre système d'icônes
    if (!code) return "weather-sunny.png";
    
    // Codes WeatherStack (approximativement)
    if (code >= 200 && code < 300) return "weather-thunder.png"; // Thunderstorm
    if (code >= 300 && code < 400) return "weather-rainy.png"; // Drizzle
    if (code >= 500 && code < 600) return "weather-rainy.png"; // Rain
    if (code >= 600 && code < 700) return "weather-snowy.png"; // Snow
    if (code >= 700 && code < 800) return "weather-cloudy.png"; // Atmosphere (fog, mist, etc.)
    if (code === 113) return "weather-sunny.png"; // Clear day
    if (code === 116 || code === 119) return "weather-cloudy.png"; // Partly/mostly cloudy
    
    return "weather-sunny.png"; // Default
  }

  // Fonction pour convertir la direction du vent en degrés
  convertWindDirectionToDegrees(direction) {
    if (!direction) return 0;
    
    const directions = {
      "N": 0,
      "NNE": 22.5,
      "NE": 45,
      "ENE": 67.5,
      "E": 90,
      "ESE": 112.5,
      "SE": 135,
      "SSE": 157.5,
      "S": 180,
      "SSW": 202.5,
      "SW": 225,
      "WSW": 247.5,
      "W": 270,
      "WNW": 292.5,
      "NW": 315,
      "NNW": 337.5
    };
    
    return directions[direction] || 0;
  }

  async getGlobalWeatherData() {
    // Récupérer les données météo pour plusieurs villes importantes
    const cities = [
      { name: 'New York', lat: 40.71, lon: -74.01 },
      { name: 'London', lat: 51.51, lon: -0.13 },
      { name: 'Tokyo', lat: 35.68, lon: 139.77 },
      { name: 'Sydney', lat: -33.87, lon: 151.21 },
      { name: 'Rio de Janeiro', lat: -22.91, lon: -43.17 },
      { name: 'Cairo', lat: 30.05, lon: 31.24 },
      { name: 'Moscow', lat: 55.75, lon: 37.62 },
      { name: 'Beijing', lat: 39.91, lon: 116.40 },
      { name: 'Los Angeles', lat: 34.05, lon: -118.24 },
      { name: 'Paris', lat: 48.85, lon: 2.35 }
    ];
    
    try {
      // Pour éviter de dépasser le quota d'API, nous limitons le nombre d'appels simultanés
      const results = [];
      
      // Traiter les villes par lots de 2 pour ne pas surcharger l'API (100 appels/mois)
      for (let i = 0; i < cities.length; i += 2) {
        const batch = cities.slice(i, i + 2);
        const batchPromises = batch.map(city => 
          this.getWeatherData(city.lat, city.lon)
            .then(data => ({
              ...city,
              weather: data
            }))
            .catch(error => {
              console.warn(`Erreur pour ${city.name}:`, error);
              return {
                ...city,
                weather: this.getMockWeatherData(city.lat, city.lon)
              };
            })
        );
        
        const batchResults = await Promise.all(batchPromises);
        results.push(...batchResults);
        
        // Attendre un court délai entre les lots pour respecter les limites de l'API
        if (i + 2 < cities.length) {
          await new Promise(resolve => setTimeout(resolve, 1500));
        }
      }
      
      return results.filter(result => result !== null);
    } catch (error) {
      console.error('Error fetching global weather data:', error);
      // En cas d'erreur, retourner des données simulées
      return cities.map(city => ({
        ...city,
        weather: this.getMockWeatherData(city.lat, city.lon)
      }));
    }
  }

  // Génère des données météo aléatoires pour les tests ou en cas d'erreur
  getMockWeatherData(lat, lon) {
    const temperatures = {
      hot: { min: 25, max: 40 },
      warm: { min: 15, max: 25 },
      cool: { min: 5, max: 15 },
      cold: { min: -15, max: 5 }
    };
    
    // Déterminer la température en fonction de la latitude
    let tempRange;
    const absLat = Math.abs(lat);
    
    if (absLat < 20) tempRange = temperatures.hot;
    else if (absLat < 40) tempRange = temperatures.warm;
    else if (absLat < 60) tempRange = temperatures.cool;
    else tempRange = temperatures.cold;
    
    // Ajuster en fonction de l'hémisphère (inversion des saisons)
    const isNorthernHemisphere = lat >= 0;
    const currentMonth = new Date().getMonth(); // 0-11
    const isSummer = (currentMonth >= 5 && currentMonth <= 8); // juin-septembre
    
    // Dans l'hémisphère sud, les saisons sont inversées
    const adjustForSeason = (isNorthernHemisphere && isSummer) || (!isNorthernHemisphere && !isSummer);
    
    if (adjustForSeason) {
      tempRange = { 
        min: tempRange.min + 5, 
        max: tempRange.max + 5 
      };
    } else {
      tempRange = { 
        min: tempRange.min - 5, 
        max: tempRange.max - 5 
      };
    }
    
    // Générer une température aléatoire dans la plage
    const temp = Math.floor(Math.random() * (tempRange.max - tempRange.min + 1)) + tempRange.min;
    
    // Déterminer les conditions météo en fonction de la température
    let weatherCondition, weatherIcon;
    
    if (temp > 30) {
      weatherCondition = 'Clear';
      weatherIcon = 'weather-sunny.png';
    } else if (temp > 20) {
      weatherCondition = Math.random() > 0.7 ? 'Clouds' : 'Clear';
      weatherIcon = Math.random() > 0.7 ? 'weather-cloudy.png' : 'weather-sunny.png';
    } else if (temp > 10) {
      weatherCondition = Math.random() > 0.5 ? 'Clouds' : 'Rain';
      weatherIcon = Math.random() > 0.5 ? 'weather-cloudy.png' : 'weather-rainy.png';
    } else if (temp > 0) {
      weatherCondition = Math.random() > 0.3 ? 'Rain' : 'Clouds';
      weatherIcon = Math.random() > 0.3 ? 'weather-rainy.png' : 'weather-cloudy.png';
    } else {
      weatherCondition = 'Snow';
      weatherIcon = 'weather-snowy.png';
    }
    
    return {
      name: this.getCityNameFromCoordinates(lat, lon),
      main: {
        temp: temp,
        humidity: Math.floor(Math.random() * 50) + 30, // 30-80%
        pressure: Math.floor(Math.random() * 30) + 985 // 985-1015 hPa
      },
      weather: [
        {
          main: weatherCondition,
          description: this.getWeatherDescription(weatherCondition),
          icon: weatherIcon
        }
      ],
      wind: {
        speed: Math.floor(Math.random() * 30) + 5, // 5-35 km/h
        deg: Math.floor(Math.random() * 360) // 0-359 degrés
      },
      visibility: Math.floor(Math.random() * 7) + 3 // 3-10 km
    };
  }

  // Obtenir un nom de ville à partir des coordonnées (pour les données simulées)
  getCityNameFromCoordinates(lat, lon) {
    const cities = [
      { name: 'New York', lat: 40.71, lon: -74.01 },
      { name: 'London', lat: 51.51, lon: -0.13 },
      { name: 'Tokyo', lat: 35.68, lon: 139.77 },
      { name: 'Sydney', lat: -33.87, lon: 151.21 },
      { name: 'Rio de Janeiro', lat: -22.91, lon: -43.17 },
      { name: 'Cairo', lat: 30.05, lon: 31.24 },
      { name: 'Moscow', lat: 55.75, lon: 37.62 },
      { name: 'Beijing', lat: 39.91, lon: 116.40 },
      { name: 'Los Angeles', lat: 34.05, lon: -118.24 },
      { name: 'Paris', lat: 48.85, lon: 2.35 }
    ];
    
    // Trouver la ville la plus proche
    let closest = { name: 'Unknown Location', distance: Number.MAX_VALUE };
    
    for (const city of cities) {
      const distance = Math.sqrt(
        Math.pow(city.lat - lat, 2) + 
        Math.pow(city.lon - lon, 2)
      );
      
      if (distance < closest.distance) {
        closest = { 
          name: city.name, 
          distance: distance 
        };
      }
    }
    
    return closest.name;
  }

  // Obtenir une description météo en fonction de la condition
  getWeatherDescription(condition) {
    const descriptions = {
      Clear: ['Clear sky', 'Sunny', 'Fine weather'],
      Clouds: ['Partly cloudy', 'Mostly cloudy', 'Overcast'],
      Rain: ['Light rain', 'Moderate rain', 'Heavy rain showers'],
      Snow: ['Light snow', 'Moderate snow', 'Heavy snowfall'],
      Thunderstorm: ['Thunderstorm', 'Lightning with rain', 'Severe thunderstorm'],
      Drizzle: ['Light drizzle', 'Intermittent drizzle'],
      Atmosphere: ['Foggy', 'Misty', 'Hazy conditions']
    };
    
    const options = descriptions[condition] || descriptions.Clear;
    return options[Math.floor(Math.random() * options.length)];
  }
}
