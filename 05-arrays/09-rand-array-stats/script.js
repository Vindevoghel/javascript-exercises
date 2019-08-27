/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function(){
        let numberArray =[];
        let number;
        for(i=0; i<10; i++){
            number = Math.floor(Math.random() * 101);
            numberArray.push(number);
            numberArray = numberArray.sort((a, b) => a - b);
        }
        let tableArray = [...document.querySelectorAll('td')];
        console.log(tableArray);
        for(i=0; i<10; i++){
            tableArray[i].innerHTML = numberArray[i];
        }
        
        /*document.getElementById("n-1").innerHTML = numberArray[0];
        document.getElementById("n-2").innerHTML = numberArray[1];
        document.getElementById("n-3").innerHTML = numberArray[2];
        document.getElementById("n-4").innerHTML = numberArray[3];
        document.getElementById("n-5").innerHTML = numberArray[4];
        document.getElementById("n-6").innerHTML = numberArray[5];
        document.getElementById("n-7").innerHTML = numberArray[6];
        document.getElementById("n-8").innerHTML = numberArray[7];
        document.getElementById("n-9").innerHTML = numberArray[8];
        document.getElementById("n-10").innerHTML = numberArray[9];
       */
        document.getElementById("min").innerHTML = numberArray[0];
        document.getElementById("max").innerHTML = numberArray[9];
        document.getElementById("sum").innerHTML = numberArray.reduce((a,b) => a + b, 0);
        document.getElementById("average").innerHTML = numberArray.reduce((a,b) => a + b, 0)/numberArray.length;

    })
    // your code here

})();
