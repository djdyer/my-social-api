const connection = require("../config/connection");
const { Thought, User } = require("../models");
const { getRandomUser, getRandomThoughts } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Get some random thought objects using a helper function that we imported from ./data
  const thoughts = getRandomThoughts(30);

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 30; i++) {
    const username = getRandomUser();
    const thoughts = ``;
    const reactions = ``;
    users.push({
      username,
      thoughts,
      reactions,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertOne({
    thoughtText: "",
    users: [...users],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
