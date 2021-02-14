# Fitness_Tracker

For individuals waanting to track their fitness, Fitness Tracker allows them to create and track daily workouts so they can easily reference what they have done and stay on top of their weekly workouts. Users will be able to make multiple exercises in a workout on a given day as well as be able to track the name, type, weight, sets, reps, and duration of their exercises. If the exercise is a cardio exercise, Fitness tracker will be able to track a users distance traveled. The applicaiton uses mongoDB in order to keep track of user exercises and mongoose to get and post user exercise information between the cleint side and the data base side.



A fitness app that allows the user to view, create, and track daily workouts. The user is able to log multiple exercises in a given day and also go back and update the workout. The user is able to track the name, type, weight, sets, reps and duration of each exercise. Cardiovascular exercises show the distance traveled in miles.

MVC parameters for a fitness workout logger that takes in new exercises and uses MongoDB with Mongoose to log them to the database which can then be analyzed in the app's dashboard that has multiple graphic views of the different workouts. Completion of this app included the buidling out of the exercise model for the Mongo DB formatting to ensure the correct logging of the various fields in the application. As there are two different types of workouts avaialble, resistance and cardio, the requried fields for each of them will be the same while there are a few fields that are only specific to the type of workout being logged.

The goal for this assignment is to create a full stack workout tracker web application that will allow a user to keep track of their workout regime by using MongoDB and Mongoose schema for database creation/management and Express for handling routes.

The main focus for this assignment is to practice using MongoDB and Mongoose for database management, the front-end code was provided in the homework assignment's directory for us to leverage for this assignment.

User Story
Here is the user story that was provided in the intructional ReadMe file for this assignment.

As a user, I want to be able to view create and track daily workouts.
I want to be able to log multiple exercises in a workout on a given day.
I should also be able to track the name, type, weight, sets, reps, and duration of exercise.
If the exercise is a cardio exercise, I should be able to track my distance traveled.


Acceptance Criteria
Here are the acceptance criteria that was provided in the intructional ReadMe file for this assignment.

When the user loads the page, they should be given the
option to create a new workout, or continue with their last workout.

The user should be able to:

  * Add exercises to a previous workout plan.

  * Add new exercises to a new workout plan.

  * View multiple the combined weight of multiple exercises on the `stats` page.


  In order to success launch this web application, you will need to have the following installed in your local working environment:

Node.js - Make sure Node.js is installed in your machine. If Node.js is not installed on your machine, click here to download the application.
MongoDB - Install MongoDB to enable your local environment to access the database structure used to store the back-end data for this application. Click here to download MongoDB.
Robo 3T - Robo 3T is an application that gives users to use an easy graphic user interface (GUI) to view and query data in a MongoDB database. Click here to download Robo 3T.
FYI - Do not install STUDIO 3T. It is not needed for this repo.
Postman - Postman allow users to query the API endpoints developed for this web application. Click here for additional instructions on how to download and use this application.
Installation Instructions
All NPM packages needed for this application are already listed as dependencies in the package.json file. If running this web application in your local environment, please make sure to run the npm install command in your terminal at the root directory level in order to access all required package.


Technologies Used
MongoDB: Used as a templating engine for ul HTML snippets that hold the task cards, and separate the generation of the different HTML from the rest of the JavaScript for cleaner and more organozed code.
Morgan: Request logger middleware for Node. js that simplifies the process of logging requests to the applicaiton application.
Express.js - Used for application set up of middle ware for end point connection between the front end and backend.
Node.js - Used for package managment and to execute JavaScript code to build the command line tool for server-side scripting.
jQuery - Used for executing functions on the browser side that allow the application render user inputs.
Git - Version control system to track changes to source code.
GitHub - Hosts repository that can be deployed to GitHub Pages.


Here is a list of the dependencies used for the development of this application:

Express - Reference the provided link for more information regarding this package: NPM Express Package
Mongoose - Reference the provided link for more information regarding this package: NPM Mongoose Package
Morgan - Reference the provided link for more information regarding this package: NPM Morgan Package

Code Snippet
The following JavaScript snippet is the PUT route on our server side Javascript file. This snippet of code is repsonsible for sending the ddWorkout json data back to the client side Javascript where it will then be rendered on the page. What makes this particualr peice of code interesting is that we are aassociating our db.Exercise with our dbWorkout, which are two seperate modles. We can do this by requiring mongoose and referencing the our exercise id in the workout shcema.
