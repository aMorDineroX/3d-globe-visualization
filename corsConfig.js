export const setupCorsProxy = (url) => {
    // Vérifier si l'URL est déjà locale
    if (url.startsWith('./') || url.startsWith('/')) {
      return url;
    }    
    // Si en développement local, utiliser le chemin local
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      // Extraire le nom de fichier de l'URL
      const filename = url.split('/').pop();
      return `/assets/textures/${filename}`;
    }    
    return url;
  };