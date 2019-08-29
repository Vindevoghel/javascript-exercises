/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let userNumber;
    let numberOfGuess = 0;
    let numberToGuess = Math.floor(Math.random() * 101);
    function guessingGame () {
        userNumber= Number(window.prompt("Guess a number between 0 and 100?" ));
        if (userNumber > numberToGuess) {
            alert("lower!");
            numberOfGuess++;
            guessingGame();
        } else if (userNumber < numberToGuess) {
            alert("higher!");
            numberOfGuess++;
            guessingGame()
        } else if (userNumber === numberToGuess) {
            alert("That's it! You needed " + numberOfGuess + " guesses!");
            numberOfGuess = 0;
            numberToGuess = Math.floor(Math.random() * 101);
            guessingGame()
        } else {
            alert("That's not a number!");
            guessingGame()
        }
    }
    guessingGame();

})();
