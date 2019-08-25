/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    function test(){
        let weekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date();
        let weekDay = weekArray[date.getDay()];
        let month = monthArray[date.getMonth()];
        let day = date.getDate();
        let year = date.getFullYear();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let fullDate = weekDay + " " + day + " " + month + " " + year + ", " + hour + "h" + minutes + "m"
        console.log(fullDate);
        document.getElementById("target").innerHTML = fullDate;
    }
test();
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
