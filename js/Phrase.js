/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
 class Phrase {

   // Overloaded constructor for the Phrase Class
   constructor (phrase) {
     this.phrase = phrase;
   }

   addPhraseToDisplay() {
     const hiddenLetterContainer = document.getElementById("phrase");
     for (let index = 0; index < this.phrase.length; index++) {
       const hiddenLetterBox = this.createHiddenLetter(this.phrase[index]);
       hiddenLetterContainer.appendChild(hiddenLetterBox);
     }
   }

   createHiddenLetter(hiddenLetter) {

     const newLi = document.createElement("li");

     if (hiddenLetter === ' ') {
       newLi.className = "space"
       newLi.innerHTML = " "
     }

     else {
       newLi.className = "hide letter " + hiddenLetter;
       newLi.innerHTML = hiddenLetter;
     }

     return newLi;
   }

   // checks to see if letter is in phrase
   checkLetter(selectedLetter) {
     let doesMatch = false;
     for (let index = 0; index < this.phrase.length; index++) {
       if (selectedLetter === this.phrase[index]) {
         doesMatch = true;
       }
     }
     return doesMatch;
   }

   showMatchedLetter(selectedLetter) {
     const matchedLetters = document.getElementsByClassName("hide letter " +
                                                             selectedLetter);
     const numBoxes = matchedLetters.length;
     for (let index = 0; index < numBoxes; index++) {
       matchedLetters[0].className = "show letter " + selectedLetter;
     }
   }
 }
