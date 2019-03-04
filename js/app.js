/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Instantiation of currGame object
const currGame = new Game();

// Event listener for start button
const startButton = document.getElementById("btn__reset");
startButton.addEventListener("click", currGame.startGame);
