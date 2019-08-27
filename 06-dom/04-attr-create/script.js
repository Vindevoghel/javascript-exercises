/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode// your code here
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    function changeHtml(){
    let image = document.getElementById("source").getAttribute("data-image");
    let imgElement = document.createElement('img');;
    imgElement.src = image;
    let target = document.querySelector("#target");
    target.appendChild(imgElement);
    let remove = document.getElementById("source");
    remove.parentNode.removeChild(remove);
    }
    window.onload = changeHtml;

})();
