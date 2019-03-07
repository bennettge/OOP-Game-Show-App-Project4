/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {

  // Default constructor for Game class
  constructor () {
    this.missed = 0;
    this.phrases = [new Phrase("howa area youa"),
                    new Phrase("ahit there"),
                    new Phrase("a meow meow"),
                    new Phrase("dog god"),
                    new Phrase("giraffeeeeee")];
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

    // Disables the selected button
    chosenButton.disabled = true;

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

    // Makes starting screen appear again
    const startingScreen = document.getElementById("overlay");
    startingScreen.style.display = "";

    // If player has won, it shows a win banner
    if (hasWon === true) {
      startingScreen.textContent = "You Win!";
      startingScreen.className = "win";
    }

    // If player has lost it shows a lose banner
    else {
      startingScreen.textContent = "You Lose...";
      startingScreen.className = "lose";
    }

  }

} // End Game Class
