/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let target = document.getElementById("target");
    let wordArr = target.innerText.split(" ");
    console.log(wordArr);
    let word = "", text = "", size = 2;
    for(i=0; i<wordArr.length; i++){
        if (size % 10 === 0) {
            size = 2;
            word = wordArr[i].toString();
            text += word.fontsize(size) + " ";
        } else {
        word = wordArr[i].toString();
        console.log(size);
        text += word.fontsize(size) + " ";
        }
        size+= 2;
    }
    target.innerHTML = text;

})();
