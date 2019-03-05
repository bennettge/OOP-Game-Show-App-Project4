/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let currGame = null;

// Event listener elements
const startButton = document.getElementById("btn__reset");
const keyboard = document.getElementById("qwerty");

//////////////////// Click event listeners //////////////////////

// If start is clicked, then currGame object is created and game is started
startButton.addEventListener("click", function () {
  currGame = new Game();
  currGame.startGame()
});

// If on-screen click occurs then an event is triggered updating the board
keyboard.addEventListener("click", function(event) {
  if (event.target.type === "submit") {
    currGame.handleInteraction(event.target);
  }
});
