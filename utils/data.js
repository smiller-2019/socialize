const names = [
  "Aaran",
  "Aaren",
  "Aarez",
  "Aarman",
  "Aaron",
  "Aaron-James",
  "Aarron",
  "Aaryan",
  "Aaryn",
  "Aayan",
  "Aazaan",
  "Abaan",
  "Abbas",
  "Abdallah",
  "Abdalroof",
  "Abdihakim",
  "Abdirahman",
  "Abdisalam",
  "Abdul",
  "Abdul-Aziz",
  "Abdulbasir",
  "Abdulkadir",
  "Abdulkarem",
  "Ze",
  "Zechariah",
  "Zeek",
  "Zeeshan",
  "Zeid",
  "Zein",
  "Zen",
  "Zendel",
  "Zenith",
  "Zennon",
  "Zeph",
  "Zerah",
  "Zhen",
  "Zhi",
  "Zhong",
  "Zhuo",
  "Zi",
  "Zidane",
  "Zijie",
  "Zinedine",
  "Zion",
  "Zishan",
  "Ziya",
  "Ziyaan",
  "Zohaib",
  "Zohair",
  "Zoubaeir",
  "Zubair",
  "Zubayr",
  "Zuriel",
  ``,
];

const emails = [
  "Aaran@email.com",
  "Aaren@email.com",
  "Aarez@email.com",
  "Aarman@email.com",
  "Aaron@email.com",
  "Aaron-James@email.com",
  "Aarron@email.com",
  "Aaryan@email.com",
  "Aaryn@email.com",
  "Aayan@email.com",
  "Aazaan@email.com",
  "Abaan@email.com",
  "Abbas@email.com",
  "Abdallah@email.com",
  "Abdalroof@email.com",
  "Abdihakim@email.com",
  "Abdirahman@email.com",
  "Abdisalam@email.com",
  "Abdul@email.com",
  "Abdul-Aziz@email.com",
  "Abdulbasir@email.com",
  "Abdulkadir@email.com",
  "Abdulkarem@email.com",
  "Ze@email.com",
  "Zechariah@email.com",
  "Zeek@email.com",
  "Zeeshan@email.com",
  "Zeid@email.com",
  "Zein@email.com",
  "Zen@email.com",
  "Zendel@email.com",
  "Zenith@email.com",
  "Zennon@email.com",
  "Zeph@email.com",
  "Zerah@email.com",
  "Zhen@email.com",
  "Zhi@email.com",
  "Zhong@email.com",
  "Zhuo@email.com",
  "Zi@email.com",
  "Zidane@email.com",
  "Zijie@email.com",
  "Zinedine@email.com",
  "Zion@email.com",
  "Zishan@email.com",
  "Ziya@email.com",
  "Ziyaan@email.com",
  "Zohaib@email.com",
  "Zohair@email.com",
  "Zoubaeir@email.com",
  "Zubair@email.com",
  "Zubayr@email.com",
  "Zuriel@email.com",
];

const thoughtBodies = [
  "How to disagree with someone",
  "iPhone review",
  "how-to video",
  "video essay on the history of video games",
  "How to make money on the App Store",
  "Learn NextJS in five minutes (Not clickbate)",
  "Movie trailer",
  "Hello world",
  "Another possible solution to the algorithm",
  "Apology video",
  "Submission for startup pitch",
];

const possibleReactionResponses = [
  "I disagree!",
  "I tried your algorithm, here were the results",
  "This was awesome",
  "Thank you for the great content",
  "Please check out my video response",
  "Like and subscribe to my channel please",
  "Reply: The side effects of in app purchases on digital marketplaces",
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Gets a random email
const getRandomEmail = () => `${getRandomArrItem(emails)}`;

// Function to generate random videos that we can add to the database. Includes video responses.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughtBodies),
      username: getRandomName(),
      reactions: [...getReactionsResponses(3)],
    });
  }
  return results;
};

const getRandomFriends = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      username: getRandomName(),
    });
  }
  return results;
};

// Create the responses that will be added to each video
const getReactionsResponses = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactionResponses);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactionResponses),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts, getRandomEmail };
