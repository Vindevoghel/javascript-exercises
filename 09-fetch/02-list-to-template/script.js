/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function (){
        fetch("../../_shared/api.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data.heroes);
                let temp = document.getElementById("tpl-hero");
                let name = temp.content.querySelector(".name");
                let alterEgo = temp.content.querySelector(".alter-ego");
                let powers = temp.content.querySelector(".powers");

                for(let i=0; i < data.heroes.length; i++) {
                    name.innerHTML = data.heroes[i].name;
                    alterEgo.innerHTML = data.heroes[i].alterEgo;
                    powers.innerHTML = data.heroes[i].abilities;
                    let clone = temp.content.cloneNode(true);
                    document.getElementById("target").appendChild(clone);
                }
        })

    })


})();


/*
<template id="tpl-hero">
                        <li class="hero">
                            <h4 class="title">
                                <strong class="name"></strong>
                                <em class="alter-ego"></em>
                            </h4>
                            <p class="powers"></p>
                        </li>
                    </template>
 */