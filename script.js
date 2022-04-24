let answer = parseInt(prompt("Please enter the number you would like to convert "));
// Num variale is only to set the values entered by the user. They just update HTML elements
let num = document.getElementById("value");
num.innerHTML = answer;
let num1 = document.getElementById("value1") 
num1.innerHTML = answer;
let num2 = document.getElementById("value2")
num2.innerHTML = answer;
let num3 = document.getElementById("value3")
num3.innerHTML = answer;
let num4 = document.getElementById("value4") 
num4.innerHTML = answer;
let num5 = document.getElementById("value5")
num5.innerHTML = answer;
let num6 = document.getElementById("value6")
num6.innerHTML = answer;

function meterToFeet (){
let answer1 = answer * 3.280
let result1 = document.getElementById("result1")
 result1.innerHTML = answer1;
}
meterToFeet()

function literToGalon (){
  let answer2 = answer / 3.785
  let result2 = document.getElementById("result2")
  result2.innerHTML = answer2;
  }
literToGalon()

function kiloToPound (){
  let answer3 = answer * 2.2
  let result3 = document.getElementById("result3")
  result3.innerHTML = answer3;
  }
kiloToPound()

function FeetToMeter (){
  let answer4 = answer / 3.280
  let result4 = document.getElementById("result4")
   result4.innerHTML = answer4;
  }
FeetToMeter()

function galonToLiter (){
  let answer5 = answer * 3.785
  let result5 = document.getElementById("result5")
  result5.innerHTML = answer5;
  }
galonToLiter()

function poundToKilo (){
  let answer6 = answer / 2.2
  let result6 = document.getElementById("result6")
  result6.innerHTML = answer6;
  }
poundToKilo()




// for (let i = 1; i <= answer; i++) {
 //   if (i % 3 === 0 && i % 5 === 0) {
//      console.log("FizzBuzz");
 //   } else if (i % 3 === 0) {
//      console.log("Fizz");
 //   } else if (i % 5 === 0) {
//      console.log("Buzz");
 //   } else {
//      console.log(i);
 //   }
//  }

