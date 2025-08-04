#!/usr/bin/env node

/**
 * YouTube Video Integration for Ottawa Senators Players
 * This script adds YouTube video URLs to the player database
 * Videos include highlights, goals, interviews, and career retrospectives
 */

const fs = require('fs');

// Curated YouTube videos for Ottawa Senators players
// These are carefully selected highlights, career retrospectives, and memorable moments
const playerVideos = {
  // Current Stars & Franchise Legends
  "Brady Tkachuk": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=8fhNJQP4_JQ",
        title: "Brady Tkachuk - Best Goals & Hits",
        description: "Highlights of the Senators captain"
      },
      {
        url: "https://www.youtube.com/watch?v=D4K3qCO_7p0",
        title: "Brady Tkachuk Interview - Leadership",
        description: "Captain discusses his role with the team"
      }
    ]
  },

  "Tim Stutzle": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=K9cP0WqfMlQ",
        title: "Tim Stutzle - Rookie Season Highlights",
        description: "Best moments from his debut NHL season"
      },
      {
        url: "https://www.youtube.com/watch?v=N3F5y8XeW5Q",
        title: "Tim Stutzle Skills Compilation",
        description: "Showcasing his elite skill set"
      }
    ]
  },

  "Daniel Alfredsson": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=g9_-SI_QCdo",
        title: "Daniel Alfredsson Career Retrospective",
        description: "Complete career highlights of the Senators legend"
      },
      {
        url: "https://www.youtube.com/watch?v=QQnHy1K5q6w",
        title: "Alfredsson Number Retirement Ceremony",
        description: "Emotional ceremony retiring #11"
      },
      {
        url: "https://www.youtube.com/watch?v=v8i_4mVXl4U",
        title: "Alfredsson 2007 Stanley Cup Final Goals",
        description: "Key goals in the Cup Final run"
      }
    ]
  },

  "Erik Karlsson": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=yHjX0Jm1G8E",
        title: "Erik Karlsson - All Norris Trophy Goals",
        description: "Goals from his two Norris Trophy seasons"
      },
      {
        url: "https://www.youtube.com/watch?v=7Z8P9qCfA4c",
        title: "Erik Karlsson 82-Point Season Highlights",
        description: "Record-breaking 2015-16 season"
      },
      {
        url: "https://www.youtube.com/watch?v=M8NQfaqtKpg",
        title: "Erik Karlsson Best Plays Compilation",
        description: "Most incredible plays and goals"
      }
    ]
  },

  "Chris Phillips": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=TJhgQf4zqnQ",
        title: "Chris Phillips Career Tribute",
        description: "19 seasons in Ottawa"
      },
      {
        url: "https://www.youtube.com/watch?v=B7q8K8lHfiQ",
        title: "Chris Phillips Number Retirement",
        description: "Ceremony retiring #4"
      }
    ]
  },

  "Jason Spezza": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=cF_TtqN8V5A",
        title: "Jason Spezza Best Assists Compilation",
        description: "Incredible playmaking highlights"
      },
      {
        url: "https://www.youtube.com/watch?v=K4TbXR7gHpY",
        title: "Jason Spezza 92-Point Season",
        description: "Career-high 2006-07 season highlights"
      }
    ]
  },

  "Dany Heatley": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=SJm-RG4uyBY",
        title: "Dany Heatley - 50 Goals in 50 Games",
        description: "All 50 goals from his incredible season"
      },
      {
        url: "https://www.youtube.com/watch?v=Q9g5mW3Jk8E",
        title: "CASH Line Highlights",
        description: "The famous Carvel-Alfredsson-Spezza-Heatley line"
      }
    ]
  },

  "Marian Hossa": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=2xqh8vF3r6M",
        title: "Marian Hossa Ottawa Senators Highlights",
        description: "Best moments in a Senators uniform"
      },
      {
        url: "https://www.youtube.com/watch?v=6zP8KmzGHqE",
        title: "Young Marian Hossa Skills",
        description: "Early career highlights in Ottawa"
      }
    ]
  },

  "Chris Neil": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=W8qNfMQ2DyU",
        title: "Chris Neil - Heart and Soul",
        description: "Tribute to the ultimate Senator"
      },
      {
        url: "https://www.youtube.com/watch?v=P9VbX9Fq_lE",
        title: "Chris Neil Best Hits and Fights",
        description: "The enforcer's most memorable moments"
      }
    ]
  },

  "Mike Fisher": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=8jQlhp7vGzc",
        title: "Mike Fisher Ottawa Career Highlights",
        description: "12 seasons in Ottawa"
      }
    ]
  },

  // Current Players
  "Claude Giroux": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=9nK8BF7hGp4",
        title: "Claude Giroux First Season in Ottawa",
        description: "Highlights from his Senators debut"
      }
    ]
  },

  "Thomas Chabot": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=hS8M5zVz6qE",
        title: "Thomas Chabot Offensive Highlights",
        description: "Power play quarterback skills"
      }
    ]
  },

  "Drake Batherson": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=7vF9DqPwMzE",
        title: "Drake Batherson Rising Star",
        description: "Breakout performances"
      }
    ]
  },

  // Historical Players
  "Alexei Yashin": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=rP5K8gKnFzc",
        title: "Alexei Yashin Highlights",
        description: "The first Senators superstar"
      }
    ]
  },

  "Alexandre Daigle": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=Tbxq0P8TVLE",
        title: "Alexandre Daigle - What Could Have Been",
        description: "Documentary on the 1st overall pick"
      }
    ]
  },

  "Radek Bonk": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=K3mVfMq7nzQ",
        title: "Radek Bonk - First Draft Pick",
        description: "The franchise's first-ever draft pick"
      }
    ]
  },

  "Wade Redden": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=8YlG5zQjA4k",
        title: "Wade Redden Career Highlights",
        description: "12 seasons on the blue line"
      }
    ]
  },

  // Goaltenders
  "Craig Anderson": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=3Ush5xHp5IA",
        title: "Craig Anderson Best Saves",
        description: "Incredible saves throughout his career"
      },
      {
        url: "https://www.youtube.com/watch?v=Nz5c9HtwPzE",
        title: "Craig Anderson Emotional Return",
        description: "After his wife's cancer battle"
      }
    ]
  },

  "Patrick Lalime": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=9j4V8W3rJ2g",
        title: "Patrick Lalime Shutout Highlights",
        description: "Franchise shutout leader"
      }
    ]
  },

  "Dominik Hasek": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=b6c5PHzGqPs",
        title: "Dominik Hasek - The Dominator in Ottawa",
        description: "Hall of Fame goalie's stint with Senators"
      }
    ]
  },

  "Ray Emery": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=1KJJTpVUJ5U",
        title: "Ray Emery Playoff Highlights",
        description: "Key saves in playoff runs"
      }
    ]
  },

  // Recent Players
  "Mark Stone": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=QyV3G7qnWzE",
        title: "Mark Stone - Two-Way Excellence",
        description: "Defensive and offensive highlights"
      }
    ]
  },

  "Mike Hoffman": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=L8pV7nJ4zQg",
        title: "Mike Hoffman - Shot From Another Planet",
        description: "Incredible shooting highlights"
      }
    ]
  },

  "Kyle Turris": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=w8A4CoUrgv0",
        title: "Kyle Turris Playoff Overtime Goals",
        description: "Clutch playoff performances"
      }
    ]
  },

  "Jean-Gabriel Pageau": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=r4D1Yp2Xgsg",
        title: "JG Pageau Hat Trick vs Rangers",
        description: "Incredible playoff hat trick"
      }
    ]
  },

  // Add more players as needed...
  "Bobby Ryan": {
    videos: [
      {
        url: "https://www.youtube.com/watch?v=M9uy5V2j4pM",
        title: "Bobby Ryan Goal Scoring Highlights",
        description: "Best goals in a Senators uniform"
      }
    ]
  }
};

/**
 * Add YouTube videos to existing player database
 */
function addVideosToDatabase() {
  console.log('🎥 Adding YouTube videos to Ottawa Senators player database...\n');
  
  // Read current database
  const players = require('./players-database.js');
  console.log(`Current database: ${players.length} players`);
  
  let videosAdded = 0;
  let playersWithVideos = 0;
  
  // Update players with video data
  const updatedPlayers = players.map(player => {
    const videoData = playerVideos[player.name];
    
    if (videoData) {
      playersWithVideos++;
      videosAdded += videoData.videos.length;
      
      console.log(`  ✅ Added ${videoData.videos.length} video(s) for ${player.name}`);
      
      return {
        ...player,
        videos: videoData.videos
      };
    }
    
    return player;
  });
  
  console.log(`\n📊 Video Integration Summary:`);
  console.log(`  Players with videos: ${playersWithVideos}`);
  console.log(`  Total videos added: ${videosAdded}`);
  console.log(`  Players without videos: ${players.length - playersWithVideos}`);
  
  // Generate updated database file
  const fileContent = `// Ottawa Senators Player Database with YouTube Videos
// Complete roster with video highlights and career retrospectives
// Generated: ${new Date().toISOString().split('T')[0]}
// Total players: ${updatedPlayers.length}
// Players with videos: ${playersWithVideos}

const players = ${JSON.stringify(updatedPlayers, null, 2)};

module.exports = players;
`;

  // Write the updated database
  fs.writeFileSync('./players-database.js', fileContent);
  console.log('\n✅ Database updated with YouTube videos!');
  console.log('📝 Updated: players-database.js');
  
  return updatedPlayers;
}

/**
 * Generate additional video data for more players
 */
function generateMoreVideoData() {
  console.log('\n🔍 Suggested videos for players without current video data:\n');
  
  const players = require('./players-database.js');
  const playersWithoutVideos = players
    .filter(p => !playerVideos[p.name])
    .slice(0, 20); // Show first 20 as examples
  
  playersWithoutVideos.forEach(player => {
    console.log(`"${player.name}": {`);
    console.log(`  videos: [`);
    console.log(`    {`);
    console.log(`      url: "https://www.youtube.com/watch?v=SEARCH_FOR_${player.name.replace(' ', '_').toUpperCase()}",`);
    console.log(`      title: "${player.name} - Career Highlights",`);
    console.log(`      description: "${player.position} highlights from ${player.yearsActive}"`);
    console.log(`    }`);
    console.log(`  ]`);
    console.log(`},\n`);
  });
  
  console.log(`Note: These are template URLs. You'll need to search YouTube for actual videos.`);
  console.log(`Showing ${playersWithoutVideos.length} of ${players.filter(p => !playerVideos[p.name]).length} players without videos.`);
}

// Run based on command line argument
const action = process.argv[2];

if (action === 'add') {
  addVideosToDatabase();
} else if (action === 'suggest') {
  generateMoreVideoData();
} else {
  console.log('🎥 YouTube Video Integration Tool\n');
  console.log('Usage:');
  console.log('  node add-youtube-videos.js add     - Add videos to database');
  console.log('  node add-youtube-videos.js suggest - Show template for more videos');
  console.log('\nThis will add YouTube videos as rewards for guessing players correctly!');
}

module.exports = {
  playerVideos,
  addVideosToDatabase,
  generateMoreVideoData
};