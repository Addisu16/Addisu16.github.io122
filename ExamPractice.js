if(1){
    console.log(0);

}else{
    console.log(1);
}
const user_1=require('prompt-sync')();
let askName=user_1("what is your name");
console.log("Hi: ",askName);

"use strict";
let x = 5;
let squareX = Math.pow(x, 2);
console.log("square: ",squareX);
console.log("PI value: ",Math.PI);
console.log("square root: ",Math.sqrt(36));
console.log("Round value for 5.4 : ",Math.round(5.4));
console.log("Round value for 5.6: ",Math.round(5.6));
console.log("Floor value for 5.9 is : ",Math.floor(5.9));
console.log("Celi value for 5.2 is: ",Math.ceil(5.2));
console.log("Minimum value: ",Math.min(1,-1,4,3.-0.2,-9,9));
console.log("Random value: ",Math.random());

console.log("PI IS: ", Math.PI);
console.log("Expect AA7:", "AA"+7)
console.log("Number conversion: ",Number("123"));

"use strict";

let prompt = require("prompt-sync")();
let userInput = prompt("Please enter a fraction number: ");
console.log("---------------visual separator---------------");
console.log(userInput);
console.log(userInput + 15 === 25, "should be true if enter 10?");
console.log(typeof userInput);
console.log("---------------visual separator---------------");
let num = Number(userInput);
console.log(num);
console.log(typeof num);
console.log("---------------visual separator---------------");
let intPartOnly = parseInt(userInput);
console.log(intPartOnly);
console.log(typeof intPartOnly);
console.log("---------------visual separator---------------");