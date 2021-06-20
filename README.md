# JeopMillionaire!?
## About the Application
JeopMillionaire!? is a trivia game application based on the game-shows:
*Jeopardy!* and *Who Wants to be a Millionaire?*. This application allows users
to interact with a gameboard that is set up with (3) random categories that have
(3) questions to choose from. Each question has 4 multiple choice answers to choose
from that have varying points for the user to potentially accumulate or lose from
their total score.

This repository is the api application which utilizes an Express.js web framework
and Mongoose to connect to MongoDB to view and track the status of a game. The
client application utilizes React, Bootstrap, Javascript and HTML with SCSS to
display a gameboard.

## Installation
1. Fork and clone this repository.
2. Change into the new directory from the terminal.
3. Install any dependencies with `npm install`.
4. Run the development server with `npm run server`.

## Deployment
### Initial Deployment
1. Create a Heroku app and push the code to Heroku.
2. Set up a MongoDB Atlas.
3. To Heroku, add the environment variables: `CLIENT_ORIGIN` and `DB_URI`.
  * `CLIENT_ORIGIN` is the url to the front-end client.
  * `DB_URI` is the connection string from your new MongoDB cluster.
4. Before deploying, ensure there you have a clean working status on the main branch.
5. To deploy, run `git push heroku main`.

### Update Existing Deployment
1. Before deploying, ensure there you have a clean working status on the main branch.
2. To deploy, run `git push heroku main`.

## Structure
* Dependencies are stored in `package.json`.
* Questions for gameboards are stored in the database and are added manually
through `curl-scripts/questionSeeding/questionSeeding.js` and seeded to the
MongoDB Atlas by changing the development url in `config/db.js` to your MongoDB
cluster.
  * In the future, this could be done by an admin on the front-end.
* Gameboard creations are an empty `POST` request that creates a board with random
categories and their corresponding questions.

## Deployed Applications
The back-end of the application is deployed on [Heroku](https://damp-oasis-97796.herokuapp.com/) and the repository is on [Github](https://github.com/elainechan55/jeopmillionaire-server).

The front-end of the application is deployed on [Github Pages](https://elainechan55.github.io/jeopmillionaire-client/) and the repository is on [Github](https://github.com/elainechan55/jeopmillionaire-client).

## Technologies Used
Technology    | Front-End | Back-End |
:-----------: | :-------: | :------: |
**HTML**      | X         |          |
**CSS/SCSS**  | X         |          |
**Javascript**| X         | X        |
**Axios**     | X         |          |
**Bootstrap** | X         |          |
**React**     | X         |          |
**Express**   |           | X        |
**Mongoose**  |           | X        |
**MongoDB**   |           | X        |
**Lodash**    | X         | X        |

## API Routes
Method | URI              | Status          | Description          |
------ |----------------- | --------------- | -------------------- |
POST   | /sign-up         | 201, Created    | sign up user         |
POST   | /sign-in         | 201, Created    | sign in user         |
PATCH  | /change-password | 204, No content | change user password |
DELETE | /sign-out        | 204, No content | sign out user        |
POST   | /gameboards      | 201, Created    | create a gameboard   |
GET    | /gameboards      | 200, OK         | show all gameboards  |
GET    | /gameboards/:id  | 200, OK         | show a gameboard     |
PATCH  | /gameboards/:id  | 200, OK         | update a gameboard   |
DELETE | /gameboards/:id  | 204, No content | delete a gameboard   |

## Planning
### Process
Throughout the planning process, I utilized a [Trello project board](https://trello.com/b/3XPUSOPk/jeopmillionaire) to help with organization and development.

### Entity Relationship Diagram
* [Updated Entity Relationship Diagram](https://imgur.com/a/o3T8BW7)
* [Initial Entity Relationship Diagram and Wireframes](https://imgur.com/a/YP9ECE2)

## Next Development
### Future Iterations / Unsolved Problems
- To have user choose gameboard size (minimum = 3 x 3, maximum = 6 x 5).
- To have a mobile application for mobile users rather than playing through a browser on mobile.
- To incorporate local multiplayer on web application.
- To incorporate networked multiplayer on web application.
- To include audio of [Trebek](https://github.com/elainechan55/jeopmillionaire-client/blob/main/public/dailyDouble.gif?raw=true)'s encourangement and responses to answers.
