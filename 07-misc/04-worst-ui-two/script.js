/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    //constants
    const b1 = document.getElementById("part-one");
    const b2 = document.getElementById("part-two");
    const b3 = document.getElementById("part-three");
    const b4 = document.getElementById("part-four");
    const target = document.getElementById("target");

    //variables
    let b1value = Number(b1.innerHTML);
    let b2value = Number(b2.innerHTML);
    let b3value = Number(b3.innerHTML);
    let b4value = Number(b4.innerHTML);

    //shows initial value
    target.innerHTML = "0" + b1.innerHTML + b2.innerHTML + b3.innerHTML + b4.innerHTML;

    //button 1
    b1.addEventListener("click", function(){
        b1.innerHTML = ++b1value;
        target.innerHTML = "0" + b1.innerHTML + b2.innerHTML;
        if(b1value === 499){
            b1value = 459;
        }
    });

    //button 2
    b2.addEventListener("click", function(){
        console.log(b2value);
        if(b2value < 9) {
            b2.innerHTML = "0" + ++b2value;
        } else {
            b2.innerHTML = ++b2value;
        }
        target.innerHTML = "0" + b1.innerHTML + b2.innerHTML + b3.innerHTML + b4.innerHTML;
        if(b2value === 99){
            b2value = -1;
        }
    });

    //button 3
    b3.addEventListener("click", function(){
        console.log(b3value);
        if(b3value < 9) {
            b3.innerHTML = "0" + ++b3value;
        } else {
            b3.innerHTML = ++b3value;
        }
        target.innerHTML = "0" + b1.innerHTML + b2.innerHTML + b3.innerHTML + b4.innerHTML;
        if(b3value === 99){
            b3value = -1;
        }
    });

    //button 4
    b4.addEventListener("click", function(){
        console.log(b4value);
        if(b4value < 9) {
            b4.innerHTML = "0" + ++b4value;
        } else {
            b4.innerHTML = ++b4value;
        }
        target.innerHTML = "0" + b1.innerHTML + b2.innerHTML + b3.innerHTML + b4.innerHTML;
        if(b4value === 99){
            b4value = -1;
        }
    });







})();
