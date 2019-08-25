/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    for (let i = 100; i>0; i--) { 
        if (i % 3 === 0) {
            console.log("The number " + i + " is a multiple of 3. Fizz.");
        } else if (i % 5 === 0){
            console.log("The number " + i + " is a multiple of 5. Buzz.");
        } else if ((i % 5 === 0) && (i % 3 === 0)) {
            console.log("The number " + i + " is a multiple of 3 and 5. Fizzbuzz.");
        } else {
            console.log("The number " + i + ".")
        }
      }

})();
