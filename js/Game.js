/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {

  constructor () {
    this.missed = 0;
    this.phrases = ["hi there", "hello", "cat", "dog", "giraffe"];
    this.activePhrase = null;
    this.phraseObject = new Phrase("");
  }

  startGame() {

    // Hides the start screen overlay
    const startingScreen = document.getElementById("overlay");
    startingScreen.style.display = "None";

    // Gets random phrase
    this.activePhrase = this.getRandomPhrase();
    this.phraseObject.addPhraseToDisplay(this.activePhrase);
  }

  getRandomPhrase() {

    // Returns random phrase from list of phrases
    const randInt = Math.floor(Math.random() * 5);
    return this.phrases[randInt];

  }

  handleInteraction() {
    // (1) Checks to see if button is clicked by the player
    // (2) Disables on-screen letter
    // (3) If wrong, call removeLife() and add "wrong" class to letter button
    // (4) If right, call showMatchedLetter() and add "chosen" class to letter button
    // (5) If player has won game call the gameOver() method
  }

  removeLife() {
    //(1) Removes heart from scoreboard by replacing liveHeart.png with lostHeart.png
    //(2) Increments missed property
    //(3) If player runs out of lives, call gameOver() function
  }

  checkForWin() {
    // Checks to see if player has revealed all letters in the phrase
  }

  gameOver() {
    // (1) Displays the original start screen overlay
    // (2) Updates overlay h1 element with win or loss message
    // (3) Replaces overlay "start" class with "win" or "lose" class
  }


}
