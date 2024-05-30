"use strict";
// Tests for equality and inequality with strings
const string1 = "hello";
const string2 = "world";
console.log(string1 === string2);
console.log(string1 !== string2);
// Tests using the lower case function
const upperCase = "HELLO";
const lowerCase = "hello";
console.log(upperCase.toLowerCase() === lowerCase); //true
// Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
const number1 = 10;
const number2 = 20;
console.log(number1 === number2);
console.log(number1 !== number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);
// Tests using "and" and "or" operators
const x = 10;
const y = 20;
const z = 30;
console.log(x < y && y < z);
console.log(x > y || y < z);
// Test whether an item is in a array
const array1 = [1, 2, 3, 4, 5, 6];
const itemToFind = 3;
console.log(array1.indexOf(itemToFind) !== -1);
// Test whether an item is not in a array
console.log(array1.indexOf(10) === -1);
