/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function() {
        
        function friday13checker() {
            let year = document.getElementById("year").value;
            let date = new Date(year);
            let day = Number(date.getDate());
            let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            for (month = 0; month < 12; day++){
                date.setDate(day);
                //console.log("test " + date)
                if (date.getDay() == 5 && date.getDate() == 13 ) {
                    console.log(monthArray[date.getMonth()]);
                    //console.log("if" + date);
                }
                if (day == 14) {
                    day = 1;
                    month++;
                    date.setDate(day);
                    date.setMonth(month);
                    //console.log("if 1 " + date);
                }
            }
        }
        friday13checker();

    })

    // your code here

})();