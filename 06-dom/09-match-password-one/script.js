/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.querySelector("#run").addEventListener("click", function() {
        let input1 = document.querySelector("#pass-one");
        let input2 = document.querySelector("#pass-two");
        if (input1.value !== input2.value) {
            input1.style.borderColor = "red";
            input2.style.borderColor = "red";
        }
    })

})();
