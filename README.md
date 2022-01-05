# my-social-api

<br />

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Installation](#installation)
- [Deployment](#deployment)
- [License](#license)
- [Demo](#demo)
- [Criteria](#criteria)
- [Collaboration](#collaboration)

<br />
<br />

## Description

My Social API is a social network web application where users can share their thoughts and ideas, react to friends, and create a friend list.

<br />
<br />

## User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

<br />
<br />

## Installation

⬇️

Must first ... with the following commands:

```
...

```

<br />

Application will then run in the command-line with:

```
...
```

<br />
<br />

## Deployment

[<img src="./assets/images/...png" height="80px">](https://.../)

<br />
<br />

**Employing the following technology:**

[<img src="./assets/images/...svg" height="20px">](https://www.npmjs.com/package/nodejs-mvc)

[Express.js](https://www.npmjs.com/package/express)

MongoDB database, and the Mongoose ODM.

[Mongoose](https://www.npmjs.com/package/mongoose)

JavaScript date library of your choice or the native JavaScript `Date` object to format timestamps.

<br />
<br />

## License

Copyright (c) David Dyer [2021]

[<img src="./assets/images/...svg" height="20px">](https://choosealicense.com/licenses/isc/)

<br />
<br />

## Demo

START SERVER

1. GET routes to return all users and all thoughts
2. GET routes to return a single user and a single thought
3. POST, PUT, and DELETE routes for users
4. POST, PUT, and DELETE routes for thoughts
5. POST and DELETE routes for reactions to thoughts
6. POST and DELETE routes for a user’s friend list

BONUS: DELETE a user's associated thoughts when the user is deleted.

[![](assets/screenshots/...png)](https://youtu.be/...)

<img src="./assets/screenshots/...png" width = "600">

<br />
<br />

## Criteria

✅

```
After command to invoke app, the server is launched and the Mongoose
models are synced to the MongoDB database.

When opening API GET routes in Insomnia for users and thoughts, then
user is presented with data for these routes in formatted JSON.

When testing API POST, PUT, and DELETE routes in Insomnia, the user
is able to successfully create, update, and delete users and thoughts.

When testing API POST and DELETE routes in Insomnia, the user is able
to successfully create and delete reactions to thoughts

When testing API POST and DELETE routes in Insomnia, the user is able
add and remove friends from a user’s friend list


```

<br />
<br />

## Collaboration

Development efforts most often include guidance from Jedi Master:
**Chris Champness**

<a href= "https://github.com/CChampness"><img src=
"https://avatars.githubusercontent.com/u/87551272?v=4" width="50px"/></a>

<br />
<br />
<br />
Let's build something!

<!--
// Basic File Structure
  // install dependencies
    // mongoose
    // express
  // server.js
    // get a basic server starting and listening

// Mongo Stuff
  // Models
    // User
      // thoughts ([])
        // type: Schema.Types.ObjectId,
        // ref: Thoughts model
      // friends ([])
        // type: Schema.Types.ObjectId,
        // ref: User model
        // look at activity populate 23
      // virtual
        // getter for friends.length
        // look at activity virtuals 21
    // Thoughts
      // reactions
        // linked to the reaction schema
        // like subdocuments activity 17
      // virtual
        // getter for reactions.length
        // look at activity virtuals 21
  // Schema Only
    // Reaction

// Getting Mongoose connected
  // proper connection file with db name
  // db.once in server.js

// Seed data
  // pull in models needed (Users, Thoughts)
  // Delete all users and thoughts
  // data.js
    // array of 3 users
      // empty array of thoughts
      // empty array of friends
    // array of 3 thoughts
      // empty array of reactions

// Routes
  // userRoutes
    // /users
      // getting all Users
      // creating a user
        // ezpz
    // /users/:id
      // get a single user
        // populate (friends)
        // populate (thoughts)
      // update a user
      // delete a user
    // /thoughts
      // getting all thoughts
      // creating a thought
        // create the thought first
          // find the user by username, or userId and push the thought in there

// Controllers
  // user-controller
    // one method per http method
  // thoughts-controller
    // one method per http method
-->
