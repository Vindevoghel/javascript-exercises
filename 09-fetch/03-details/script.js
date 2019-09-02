/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let inputValue;
    var temp = document.getElementById("tpl-hero");
    let powers = document.querySelector(".powers");
    let alterego = document.querySelector(".alter-ego");
    let name = document.querySelector(".name");
    let target = document.getElementById("target");
    let input = document.getElementById("hero-id");
    document.getElementById("run").addEventListener("click", function (){
        fetch("../../_shared/api.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                var hero
            })
})();
