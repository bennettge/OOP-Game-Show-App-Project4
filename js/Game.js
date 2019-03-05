/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {

  constructor () {
    this.missed = 0;
    this.phrases = [new Phrase("howa area youa"),
                    new Phrase("ahit there"),
                    new Phrase("a meow meow"),
                    new Phrase("dog god"),
                    new Phrase("giraffeeeeee")];
    this.activePhrase = null;
  }

  startGame() {

    // Hides the start screen overlay
    const startingScreen = document.getElementById("overlay");
    startingScreen.style.display = "None";

    // Selects the phrase to be used
    this.activePhrase = currGame.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  getRandomPhrase() {

    // Returns random phrase from list of phrases
    const randInt = Math.floor(Math.random() * 5);
    return this.phrases[randInt];

  }

  handleInteraction(chosenButton) {

    if (this.activePhrase.checkLetter(chosenButton.textContent) === true) {

      this.activePhrase.showMatchedLetter(chosenButton.textContent);
      chosenButton.className = "chosen";

      if (currGame.checkForWin() === true) {
        currGame.gameOver(true);
      }

    }

    else {
      chosenButton.className = "wrong";
      currGame.removeLife();
    }

    chosenButton.disabled = true;
    currGame.checkForWin();

  }

  removeLife() {
    const heartToChange = document.querySelectorAll(".tries img")[this.missed];
    heartToChange.src = "images/lostHeart.png";
    this.missed++;
    if (this.missed > 4) {
      currGame.gameOver(false);
    }
  }

  checkForWin() {
    const numRevealed = document.getElementsByClassName("hide").length;
    return (numRevealed === 0);
  }

  gameOver(hasWon) {

    const startingScreen = document.getElementById("overlay");
    startingScreen.style.display = "";

    if (hasWon === true) {
      startingScreen.textContent = "You Win!";
      startingScreen.className = "win";
    } else {
      startingScreen.textContent = "You Lose...";
      startingScreen.className = "lose";
    }

    // (1) Displays the original start screen overlay
    // (2) Updates overlay h1 element with win or loss message
    // (3) Replaces overlay "start" class with "win" or "lose" class
  }


}
