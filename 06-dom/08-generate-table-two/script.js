/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let table = document.createElement("table");
    console.log(table);
    let target = document.getElementById("target");
    target.appendChild(table);
    for (let i = 0; i < 10; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < 10; j++) {
            let x = row.insertCell(j);
            x.innerHTML = (i+1) * (j+1);
        }
    }


})();
