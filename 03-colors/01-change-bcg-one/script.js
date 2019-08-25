/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("red").addEventListener("click", function() {
        function red () {
            document.body.style.backgroundColor = "red";
            console.log("red");
        }
        red();
    });

    document.getElementById("green").addEventListener("click", function() {
        function green () {
            document.body.style.backgroundColor = "green";
            console.log("green");
        }
        green();
    });

    document.getElementById("yellow").addEventListener("click", function() {
        function yellow () {
            document.body.style.backgroundColor = "yellow";
            console.log("yellow");
        }
        yellow();
    });

    document.getElementById("blue").addEventListener("click", function() {
        function blue () {
            document.body.style.backgroundColor = "blue";
            console.log("blue");
        }
        blue();
    });

})();
