const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  // Lance un navigateur headless
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigue vers votre URL
  await page.goto('https://samiab16.github.io/portfolio-openclassroom', {
    waitUntil: 'networkidle0', // Attend que toutes les requêtes réseau soient terminées
  });

  // Récupère le HTML rendu de la page
  const html = await page.content();

  // Écrit le HTML dans un fichier
  fs.writeFileSync('output.html', html);

  // Ferme le navigateur
  await browser.close();

  console.log('Le HTML complet a été généré et enregistré dans output.html');
})();