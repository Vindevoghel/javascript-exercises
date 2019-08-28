/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const p1 = document.getElementById("part-1");
    const p1min = p1.getAttribute("data-min");
    const p1max = p1.getAttribute("data-max");

    const p2 = document.getElementById("part-2");
    const p3 = document.getElementById("part-3");
    const p4 = document.getElementById("part-4");
    const othermin = p2.getAttribute("data-min");
    const othermax = p2.getAttribute("data-max");



    setInterval(function(){
        p2.value = Math.floor(Math.random() * (othermax - othermin + 1) ) + othermin; }, 500);

})();
