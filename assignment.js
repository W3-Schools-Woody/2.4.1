/* Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
    If the number is divisible by 3, print 'Fizz'.
    If the number is divisible by 5, print 'Buzz'.
    If the number is divisible by 3 AND 5, print 'FizzBuzz'.
    If the number is not divisible by 3 or 5, print 'Pop'.

Use the following test scenarios:
fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz
*/

/* Q2. Create a function called averager that gets the average of an array. */
//const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
//let result = averager(prices);
//console.log(result);


/* Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. 

celToFah(37.5);
celToFah(-40);
celToFah(0);
celToFah(100);
celToKel(173.13);
celToKel(-13);
*/

/* Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
pow(2, 3) -> 2 * 2 * 2 -> 8

Note: You can not use Math.pow function. You need to write your own implementation of the function.
*/



//Q1 =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

if (i%3 === 0 && i%5 !== 0) {
    console.log("Fizz");
} 

else if (i%5 === 0 && i%3 !== 0) {
    console.log("Buzz");
}

else if (i%5 === 0 && !i%3 === 0) {
    console.log("FizzBuzz");
}
else {
   console.log(i); 
}

/***************************************************************************************
*    Title:  for 2.4 JS
*    Author: <https://www.codecademy.com/profiles/51f5c6088c1ccc511d00b86d>
*    Date: <>
*    Availability: <https://www.codecademy.com/forum_questions/4f3a909a9a431300030024d3>
*
***************************************************************************************/


//Q2 -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const prices [2.99, 17.75, 88.12, 111.11, 77.09, 53.45]

function averager (prices) {
    var result1 = 0;
    for(let i=0; i < prices; i++) {    
        var score = prompt("input the score");   
        result1 += score;    
    }
    alert(result1 / prices);
    }

let result = averager(prices);
console.log(result);

function averager (prices) {
    var result1 = 0;
    for(let i=0; i < prices; i++) {    
        var score = prompt("input the score");   
        result1 += score;    
    }
    alert(result1 / prices);
    }



  


//Q3  ---===-=-=-===---=-=-=---===-=-=-===---==-=-=---===-=-=-===---=-=-=

/*   !!!i!i!i!i!i!i!
<p>
  <label>Fahrenheit</label>
  <input id="inputFahrenheit" type="number" placeholder="Fahrenheit" oninput="temperatureConverter(this.value)" onchange="temperatureConverter(this.value)">
</p>
<p>Celcius: <span id="outputCelcius"></span></p>

<script>
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
}
</script>

*/

/***************************************************************************************
*    Title:  for 2.4 JS
*    Author: <>
*    Date: <>
*    Availability: <https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_temp_converter_fahrenheit_to_celsius>
*
***************************************************************************************/


// Q4 --==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==

function pow(x, x){
    console.log()
}