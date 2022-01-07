const connection = require("../config/connection");
const { Thought, User } = require("../models");
const { seedUsers, seedThoughts } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Add users to the collection and await the results
  await User.collection.insertMany(seedUsers);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(seedThoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(seedUsers);
  console.table(seedThoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
