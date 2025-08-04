#!/usr/bin/env node

/**
 * Remove Video Functionality
 * This script removes all YouTube video functionality and cleans up the database
 */

const fs = require('fs');

function removeVideosFromDatabase() {
  console.log('🧹 Removing all video functionality from player database...\n');
  
  const players = require('./players-database.js');
  let videosRemoved = 0;
  
  // Remove videos from all players
  const cleanedPlayers = players.map(player => {
    if (player.videos) {
      videosRemoved += player.videos.length;
      console.log(`❌ Removed ${player.videos.length} video(s) from ${player.name}`);
      
      // Create new player object without videos
      const { videos, ...playerWithoutVideos } = player;
      return playerWithoutVideos;
    }
    return player;
  });
  
  console.log(`\n📊 Cleanup Summary:`);
  console.log(`  Total videos removed: ${videosRemoved}`);
  console.log(`  Players cleaned: ${players.filter(p => p.videos).length}`);
  console.log(`  Database now video-free!`);
  
  return cleanedPlayers;
}

function saveCleanDatabase() {
  const cleanedPlayers = removeVideosFromDatabase();
  
  const fileContent = `// Ottawa Senators Player Database (Video-Free)
// Complete roster without YouTube video functionality
// Updated: ${new Date().toISOString().split('T')[0]}
// Total players: ${cleanedPlayers.length}

const players = ${JSON.stringify(cleanedPlayers, null, 2)};

module.exports = players;
`;

  // Backup current database first
  const backupFile = `players-database-backup-pre-video-removal-${Date.now()}.js`;
  fs.copyFileSync('./players-database.js', backupFile);
  console.log(`\n💾 Backup created: ${backupFile}`);
  
  // Write cleaned database
  fs.writeFileSync('./players-database.js', fileContent);
  console.log('✅ Database cleaned - all videos removed!');
}

// Run the cleanup
if (require.main === module) {
  saveCleanDatabase();
}

module.exports = {
  removeVideosFromDatabase,
  saveCleanDatabase
};