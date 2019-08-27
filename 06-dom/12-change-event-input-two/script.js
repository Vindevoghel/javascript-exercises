/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    window.onload = document.getElementById("pass-one").setAttribute("maxlength", "10");
    let i=0;

    document.getElementById("pass-one").addEventListener("keyup", function(){
        i = document.getElementById("pass-one").value.length;
        document.getElementById("validity").innerHTML= i+"/10";
    })
})();
