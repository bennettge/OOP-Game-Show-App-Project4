/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const listOfPhrases = ["hi there", "hello", "cat", "dog", "giraffe"];
const currGame = new Game(listOfPhrases);

// Event listener for start button
const startButton = document.getElementById("btn__reset");
startButton.addEventListener("click", currGame.startGame);
