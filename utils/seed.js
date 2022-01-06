const connection = require("../config/connection");
const { Thought, User } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Empty array to hold the users
  // const users = [];

  // User seed
  const seedUsers = [
    {
      username: "Carlos Avalos",
      email: "carlos.avalos@gmail.com",
    },
    {
      username: "Daniel Awad",
      email: "dwad@yahoo.com",
    },
    {
      username: "Mike Barajas",
      email: "m.barajas@cox.net",
    },
    {
      username: "Eddie Dominguez",
      email: "eddie@bzerk.com",
    },
    {
      username: "Johnny Chang",
      email: "johnnyc123@hotmail.com",
    },
    {
      username: "Josh Clements",
      email: "josh.clements@gmail.com",
    },
    {
      username: "Mike Cox",
      email: "mike.c@futurestreet.com",
    },
    {
      username: "Benjie Escobar",
      email: "benjie@hotmail.com",
    },
    {
      username: "Adam Gonzales",
      email: "adam_g@clsc.com",
    },
    {
      username: "Dillon Jones",
      email: "dillon.jones@tripleseven.com",
    },
    {
      username: "Brien Morgan",
      email: "sosoanxious@gmail.com",
    },
    {
      username: "Jasmine Ortega",
      email: "jasmine@vans.com",
    },
    {
      username: "Ronald Ortiz",
      email: "ronald@thehundreds.com",
    },
    {
      username: "Tony Ramirez",
      email: "djynot@hotmail.com",
    },
    {
      username: "David Rivera",
      email: "david.rivera@stussy.com",
    },
  ];

  // Add users to the collection and await the results
  await User.collection.insertMany(seedUsers);

  // Empty array to hold user thoughts
  // const thoughts = [];

  // Thought seed
  const seedThoughts = [
    {
      thoughtText:
        "This damn pandemic has gone on long enough! Get vaccinated you idiots!",
      username: "David Rivera",
    },
    {
      thoughtText:
        "Dr. Fauci is a fraud, the virus is a biological weapon from China!",
      username: "Tony Ramirez",
    },
    {
      thoughtText:
        "As long as there is money in politics, nothing will ever get done for my people",
      username: "Ronald Ortiz",
    },
    {
      thoughtText: "Check out this cute cat video OMG!",
      username: "Jasmine Ortega",
    },
    {
      thoughtText:
        "This platform is much better than Facebook, who needs a Metaverse mansion anyway",
      username: "Brien Morgan",
    },
    {
      thoughtText: "Free Julian Assange!",
      username: "Dillon Jones",
    },
    {
      thoughtText:
        "Hope everyone is having a great new year! Fingers crossed for the salvation of humanity and all!",
      username: "Adam Gonzales",
    },
    {
      thoughtText: "Name your best album of 2021 below..  GO!",
      username: "Benjie Escobar",
    },
    {
      thoughtText:
        "Just landed the job with Google! Now to pay off that pesky 150k student loan.",
      username: "Mike Cox",
    },
    {
      thoughtText:
        "Recycling is broken in the United State, we need a new deal solution to plastic waste",
      username: "Josh Clements",
    },
    {
      thoughtText: "Our webshop is now restocked with new items, link in bio!",
      username: "Johnny Chang",
    },
    {
      thoughtText: "Look at how awesome my dog is!",
      username: "Mike Barajas",
    },
    {
      thoughtText:
        "Hello friends! I'm moving this spring, so let's get togther soon! Miss you all.",
      username: "Carlos Avalos",
    },
    {
      thoughtText: "At this point it should be called the fight for $25",
      username: "Eddie Dominguez",
    },
    {
      thoughtText:
        "We are trying to reach you about your car's extended warranty.",
      username: "Daniel Awad",
    },
  ];

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(seedThoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(seedUsers);
  console.table(seedThoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
