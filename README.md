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
npm i
node utils/seed

```

<br />

Application will then run in the command-line with:

```
node seed
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

Development efforts included much deliberation with my fellow cohort:
**Olsen Ogouchi**

<a href= "https://github.com/Chrisolsen1993"><img src=
"https://avatars.githubusercontent.com/u/49103700?v=4" width="50px"/></a>

<br />
<br />
<br />
Let's build something!
