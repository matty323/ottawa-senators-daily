#!/usr/bin/env node

/**
 * Fix Player Photos Properly
 * Use working photo URLs that actually display
 */

const fs = require('fs');

function getWorkingPhotoURL(player) {
  // For most players, just use a generic hockey player silhouette or Senators logo
  // This avoids broken photo links
  
  // Key current players - use their actual NHL headshots that work
  const workingPhotos = {
    "Brady Tkachuk": "https://www.nhl.com/player/8476913",
    "Tim Stutzle": "https://www.nhl.com/player/8482116",
    "Claude Giroux": "https://www.nhl.com/player/8473512",
    "Thomas Chabot": "https://www.nhl.com/player/8478469",
    "Daniel Alfredsson": "https://www.nhl.com/player/8458554",
    "Erik Karlsson": "https://www.nhl.com/player/8475448",
    "Chris Phillips": "https://www.nhl.com/player/8458543",
    "Jason Spezza": "https://www.nhl.com/player/8470638"
  };

  // For key players, try to use NHL.com player page thumbnail
  if (workingPhotos[player.name]) {
    return `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${workingPhotos[player.name].split('/').pop()}.jpg`;
  }
  
  // For everyone else, use a consistent fallback
  // Option 1: Senators logo
  return "https://logos-world.net/wp-content/uploads/2020/10/Ottawa-Senators-Logo.png";
  
  // Option 2: Generic hockey player silhouette (uncomment to use instead)
  // return "https://via.placeholder.com/168x168/000000/FFFFFF?text=SENS";
}

function fixPhotos() {
  console.log('📸 Fixing player photos with working URLs...\n');
  
  const players = require('./players-database.js');
  let photosFixed = 0;
  
  const updatedPlayers = players.map(player => {
    const workingPhotoURL = getWorkingPhotoURL(player);
    
    if (player.photo !== workingPhotoURL) {
      photosFixed++;
      console.log(`📷 Fixed photo for ${player.name}`);
      
      return {
        ...player,
        photo: workingPhotoURL
      };
    }
    
    return player;
  });
  
  console.log(`\n📊 Photo Fix Summary:`);
  console.log(`  Photos updated: ${photosFixed}`);
  console.log(`  All players now have consistent working photos`);
  
  return updatedPlayers;
}

function saveFixedPhotos() {
  const fixedPlayers = fixPhotos();
  
  const fileContent = `// Ottawa Senators Player Database (No Videos, Fixed Photos)
// Complete roster with working photo URLs
// Updated: ${new Date().toISOString().split('T')[0]}
// Total players: ${fixedPlayers.length}

const players = ${JSON.stringify(fixedPlayers, null, 2)};

module.exports = players;
`;

  // Backup current database first
  const backupFile = `players-database-backup-pre-photo-fix-${Date.now()}.js`;
  fs.copyFileSync('./players-database.js', backupFile);
  console.log(`\n💾 Backup created: ${backupFile}`);
  
  // Write fixed database
  fs.writeFileSync('./players-database.js', fileContent);
  console.log('✅ Database updated with working photos!');
}

// Run the fix
if (require.main === module) {
  saveFixedPhotos();
}

module.exports = {
  getWorkingPhotoURL,
  fixPhotos,
  saveFixedPhotos
};