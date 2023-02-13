# Reacting to APIs
We're gonna be building a web application that is going to display all animated movies made by Studio Ghibli. Think of this as a mini-version of IMDB (https://www.imdb.com/)! It's just dedicated to all things Studio Ghibli rather than all movies ever. In this lab assignment, your primary objective is to request data from a third-party API, handle the response, and then display the data in the browser with React. We're gonna be using this free REST API that catalogues every resource you could ever need to know about the Studio Ghibli films. Take a minute to scroll through the documentation of the website to familiarize yourself with the data and see if you can determine what endpoints are exposed in the API.

 

## Getting Started (same way you've built the previous two React labs)
1. Create a new project with Create React App.
2. Delete the `src` and `public` directory and all of its contents.
3. Create a new `public` directory and a new `index.html` file inside of `public`.
4. Use the `!` emmet shortcut to generate a fresh html document in the `index.html` file. Place `<div id="root"></div>` in the `<body>` of the html document you created. (like we did in earlier videos!)
5. Create a new `src` directory and a `components` directory inside of `src`.
6. Create an `App.jsx` and a `index.js` file inside of `src`.
7. Write the basic "entry point" code for the `index.js` file, avoid copy/paste so you can practice writing it yourself!
8. Write a simple function component that returns some JSX for your `App.jsx` file.

You should now have a project structure that resembles the following:

node_modules/

public/

|- index.html

src/

|- components/

|- App.jsx

|- index.js

.gitignore

package-lock.json

package.json

README.md

## Instructions
1. Head to the REST API https://ghibliapi.herokuapp.com/ and in particular, pay attention to the two endpoints we're going to be using: `/films` and `/people` in this lab. When exploring the endpoints, examine the properties each film or person has. This way when we eventually fetch this data in React, set it to state, and map through it, you'll have a good idea of the properties you'll be displaying.
* Explore the films endpoint: https://ghibliapi.herokuapp.com/films
* Explore the people endpoint: https://ghibliapi.herokuapp.com/people
2. Before we begin fetching data, let's set up our app with a conditional render. You'll want a home page that shows one button at first that says `Load Films`. Have this button change the conditional render when clicked. The eventual goal will be to render a list of Film data when the `Film` button is clicked.
3. From here, task is to retrieve all films from the Ghibli REST API, and then parse the response to display a "card" for each film. You will need to use the `fetch()` method in order to do this, and you should invoke fetch when the component is mounted to the application via a `useEffect` and set to state with a `useState` hook.
4. Remember the films data should only display when the Load Films button is clicked!
Consider styling your card at this point so that it is easier to read. Bootstrap v4/v5 should make this pretty easy for you. **At a minimum**, you should display the film title and description, but you may use as many properties as you want.
5. The next task is to add another button next to `Load Films` that says `Load People`. This button, when clicked, should trigger a different conditional render. We'll be using this new conditional render to retreive and display people data from the Ghibli REST API.
6. Finally repeat the same process froim step 3 that you did for films with this people endpoint. **At a minimum**, you should display the person's name, age, gender, and a link to that particular person's JSON response that will open in a new tab, but you may use as many properties as you want.