/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {


    const p1 = document.getElementById("part-one");
    const target = document.getElementById("target");
    const p1min = p1.getAttribute("data-min");
    const p1max = p1.getAttribute("data-max");
    const p2 = document.getElementById("part-two");
    const p3 = document.getElementById("part-three");
    const p4 = document.getElementById("part-four");
    const othermin = p2.getAttribute("data-min");
    const othermax = p2.getAttribute("data-max");
    let p1value;
    let p1button = document.getElementById("fix-part-one");
    let p2button = document.getElementById("fix-part-two");


    function randomP1() {
        if (p1.value < p1max) {
            p1.value++;
            p1value = p1.value
        } else if (p1.value === p1max) {
            p1.value = p1min;
            p1value = p1.value;
        }
    }

    function randomP2() {
        if (p2.value < 10) {
            p2.value = "0" + p2.value;
        }
        if(p2.value < othermax) {
            p2.value++;
        } else if (p2.value === othermax) {
            p2.value = othermin;
        }
    }

    let p1interval = setInterval(randomP1, 50);
    let p2interval = setInterval(randomP2, 50);

    p1button.addEventListener("click", function () {
        if (p1button.innerText === "Stop") {
            p1button.innerText = "Start";
            clearInterval(p1interval);
            console.log("stop");
        } else if(p1button.innerText === "Start") {
            p1button.innerText = "Stop";
            p1interval = setInterval(randomP1, 50);
        }
    });

    p2button.addEventListener("click", function () {
        if (p2button.innerText === "Stop") {
            p2button.innerText = "Start";
            clearInterval(p2interval);
            console.log("stop");
        } else if(p2button.innerText === "Start") {
            p2button.innerText = "Stop";
            p2interval = setInterval(randomP2, 50);
        }
    });


    /*
    let p1interval = setInterval(function(){
        if(p1.value < p1max) {
            p1.value++;
        } else if (p1.value === p1max) {
            p1.value = p1min;
        }}, 50);

    if(p1click == true) {
        clearInterval(p1interval);
    }

    window.onload = setInterval(function(){
        if(p2.value < othermax) {
            p2.value++;
        } else if (p2.value === othermax) {
            p2.value = othermin;
        }}, 50);*/


    /*function randomNumber(value, max, min) {
        if(value < max) {
            value ++;
        } else if (value === max) {
            value = min;
        }
    }

    window.onload = setInterval(function(){ randomNumber(p1.value, p1max, p1min); }, 50);*/

})();
