/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function () {
        fetch("../../_shared/api.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                let template = document.getElementById("tpl-hero");
                let name = template.content.querySelector(".name");
                let alterEgo = template.content.querySelector(".alter-ego");
                let powers = template.content.querySelector(".powers");
                let target = document.getElementById("target");

                i = document.getElementById("hero-id").value;
                name.innerHTML = data.heroes[i].name;
                alterEgo.innerHTML = data.heroes[i].alterEgo;
                powers.innerHTML = data.heroes[i].abilities;

                let clone = temp.content.cloneNode(true);
                target.appendChild(clone);
            })
    })
})();