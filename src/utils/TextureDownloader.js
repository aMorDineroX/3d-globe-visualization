/**
 * Utilitaire pour télécharger et sauvegarder les textures manquantes
 * Cet outil génère un script et des instructions pour télécharger les textures
 */

import { assetManager } from './AssetManager.js';

export class TextureDownloader {
  constructor() {
    this.cdnTextures = assetManager.cdnTextures;
    this.downloadQueue = [];
  }

  /**
   * Ajoute un bouton de téléchargement des textures à l'interface
   */
  createDownloadUI() {
    // Créer le bouton de téléchargement
    const btn = document.createElement('button');
    btn.textContent = '📥 Télécharger les textures';
    btn.style.position = 'absolute';
    btn.style.top = '20px';
    btn.style.left = '20px';
    btn.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    btn.style.color = 'white';
    btn.style.border = 'none';
    btn.style.borderRadius = '5px';
    btn.style.padding = '10px 15px';
    btn.style.fontSize = '14px';
    btn.style.cursor = 'pointer';
    btn.style.zIndex = '1000';
    
    // Ajouter un gestionnaire d'événements
    btn.addEventListener('click', () => {
      this.showDownloadInstructions();
    });
    
    document.body.appendChild(btn);
  }

  /**
   * Affiche les instructions de téléchargement des textures
   */
  showDownloadInstructions() {
    // Créer un modèle pour les instructions
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.width = '80%';
    modal.style.maxWidth = '800px';
    modal.style.maxHeight = '80vh';
    modal.style.backgroundColor = '#333';
    modal.style.color = 'white';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 5px 15px rgba(0,0,0,0.5)';
    modal.style.padding = '20px';
    modal.style.zIndex = '1001';
    modal.style.overflowY = 'auto';
    
    // Ajouter un titre
    const title = document.createElement('h2');
    title.textContent = 'Instructions de téléchargement des textures';
    title.style.marginTop = '0';
    modal.appendChild(title);
    
    // Ajouter les instructions
    const instructions = document.createElement('div');
    instructions.innerHTML = `
      <p>Pour télécharger les textures nécessaires au globe, suivez ces étapes:</p>
      <ol>
        <li>Créez un dossier <code>assets/textures</code> à la racine du projet s'il n'existe pas déjà</li>
        <li>Téléchargez les textures suivantes et placez-les dans ce dossier:</li>
      </ol>
    `;
    modal.appendChild(instructions);
    
    // Liste des textures à télécharger
    const textureList = document.createElement('ul');
    textureList.style.listStyleType = 'none';
    textureList.style.padding = '0';
    textureList.style.marginBottom = '20px';
    
    Object.entries(this.cdnTextures).forEach(([name, url]) => {
      const item = document.createElement('li');
      item.style.marginBottom = '10px';
      item.style.padding = '10px';
      item.style.backgroundColor = 'rgba(255,255,255,0.1)';
      item.style.borderRadius = '5px';
      
      item.innerHTML = `
        <div><strong>${name}</strong></div>
        <div style="word-break: break-all; margin: 5px 0;"><a href="${url}" target="_blank" style="color: #4db8ff;">${url}</a></div>
        <button class="download-btn" data-name="${name}" data-url="${url}" style="background-color: #4CAF50; border: none; color: white; padding: 5px 10px; border-radius: 3px; cursor: pointer;">Télécharger</button>
      `;
      
      textureList.appendChild(item);
    });
    
    modal.appendChild(textureList);
    
    // Ajouter un lien de téléchargement pour toutes les textures
    const downloadAllBtn = document.createElement('button');
    downloadAllBtn.textContent = 'Télécharger toutes les textures (ZIP)';
    downloadAllBtn.style.backgroundColor = '#4CAF50';
    downloadAllBtn.style.color = 'white';
    downloadAllBtn.style.border = 'none';
    downloadAllBtn.style.padding = '10px 15px';
    downloadAllBtn.style.borderRadius = '5px';
    downloadAllBtn.style.cursor = 'pointer';
    downloadAllBtn.style.marginBottom = '20px';
    downloadAllBtn.style.width = '100%';
    
    downloadAllBtn.addEventListener('click', () => {
      this.generateTextureScript();
    });
    
    modal.appendChild(downloadAllBtn);
    
    // Ajouter un avertissement sur les CORS
    const corsWarning = document.createElement('div');
    corsWarning.style.backgroundColor = 'rgba(255, 200, 0, 0.2)';
    corsWarning.style.padding = '10px';
    corsWarning.style.borderRadius = '5px';
    corsWarning.style.marginBottom = '20px';
    
    corsWarning.innerHTML = `
      <h3 style="margin-top: 0;">⚠️ Avertissement CORS</h3>
      <p>Certaines textures peuvent être bloquées par la politique CORS lorsqu'elles sont chargées depuis des domaines externes. 
      C'est pourquoi il est recommandé de les télécharger et de les utiliser localement.</p>
    `;
    
    modal.appendChild(corsWarning);
    
    // Ajouter un bouton de fermeture
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Fermer';
    closeBtn.style.backgroundColor = '#f44336';
    closeBtn.style.color = 'white';
    closeBtn.style.border = 'none';
    closeBtn.style.padding = '10px 15px';
    closeBtn.style.borderRadius = '5px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.float = 'right';
    
    closeBtn.addEventListener('click', () => {
      document.body.removeChild(modal);
      document.body.removeChild(overlay);
    });
    
    modal.appendChild(closeBtn);
    
    // Ajouter un overlay pour griser le fond
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.zIndex = '1000';
    
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
    
    // Ajouter les événements pour les boutons de téléchargement
    document.querySelectorAll('.download-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const name = e.target.getAttribute('data-name');
        const url = e.target.getAttribute('data-url');
        this.downloadTexture(url, name);
      });
    });
  }

  /**
   * Télécharge une texture spécifique
   */
  downloadTexture(url, fileName) {
    // Créer un lien de téléchargement
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    
    // Cliquer sur le lien pour démarrer le téléchargement
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    console.log(`Téléchargement de ${fileName} depuis ${url}`);
    
    // Note: Cette méthode peut ne pas fonctionner pour toutes les URLs en raison des restrictions CORS
    // Pour ces cas, l'utilisateur devra télécharger manuellement le fichier
  }

  /**
   * Génère un script pour télécharger toutes les textures
   */
  generateTextureScript() {
    let scriptContent = '#!/bin/bash\n\n';
    scriptContent += '# Script de téléchargement des textures pour le globe\n';
    scriptContent += '# Créé automatiquement par TextureDownloader.js\n\n';
    
    scriptContent += '# Créer le répertoire textures s\'il n\'existe pas\n';
    scriptContent += 'mkdir -p assets/textures\n\n';
    
    scriptContent += '# Télécharger les textures\n';
    scriptContent += 'echo "Téléchargement des textures..."\n\n';
    
    Object.entries(this.cdnTextures).forEach(([name, url]) => {
      scriptContent += `echo "Téléchargement de ${name}..."\n`;
      scriptContent += `curl -L "${url}" -o "assets/textures/${name}"\n`;
    });
    
    scriptContent += '\necho "Téléchargement terminé!"\n';
    
    // Créer un blob et un lien de téléchargement
    const blob = new Blob([scriptContent], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'download_textures.sh';
    
    // Cliquer sur le lien pour démarrer le téléchargement
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Libérer l'URL
    URL.revokeObjectURL(a.href);
    
    console.log('Script de téléchargement généré');
    
    // Générer aussi une version Windows (batch)
    let batchContent = '@echo off\n\n';
    batchContent += 'REM Script de téléchargement des textures pour le globe\n';
    batchContent += 'REM Créé automatiquement par TextureDownloader.js\n\n';
    
    batchContent += 'REM Créer le répertoire textures s\'il n\'existe pas\n';
    batchContent += 'if not exist assets\\textures mkdir assets\\textures\n\n';
    
    batchContent += 'REM Télécharger les textures\n';
    batchContent += 'echo Téléchargement des textures...\n\n';
    
    Object.entries(this.cdnTextures).forEach(([name, url]) => {
      batchContent += `echo Téléchargement de ${name}...\n`;
      batchContent += `curl -L "${url}" -o "assets\\textures\\${name}"\n`;
    });
    
    batchContent += '\necho Téléchargement terminé!\n';
    batchContent += 'pause\n';
    
    // Créer un blob et un lien de téléchargement
    const batchBlob = new Blob([batchContent], { type: 'text/plain' });
    const batchLink = document.createElement('a');
    batchLink.href = URL.createObjectURL(batchBlob);
    batchLink.download = 'download_textures.bat';
    
    // Cliquer sur le lien pour démarrer le téléchargement
    document.body.appendChild(batchLink);
    batchLink.click();
    document.body.removeChild(batchLink);
    
    // Libérer l'URL
    URL.revokeObjectURL(batchLink.href);
    
    console.log('Script de téléchargement Windows généré');
  }
}

// Export d'une instance pour utilisation simple
export const textureDownloader = new TextureDownloader();

// Ajouter l'interface de téléchargement au chargement du DOM
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    textureDownloader.createDownloadUI();
  });
}
