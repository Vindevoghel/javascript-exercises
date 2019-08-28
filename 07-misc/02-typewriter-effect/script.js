/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let min = 25, max = 200, i =0, char;
    let txt = "Paperback writer, paperback writer. Dear Sir or Madam, will you read my book?" +
        " It took me years to write, will you take a look?" +
        " Its based on a novel by a man named Lear," +
        " And I need a job," +
        " So I want to be a paperback writer," +
        " Paperback writer.";
    console.log(txt);
    let speed = Math.floor(Math.random() * (+max - +min)) + +min;
    document.getElementById("target").innerText = " ";

    function typeWriter() {
        if (i < txt.length) {
            char = txt.charAt(i);
            /*if (char === " "){
                char = "&nbsp;";
            }*/
            document.getElementById("target").innerHTML += char;
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    window.onload = typeWriter();

    // your code here

})();
