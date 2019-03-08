/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {

  // Default constructor for Game class
  constructor () {
    this.missed = 0;
    this.phrases = [new Phrase("how are you"),
                    new Phrase("you win"),
                    new Phrase("you lose"),
                    new Phrase("mary had a little lamb"),
                    new Phrase("phrase hunter")];
    this.activePhrase = null;
  }


  // Method for priming values to start game
  startGame() {

    // Hides the start screen overlay
    const startingScreen = document.getElementById("overlay");
    startingScreen.style.display = "None";

    // Selects the phrase to be used
    this.activePhrase = currGame.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }


  // Returns a random phrase from this.phrases
  getRandomPhrase() {

    // Returns random phrase from list of phrases
    const randInt = Math.floor(Math.random() * 5);
    return this.phrases[randInt];

  }


  // Handles any interaction (either mouseclick or keypress)
  handleInteraction(chosenButton, charValue) {

    // Disables the selected button
    chosenButton.disabled = true;

    // Checks if character is in the current phrase
    if (this.activePhrase.checkLetter(charValue) === true) {

      // Shows character and changes letter to green
      this.activePhrase.showMatchedLetter(charValue);
      chosenButton.className = "chosen";

      // Checks if player has won the game
      if (currGame.checkForWin() === true) {
        currGame.gameOver(true);
      }

    }

    else {

      // Makes player lose one life and changes letter to red
      chosenButton.className = "wrong";
      currGame.removeLife();

    }

  }


  // Removes life from player and changes heart image to represent # of lives
  removeLife() {

    // Changes liveHeart image to lostheart image
    const heartToChange = document.querySelectorAll(".tries img")[this.missed];
    heartToChange.src = "images/lostHeart.png";

    // Increments number of lost lives
    this.missed++;

    // Checks for player loss
    if (this.missed > 4) {
      currGame.gameOver(false);
    }

  }


  // Checks if player has revealed all the letters on the board
  checkForWin() {
    const numLeftToReveal = document.getElementsByClassName("hide").length;
    return (numLeftToReveal === 0);
  }


  // Shows option for if game is over based on passed boolean for win or lose
  gameOver(hasWon) {

    // Resets gamestate
    currGame.resetElements();

    // Makes starting screen appear again
    const overlay = document.getElementById("overlay");
    const h1 = document.getElementById("game-over-message");
    overlay.style.display = "";

    // If player has won, it shows a win banner
    if (hasWon === true) {
      h1.textContent = "You Win!";
      overlay.className = "win";
    }

    // If player has lost it shows a lose banner
    else {
      h1.textContent = "You Lose...";

      overlay.className = "lose";
    }

  }


  // Resets elements in between games
  resetElements () {

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

} // End Game Class
