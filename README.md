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

Must first initialize with the following commands:

```
npm i
node utils/seed

```

<br />

Application will then run in the command-line with:

```
node server
```

<br />
<br />

## Deployment

[<img src="./assets/images/insomnia.png" height="80px">](https://.../)

<br />

**Employing the following technology:**

[<img src="./assets/images/express.svg" height="20px">](https://www.npmjs.com/package/express) [<img src="./assets/images/mongodb.svg" height="20px">](https://docs.mongodb.com/) [<img src="./assets/images/mongoose.svg" height="20px">](https://www.npmjs.com/package/mongoose)  
[<img src="./assets/images/insomnia_core.svg" height="20px">](https://www.npmjs.com/package/express) [<img src="./assets/images/moment.svg" height="20px">](https://momentjs.com/)

<br />
<br />

## License

Copyright (c) David Dyer [2022]

[<img src="./assets/images/isc.svg" height="20px">](https://choosealicense.com/licenses/isc/)

<br />
<br />

## Demo

[![](assets/demo/youtube.png)](https://youtu.be/v54KFOm51Ew)

<img src="./assets/demo/testing_sc.png" width = "600">

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

🛠️
