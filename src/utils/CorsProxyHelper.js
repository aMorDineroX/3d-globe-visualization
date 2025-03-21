/**
 * Utilitaire pour gérer les problèmes CORS lors du chargement de textures
 * et d'autres ressources externes
 */

export class CorsProxyHelper {
  constructor() {
    // Liste des proxies CORS disponibles - ajout de nouveaux proxies
    this.corsProxies = [
      'https://corsproxy.io/?',            // corsProxy.io
      'https://cors-anywhere.herokuapp.com/', // CORS Anywhere
      'https://cors.bridged.cc/',          // CORS Bridged
      'https://api.allorigins.win/raw?url=', // AllOrigins
      'https://proxy.cors.sh/',            // CORS.sh
      'https://thingproxy.freeboard.io/fetch/', // ThingProxy
      'https://yacdn.org/proxy/'           // YaCDN
    ];
    
    // Index du proxy actuel
    this.currentProxyIndex = 0;
    
    // Liste des domaines qui nécessitent un proxy CORS
    this.corsProblematicDomains = [
      'svs.gsfc.nasa.gov',
      'eoimages.gsfc.nasa.gov',
      'api.openweathermap.org',
      'api.weatherstack.com',
      'nasa.gov',
      'githubusercontent.com',
      'raw.githubusercontent.com'
    ];
    
    // Tentatives maximales par proxy
    this.maxProxyAttempts = 2;
    
    // Map pour suivre les échecs par proxy
    this.proxyFailures = new Map();
  }
  
  /**
   * Vérifie si une URL nécessite un proxy CORS
   * @param {string} url - L'URL à vérifier
   * @returns {boolean} - True si l'URL nécessite un proxy
   */
  needsProxy(url) {
    try {
      const urlObj = new URL(url);
      return this.corsProblematicDomains.some(domain => urlObj.hostname.includes(domain));
    } catch (e) {
      return false;
    }
  }
  
  /**
   * Applique un proxy CORS à une URL si nécessaire
   * @param {string} url - L'URL d'origine
   * @returns {string} - L'URL avec proxy si nécessaire
   */
  applyProxy(url) {
    if (!this.needsProxy(url)) {
      return url;
    }
    
    // Choisir le meilleur proxy (celui avec le moins d'échecs)
    this.selectBestProxy();
    
    return `${this.corsProxies[this.currentProxyIndex]}${encodeURIComponent(url)}`;
  }
  
  /**
   * Sélectionne le meilleur proxy basé sur l'historique des échecs
   */
  selectBestProxy() {
    let minFailures = Infinity;
    let bestProxyIndex = 0;
    
    for (let i = 0; i < this.corsProxies.length; i++) {
      const failures = this.proxyFailures.get(i) || 0;
      if (failures < minFailures) {
        minFailures = failures;
        bestProxyIndex = i;
      }
    }
    
    // Si tous les proxies ont trop d'échecs, réinitialiser le compteur
    const allProxiesFailing = Array.from(this.proxyFailures.values())
      .every(failures => failures >= this.maxProxyAttempts);
    
    if (allProxiesFailing) {
      console.log("Tous les proxies CORS ont échoué, réinitialisation des compteurs");
      this.proxyFailures.clear();
      bestProxyIndex = 0;
    }
    
    this.currentProxyIndex = bestProxyIndex;
    return this.corsProxies[this.currentProxyIndex];
  }
  
  /**
   * Change le proxy CORS actuel (en cas d'échec d'un proxy)
   */
  rotateProxy() {
    // Incrémenter le compteur d'échecs pour le proxy actuel
    const failures = this.proxyFailures.get(this.currentProxyIndex) || 0;
    this.proxyFailures.set(this.currentProxyIndex, failures + 1);
    
    // Passer au proxy suivant
    this.currentProxyIndex = (this.currentProxyIndex + 1) % this.corsProxies.length;
    console.log(`Changement de proxy CORS: utilisation de ${this.corsProxies[this.currentProxyIndex]}`);
    return this.corsProxies[this.currentProxyIndex];
  }
  
  /**
   * Tente de charger une ressource avec plusieurs proxies CORS si nécessaire
   * @param {function} loadFunction - Fonction de chargement qui retourne une Promise
   * @param {string} url - URL de la ressource à charger
   * @returns {Promise} - Promise qui résout avec la ressource chargée
   */
  async tryLoadWithProxy(loadFunction, url) {
    // Si l'URL ne nécessite pas de proxy, essayons d'abord directement
    if (!this.needsProxy(url)) {
      try {
        return await loadFunction(url);
      } catch (error) {
        console.warn(`Échec du chargement direct de ${url}, tentative avec proxy CORS...`);
      }
    }
    
    // Essayer tous les proxies disponibles
    const initialProxyIndex = this.currentProxyIndex;
    let attemptsCount = 0;
    const maxAttempts = this.corsProxies.length * 2; // Essayer chaque proxy jusqu'à 2 fois
    
    while (attemptsCount < maxAttempts) {
      const currentProxy = this.corsProxies[this.currentProxyIndex];
      const proxiedUrl = `${currentProxy}${encodeURIComponent(url)}`;
      
      try {
        console.log(`Tentative de chargement via proxy (${attemptsCount+1}/${maxAttempts}): ${currentProxy}`);
        return await loadFunction(proxiedUrl);
      } catch (error) {
        console.warn(`Échec avec le proxy ${currentProxy}: ${error.message}`);
        this.rotateProxy();
        attemptsCount++;
        
        // Petite pause entre les tentatives pour éviter les blocages
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    }
    
    // Si tous les proxies échouent, essayer une dernière fois avec les méthodes alternatives
    try {
      console.log("Tentative de chargement avec méthode alternative (no-cors)...");
      const response = await fetch(url, { mode: 'no-cors' });
      // Créer un blob URL à partir de la réponse
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      return await loadFunction(blobUrl);
    } catch (error) {
      console.error("Méthode alternative échouée:", error);
    }
    
    // Si tous les proxies échouent, lancer une erreur
    throw new Error(`Impossible de charger ${url} même avec des proxies CORS`);
  }
}

// Export d'une instance pour utilisation simple
export const corsProxyHelper = new CorsProxyHelper();
