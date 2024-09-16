/**
 *! JavaScript Object Properties

 ** An Object is an Unordered Collection of Properties
 ** Properties are the most important part of JavaScript objects.
 ** Properties can be changed, added, deleted, and some are read only
 */

/**
 *! Accessing JavaScript Properties
 *? The syntax for accessing the property of an object is:
 */

//? objectName.Property
//!  let age = person.age;

//  or

// objectName["property"]

//! let age = person["age"];

// or

// objectName[expression]
//! let age = person[x]

//! Deleting a Property

const person = {
	firstName: "Rabbi",
	lastName: "Sheikh",
	age: 23,
	eyeColor: "blue",
};

delete person.age;

document.getElementById("demo").innerHTML =
	person.firstName +
	" " +
	person.lastName +
	" is " +
	person.age +
	" years old";

/**
 *! Nested Objects
 *? Property values in an object can be other objects:
 */

let myObj = {
	name: "Rabbi",
	age: 23,
	myCars: {
		car1: "Ford",
		car2: "BMW",
		car3: "Fiat",
	},
};

console.log(myObj.myCars.car2);
