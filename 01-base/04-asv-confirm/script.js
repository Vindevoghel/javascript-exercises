/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function ageGenderTown() {
    var age = prompt("What is your age?");
    var gender = prompt("What is your gender?");
    var town = prompt("What is your town?");
    var reset = confirm("You are " + age + " years old. You're " + gender + ". You live in " + town);
    if(reset == false){
        ageGenderTown();
    } else {
        return;
    }

    // your code here

})();
