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
    const p2 = document.getElementById("part-two");
    const p3 = document.getElementById("part-three");
    const p4 = document.getElementById("part-four");
    const target = document.getElementById("target");
    const p1button = document.getElementById("fix-part-one");
    const p2button = document.getElementById("fix-part-two");
    const p3button = document.getElementById("fix-part-three");
    const p4button = document.getElementById("fix-part-four");


    //creates string arrays out of the range of values allowed

    let p1Range = [];
    for (let i = 460; i <= 499; i++) {
        i = String(i);
        p1Range.push(i);
    }

    let otherRange = [];
    for (let i = 0; i <= 99; i++) {
        i = String(i);
        if(i<10) {
            i = "0" + i;
        }
        otherRange.push(i);
    }


    //iterates through other parts string array per part
    let h = 0;
    function randomP1() {
        p1.value = p1Range[h];
        target.innerHTML = "0" + p1.value + String(p2.value) + String(p3.value) + String(p4.value);
        if(h < 39) {
            h++;
        } else {
            h=0;
        }
    }

    let j =0;
    function randomP2() {
        p2.value = otherRange[j];
        target.innerHTML = "0" + p1.value + String(p2.value) + String(p3.value) + String(p4.value);
       if(j < 99) {
            j++;
        } else {
            j=0;
        }
    }

    let k = 0;
    function randomP3() {
        p3.value = otherRange[k];
        target.innerHTML = "0" + p1.value + String(p2.value) + String(p3.value) + String(p4.value);
        if(k < 99) {
            k++;
        } else {
            k=0;
        }
    }

    let l = 0;
    function randomP4() {
        p4.value = otherRange[l];
        target.innerHTML = "0" + p1.value + String(p2.value) + String(p3.value) + String(p4.value);
        if(l < 99) {
            l++;
        } else {
            l=0;
        }
    }

    //creates counters

    let p1interval = setInterval(randomP1, 50);
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


    let p2interval = setInterval(randomP2, 50);
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

    let p3interval = setInterval(randomP3, 50);
    p3button.addEventListener("click", function () {
        if (p3button.innerText === "Stop") {
            p3button.innerText = "Start";
            clearInterval(p3interval);
            console.log("stop");
        } else if(p3button.innerText === "Start") {
            p3button.innerText = "Stop";
            p3interval = setInterval(randomP3, 50);
        }
    });

    let p4interval = setInterval(randomP4, 50);
    p4button.addEventListener("click", function () {
        if (p4button.innerText === "Stop") {
            p4button.innerText = "Start";
            clearInterval(p4interval);
            console.log("stop");
        } else if(p4button.innerText === "Start") {
            p4button.innerText = "Stop";
            p4interval = setInterval(randomP4, 50);
        }
    });

    function changeText (){
        target.innerText = "0" + String(p1.value) + String(p2.value) + String(p3.value) + String(p4.value);
    }


    p1.addEventListener("input", changeText());



})();
