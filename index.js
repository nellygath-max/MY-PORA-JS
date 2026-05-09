//  let x = 5
//     let y = 7
//     let a = x + y
//     console.log(a)

// const pi = 3.14;
// let person = "Favour Chy";
// let answer = 'Yes am present';
// console.log(person);
// console.log(answer);
// console.log(pi);

// function sum(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(40,60))   


// function greet (name){
//     return "Hello " + name;
// }
// console.log(greet("Favour"))

// let x = 10;
// let y = 5;

// const result = x + z;

// console.log(result); 

// ASSIGNMENT
// 5 functions in JS

// Function declaration
// function add(a, b) {
//   return a + b;
// }

// console.log(add(5, 3)); 

// Function declaration
// function isEven(num) {
//   return num % 2 === 0;
// }

// console.log(isEven(10)); 

// Function declaration
// function greet(name) {
//   return "Hello, " + name + "!";
// }

// console.log(greet("Chinelo")); 

// Function expression
// const checkPositive = function(num) {
//   if (num > 0) {
//     return "Positive number";
//   }
// };

// console.log(checkPositive(5));

// console.log(checkPositive(0));


// Function declaration
// function checkPositive(num) {
//   if (num > 0) {
//     return "Positive number";
//   }
//   return "Not a positive number";
// };

// console.log(checkPositive(5));   
// console.log(checkPositive(-3));  

// Arrow function
// const checkPositive = (num) => {
//   if (num > 0) {
//     return "Positive number";
//   }
// };

// console.log(checkPositive(5));

// NOTE:
// Simple comparison:
// Style	How it looks
// Function declaration	function name() {}
// Function expression	const name = function() {}
// Arrow function	const name = () => {}
// Ternary shortcut	condition ? true : false

// const greet = function(Chinelo) 
// { return "Hello " + name; 

// }; 
// console.log(greet("Chinelo"));

const greet = function(Chinelo) 
{ return "Hello " + Chinelo; 

}; 
console.log(greet("Chinelo"));

// Build simple calculator
let num1 = 10;
let num2 = 5;

let result = num1 + num2;

console.log(result);


// Conditions
let age = 18

if (age >= 18){
  console.log("You are eligible for voting");
}
else{
  console.log("You are not eligible for voting");
}
