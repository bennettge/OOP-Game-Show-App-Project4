/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

   // Overloaded constructor for the Phrase Class
   constructor (phrase) {
     this.phrase = phrase;
   }


   // Adds phrase to website by creating hidden letters
   addPhraseToDisplay() {

     // Gets container for the hidden letters
     const hiddenLetterContainer = document.getElementById("phrase");

     // Loops through letters placing them on the screen
     for (let index = 0; index < this.phrase.length; index++) {
       const hiddenLetterBox = this.createHiddenLetter(this.phrase[index]);
       hiddenLetterContainer.appendChild(hiddenLetterBox);
     }
     
   }


   // Creates a hidden letter element
   createHiddenLetter(hiddenLetter) {

     const newLi = document.createElement("li");

     // Creates newLi for a space character
     if (hiddenLetter === ' ') {
       newLi.className = "space"
       newLi.innerHTML = " "
     }

     // Creates newLi for a letter character
     else {
       newLi.className = "hide letter " + hiddenLetter;
       newLi.innerHTML = hiddenLetter;
     }

     return newLi;

   }


   // checks to see if letter is in phrase
   checkLetter(selectedLetter) {

     // Initial value for if a letter is false
     let doesMatch = false;

     // Loops through phrase and if a letter matches than sets doesMatch to true
     for (let index = 0; index < this.phrase.length; index++) {
       if (selectedLetter === this.phrase[index]) {
         doesMatch = true;
       }
     }

     return doesMatch;

   }


   // Shows all matching letters
   showMatchedLetter(selectedLetter) {

     // Gets all matched "hiddenLetter" elements
     const matchedLetters = document.getElementsByClassName("hide letter " +
                                                             selectedLetter);
     const numBoxes = matchedLetters.length;

     // Makes each letter appear by changing the class name to the show class
     for (let index = 0; index < numBoxes; index++) {
       matchedLetters[0].className = "show letter " + selectedLetter;
     }
   }

 } // End Phrase Class
