const adventures = [
{
    title: "Out of the Abyss",
    genre: "Survival Horror",
    cover: "assets/images/publishedAdventures/oota.jpg",
    tagline: "Escape the Underdark... if it doesn't consume you first.",
    synopsis: "Captured by drow and imprisoned deep beneath the surface, the party must survive the horrors of the Underdark while demonic forces threaten to plunge the world into madness.",
    levels: "1–15",
    length: "50–70 sessions",
    themes: "Survival, Exploration, Horror, Madness",
    warnings: "Body horror, psychological horror, claustrophobia",
    recommended: "Players who enjoy challenging survival and exploration."
},

{
    title: "Waterdeep: Dragon Heist",
    genre: "Urban Intrigue",
    cover: "assets/images/publishedAdventures/dh.jpg",
    tagline: "Every fortune has its secrets.",
    synopsis: "A hidden cache of gold lies beneath Waterdeep, drawing powerful factions into a race of deception, investigation, and political maneuvering.",
    levels: "1–5",
    length: "15–25 sessions",
    themes: "Investigation, Roleplay, Intrigue",
    warnings: "Crime, betrayal",
    recommended: "Groups that enjoy roleplaying, mysteries, and social encounters."
},

{
    title: "Waterdeep: Dungeon of the Mad Mage",
    genre: "Megadungeon",
    cover: "assets/images/publishedAdventures/dmm.jpg",
    tagline: "Twenty-three floors. Endless danger.",
    synopsis: "Descend into Undermountain, the greatest dungeon in the Forgotten Realms, where treasure, monsters, and madness await behind every door.",
    levels: "5–20",
    length: "80–150+ sessions",
    themes: "Dungeon Crawling, Exploration, Combat",
    warnings: "Claustrophobia, body horror",
    recommended: "Players who love tactical combat and classic dungeon exploration."
},

{
    title: "Curse of Strahd",
    genre: "Gothic Horror",
    cover: "assets/images/publishedAdventures/cos.jpg",
    tagline: "Barovia awaits...",
    synopsis: "Enter the mist-shrouded realm of Barovia, where gothic horror, tragic characters, and a powerful vampire lord create one of D&D's most iconic adventures.",
    levels: "1–10",
    length: "40–60 sessions",
    themes: "Horror, Mystery",
    warnings: "Body horror",
    recommended: "Roleplayers"
},

{
    title: "Icewind Dale: Rime of the Frostmaiden",
    genre: "Dark Fantasy",
    cover: "assets/images/publishedAdventures/rotfm.jpg",
    tagline: "The sun has not risen in two years.",
    synopsis: "An endless winter grips Icewind Dale as ancient evils awaken beneath the frozen tundra. Can the heroes survive the cold and uncover the truth?",
    levels: "1–12",
    length: "40–60 sessions",
    themes: "Survival, Mystery, Horror",
    warnings: "Isolation, body horror",
    recommended: "Players who enjoy sandbox exploration and atmospheric storytelling."
},

{
    title: "Tomb of Annihilation",
    genre: "Jungle Adventure",
    cover: "assets/images/publishedAdventures/toa.jpg",
    tagline: "Death itself has been broken.",
    synopsis: "A deadly curse spreads across the world, leading adventurers into the jungles of Chult in search of a lost city and one of D&D's most infamous dungeons.",
    levels: "1–11",
    length: "40–60 sessions",
    themes: "Exploration, Survival, Deadly Dungeons",
    warnings: "High lethality, traps",
    recommended: "Players who enjoy difficult adventures and meaningful consequences."
},

{
    title: "Baldur's Gate: Descent into Avernus",
    genre: "Infernal Epic",
    cover: "assets/images/publishedAdventures/dta.jpg",
    tagline: "Ride into the first layer of Hell.",
    synopsis: "The city of Elturel has vanished into Avernus, and only the heroes can brave the Blood War, strike bargains with devils, and attempt the impossible rescue.",
    levels: "1–13",
    length: "40–60 sessions",
    themes: "Epic Adventure, Moral Choices, War",
    warnings: "Violence, infernal themes",
    recommended: "Groups who enjoy high-stakes choices and cinematic action."
},

{
    title: "Tyranny of Dragons",
    genre: "Epic Fantasy",
    cover: "assets/images/publishedAdventures/tod.jpg",
    tagline: "The Cult of the Dragon rises.",
    synopsis: "Travel across the Sword Coast to stop the Cult of the Dragon from summoning Tiamat, Queen of Evil Dragons, into the world.",
    levels: "1–15",
    length: "60–80 sessions",
    themes: "Epic Fantasy, Politics, Dragons",
    warnings: "War, cults",
    recommended: "Players looking for a classic, globe-spanning heroic campaign."
},

{
    title: "The Wild Beyond the Witchlight",
    genre: "Fey Adventure",
    cover: "assets/images/publishedAdventures/wbtw.jpg",
    tagline: "Every carnival hides a secret.",
    synopsis: "Journey into the whimsical Feywild, where clever roleplaying and imagination are often more powerful than swords.",
    levels: "1–8",
    length: "25–40 sessions",
    themes: "Roleplay, Whimsy, Mystery",
    warnings: "None beyond standard fantasy peril",
    recommended: "Players who enjoy creative problem-solving and social encounters."
},

{
    title: "Call of the Netherdeep",
    genre: "Heroic Adventure",
    cover: "assets/images/publishedAdventures/cotn.jpg",
    tagline: "The fate of a forgotten champion lies beneath the sea.",
    synopsis: "A legendary relic launches rival adventuring parties on a race across Exandria before uncovering an ancient tragedy hidden within the Netherdeep.",
    levels: "3–12",
    length: "35–50 sessions",
    themes: "Heroism, Rivalries, Exploration",
    warnings: "Cosmic horror, underwater danger",
    recommended: "Fans of Critical Role and story-driven campaigns."
},

{
    title: "Vecna: Eve of Ruin",
    genre: "Multiversal Epic",
    cover: "assets/images/publishedAdventures/veor.jpg",
    tagline: "The multiverse stands on the brink.",
    synopsis: "Heroes travel across iconic D&D worlds to stop Vecna from unraveling reality itself in one of the game's most ambitious adventures.",
    levels: "10–20",
    length: "30–45 sessions",
    themes: "Epic Fantasy, Multiverse, Legendary Villains",
    warnings: "Cosmic horror, apocalyptic stakes",
    recommended: "Experienced players seeking a high-level, cinematic finale."
},

{
    title: "Tales from the Yawning Portal",
    genre: "Classic Anthology",
    cover: "assets/images/publishedAdventures/yp.jpg",
    tagline: "Seven legendary adventures. One unforgettable collection.",
    synopsis: "Experience some of D&D's most iconic dungeons, from The Sunless Citadel to the infamous Tomb of Horrors.",
    levels: "1–15 (varies by adventure)",
    length: "Flexible",
    themes: "Dungeon Crawling, Classic D&D",
    warnings: "High lethality in some adventures",
    recommended: "Groups looking for shorter campaigns or standalone adventures."
},

{
    title: "Ghosts of Saltmarsh",
    genre: "Nautical Adventure",
    cover: "assets/images/publishedAdventures/gos.jpg",
    tagline: "Secrets beneath the waves...",
    synopsis: "...",
    levels: "1–12",
    length: "30–40 sessions",
    themes: "Exploration",
    warnings: "Sea monsters",
    recommended: "Explorers"
}
];