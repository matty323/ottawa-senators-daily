const express = require('express');
const axios = require('axios');
const moment = require('moment');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3333;

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Ottawa Senators roster data with stats and photos
const senators = [
  {
    id: 1,
    name: "Brady Tkachuk",
    number: 7,
    position: "LW",
    age: 25,
    height: "6'4\"",
    weight: "218 lbs",
    birthplace: "St. Louis, MO, USA",
    stats: {
      games: 82,
      goals: 35,
      assists: 39,
      points: 74,
      plusMinus: -14,
      pim: 81
    },
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8476913.png",
    bio: "Captain and heart of the Senators. Known for his grit, leadership, and consistent scoring ability.",
    draftInfo: "1st round, 4th overall by Ottawa in 2018"
  },
  {
    id: 2,
    name: "Tim Stutzle",
    number: 18,
    position: "C/LW",
    age: 22,
    height: "6'1\"",
    weight: "187 lbs",
    birthplace: "Viersen, Germany",
    stats: {
      games: 78,
      goals: 18,
      assists: 52,
      points: 70,
      plusMinus: -8,
      pim: 22
    },
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8482116.png",
    bio: "Dynamic young center with exceptional playmaking ability and speed. Future superstar of the franchise.",
    draftInfo: "1st round, 3rd overall by Ottawa in 2020"
  },
  {
    id: 3,
    name: "Claude Giroux",
    number: 28,
    position: "RW",
    age: 36,
    height: "5'11\"",
    weight: "185 lbs",
    birthplace: "Hearst, ON, Canada",
    stats: {
      games: 82,
      goals: 21,
      assists: 43,
      points: 64,
      plusMinus: -2,
      pim: 20
    },
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8473512.png",
    bio: "Veteran leader and former Flyers captain. Brings experience and clutch performance to Ottawa.",
    draftInfo: "1st round, 22nd overall by Philadelphia in 2006"
  },
  {
    id: 4,
    name: "Drake Batherson",
    number: 19,
    position: "RW",
    age: 26,
    height: "6'3\"",
    weight: "205 lbs",
    birthplace: "Fort Erie, ON, Canada",
    stats: {
      games: 62,
      goals: 28,
      assists: 18,
      points: 46,
      plusMinus: -12,
      pim: 14
    },
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8478444.png",
    bio: "Sharp-shooting winger with a deadly release. Key offensive weapon for the Senators.",
    draftInfo: "4th round, 121st overall by Ottawa in 2017"
  },
  {
    id: 5,
    name: "Thomas Chabot",
    number: 72,
    position: "D",
    age: 27,
    height: "6'2\"",
    weight: "200 lbs",
    birthplace: "Sainte-Marie, QC, Canada",
    stats: {
      games: 82,
      goals: 14,
      assists: 41,
      points: 55,
      plusMinus: -20,
      pim: 68
    },
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8478469.png",
    bio: "Elite offensive defenseman and alternate captain. Quarterbacks the power play with exceptional vision.",
    draftInfo: "1st round, 18th overall by Ottawa in 2015"
  },
  {
    id: 6,
    name: "Josh Norris",
    number: 9,
    position: "C",
    age: 25,
    height: "6'1\"",
    weight: "192 lbs",
    birthplace: "Oxford, MI, USA",
    stats: {
      games: 8,
      goals: 1,
      assists: 2,
      points: 3,
      plusMinus: -4,
      pim: 2
    },
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8480057.png",
    bio: "Skilled center with great hands and hockey IQ. Working his way back from injury.",
    draftInfo: "1st round, 19th overall by San Jose in 2017"
  },
  {
    id: 7,
    name: "Anton Forsberg",
    number: 31,
    position: "G",
    age: 31,
    height: "6'3\"",
    weight: "192 lbs",
    birthplace: "Härnösand, Sweden",
    stats: {
      games: 44,
      wins: 15,
      losses: 26,
      otl: 1,
      gaa: 3.19,
      svp: 0.890
    },
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8476877.png",
    bio: "Reliable netminder who battled through a challenging season. Key to team's future success.",
    draftInfo: "7th round, 188th overall by Columbus in 2011"
  },
  {
    id: 8,
    name: "Jake Sanderson",
    number: 85,
    position: "D",
    age: 22,
    height: "6'1\"",
    weight: "185 lbs",
    birthplace: "Whitefish, MT, USA",
    stats: {
      games: 82,
      goals: 3,
      assists: 35,
      points: 38,
      plusMinus: -16,
      pim: 30
    },
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8482742.png",
    bio: "Young defenseman with excellent skating and two-way ability. Bright future ahead.",
    draftInfo: "1st round, 5th overall by Ottawa in 2020"
  }
];

// Function to get player of the day based on date
function getPlayerOfTheDay() {
  const today = moment().startOf('day');
  const dayOfYear = today.dayOfYear();
  const playerIndex = dayOfYear % senators.length;
  return senators[playerIndex];
}

// Function to get hockey news (placeholder - would connect to real API)
async function getHockeyNews() {
  // Placeholder news data - in real app would fetch from TSN, Sportsnet, etc.
  const newsItems = [
    {
      title: "Senators Show Promise in Recent Games",
      summary: "Young core continues to develop as team builds for future",
      url: "#",
      source: "TSN",
      date: moment().subtract(1, 'day').format('MMMM Do, YYYY')
    },
    {
      title: "Brady Tkachuk Leads by Example",
      summary: "Captain's leadership both on and off the ice continues to impress",
      url: "#",
      source: "Sportsnet",
      date: moment().subtract(2, 'days').format('MMMM Do, YYYY')
    },
    {
      title: "Prospect Development Updates",
      summary: "Several young players making strides in development programs",
      url: "#",
      source: "Ottawa Citizen",
      date: moment().subtract(3, 'days').format('MMMM Do, YYYY')
    }
  ];
  return newsItems;
}

// Routes
app.get('/', async (req, res) => {
  try {
    const playerOfTheDay = getPlayerOfTheDay();
    const news = await getHockeyNews();
    const today = moment().format('MMMM Do, YYYY');
    
    res.render('index', {
      player: playerOfTheDay,
      news: news,
      date: today,
      dayOfYear: moment().dayOfYear()
    });
  } catch (error) {
    console.error('Error loading page:', error);
    res.status(500).send('Error loading page');
  }
});

// API endpoint to get all players
app.get('/api/players', (req, res) => {
  res.json(senators);
});

// API endpoint to get specific player
app.get('/api/player/:id', (req, res) => {
  const player = senators.find(p => p.id === parseInt(req.params.id));
  if (player) {
    res.json(player);
  } else {
    res.status(404).json({ error: 'Player not found' });
  }
});

// API endpoint to get today's player
app.get('/api/today', (req, res) => {
  const playerOfTheDay = getPlayerOfTheDay();
  res.json(playerOfTheDay);
});

app.listen(PORT, () => {
  console.log(`🏒 Ottawa Senators Daily Player app running on port ${PORT}`);
  console.log(`📅 Today's featured player: ${getPlayerOfTheDay().name}`);
});