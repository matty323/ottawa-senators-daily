const express = require('express');
const moment = require('moment');
const path = require('path');
const players = require('./players-database');

const app = express();
const PORT = process.env.PORT || 3333;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Game state storage (in production, use Redis or database)
const gameStates = new Map();

// Function to get player of the day based on date
function getPlayerOfTheDay() {
  const today = moment().startOf('day');
  const dayOfYear = today.dayOfYear();
  const playerIndex = dayOfYear % players.length;
  return players[playerIndex];
}

// Function to get random player (for testing)
function getRandomPlayer() {
  return players[Math.floor(Math.random() * players.length)];
}

// Initialize or get game state for a session
function getGameState(sessionId) {
  if (!gameStates.has(sessionId)) {
    const targetPlayer = getPlayerOfTheDay();
    gameStates.set(sessionId, {
      targetPlayer: targetPlayer,
      currentClue: 0,
      attempts: [],
      gameWon: false,
      gameOver: false,
      startTime: new Date()
    });
  }
  return gameStates.get(sessionId);
}

// Main game route
app.get('/', (req, res) => {
  const sessionId = req.ip + moment().format('YYYY-MM-DD'); // Simple session based on IP and date
  const gameState = getGameState(sessionId);
  const today = moment().format('MMMM Do, YYYY');
  
  // Only show clues up to current clue index
  const visibleClues = gameState.targetPlayer.clues.slice(0, gameState.currentClue + 1);
  
  res.render('sensdle', {
    date: today,
    gameState: gameState,
    clues: visibleClues,
    playerNames: players.map(p => p.name), // For autocomplete
    totalPlayers: players.length
  });
});

// API endpoint to make a guess
app.post('/api/guess', (req, res) => {
  const { playerName } = req.body;
  const sessionId = req.ip + moment().format('YYYY-MM-DD');
  const gameState = getGameState(sessionId);
  
  if (gameState.gameOver) {
    return res.json({ success: false, message: 'Game is already over!' });
  }
  
  // Find the guessed player
  const guessedPlayer = players.find(p => 
    p.name.toLowerCase() === playerName.toLowerCase()
  );
  
  if (!guessedPlayer) {
    return res.json({ success: false, message: 'Player not found!' });
  }
  
  // Check if already guessed
  if (gameState.attempts.some(attempt => attempt.player.id === guessedPlayer.id)) {
    return res.json({ success: false, message: 'You already guessed this player!' });
  }
  
  // Add attempt
  const isCorrect = guessedPlayer.id === gameState.targetPlayer.id;
  const attempt = {
    player: guessedPlayer,
    correct: isCorrect,
    timestamp: new Date()
  };
  
  gameState.attempts.push(attempt);
  
  if (isCorrect) {
    gameState.gameWon = true;
    gameState.gameOver = true;
    return res.json({ 
      success: true, 
      correct: true, 
      message: `🎉 Correct! You guessed ${guessedPlayer.name}!`,
      attempts: gameState.attempts.length,
      targetPlayer: gameState.targetPlayer
    });
  } else {
    // Wrong guess - reveal next clue if available
    if (gameState.currentClue < gameState.targetPlayer.clues.length - 1) {
      gameState.currentClue++;
    }
    
    // Game over if all clues revealed and max attempts reached (6 attempts)
    if (gameState.attempts.length >= 6) {
      gameState.gameOver = true;
      return res.json({ 
        success: true, 
        correct: false, 
        gameOver: true,
        message: `Game Over! The answer was ${gameState.targetPlayer.name}`,
        targetPlayer: gameState.targetPlayer
      });
    }
    
    return res.json({ 
      success: true, 
      correct: false, 
      message: `Incorrect! Here's another clue...`,
      newClue: gameState.targetPlayer.clues[gameState.currentClue]
    });
  }
});

// API endpoint to get hint/clue comparison
app.post('/api/hint', (req, res) => {
  const { playerName } = req.body;
  const sessionId = req.ip + moment().format('YYYY-MM-DD');
  const gameState = getGameState(sessionId);
  
  const guessedPlayer = players.find(p => 
    p.name.toLowerCase() === playerName.toLowerCase()
  );
  
  if (!guessedPlayer) {
    return res.json({ success: false, message: 'Player not found!' });
  }
  
  const target = gameState.targetPlayer;
  const hints = {
    position: {
      value: guessedPlayer.position,
      match: guessedPlayer.position === target.position ? 'correct' : 'incorrect'
    },
    birthYear: {
      value: guessedPlayer.birthYear,
      match: guessedPlayer.birthYear === target.birthYear ? 'correct' : 
             Math.abs(guessedPlayer.birthYear - target.birthYear) <= 2 ? 'close' : 'incorrect'
    },
    teams: {
      value: guessedPlayer.teams,
      match: guessedPlayer.teams.some(team => target.teams.includes(team)) ? 'correct' : 'incorrect'
    }
  };
  
  res.json({ success: true, hints });
});

// API endpoint to get all players for autocomplete
app.get('/api/players', (req, res) => {
  res.json(players.map(p => ({
    id: p.id,
    name: p.name,
    position: p.position,
    yearsActive: p.yearsActive
  })));
});

// API endpoint to get today's answer (for debugging)
app.get('/api/answer', (req, res) => {
  const player = getPlayerOfTheDay();
  res.json({ answer: player.name, clues: player.clues });
});

// Reset game route (for testing)
app.post('/api/reset', (req, res) => {
  const sessionId = req.ip + moment().format('YYYY-MM-DD');
  gameStates.delete(sessionId);
  res.json({ success: true, message: 'Game reset!' });
});

app.listen(PORT, () => {
  console.log(`🏒 SENSDLE - Ottawa Senators guessing game running on port ${PORT}`);
  console.log(`📅 Today's mystery player: ${getPlayerOfTheDay().name}`);
  console.log(`🎯 Total players in database: ${players.length}`);
});