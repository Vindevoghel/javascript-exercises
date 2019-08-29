/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let i;
    let button = document.getElementById("increment");
    let target = document.getElementById("target");

    if (localStorage.count) {
        target.innerHTML = localStorage.getItem("count");
    } else {
        i = 0;
    }

    button.addEventListener("click", function() {
        i++;
        target.innerHTML = i;
        i = Number(i);
        localStorage.setItem("count", i);
    })

})();
