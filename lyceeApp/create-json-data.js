const fs = require('fs');

// Toutes les données JSON fournies par l'utilisateur
const data = `PASTE_YOUR_FULL_JSON_DATA_HERE`;

fs.writeFileSync('constants/lyceesData.json', data, 'utf8');
console.log('Fichier JSON créé avec succès!');
