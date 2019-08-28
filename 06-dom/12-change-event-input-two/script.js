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
    const input = document.getElementById("pass-one");
    const validity = document.getElementById("validity");

    input.addEventListener("input", function(){

        let nums = 0;

        for (i=0; i < input.value.length; i++){
            if (!isNaN(input.value.charAt(i))){
                nums++
            }
        }


        if (input.value.length >= 8 && nums >= 2) {
            validity.innerHTML = "Ok";
        } else {
            validity.innerHTML = "Not ok";
        }

    })

    //input.addEventListener("oninput", function(){
    //})
})();
