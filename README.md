# 🏒 SENSDLE - Ottawa Senators Guessing Game

A Wordle-inspired daily guessing game featuring Ottawa Senators players past and present! Can you guess the mystery Senator using progressive clues?

## 🎯 How to Play

1. **Objective**: Guess the mystery Ottawa Senators player using the clues provided
2. **Attempts**: You have 6 attempts to guess correctly
3. **Clues**: Start with one clue - each wrong guess reveals another clue
4. **Hints**: Use the 💡 hint button to compare your guess with the target player
5. **Daily Challenge**: A new mystery player every day!

## 🏆 Features

- **16+ Historical & Current Players** including legends like Daniel Alfredsson, Erik Karlsson, Chris Phillips, and current stars like Brady Tkachuk and Tim Stützle
- **Progressive Clue System** with 5 unique clues per player
- **Smart Hint System** that compares position, birth year, and team history
- **Autocomplete Search** with all player names
- **Responsive Design** that works on desktop and mobile
- **Daily Rotation** - new mystery player each day
- **Game Statistics** tracking attempts and progress

## 🎮 Game Mechanics

### Clue Examples:
- Player achievements and records
- Physical characteristics and position
- Draft information and career highlights
- Team history and memorable moments
- Personal background and birthplace

### Hint System:
- 🟢 **Green**: Exact match (correct position, birth year, etc.)
- 🟡 **Yellow**: Close match (birth year within 2 years)
- 🔴 **Red**: No match

### Scoring:
- Win in 1-6 attempts
- Game over after 6 wrong guesses
- New puzzle daily at midnight

## 🏒 Player Database

The game includes a comprehensive database of Senators players:

**Current Roster:**
- Brady Tkachuk (Captain)
- Tim Stützle
- Claude Giroux
- Thomas Chabot
- Drake Batherson
- And more...

**Legends & Alumni:**
- Daniel Alfredsson 👑
- Erik Karlsson
- Chris Phillips
- Jason Spezza
- Dany Heatley
- Marian Hossa
- Mark Stone
- And many more...

## 🚀 Installation & Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the game:
   ```bash
   npm start
   ```
4. Open your browser to `http://localhost:3333`

## 🛠 Technology Stack

- **Backend**: Node.js with Express
- **Frontend**: EJS templating with vanilla JavaScript
- **Styling**: Custom CSS with Senators team colors
- **Data**: Comprehensive player database with stats and photos
- **APIs**: RESTful endpoints for game mechanics

## 📊 API Endpoints

- `GET /` - Main game interface
- `POST /api/guess` - Submit a player guess
- `POST /api/hint` - Get comparison hints
- `GET /api/players` - Get all players (for autocomplete)
- `POST /api/reset` - Reset current game
- `GET /api/answer` - Get today's answer (debug mode)

## 🎨 Design

The game features the official Ottawa Senators color scheme:
- **Primary Red**: #C8102E
- **Gold**: #CEB888  
- **Black**: #000000

With a modern, Wordle-inspired interface that's both intuitive and engaging.

## 🔧 Customization

### Adding New Players:
Edit `players-database.js` to add more players with:
- Basic info (name, number, position, years active)
- Career statistics and achievements
- 5 unique clues for the guessing game
- Player photos (NHL official headshots)

### Modifying Game Rules:
- Change max attempts in `sensdle-app.js`
- Adjust clue progression logic
- Modify hint comparison algorithms

### Styling:
- Update `sensdle-styles.css` for visual customization
- Modify color schemes and animations
- Adjust responsive breakpoints

## 🎯 Future Enhancements

- **Statistics Dashboard**: Track win streaks, average attempts, favorite players
- **Multiplayer Mode**: Compete with friends
- **Historical Stats**: Integration with real NHL API data
- **Social Sharing**: Share results without spoilers
- **Difficulty Modes**: Easy (more clues) vs Hard (fewer clues)
- **Team Expansion**: Add other NHL teams
- **Mobile App**: Native iOS/Android versions

## 🏒 Go Sens Go!

Perfect for Senators fans who want to test their knowledge of team history while having fun with a daily brain teaser. From the legends of yesteryear to today's rising stars, how well do you really know your Sens?

**Challenge yourself daily and see if you can maintain a winning streak!** 🔥

---
*Made with ❤️ for Ottawa Senators fans everywhere*