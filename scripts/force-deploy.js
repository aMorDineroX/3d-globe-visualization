const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Fonction pour exécuter une commande shell et afficher sa sortie
function runCommand(command) {
  console.log(`Exécution de: ${command}`);
  try {
    const output = execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`Erreur lors de l'exécution de la commande: ${error.message}`);
    return false;
  }
}

// Script principal
async function main() {
  console.log("📦 Déploiement FORCÉ sur GitHub Pages (mode urgence)");
  console.log("====================================================");
  console.log("⚠️ Ce script déploie le contenu de ./dist même à partir de la branche gh-pages");
  
  try {
    // S'assurer que le dossier dist existe
    if (!fs.existsSync(path.join(__dirname, '../dist'))) {
      console.log("❌ Le dossier dist n'existe pas. Lancement de la construction...");
      runCommand('npm run build');
      
      if (!fs.existsSync(path.join(__dirname, '../dist'))) {
        console.error("❌ Échec de la construction. Vérifiez les erreurs ci-dessus.");
        process.exit(1);
      }
    }
    
    console.log("📋 Préparation des fichiers pour GitHub Pages...");
    
    // Créer un répertoire temporaire pour le déploiement
    const deployDir = path.join(__dirname, '../.gh-pages-deploy');
    if (fs.existsSync(deployDir)) {
      // Nettoyage si le répertoire existe déjà
      fs.rmSync(deployDir, { recursive: true, force: true });
    }
    fs.mkdirSync(deployDir, { recursive: true });
    
    // Copier le contenu de dist vers le répertoire de déploiement
    console.log("📦 Copie des fichiers de build...");
    
    // Sur Windows, utiliser xcopy
    if (process.platform === 'win32') {
      runCommand(`xcopy .\\dist\\* "${deployDir}\\" /E /Y`);
    } else {
      runCommand(`cp -R ./dist/* "${deployDir}/"`);
    }
    
    // Ajouter un fichier .nojekyll
    fs.writeFileSync(path.join(deployDir, '.nojekyll'), '');
    
    // Initialiser un nouveau repo git dans le répertoire de déploiement
    console.log("🔄 Initialisation d'un nouveau dépôt Git pour le déploiement...");
    if (!runCommand(`cd "${deployDir}" && git init`)) {
      console.error("❌ Échec de l'initialisation du dépôt Git.");
      process.exit(1);
    }
    
    // Ajouter tous les fichiers au nouveau repo
    console.log("➕ Ajout des fichiers au dépôt Git...");
    if (!runCommand(`cd "${deployDir}" && git add .`)) {
      console.error("❌ Échec de l'ajout des fichiers.");
      process.exit(1);
    }
    
    // Configurer l'utilisateur Git si nécessaire
    try {
      execSync('git config user.email');
    } catch (error) {
      console.log("⚙️ Configuration de l'utilisateur Git pour le déploiement...");
      runCommand('git config --global user.email "github-actions@github.com"');
      runCommand('git config --global user.name "GitHub Actions"');
    }
    
    // Créer un commit
    console.log("📝 Création d'un commit de déploiement...");
    if (!runCommand(`cd "${deployDir}" && git commit -m "Déploiement sur GitHub Pages (forcé)"`)) {
      console.error("❌ Échec de la création du commit.");
      process.exit(1);
    }
    
    // Obtenir l'URL du dépôt distant
    let remoteUrl;
    try {
      remoteUrl = execSync('git remote get-url origin').toString().trim();
    } catch (error) {
      console.error("❌ Impossible de déterminer l'URL du dépôt distant.");
      process.exit(1);
    }
    
    // Ajouter le dépôt distant
    console.log("🔄 Configuration du dépôt distant...");
    if (!runCommand(`cd "${deployDir}" && git remote add origin ${remoteUrl}`)) {
      console.error("❌ Échec de l'ajout du dépôt distant.");
      process.exit(1);
    }
    
    // Pousser vers GitHub
    console.log("☁️ Envoi sur GitHub (force push)...");
    if (!runCommand(`cd "${deployDir}" && git push -f origin master:gh-pages`)) {
      console.error("❌ Échec de l'envoi sur GitHub.");
      process.exit(1);
    }
    
    // Nettoyage
    console.log("🧹 Nettoyage après déploiement...");
    fs.rmSync(deployDir, { recursive: true, force: true });
    
    console.log("✅ Déploiement FORCÉ terminé avec succès!");
    console.log("🌐 URL: https://amordinerox.github.io/3d-globe-visualization/");
    console.log("\n⚠️ N'oubliez pas de revenir sur votre branche principale dès que possible.");
    console.log("Pour ce faire, exécutez: npm run fix-branch");
    
  } catch (error) {
    console.error("❌ Erreur lors du déploiement:", error);
    process.exit(1);
  }
}

// Exécution du script
main();
