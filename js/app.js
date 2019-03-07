/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Initial value before instantiation of object currGame
let currGame = null;

// Finds button based on character letter
function findButton (keyPressed) {

  // Gets list of buttons
  const listOfButtons = document.querySelectorAll("button");

  // Finds correct button out of list
  for (let index = 0; index < listOfButtons.length; index++) {
    if (listOfButtons[index].textContent === keyPressed) {
      return listOfButtons[index];
    }
  }

  return null;

}

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
    currGame.handleInteraction(event.target, event.target.textContent);
  }
});

// If key is pressed it calls handleInteraction for the letter pressed
document.addEventListener("keyup", function(event) {
  const keyPressed = String.fromCharCode(event.which).toLowerCase();
  const buttonToBlur = findButton(keyPressed);
  if (buttonToBlur != null) {
    currGame.handleInteraction(buttonToBlur, buttonToBlur.textContent);
  }
});
