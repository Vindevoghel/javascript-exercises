/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function() {
        
        function ageCalc () {
            let birthDay = document.getElementById("dob-day").value;
            let birthMonth = document.getElementById("dob-month").value;
            let birthYear = document.getElementById("dob-year").value;
            let today = new Date();
            let age = today.getFullYear() - birthYear;
            console.log(age);
            if (today.getMonth() < birthMonth || today.getMonth() == birthMonth && today.getDate() < birthDay) {
                age--
            }
            console.log(age);
            alert("You are " + age + " years old.");

        }
        ageCalc();


    })

    // your code here

})();
