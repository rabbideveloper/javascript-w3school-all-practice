/**
 * ! Javascript Data Types
 *
 * ? Javascript has 8 Datatypes
 *
 ** 1. String
 * 2. Number
 * 3. Bigint
 * 4. Boolean
 * 5. Undefined
 * 6. Null
 * 7. Symbol
 *? 8. Object


 *! The Object Datatype
 ** The object data type can contain both built-in objects, and user defined objects:

 *? Built-in object types can be:
 *todo:- objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
 */

// Numbers :

let length = 20;
let weight = 5.5;

// String:
let color = "Yellow";
let lastName = "Sheikh";

// Booleans
let x = true;
let y = false;

// Object
const person = {
	firstName: "Rabbi",
	lastName: "Sheikh",
};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date Object

const date = new Date("2024-09-15");

/**
 *! Note
 *?  A JavaScript variable can hold any type of data.
 */

/**
 * ! JavaScript Types are Dynamic
 *
 * let x;     //? Now x is undefined
 * let = 5    //? Now x is a Number
 * x = "Rabbi"//? Now x is a String
 */

/**
 * ! JavaScript Booleans
 */

let x1 = 5;
let x2 = 5;
let x3 = 6;

let x4 = x1 == x2;
let x5 = x1 == x3;

console.log(x4, x5);
