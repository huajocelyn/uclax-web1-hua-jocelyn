/*===================================
||
|| Variables
||
===================================*/
console.group("Variables");

/*
    A variable is a reference to a value so it can be used over and over, or referenced later on
*/

// let can be changed
let favColor = "Blue";
console.log(favColor);
favColor = "Red";
console.log(favColor);

// const cannot be changed
const firstName = "Jocelyn";
console.log(firstName);
// firstName = "David";
// console.log(firstName);

console.groupEnd();
