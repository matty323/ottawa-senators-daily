// Comprehensive Ottawa Senators player database
// Including current roster and historical legends

const players = [
  // Current Roster
  {
    id: 1,
    name: "Brady Tkachuk",
    number: 7,
    position: "LW",
    yearsActive: "2018-Present",
    birthYear: 1999,
    birthplace: "St. Louis, MO, USA",
    height: "6'4\"",
    weight: "218 lbs",
    draftInfo: "1st round, 4th overall by Ottawa in 2018",
    teams: ["Ottawa Senators"],
    career: {
      games: 400,
      goals: 140,
      assists: 156,
      points: 296
    },
    achievements: ["Captain (2021-Present)", "All-Star (2023)"],
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8476913.png",
    clues: [
      "This player is the current captain of the team",
      "They wear number 7 and play left wing",
      "Born in 1999 in St. Louis, Missouri",
      "Son of a former NHL player who won the Stanley Cup",
      "Drafted 4th overall in 2018"
    ]
  },
  {
    id: 2,
    name: "Tim Stutzle",
    number: 18,
    position: "C/LW",
    yearsActive: "2020-Present",
    birthYear: 2002,
    birthplace: "Viersen, Germany",
    height: "6'1\"",
    weight: "187 lbs",
    draftInfo: "1st round, 3rd overall by Ottawa in 2020",
    teams: ["Ottawa Senators"],
    career: {
      games: 250,
      goals: 70,
      assists: 140,
      points: 210
    },
    achievements: ["Calder Trophy Finalist (2021)"],
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8482116.png",
    clues: [
      "This player is from Germany",
      "They were drafted 3rd overall in 2020",
      "Wears number 18",
      "Was a Calder Trophy finalist in their rookie year",
      "Can play both center and left wing"
    ]
  },
  
  // Historical Legends
  {
    id: 3,
    name: "Daniel Alfredsson",
    number: 11,
    position: "RW",
    yearsActive: "1995-2013",
    birthYear: 1972,
    birthplace: "Gothenburg, Sweden",
    height: "5'11\"",
    weight: "194 lbs",
    draftInfo: "6th round, 133rd overall by Ottawa in 1994",
    teams: ["Ottawa Senators", "Detroit Red Wings"],
    career: {
      games: 1246,
      goals: 444,
      assists: 713,
      points: 1157
    },
    achievements: [
      "Captain (1999-2013)", 
      "Number retired (#11)", 
      "7x All-Star", 
      "Calder Trophy (1996)",
      "King Clancy Trophy (2012)"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8458554.jpg",
    clues: [
      "This Swedish player's number is retired by the Senators",
      "Won the Calder Trophy in 1996",
      "Captain for 14 seasons",
      "Wore number 11 and played right wing",
      "Drafted in the 6th round but became a franchise legend"
    ]
  },
  {
    id: 4,
    name: "Erik Karlsson",
    number: 65,
    position: "D",
    yearsActive: "2009-2018",
    birthYear: 1990,
    birthplace: "Landsbro, Sweden",
    height: "6'0\"",
    weight: "190 lbs",
    draftInfo: "1st round, 15th overall by Ottawa in 2008",
    teams: ["Ottawa Senators", "San Jose Sharks", "Pittsburgh Penguins"],
    career: {
      games: 627,
      goals: 126,
      assists: 392,
      points: 518
    },
    achievements: [
      "2x Norris Trophy (2012, 2015)",
      "5x All-Star with Ottawa",
      "82-point season in 2015-16 (defenseman record at the time)"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475448.jpg",
    clues: [
      "This Swedish defenseman won two Norris Trophies with Ottawa",
      "Set modern records for points by a defenseman",
      "Wore number 65",
      "Known for incredible skating and offensive ability",
      "Left Ottawa in a controversial trade to San Jose"
    ]
  },
  {
    id: 5,
    name: "Chris Phillips",
    number: 4,
    position: "D",
    yearsActive: "1997-2016",
    birthYear: 1978,
    birthplace: "Calgary, AB, Canada",
    height: "6'3\"",
    weight: "219 lbs",
    draftInfo: "1st round, 1st overall by Ottawa in 1996",
    teams: ["Ottawa Senators"],
    career: {
      games: 1293,
      goals: 71,
      assists: 240,
      points: 311
    },
    achievements: [
      "Number retired (#4)",
      "Played entire career with Ottawa",
      "1st overall draft pick (1996)",
      "Team record for most games played"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8458543.jpg",
    clues: [
      "This defenseman was drafted 1st overall in 1996",
      "Played his entire 19-year career with Ottawa",
      "Wore number 4, which is now retired",
      "Holds the franchise record for most games played",
      "Born in Calgary but became a Senator for life"
    ]
  },
  {
    id: 6,
    name: "Jason Spezza",
    number: 19,
    position: "C",
    yearsActive: "2002-2014",
    birthYear: 1983,
    birthplace: "Mississauga, ON, Canada",
    height: "6'3\"",
    weight: "213 lbs",
    draftInfo: "1st round, 2nd overall by Ottawa in 2001",
    teams: ["Ottawa Senators", "Dallas Stars", "Toronto Maple Leafs"],
    career: {
      games: 686,
      goals: 251,
      assists: 436,
      points: 687
    },
    achievements: [
      "3x All-Star with Ottawa",
      "92-point season in 2006-07",
      "Part of the 'CASH' line with Alfredsson and Heatley"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8470638.jpg",
    clues: [
      "This Ontario-born center was drafted 2nd overall in 2001",
      "Had a 92-point season in 2006-07",
      "Wore number 19",
      "Part of the famous 'CASH' line",
      "From Mississauga and later played for his hometown Leafs"
    ]
  },
  {
    id: 7,
    name: "Dany Heatley",
    number: 15,
    position: "LW",
    yearsActive: "2005-2009",
    birthYear: 1981,
    birthplace: "Freiburg, Germany",
    height: "6'4\"",
    weight: "220 lbs",
    draftInfo: "1st round, 2nd overall by Atlanta in 2000",
    teams: ["Atlanta Thrashers", "Ottawa Senators", "San Jose Sharks", "Minnesota Wild", "Anaheim Ducks"],
    career: {
      games: 309,
      goals: 180,
      assists: 192,
      points: 372
    },
    achievements: [
      "2x 50-goal scorer with Ottawa (2006, 2007)",
      "103-point season in 2006-07",
      "All-Star with Ottawa"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8468024.jpg",
    clues: [
      "This German-born winger scored 50 goals twice for Ottawa",
      "Had 103 points in the 2006-07 season",
      "Part of the 'CASH' line",
      "Wore number 15",
      "Requested a trade that shocked the hockey world"
    ]
  },
  {
    id: 8,
    name: "Wade Redden",
    number: 6,
    position: "D",
    yearsActive: "1996-2008",
    birthYear: 1977,
    birthplace: "Lloydminster, SK, Canada",
    height: "6'2\"",
    weight: "209 lbs",
    draftInfo: "1st round, 2nd overall by New York Islanders in 1995",
    teams: ["New York Islanders", "Ottawa Senators", "New York Rangers"],
    career: {
      games: 838,
      goals: 109,
      assists: 349,
      points: 458
    },
    achievements: [
      "2x All-Star with Ottawa",
      "Norris Trophy finalist",
      "Key player in Senators' Cup run"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8458610.jpg",
    clues: [
      "This Saskatchewan defenseman wore number 6",
      "Was a Norris Trophy finalist",
      "Played over 800 games for Ottawa",
      "Part of the team during their Stanley Cup Final run",
      "Originally drafted by the Islanders"
    ]
  },
  {
    id: 9,
    name: "Marian Hossa",
    number: 18,
    position: "RW",
    yearsActive: "1998-2005",
    birthYear: 1979,
    birthplace: "Stara Lubovna, Slovakia",
    height: "6'1\"",
    weight: "210 lbs",
    draftInfo: "1st round, 12th overall by Ottawa in 1997",
    teams: ["Ottawa Senators", "Atlanta Thrashers", "Pittsburgh Penguins", "Detroit Red Wings", "Chicago Blackhawks"],
    career: {
      games: 467,
      goals: 186,
      assists: 203,
      points: 389
    },
    achievements: [
      "Multiple Stanley Cup winner (after Ottawa)",
      "Hall of Fame inductee",
      "Olympics gold medalist"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8467419.jpg",
    clues: [
      "This Slovak winger was drafted 12th overall in 1997",
      "Later won multiple Stanley Cups with Chicago",
      "Wore number 18 in Ottawa",
      "Now in the Hockey Hall of Fame",
      "Started his NHL career with the Senators"
    ]
  },
  {
    id: 10,
    name: "Radek Bonk",
    number: 14,
    position: "C",
    yearsActive: "1994-2006",
    birthYear: 1976,
    birthplace: "Krnov, Czech Republic",
    height: "6'3\"",
    weight: "210 lbs",
    draftInfo: "1st round, 3rd overall by Ottawa in 1994",
    teams: ["Ottawa Senators", "Montreal Canadiens", "Nashville Predators"],
    career: {
      games: 796,
      goals: 152,
      assists: 249,
      points: 401
    },
    achievements: [
      "First-ever draft pick by modern Ottawa Senators",
      "Played over 750 games for Ottawa"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8458872.jpg",
    clues: [
      "This Czech center was Ottawa's first-ever draft pick in 1994",
      "Drafted 3rd overall",
      "Wore number 14",
      "Played over 750 games for the franchise",
      "From the Czech Republic"
    ]
  },
  
  // More Recent Players
  {
    id: 11,
    name: "Mark Stone",
    number: 61,
    position: "RW",
    yearsActive: "2012-2019",
    birthYear: 1992,
    birthplace: "Winnipeg, MB, Canada",
    height: "6'4\"",
    weight: "219 lbs",
    draftInfo: "6th round, 178th overall by Ottawa in 2010",
    teams: ["Ottawa Senators", "Vegas Golden Knights"],
    career: {
      games: 433,
      goals: 126,
      assists: 181,
      points: 307
    },
    achievements: [
      "2x Lady Byng Trophy finalist",
      "Selke Trophy finalist",
      "All-Star with Ottawa"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8477512.jpg",
    clues: [
      "This Winnipeg-born winger was a 6th round steal",
      "Known for exceptional two-way play",
      "Wore number 61",
      "Multiple Lady Byng Trophy finalist",
      "Traded to Vegas where he became captain"
    ]
  },
  {
    id: 12,
    name: "Mike Hoffman",
    number: 68,
    position: "LW",
    yearsActive: "2011-2018",
    birthYear: 1989,
    birthplace: "Kitchener, ON, Canada",
    height: "6'0\"",
    weight: "184 lbs",
    draftInfo: "5th round, 130th overall by Ottawa in 2009",
    teams: ["Ottawa Senators", "San Jose Sharks", "Florida Panthers", "St. Louis Blues", "Montreal Canadiens"],
    career: {
      games: 410,
      goals: 144,
      assists: 125,
      points: 269
    },
    achievements: [
      "30+ goal scorer multiple times with Ottawa",
      "One of the best shots in the NHL"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8475178.jpg",
    clues: [
      "This Ontario sniper wore number 68",
      "Known for having one of the hardest shots in the NHL",
      "Scored 30+ goals multiple times for Ottawa",
      "5th round draft pick from 2009",
      "From Kitchener"
    ]
  },
  {
    id: 13,
    name: "Kyle Turris",
    number: 7,
    position: "C",
    yearsActive: "2011-2017",
    birthYear: 1989,
    birthplace: "New Westminster, BC, Canada",
    height: "6'1\"",
    weight: "190 lbs",
    draftInfo: "1st round, 3rd overall by Phoenix in 2007",
    teams: ["Phoenix Coyotes", "Ottawa Senators", "Nashville Predators", "Edmonton Oilers"],
    career: {
      games: 432,
      goals: 117,
      assists: 162,
      points: 279
    },
    achievements: [
      "Key part of Senators playoff runs",
      "Scored memorable overtime goals"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474618.jpg",
    clues: [
      "This BC-born center wore number 7 before Tkachuk",
      "Originally drafted 3rd overall by Phoenix",
      "Known for clutch playoff performances",
      "Scored some memorable overtime goals",
      "Traded to Nashville in a deadline deal"
    ]
  },
  {
    id: 14,
    name: "Jean-Gabriel Pageau",
    number: 44,
    position: "C",
    yearsActive: "2012-2020",
    birthYear: 1992,
    birthplace: "Ottawa, ON, Canada",
    height: "5'9\"",
    weight: "180 lbs",
    draftInfo: "4th round, 96th overall by Ottawa in 2011",
    teams: ["Ottawa Senators", "New York Islanders"],
    career: {
      games: 466,
      goals: 89,
      assists: 106,
      points: 195
    },
    achievements: [
      "Local Ottawa kid",
      "Playoff hero with hat tricks",
      "Fan favorite"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8476429.jpg",
    clues: [
      "This hometown hero was born in Ottawa",
      "Wore number 44",
      "Known for incredible playoff performances",
      "Scored hat tricks in the playoffs",
      "4th round pick who became a fan favorite"
    ]
  },

  // Add more current players
  {
    id: 15,
    name: "Claude Giroux",
    number: 28,
    position: "RW",
    yearsActive: "2022-Present",
    birthYear: 1988,
    birthplace: "Hearst, ON, Canada",
    height: "5'11\"",
    weight: "185 lbs",
    draftInfo: "1st round, 22nd overall by Philadelphia in 2006",
    teams: ["Philadelphia Flyers", "Ottawa Senators"],
    career: {
      games: 164,
      goals: 42,
      assists: 86,
      points: 128
    },
    achievements: [
      "Former Flyers captain",
      "1000+ career points",
      "Olympics gold medalist"
    ],
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8473512.png",
    clues: [
      "This veteran Ontario-born player joined Ottawa in 2022",
      "Former captain of the Philadelphia Flyers",
      "Has over 1000 career NHL points",
      "Won Olympic gold for Canada",
      "Wears number 28"
    ]
  },
  {
    id: 16,
    name: "Thomas Chabot",
    number: 72,
    position: "D",
    yearsActive: "2016-Present",
    birthYear: 1997,
    birthplace: "Sainte-Marie, QC, Canada",
    height: "6'2\"",
    weight: "200 lbs",
    draftInfo: "1st round, 18th overall by Ottawa in 2015",
    teams: ["Ottawa Senators"],
    career: {
      games: 450,
      goals: 70,
      assists: 250,
      points: 320
    },
    achievements: [
      "Alternate captain",
      "Norris Trophy candidate",
      "Power play quarterback"
    ],
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8478469.png",
    clues: [
      "This Quebec defenseman wears number 72",
      "Drafted 18th overall in 2015",
      "Alternate captain and power play quarterback",
      "From Sainte-Marie, Quebec",
      "One of the top offensive defensemen in the NHL"
    ]
  },
  {
    id: 17,
    name: "Josh Norris",
    number: 9,
    position: "C",
    yearsActive: "2020-Present",
    birthYear: 1999,
    birthplace: "Oxford, MI, USA",
    height: "6'1\"",
    weight: "192 lbs",
    draftInfo: "1st round, 19th overall by San Jose in 2017",
    teams: ["Ottawa Senators"],
    career: {
      games: 140,
      goals: 55,
      assists: 45,
      points: 100
    },
    achievements: [
      "35-goal rookie season",
      "Rising star center"
    ],
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8481546.png",
    clues: [
      "This American center was acquired in the Erik Karlsson trade",
      "Had 35 goals in his first full NHL season",
      "Wears number 9",
      "Originally drafted by San Jose",
      "From Michigan"
    ]
  },
  {
    id: 18,
    name: "Drake Batherson",
    number: 19,
    position: "RW",
    yearsActive: "2018-Present",
    birthYear: 1998,
    birthplace: "Fort Erie, ON, Canada",
    height: "6'2\"",
    weight: "195 lbs",
    draftInfo: "4th round, 121st overall by Ottawa in 2017",
    teams: ["Ottawa Senators"],
    career: {
      games: 280,
      goals: 85,
      assists: 110,
      points: 195
    },
    achievements: [
      "All-Star (2022)",
      "30+ goal seasons"
    ],
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8479406.png",
    clues: [
      "This Ontario winger was a 4th round steal",
      "Selected for the All-Star Game in 2022",
      "Wears number 19",
      "Known for his shot and speed",
      "From Fort Erie, Ontario"
    ]
  },
  {
    id: 19,
    name: "Jake Sanderson",
    number: 85,
    position: "D",
    yearsActive: "2022-Present",
    birthYear: 2002,
    birthplace: "Whitefish, MT, USA",
    height: "6'1\"",
    weight: "185 lbs",
    draftInfo: "1st round, 5th overall by Ottawa in 2020",
    teams: ["Ottawa Senators"],
    career: {
      games: 110,
      goals: 15,
      assists: 45,
      points: 60
    },
    achievements: [
      "Top prospect defenseman",
      "NCAA champion at North Dakota"
    ],
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8482745.png",
    clues: [
      "This young American defenseman was drafted 5th overall in 2020",
      "Son of former NHL player Geoff Sanderson",
      "Wears number 85",
      "Won an NCAA championship at North Dakota",
      "From Montana"
    ]
  },
  {
    id: 20,
    name: "Anton Forsberg",
    number: 31,
    position: "G",
    yearsActive: "2021-Present",
    birthYear: 1992,
    birthplace: "Härnösand, Sweden",
    height: "6'3\"",
    weight: "192 lbs",
    draftInfo: "7th round, 188th overall by Columbus in 2011",
    teams: ["Columbus Blue Jackets", "Chicago Blackhawks", "Carolina Hurricanes", "Ottawa Senators"],
    career: {
      games: 95,
      wins: 40,
      losses: 38,
      saves: 2400
    },
    achievements: [
      "Senators starting goaltender",
      "Shutouts leader for Ottawa"
    ],
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8475855.png",
    clues: [
      "This Swedish goaltender wears number 31",
      "Has been Ottawa's most reliable netminder recently",
      "Originally drafted by Columbus",
      "From Härnösand, Sweden",
      "7th round pick who found his game"
    ]
  },
  {
    id: 21,
    name: "Alex DeBrincat",
    number: 12,
    position: "RW",
    yearsActive: "2023-Present",
    birthYear: 1997,
    birthplace: "Farmington Hills, MI, USA",
    height: "5'7\"",
    weight: "165 lbs",
    draftInfo: "2nd round, 39th overall by Chicago in 2016",
    teams: ["Chicago Blackhawks", "Ottawa Senators", "Detroit Red Wings"],
    career: {
      games: 82,
      goals: 27,
      assists: 38,
      points: 65
    },
    achievements: [
      "Multiple 40+ goal seasons",
      "Elite goal scorer"
    ],
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8479337.png",
    clues: [
      "This compact American sniper joined Ottawa in 2023",
      "Known for scoring 40+ goals multiple times",
      "Wears number 12",
      "Originally from the Chicago organization",
      "From Michigan"
    ]
  },
  {
    id: 22,
    name: "Artem Zub",
    number: 2,
    position: "D",
    yearsActive: "2020-Present",
    birthYear: 1995,
    birthplace: "Krasnodar, Russia",
    height: "6'2\"",
    weight: "194 lbs",
    draftInfo: "Undrafted",
    teams: ["Ottawa Senators"],
    career: {
      games: 220,
      goals: 20,
      assists: 65,
      points: 85
    },
    achievements: [
      "Solid defensive defenseman",
      "Penalty kill specialist"
    ],
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8478528.png",
    clues: [
      "This Russian defenseman was an undrafted gem",
      "Wears number 2",
      "Known for his defensive reliability",
      "Key penalty killer for Ottawa",
      "From Krasnodar, Russia"
    ]
  },
  {
    id: 23,
    name: "Parker Kelly",
    number: 71,
    position: "C",
    yearsActive: "2020-Present",
    birthYear: 1999,
    birthplace: "Camrose, AB, Canada",
    height: "6'0\"",
    weight: "200 lbs",
    draftInfo: "7th round, 202nd overall by Ottawa in 2017",
    teams: ["Ottawa Senators"],
    career: {
      games: 130,
      goals: 15,
      assists: 25,
      points: 40
    },
    achievements: [
      "Hometown Alberta product",
      "Energy forward"
    ],
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8481522.png",
    clues: [
      "This Alberta forward was a late-round draft pick",
      "Wears number 71",
      "Known for his energy and work ethic",
      "7th round pick in 2017",
      "From Camrose, Alberta"
    ]
  },
  {
    id: 24,
    name: "Shane Pinto",
    number: 12,
    position: "C",
    yearsActive: "2021-Present",
    birthYear: 2000,
    birthplace: "Franklin Square, NY, USA",
    height: "6'2\"",
    weight: "192 lbs",
    draftInfo: "2nd round, 32nd overall by Ottawa in 2019",
    teams: ["Ottawa Senators"],
    career: {
      games: 90,
      goals: 25,
      assists: 30,
      points: 55
    },
    achievements: [
      "Strong two-way center",
      "Rising prospect"
    ],
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8481678.png",
    clues: [
      "This American center was drafted 32nd overall in 2019",
      "Known for his two-way play",
      "From New York state",
      "Wears number 12",
      "Solid prospect developing into an NHL regular"
    ]
  },
  {
    id: 25,
    name: "Ridly Greig",
    number: 63,
    position: "C",
    yearsActive: "2022-Present",
    birthYear: 2002,
    birthplace: "Lethbridge, AB, Canada",
    height: "5'11\"",
    weight: "163 lbs",
    draftInfo: "1st round, 28th overall by Ottawa in 2020",
    teams: ["Ottawa Senators"],
    career: {
      games: 60,
      goals: 12,
      assists: 18,
      points: 30
    },
    achievements: [
      "Feisty young forward",
      "High-energy player"
    ],
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8482073.png",
    clues: [
      "This young Alberta forward brings energy and grit",
      "Drafted 28th overall in 2020",
      "Wears number 63",
      "Known for getting under opponents' skin",
      "From Lethbridge, Alberta"
    ]
  },
  {
    id: 26,
    name: "Mathieu Joseph",
    number: 21,
    position: "RW",
    yearsActive: "2021-Present",
    birthYear: 1997,
    birthplace: "Laval, QC, Canada",
    height: "6'1\"",
    weight: "185 lbs",
    draftInfo: "4th round, 120th overall by Tampa Bay in 2015",
    teams: ["Tampa Bay Lightning", "Ottawa Senators"],
    career: {
      games: 160,
      goals: 35,
      assists: 40,
      points: 75
    },
    achievements: [
      "Speed and skill forward",
      "Former Lightning prospect"
    ],
    photo: "https://assets.nhle.com/mugs/nhl/20242025/OTT/8478433.png",
    clues: [
      "This Quebec speedster came from Tampa Bay",
      "Known for his pace and skill",
      "Wears number 21",
      "4th round pick from 2015",
      "From Laval, Quebec"
    ]
  },

  // Early Franchise Years (1992-2000)
  {
    id: 27,
    name: "Alexei Yashin",
    number: 19,
    position: "C",
    yearsActive: "1993-2001",
    birthYear: 1973,
    birthplace: "Sverdlovsk, Russia",
    height: "6'3\"",
    weight: "225 lbs",
    draftInfo: "1st round, 2nd overall by Ottawa in 1992",
    teams: ["Ottawa Senators", "New York Islanders"],
    career: {
      games: 564,
      goals: 186,
      assists: 248,
      points: 434
    },
    achievements: [
      "3x All-Star with Ottawa",
      "94-point season in 1998-99",
      "First franchise superstar"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8459113.jpg",
    clues: [
      "This Russian center was Ottawa's first superstar",
      "Drafted 2nd overall in the franchise's first draft",
      "Had a contentious holdout and eventual trade",
      "Wore number 19 before Spezza",
      "94 points in 1998-99"
    ]
  },
  {
    id: 28,
    name: "Alexandre Daigle",
    number: 91,
    position: "C",
    yearsActive: "1993-1998",
    birthYear: 1975,
    birthplace: "Montreal, QC, Canada",
    height: "6'0\"",
    weight: "190 lbs",
    draftInfo: "1st round, 1st overall by Ottawa in 1993",
    teams: ["Ottawa Senators", "Philadelphia Flyers", "Tampa Bay Lightning", "New York Rangers", "Pittsburgh Penguins", "Minnesota Wild"],
    career: {
      games: 301,
      goals: 76,
      assists: 96,
      points: 172
    },
    achievements: [
      "1st overall pick in 1993",
      "Highest drafted player in franchise history"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8450816.jpg",
    clues: [
      "This Quebec player was the franchise's first 1st overall pick",
      "Wore number 91",
      "Considered one of the biggest draft busts in NHL history",
      "From Montreal",
      "Famous quote about being glad he wasn't drafted by Quebec"
    ]
  },
  {
    id: 29,
    name: "Norm Maciver",
    number: 8,
    position: "D",
    yearsActive: "1992-1996",
    birthYear: 1964,
    birthplace: "Thunder Bay, ON, Canada",
    height: "5'11\"",
    weight: "180 lbs",
    draftInfo: "3rd round, 48th overall by New York Rangers in 1982",
    teams: ["New York Rangers", "Hartford Whalers", "Edmonton Oilers", "Ottawa Senators", "Pittsburgh Penguins", "Winnipeg Jets"],
    career: {
      games: 250,
      goals: 40,
      assists: 150,
      points: 190
    },
    achievements: [
      "Veteran leader on expansion team",
      "Offensive defenseman"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8452054.jpg",
    clues: [
      "This veteran defenseman was a key early acquisition",
      "Wore number 8",
      "From Thunder Bay, Ontario",
      "Provided veteran leadership to the young franchise",
      "Known for his offensive ability from the blue line"
    ]
  },
  {
    id: 30,
    name: "Sylvain Turgeon",
    number: 14,
    position: "LW",
    yearsActive: "1992-1995",
    birthYear: 1965,
    birthplace: "Rouyn-Noranda, QC, Canada",
    height: "6'0\"",
    weight: "200 lbs",
    draftInfo: "1st round, 2nd overall by Hartford in 1983",
    teams: ["Hartford Whalers", "New Jersey Devils", "Montreal Canadiens", "Ottawa Senators"],
    career: {
      games: 165,
      goals: 45,
      assists: 50,
      points: 95
    },
    achievements: [
      "Veteran scorer in early years",
      "Former 40-goal scorer"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8451152.jpg",
    clues: [
      "This Quebec winger was a veteran addition to the expansion team",
      "Former 2nd overall pick from 1983",
      "Wore number 14",
      "Had scored 40+ goals earlier in his career",
      "From Rouyn-Noranda, Quebec"
    ]
  },
  {
    id: 31,
    name: "Mike Peluso",
    number: 36,
    position: "LW",
    yearsActive: "1992-1996",
    birthYear: 1965,
    birthplace: "Pengilly, MN, USA",
    height: "6'4\"",
    weight: "210 lbs",
    draftInfo: "Undrafted",
    teams: ["Chicago Blackhawks", "Ottawa Senators", "New Jersey Devils", "St. Louis Blues"],
    career: {
      games: 230,
      goals: 25,
      assists: 35,
      points: 60
    },
    achievements: [
      "Enforcer and fan favorite",
      "Tough guy protector"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8451933.jpg",
    clues: [
      "This American enforcer protected the young Senators",
      "Wore number 36",
      "Undrafted tough guy",
      "From Minnesota",
      "Popular with early Ottawa fans"
    ]
  },
  {
    id: 32,
    name: "Don Beaupre",
    number: 30,
    position: "G",
    yearsActive: "1992-1995",
    birthYear: 1961,
    birthplace: "Kitchener, ON, Canada",
    height: "5'10\"",
    weight: "172 lbs",
    draftInfo: "2nd round, 37th overall by Minnesota in 1980",
    teams: ["Minnesota North Stars", "Washington Capitals", "Ottawa Senators", "Toronto Maple Leafs"],
    career: {
      games: 145,
      wins: 35,
      losses: 86,
      saves: 3800
    },
    achievements: [
      "First goaltender in franchise history",
      "Veteran presence"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8447856.jpg",
    clues: [
      "This Ontario goaltender was the franchise's first netminder",
      "Wore number 30",
      "From Kitchener",
      "Veteran of the Minnesota North Stars",
      "Faced many shots in the early struggling years"
    ]
  },
  {
    id: 33,
    name: "Neil Brady",
    number: 16,
    position: "C",
    yearsActive: "1992-1996",
    birthYear: 1968,
    birthplace: "Montreal, QC, Canada",
    height: "6'1\"",
    weight: "190 lbs",
    draftInfo: "3rd round, 58th overall by New Jersey in 1986",
    teams: ["New Jersey Devils", "Ottawa Senators"],
    career: {
      games: 200,
      goals: 45,
      assists: 85,
      points: 130
    },
    achievements: [
      "Solid center in early years",
      "Local Quebec connection"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8448973.jpg",
    clues: [
      "This Montreal center was an early acquisition",
      "Wore number 16",
      "Came from New Jersey",
      "Provided veteran center depth",
      "From Montreal, Quebec"
    ]
  },
  {
    id: 34,
    name: "Brad Shaw",
    number: 22,
    position: "D",
    yearsActive: "1992-1999",
    birthYear: 1964,
    birthplace: "Cambridge, ON, Canada",
    height: "6'0\"",
    weight: "190 lbs",
    draftInfo: "5th round, 108th overall by Detroit in 1982",
    teams: ["Detroit Red Wings", "Hartford Whalers", "Ottawa Senators", "Florida Panthers"],
    career: {
      games: 420,
      goals: 35,
      assists: 130,
      points: 165
    },
    achievements: [
      "Steady defenseman",
      "Long-time Senator"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8450059.jpg",
    clues: [
      "This Ontario defenseman played seven seasons in Ottawa",
      "Wore number 22",
      "From Cambridge, Ontario",
      "Reliable stay-at-home defenseman",
      "One of the longer-serving early Senators"
    ]
  },
  {
    id: 35,
    name: "Darren Rumble",
    number: 3,
    position: "D",
    yearsActive: "1992-1996",
    birthYear: 1969,
    birthplace: "Barrie, ON, Canada",
    height: "6'0\"",
    weight: "200 lbs",
    draftInfo: "1st round, 20th overall by Philadelphia in 1987",
    teams: ["Philadelphia Flyers", "Ottawa Senators", "St. Louis Blues"],
    career: {
      games: 180,
      goals: 25,
      assists: 60,
      points: 85
    },
    achievements: [
      "Offensive defenseman",
      "Former first-round pick"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8451585.jpg",
    clues: [
      "This Ontario defenseman was a former first-round pick",
      "Wore number 3",
      "From Barrie, Ontario",
      "Known for offensive contributions from the blue line",
      "Originally drafted by Philadelphia"
    ]
  },
  {
    id: 36,
    name: "Bob Kudelski",
    number: 12,
    position: "RW",
    yearsActive: "1992-1995",
    birthYear: 1964,
    birthplace: "Springfield, MA, USA",
    height: "6'1\"",
    weight: "200 lbs",
    draftInfo: "6th round, 109th overall by Los Angeles in 1982",
    teams: ["Los Angeles Kings", "Ottawa Senators", "Florida Panthers"],
    career: {
      games: 160,
      goals: 55,
      assists: 65,
      points: 120
    },
    achievements: [
      "Veteran scorer",
      "40-goal season in Los Angeles"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8451026.jpg",
    clues: [
      "This American winger had scored 40 goals with Los Angeles",
      "Wore number 12",
      "From Massachusetts",
      "Brought veteran scoring to the expansion team",
      "6th round pick who became a solid scorer"
    ]
  },

  // Deep Cuts & Role Players - The Challenging Ones
  {
    id: 37,
    name: "Martin Havlat",
    number: 24,
    position: "LW",
    yearsActive: "2009-2011",
    birthYear: 1981,
    birthplace: "Mlada Boleslav, Czech Republic",
    height: "6'1\"",
    weight: "190 lbs",
    draftInfo: "1st round, 26th overall by Ottawa in 1999",
    teams: ["Ottawa Senators", "Chicago Blackhawks", "Minnesota Wild", "San Jose Sharks", "New Jersey Devils"],
    career: {
      games: 145,
      goals: 38,
      assists: 52,
      points: 90
    },
    achievements: [
      "Skilled but injury-prone winger",
      "Brief return to Ottawa"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8468101.jpg",
    clues: [
      "This Czech winger returned to Ottawa after playing elsewhere",
      "Originally drafted by Ottawa in 1999",
      "Wore number 24",
      "Known for skill but plagued by injuries",
      "Had two separate stints with the Senators"
    ]
  },
  {
    id: 38,
    name: "Curtis Leschyshyn",
    number: 2,
    position: "D",
    yearsActive: "2003-2006",
    birthYear: 1969,
    birthplace: "Thompson, MB, Canada",
    height: "6'1\"",
    weight: "205 lbs",
    draftInfo: "1st round, 3rd overall by Quebec in 1988",
    teams: ["Quebec Nordiques", "Colorado Avalanche", "Washington Capitals", "Carolina Hurricanes", "Ottawa Senators", "Minnesota Wild"],
    career: {
      games: 180,
      goals: 8,
      assists: 25,
      points: 33
    },
    achievements: [
      "Stanley Cup winner with Colorado",
      "Veteran defensive defenseman"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8450704.jpg",
    clues: [
      "This Manitoba defenseman was a former 3rd overall pick",
      "Won a Stanley Cup with Colorado before joining Ottawa",
      "Wore number 2",
      "Stay-at-home defenseman in his 30s",
      "From Thompson, Manitoba"
    ]
  },
  {
    id: 39,
    name: "Jody Hull",
    number: 15,
    position: "RW",
    yearsActive: "1996-1999",
    birthYear: 1969,
    birthplace: "Cambridge, ON, Canada",
    height: "6'2\"",
    weight: "195 lbs",
    draftInfo: "1st round, 18th overall by Hartford in 1987",
    teams: ["Hartford Whalers", "New York Rangers", "Ottawa Senators", "Florida Panthers", "Philadelphia Flyers"],
    career: {
      games: 165,
      goals: 35,
      assists: 40,
      points: 75
    },
    achievements: [
      "Journeyman forward",
      "Former first-round pick"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8451477.jpg",
    clues: [
      "This Ontario winger was a former first-round pick",
      "Wore number 15",
      "From Cambridge, Ontario",
      "Played for several teams in his career",
      "Had a brief stint in Ottawa in the late 90s"
    ]
  },
  {
    id: 40,
    name: "Sami Salo",
    number: 6,
    position: "D",
    yearsActive: "2013-2014",
    birthYear: 1974,
    birthplace: "Turku, Finland",
    height: "6'3\"",
    weight: "215 lbs",
    draftInfo: "9th round, 239th overall by Ottawa in 1996",
    teams: ["Ottawa Senators", "Vancouver Canucks", "Tampa Bay Lightning"],
    career: {
      games: 32,
      goals: 2,
      assists: 8,
      points: 10
    },
    achievements: [
      "Late-career return to Ottawa",
      "Finnish veteran"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8460674.jpg",
    clues: [
      "This Finnish defenseman returned to Ottawa late in his career",
      "Originally drafted by Ottawa in 1996",
      "Wore number 6",
      "Had a long career mostly with Vancouver",
      "9th round draft pick"
    ]
  },
  {
    id: 41,
    name: "Jarkko Ruutu",
    number: 37,
    position: "LW",
    yearsActive: "2008-2010",
    birthYear: 1975,
    birthplace: "Vantaa, Finland",
    height: "6'1\"",
    weight: "190 lbs",
    draftInfo: "3rd round, 68th overall by Vancouver in 1998",
    teams: ["Vancouver Canucks", "Pittsburgh Penguins", "Ottawa Senators", "Anaheim Ducks"],
    career: {
      games: 120,
      goals: 18,
      assists: 22,
      points: 40
    },
    achievements: [
      "Pest and agitator",
      "Finnish grinder"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8467400.jpg",
    clues: [
      "This Finnish agitator wore number 37",
      "Known more for his pest-like play than scoring",
      "Brother of former NHL player Tuomo Ruutu",
      "Played two seasons in Ottawa",
      "From Vantaa, Finland"
    ]
  },
  {
    id: 42,
    name: "Zenon Konopka",
    number: 28,
    position: "C",
    yearsActive: "2011-2013",
    birthYear: 1981,
    birthplace: "Niagara-on-the-Lake, ON, Canada",
    height: "6'0\"",
    weight: "210 lbs",
    draftInfo: "Undrafted",
    teams: ["Anaheim Ducks", "Columbus Blue Jackets", "Tampa Bay Lightning", "New York Islanders", "Ottawa Senators", "Buffalo Sabres", "Minnesota Wild"],
    career: {
      games: 95,
      goals: 3,
      assists: 8,
      points: 11
    },
    achievements: [
      "Face-off specialist",
      "Tough bottom-six center"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8470159.jpg",
    clues: [
      "This Ontario center was known for winning face-offs",
      "Wore number 28",
      "Undrafted journeyman",
      "From Niagara-on-the-Lake",
      "Tough fourth-line center"
    ]
  },
  {
    id: 43,
    name: "Brian McGrattan",
    number: 16,
    position: "RW",
    yearsActive: "2012-2014",
    birthYear: 1981,
    birthplace: "Hamilton, ON, Canada",
    height: "6'4\"",
    weight: "235 lbs",
    draftInfo: "4th round, 104th overall by Los Angeles in 1999",
    teams: ["Los Angeles Kings", "Phoenix Coyotes", "Nashville Predators", "Ottawa Senators", "Calgary Flames", "Anaheim Ducks"],
    career: {
      games: 75,
      goals: 2,
      assists: 3,
      points: 5
    },
    achievements: [
      "Enforcer and tough guy",
      "Local Ontario connection"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8470281.jpg",
    clues: [
      "This Ontario enforcer wore number 16",
      "Known primarily for fighting",
      "From Hamilton, Ontario",
      "Had very few career points",
      "Played two seasons in Ottawa"
    ]
  },
  {
    id: 44,
    name: "Andre Benoit",
    number: 61,
    position: "D",
    yearsActive: "2013-2015",
    birthYear: 1984,
    birthplace: "St. Albert, AB, Canada",
    height: "5'11\"",
    weight: "191 lbs",
    draftInfo: "Undrafted",
    teams: ["Ottawa Senators", "Colorado Avalanche", "Buffalo Sabres", "St. Louis Blues"],
    career: {
      games: 85,
      goals: 8,
      assists: 18,
      points: 26
    },
    achievements: [
      "Late bloomer defenseman",
      "Undrafted success story"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8474716.jpg",
    clues: [
      "This Alberta defenseman was undrafted",
      "Wore number 61",
      "Didn't make the NHL until his late 20s",
      "From St. Albert, Alberta",
      "Had brief stints with multiple teams"
    ]
  },
  {
    id: 45,
    name: "Chris Neil",
    number: 25,
    position: "RW",
    yearsActive: "2001-2017",
    birthYear: 1979,
    birthplace: "Markdale, ON, Canada",
    height: "6'1\"",
    weight: "215 lbs",
    draftInfo: "6th round, 161st overall by Ottawa in 1998",
    teams: ["Ottawa Senators"],
    career: {
      games: 1026,
      goals: 112,
      assists: 138,
      points: 250
    },
    achievements: [
      "Fan favorite enforcer",
      "1000+ games with Ottawa",
      "Local Ontario hero"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8470346.jpg",
    clues: [
      "This Ontario tough guy played his entire career in Ottawa",
      "Over 1000 games with the Senators",
      "Wore number 25",
      "6th round pick who became a fan favorite",
      "From Markdale, Ontario"
    ]
  },
  {
    id: 46,
    name: "Patrick Eaves",
    number: 17,
    position: "RW",
    yearsActive: "2007-2009",
    birthYear: 1984,
    birthplace: "Calgary, AB, Canada",
    height: "6'0\"",
    weight: "195 lbs",
    draftInfo: "1st round, 29th overall by Ottawa in 2003",
    teams: ["Ottawa Senators", "Detroit Red Wings", "Nashville Predators", "Dallas Stars", "Anaheim Ducks"],
    career: {
      games: 125,
      goals: 28,
      assists: 22,
      points: 50
    },
    achievements: [
      "First-round pick who didn't quite pan out",
      "Son of former NHL player"
    ],
    photo: "https://cms.nhl.bamgrid.com/images/headshots/current/168x168/8473543.jpg",
    clues: [
      "This Alberta winger was drafted 29th overall by Ottawa",
      "Wore number 17",
      "Son of former NHL player Mike Eaves",
      "Didn't live up to first-round expectations",
      "From Calgary, Alberta"
    ]
  }
];

module.exports = players;