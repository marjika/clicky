# Master the Masters

### A React Game that allows users to test their memory

This application is a React game, created with the aid of "create-react-app".  Based on the React (component, props, state) structure, the application breaks up the UI into components (Navbar, Title, Wrapper, Portraits (Squares) and Card/Modal), manages component state, and responds to user events.  The application manages game pieces with a .json object which gets shuffled and displayed every time the user clicks an image.   

![Game start](/public/images/start.JPG)

### React

In this application, the source folder contains a components folder, of which most components are implemented in App.js; index.js renders App in the body of the index.html file.

### State

Score, Wins, and Losses are controlled in state as well as two boolean values which dictate either the display-block or display-none classNames and the win or loss message for the modal component.

![Game start](/public/images/modal.JPG)

![Playing clicky](/public/images/game.gif)

##### About this Application

As this was my first React application, I learned a lot in creating this game. The React structure, use of components, a nested source file which ran inside the body of the index.html, the concept and use (creating and updating) of state were a different approach to creating code than I had used before. **Master the Masters** is hosted at "https://marjika.github.io/clicky/".  This project was created and is maintained by me, Marjika Howarth.
