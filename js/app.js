/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Initial value before instantiation of object currGame
let currGame = null;

// Resets elements in between games
function resetElements () {

  // Initializes elements into variables
  const heartsToChange = document.querySelectorAll(".tries img");
  const chosenButtons = document.querySelectorAll(":disabled");
  const ulToRemoveFrom = document.querySelectorAll("ul")[0];
  const numChildren = ulToRemoveFrom.children.length;

  // Resets keyboard buttons
  for (let index = 0; index < chosenButtons.length; index++) {
    chosenButtons[index].disabled = false;
    chosenButtons[index].className = "key";
  }

  // Resets hearts
  for (let index = 0; index < heartsToChange.length; index++) {
    heartsToChange[index].src = "images/liveHeart.png";
  }

  // Resets phrase li elements
  for (let index = 0; index < numChildren; index++) {
    ulToRemoveFrom.removeChild(ulToRemoveFrom.childNodes[0]);
  }

}


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
  resetElements();
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
