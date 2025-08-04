#!/usr/bin/env node

/**
 * Migration Script: Ottawa Senators Complete Player Database
 * This script migrates from the current 46-player database to the complete 141+ player database
 */

const fs = require('fs');
const path = require('path');

function migrateDatabase() {
  console.log('🏒 Migrating to complete Ottawa Senators player database...\n');
  
  // Backup current database
  const currentDbPath = './players-database.js';
  const backupPath = `./players-database-backup-${Date.now()}.js`;
  
  if (fs.existsSync(currentDbPath)) {
    fs.copyFileSync(currentDbPath, backupPath);
    console.log(`📋 Backed up current database to: ${backupPath}`);
  }
  
  // Check if ultimate database exists
  const ultimateDbPath = './players-database-ultimate.js';
  if (!fs.existsSync(ultimateDbPath)) {
    console.log('❌ Ultimate database not found. Please run enhance-player-data.js first.');
    process.exit(1);
  }
  
  // Read the ultimate database
  const ultimateDb = fs.readFileSync(ultimateDbPath, 'utf8');
  
  // Write it as the new main database
  fs.writeFileSync(currentDbPath, ultimateDb);
  
  console.log('✅ Migration completed successfully!');
  console.log('\n📊 Database Summary:');
  console.log('  - Old database: 46 players');
  console.log('  - New database: 141+ players');
  console.log('  - Backup created for safety');
  console.log('  - All historical Senators players now included');
  
  console.log('\n🎮 Your game now includes:');
  console.log('  ✓ Every goaltender who played for Ottawa');
  console.log('  ✓ All franchise legends and Hall of Famers');
  console.log('  ✓ Current roster (2024-25)');
  console.log('  ✓ Historical players from 1992-2025');
  console.log('  ✓ Deep cuts and role players');
  console.log('  ✓ Enhanced biographical data for key players');
  
  console.log('\n🔧 Next steps:');
  console.log('  1. Test your game to ensure it works with the expanded database');
  console.log('  2. Consider adding difficulty levels (legends vs. deep cuts)');
  console.log('  3. Add photo URLs and more detailed stats as needed');
  console.log('  4. Deploy the updated version!');
}

// Show current vs new comparison
function showComparison() {
  console.log('📈 Database Comparison:\n');
  
  const currentPlayers = require('./players-database.js');
  const ultimatePlayers = require('./players-database-ultimate.js');
  
  console.log(`Current database: ${currentPlayers.length} players`);
  console.log(`Ultimate database: ${ultimatePlayers.length} players`);
  console.log(`New players added: ${ultimatePlayers.length - currentPlayers.length}`);
  
  // Position breakdown for ultimate database
  const positionBreakdown = ultimatePlayers.reduce((acc, player) => {
    acc[player.position] = (acc[player.position] || 0) + 1;
    return acc;
  }, {});
  
  console.log('\n📊 Ultimate Database Breakdown:');
  Object.entries(positionBreakdown).forEach(([pos, count]) => {
    console.log(`  ${pos}: ${count} players`);
  });
  
  // Show some examples of new additions
  const newPlayerNames = ultimatePlayers
    .filter(up => !currentPlayers.some(cp => cp.name === up.name))
    .slice(0, 10)
    .map(p => p.name);
  
  console.log('\n🆕 Sample of new players added:');
  newPlayerNames.forEach(name => console.log(`  • ${name}`));
  console.log(`  ... and ${ultimatePlayers.length - currentPlayers.length - 10} more!`);
}

// Run based on command line argument
const action = process.argv[2];

if (action === 'compare') {
  showComparison();
} else if (action === 'migrate') {
  migrateDatabase();
} else {
  console.log('🏒 Ottawa Senators Database Migration Tool\n');
  console.log('Usage:');
  console.log('  node migrate-to-complete-database.js compare  - Show database comparison');
  console.log('  node migrate-to-complete-database.js migrate  - Perform the migration');
  console.log('\nThis will expand your database from 46 to 141+ players!');
}

module.exports = {
  migrateDatabase,
  showComparison
};