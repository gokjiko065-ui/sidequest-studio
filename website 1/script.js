let difficultyLevel = "undefined"
let buttonBeginner = document.getElementById("begginer-el")
let buttonIntermediate = document.getElementById("Intermediate-el")
let buttonAdvanced = document.getElementById("Advanced-el")
let buttonExpert = document.getElementById("Expert-el")
let titleEl = document.getElementById("title");
let descriptionEl = document.getElementById("description");
let featuresEl = document.getElementById("features");
let bonusEl = document.getElementById("bonus");
let generateButton = document.getElementById("Generate")

const beginnerQuests = [
  {
    title: "Cozy Café",
    description: "Create a one-page website for a fictional café.",
    features: ["Add a menu", "Include opening hours", "Choose a cozy color palette"],
    bonus: "Feature a drink with a wonderfully strange name."
  },
  {
    title: "Pet of the Day",
    description: "Make a page that introduces an imaginary pet.",
    features: ["Add a photo or illustration", "Write a short bio", "List its favorite things"],
    bonus: "Give the pet an oddly specific talent."
  },
  {
    title: "Dream Destination",
    description: "Design a travel page for a place you would love to visit.",
    features: ["Add a hero image", "Describe three attractions", "Include a travel tip"],
    bonus: "Invent one local custom visitors should know."
  },
  {
    title: "Tiny Plant Shop",
    description: "Build a simple storefront for a fictional plant shop.",
    features: ["Show three plants", "Add a price to each", "Write a short care tip"],
    bonus: "Give one plant a dramatic backstory."
  },
  {
    title: "Playlist Postcard",
    description: "Create a page that shares a playlist for a particular mood.",
    features: ["Name the playlist", "List five songs", "Describe when to listen"],
    bonus: "Add a song you made up."
  },
  {
    title: "Movie Night Picker",
    description: "Make a page that recommends a movie for tonight.",
    features: ["Show a movie title", "Add its genre and runtime", "Write a short reason to watch"],
    bonus: "Include a questionable snack pairing."
  },
  {
    title: "Personal Profile",
    description: "Design a playful about-me page.",
    features: ["Add a name and introduction", "List three interests", "Choose a favorite color"],
    bonus: "Include a completely unnecessary fun fact."
  },
  {
    title: "Recipe Card",
    description: "Build a page for a favorite or invented recipe.",
    features: ["List ingredients", "Write the steps", "Show the prep time"],
    bonus: "Give the recipe a memorable name."
  },
  {
    title: "Local Weather Mood",
    description: "Create a weather-themed page for an imaginary town.",
    features: ["Show the temperature", "Describe the conditions", "Add a weather icon"],
    bonus: "Include a forecast for someone's mood."
  },
  {
    title: "Museum of Small Things",
    description: "Make a mini museum page for ordinary objects.",
    features: ["Feature three objects", "Write a caption for each", "Add a museum title"],
    bonus: "Treat a paperclip like a priceless artifact."
  },
  {
    title: "One-Page Book Club",
    description: "Create a page for a book you love or made up.",
    features: ["Show the book title", "Write a short summary", "Add a favorite quote"],
    bonus: "Invent a book club name."
  },
  {
    title: "A Day in My Life",
    description: "Build a simple timeline of an ideal day.",
    features: ["Include at least four moments", "Add times", "Describe each activity"],
    bonus: "Make one moment delightfully unrealistic."
  },
  {
    title: "Color of the Day",
    description: "Make a page celebrating one color.",
    features: ["Show the color name", "Add its hex code", "List three things in that color"],
    bonus: "Describe what mood the color would have."
  },
  {
    title: "Birthday Invitation",
    description: "Design an invitation for a fictional birthday party.",
    features: ["Show the date and place", "Describe the theme", "Add RSVP details"],
    bonus: "Make the party theme unusually specific."
  },
  {
    title: "Dream Bedroom",
    description: "Create a page showing your imaginary dream bedroom.",
    features: ["Describe three items", "Choose a color scheme", "Add a short intro"],
    bonus: "Include one secret feature."
  },
  {
    title: "Snack Ranking",
    description: "Build a page ranking your favorite snacks.",
    features: ["Rank at least five snacks", "Give each a score", "Add a short reason"],
    bonus: "Give the top snack an award title."
  },
  {
    title: "Friendly Neighborhood Guide",
    description: "Make a guide to an imaginary neighborhood.",
    features: ["Name three places", "Describe each one", "Add a neighborhood slogan"],
    bonus: "Include a local legend."
  },
  {
    title: "Tiny Art Gallery",
    description: "Design a gallery page for three imaginary artworks.",
    features: ["Name each artwork", "Write an artist note", "Choose a gallery name"],
    bonus: "Make one artwork about a very boring subject."
  },
  {
    title: "Morning Routine",
    description: "Create a page sharing a simple morning routine.",
    features: ["List four steps", "Add a time for each", "Write a friendly introduction"],
    bonus: "Include an optional step for sleepy people."
  },
  {
    title: "The Compliment Machine",
    description: "Make a page that displays kind compliments.",
    features: ["Write five compliments", "Give the page a cheerful title", "Add a button"],
    bonus: "Make one compliment extremely specific."
  }
];

const intermediateQuests = [
  {
    title: "Habit Garden",
    description: "Build a habit tracker where completed habits help a garden grow.",
    features: ["Add and remove habits", "Mark habits complete each day", "Show progress for the week"],
    bonus: "Save the garden’s progress in local storage."
  },
  {
    title: "Choose-Your-Own Adventure",
    description: "Create a short interactive story where choices change what happens next.",
    features: ["Write at least three story scenes", "Add two choices per scene", "Include multiple endings"],
    bonus: "Let visitors restart the story without refreshing."
  },
  {
    title: "Recipe Finder",
    description: "Make a recipe collection visitors can search and filter.",
    features: ["Show at least eight recipes", "Search by recipe name", "Filter by meal type"],
    bonus: "Add a button to save favorite recipes."
  },
  {
    title: "Personal Reading Tracker",
    description: "Build a small app for keeping track of books someone wants to read.",
    features: ["Add a book title and author", "Mark books as reading or finished", "Filter by reading status"],
    bonus: "Save the book list in local storage."
  },
  {
    title: "Local Event Board",
    description: "Create an event page for a fictional community.",
    features: ["Show at least six events", "Filter by event type", "Display date, time, and location"],
    bonus: "Add a form for submitting a new event."
  },
  {
    title: "Flashcard Study Tool",
    description: "Make a flashcard app for learning a topic of your choice.",
    features: ["Show a question and answer", "Flip the card when clicked", "Move between multiple cards"],
    bonus: "Track how many cards the visitor gets right."
  },
  {
    title: "Mood-Based Music Picker",
    description: "Build a music recommendation page that responds to a selected mood.",
    features: ["Offer at least five moods", "Show a playlist for each mood", "Let visitors switch moods"],
    bonus: "Change the page colors to match the selected mood."
  },
  {
    title: "Trip Planner",
    description: "Create a simple itinerary builder for planning a day trip.",
    features: ["Add activities to an itinerary", "Show the time and location for each", "Remove activities"],
    bonus: "Let visitors rearrange activities."
  },
  {
    title: "Pet Adoption Profiles",
    description: "Design an adoption site with searchable profiles for imaginary pets.",
    features: ["Show at least six pet profiles", "Filter by animal type", "Include each pet’s age and personality"],
    bonus: "Add a favorite button to each profile."
  },
  {
    title: "Budget Buddy",
    description: "Build a basic page for tracking spending against a monthly budget.",
    features: ["Add an expense and category", "Show the remaining budget", "List recent expenses"],
    bonus: "Display a simple spending breakdown by category."
  },
  {
    title: "Movie Watchlist",
    description: "Create a watchlist where visitors can add films and track what they have seen.",
    features: ["Add a title and genre", "Mark a film as watched", "Filter by watched status"],
    bonus: "Save the watchlist after the page is closed."
  },
  {
    title: "Quiz Builder",
    description: "Make a quiz that gives visitors a result based on their answers.",
    features: ["Write at least five questions", "Offer multiple answers", "Show a result at the end"],
    bonus: "Add a restart button and a score summary."
  },
  {
    title: "Virtual Plant Care",
    description: "Create a plant collection with care information and watering reminders.",
    features: ["Show at least four plants", "Display light and water needs", "Add a watered-today control"],
    bonus: "Use a progress indicator for the next watering."
  },
  {
    title: "Community Lost and Found",
    description: "Build a board for posting and browsing lost or found items.",
    features: ["Add an item with a description", "Separate lost and found listings", "Search listings"],
    bonus: "Add a contact button to each listing."
  },
  {
    title: "Workout Roulette",
    description: "Make a workout generator based on time available and exercise type.",
    features: ["Let visitors choose a workout length", "Generate a list of exercises", "Show a timer for each move"],
    bonus: "Add a pause and resume control to the timer."
  },
  {
    title: "Color Palette Mixer",
    description: "Create a tool for generating and saving color palettes.",
    features: ["Generate a palette of five colors", "Show each color’s hex code", "Copy a code when clicked"],
    bonus: "Let visitors save their favorite palettes."
  },
  {
    title: "Online Poll",
    description: "Build a poll where visitors vote between a set of choices.",
    features: ["Create a question with at least three options", "Record a vote", "Show results as bars or percentages"],
    bonus: "Prevent a visitor from voting twice during the same session."
  },
  {
    title: "Personal Journal",
    description: "Create a private-feeling journal page for writing and browsing entries.",
    features: ["Add an entry with a date", "Show previous entries", "Search entry text"],
    bonus: "Store entries locally in the browser."
  },
  {
    title: "Travel Packing List",
    description: "Make a packing checklist that changes based on the type of trip.",
    features: ["Offer at least three trip types", "Generate a relevant checklist", "Let visitors check off items"],
    bonus: "Let visitors add their own items."
  },
  {
    title: "Tiny Town Directory",
    description: "Build a directory of businesses and places in an imaginary town.",
    features: ["Show at least eight places", "Filter by category", "Display a description and opening hours"],
    bonus: "Add a map-style layout using a simple illustration or CSS."
  }
];

const advancedQuests = [
  {
    title: "Live Weather Dashboard",
    description: "Build a weather dashboard that fetches current conditions for a searched city.",
    features: ["Connect to a weather API", "Show temperature and conditions", "Handle loading and error states"],
    bonus: "Add a five-day forecast."
  },
  {
    title: "Collaborative Whiteboard",
    description: "Create a shared whiteboard where multiple visitors can add notes or drawings.",
    features: ["Add and move notes", "Support multiple participants", "Sync changes in real time"],
    bonus: "Add simple usernames and colored cursors."
  },
  {
    title: "Personal Finance Dashboard",
    description: "Build a dashboard for tracking income, expenses, and savings goals.",
    features: ["Add and categorize transactions", "Show monthly totals", "Visualize spending with a chart"],
    bonus: "Export transactions as a CSV file."
  },
  {
    title: "AI Story Workshop",
    description: "Create a writing tool that turns a few ideas into a story outline.",
    features: ["Collect genre, characters, and setting", "Generate a structured outline", "Let visitors revise sections"],
    bonus: "Add a branching plot option."
  },
  {
    title: "Community Marketplace",
    description: "Build a marketplace with listings, search, and a simulated purchase flow.",
    features: ["Create and edit listings", "Filter by category and price", "Show listing details"],
    bonus: "Add user accounts and saved favorites."
  },
  {
    title: "Real-Time Quiz Arena",
    description: "Make a multiplayer quiz where participants answer questions together.",
    features: ["Create or join a game room", "Show a synchronized question timer", "Track scores live"],
    bonus: "Add a host view for controlling the game."
  },
  {
    title: "Accessible Route Planner",
    description: "Create a map-based planner that helps visitors find routes matching their needs.",
    features: ["Connect to a mapping API", "Let visitors choose accessibility preferences", "Show route options and estimated times"],
    bonus: "Allow visitors to report a route issue."
  },
  {
    title: "Recipe Planner with Pantry Matching",
    description: "Build a meal planner that suggests recipes based on ingredients someone has.",
    features: ["Track pantry ingredients", "Search recipes by available items", "Create a weekly meal plan"],
    bonus: "Generate a shopping list for missing ingredients."
  },
  {
    title: "Learning Path Builder",
    description: "Create an interactive course planner with progress tracking and prerequisites.",
    features: ["Organize lessons into modules", "Unlock lessons as prerequisites are met", "Save learner progress"],
    bonus: "Show a visual map of the learning path."
  },
  {
    title: "Event Booking Platform",
    description: "Build an event discovery and booking site with a simulated ticket flow.",
    features: ["Search and filter events", "Select ticket types and quantities", "Show a booking confirmation"],
    bonus: "Add a calendar view and waitlist."
  },
  {
    title: "Personalized News Reader",
    description: "Create a news reader that fetches articles and adapts to selected interests.",
    features: ["Connect to a news API", "Filter by topic", "Save articles for later"],
    bonus: "Add adjustable text size and a distraction-free reading mode."
  },
  {
    title: "Digital Art Marketplace",
    description: "Build a gallery where artists can publish works and visitors can browse collections.",
    features: ["Create artist and artwork profiles", "Filter by style and medium", "Build a favorites collection"],
    bonus: "Add a simulated auction with a countdown."
  },
  {
    title: "Habit Insights Dashboard",
    description: "Create a habit tracker that summarizes patterns over time.",
    features: ["Record daily completions", "Show streaks and calendar history", "Compare weekly progress"],
    bonus: "Let visitors define their own goals and reminders."
  },
  {
    title: "Interactive Fiction Engine",
    description: "Build a tool for creating and playing branching stories.",
    features: ["Write scenes and choices", "Track choices and story state", "Validate that every path reaches an ending"],
    bonus: "Let visitors share a playable story link."
  },
  {
    title: "Volunteer Matching Portal",
    description: "Create a site that matches volunteers with opportunities based on their interests and schedule.",
    features: ["Let organizations post opportunities", "Filter by skills, location, and time", "Save or apply to opportunities"],
    bonus: "Add a matching score with an explanation."
  },
  {
    title: "Smart Home Control Simulator",
    description: "Build a dashboard for controlling simulated lights, temperature, and devices.",
    features: ["Create device controls", "Group devices into rooms", "Save automation routines"],
    bonus: "Add a schedule builder for routines."
  },
  {
    title: "Language Exchange Matcher",
    description: "Create a matching site for people practicing each other’s languages.",
    features: ["Create learner profiles", "Match by languages and availability", "Filter and save potential partners"],
    bonus: "Add a simple chat interface with sample messages."
  },
  {
    title: "Data Story Explorer",
    description: "Build an interactive site that explains a public dataset through charts and guided sections.",
    features: ["Load and clean a dataset", "Create interactive charts", "Add filters and clear explanations"],
    bonus: "Let visitors compare two selections side by side."
  },
  {
    title: "Subscription Manager",
    description: "Create a dashboard for tracking recurring subscriptions and renewal dates.",
    features: ["Add subscription details", "Calculate monthly and yearly totals", "Show upcoming renewals"],
    bonus: "Add reminders and a cancellation priority score."
  },
  {
    title: "Community Knowledge Map",
    description: "Build a map of local knowledge, resources, and community-submitted tips.",
    features: ["Add location-based entries", "Filter by topic", "Allow visitors to suggest edits"],
    bonus: "Add moderation tools and a change history."
  }
];

const expertQuests = [
  {
    title: "Multi-Tenant Project Platform",
    description: "Build a project-management app where separate teams can manage their own workspaces.",
    features: [
      "Add sign-in and role-based permissions",
      "Support multiple workspaces with isolated data",
      "Track tasks, comments, and activity history"
    ],
    bonus: "Add workspace invitations and an audit log."
  },
  {
    title: "Offline-First Field Journal",
    description: "Create a journal that works without a connection and syncs when the visitor is back online.",
    features: [
      "Build it as a progressive web app",
      "Queue edits while offline",
      "Resolve conflicting edits during sync"
    ],
    bonus: "Add install support and background synchronization."
  },
  {
    title: "Real-Time Collaborative Editor",
    description: "Build an editor where several people can edit the same document together.",
    features: [
      "Synchronize edits between users",
      "Show live cursors and presence",
      "Handle simultaneous changes without losing work"
    ],
    bonus: "Add version history with document restore."
  },
  {
    title: "Secure File Sharing Service",
    description: "Create a service for uploading files and sharing them with controlled access.",
    features: [
      "Support expiring share links",
      "Add file size and type limits",
      "Enforce access permissions on the server"
    ],
    bonus: "Add malware scanning and an access history."
  },
  {
    title: "Searchable Knowledge Base",
    description: "Build a documentation platform that supports rich content and fast search.",
    features: [
      "Create and organize articles",
      "Add full-text search with filters",
      "Track revisions and restore older versions"
    ],
    bonus: "Add a relevance tuning dashboard."
  },
  {
    title: "Event Ticketing at Scale",
    description: "Create an event platform that handles limited inventory and concurrent bookings.",
    features: [
      "Prevent overselling during simultaneous purchases",
      "Hold seats temporarily during checkout",
      "Process payments through a test payment provider"
    ],
    bonus: "Add a waitlist that offers seats when reservations expire."
  },
  {
    title: "Custom Analytics Platform",
    description: "Build a dashboard that ingests events and lets teams explore product usage.",
    features: [
      "Collect and validate event data",
      "Create queries for funnels and retention",
      "Support date ranges and saved reports"
    ],
    bonus: "Add data export and scheduled report delivery."
  },
  {
    title: "Federated Community Forum",
    description: "Create a discussion platform whose separate servers can exchange public posts.",
    features: [
      "Build user profiles, posts, and moderation tools",
      "Define a protocol for exchanging activities",
      "Verify incoming requests and prevent replay attacks"
    ],
    bonus: "Add server discovery and block lists."
  },
  {
    title: "Visual Workflow Automation Builder",
    description: "Build a tool where users connect triggers and actions to automate tasks.",
    features: [
      "Create a visual node editor",
      "Validate workflows before running them",
      "Execute jobs with retries and failure reporting"
    ],
    bonus: "Add workflow versioning and a run history."
  },
  {
    title: "Privacy-Friendly Identity Service",
    description: "Create an identity platform that lets people sign in to multiple demo apps.",
    features: [
      "Implement secure login and session handling",
      "Support consent and account data export",
      "Add account recovery and session revocation"
    ],
    bonus: "Add passkey sign-in and a security activity page."
  },
  {
    title: "Global Multiplayer Strategy Game",
    description: "Build a browser game with persistent worlds and players acting at the same time.",
    features: [
      "Synchronize game state between players",
      "Validate actions on the server",
      "Recover gracefully from disconnects"
    ],
    bonus: "Add replayable match history."
  },
  {
    title: "Personal Data Portability Hub",
    description: "Build a tool that imports a person’s data from several services into one place.",
    features: [
      "Create import adapters for multiple formats",
      "Normalize data into a shared model",
      "Let people inspect, export, and delete imported data"
    ],
    bonus: "Add an import preview that explains every transformation."
  }
];

function defineLevel(level) {
  difficultyLevel = level;

  buttonBeginner.classList.toggle("selected", level === "beginner");
  buttonIntermediate.classList.toggle("selected", level === "intermediate");
  buttonAdvanced.classList.toggle("selected", level === "advanced");
  buttonExpert.classList.toggle("selected", level === "expert");
}

buttonBeginner.addEventListener("click", function () {
  defineLevel("beginner");
});

buttonIntermediate.addEventListener("click", function () {
  defineLevel("intermediate");
});

buttonAdvanced.addEventListener("click", function () {
  defineLevel("advanced");
});

buttonExpert.addEventListener("click", function () {
  defineLevel("expert");
});

generateButton.addEventListener("click", generateQuest);

function generateRandom(questList) {
  let randomIndex = Math.floor(Math.random() * questList.length);
  let quest = questList[randomIndex];

  titleEl.textContent = quest.title;
  descriptionEl.textContent = quest.description;
  featuresEl.textContent = quest.features.join(", ");
  bonusEl.textContent = "Bonus: " + quest.bonus;
}

function generateQuest() {
  if (difficultyLevel === "beginner") {
    generateRandom(beginnerQuests);
  } else if (difficultyLevel === "intermediate") {
    generateRandom(intermediateQuests);
  } else if (difficultyLevel === "advanced") {
    generateRandom(advancedQuests);
  } else if (difficultyLevel === "expert") {
    generateRandom(expertQuests);
  } else {
    titleEl.textContent = "Choose a difficulty first!";
    descriptionEl.textContent = "";
    featuresEl.textContent = "";
    bonusEl.textContent = "";
  }
}
