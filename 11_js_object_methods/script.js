/**
 *! JavaScript Object Methods
** Object methods are actions that can be performed on objects.

** A method is a function definition stored as a property value
 */

//! Adding a method to an object

// const person = {
// 	firstName: "Rabbi ",
// 	lastName: "Sheikh",
// 	age: 23,
// };

// person.name = function () {
// 	return this.firstName + " " + this.lastName;
// };

// document.getElementById("demo").innerHTML = "My name is " + person.name();

//! Display Properties

// const carsCollection = {
// 	carName: "BMW",
// 	carModel: 500,
// 	carColour: "Black",
// };

// Build a text

// let text = "";

// for (let x in carsCollection) {
// 	text += carsCollection[x] + " ";
// }
// Display the text

//document.getElementById("demo").innerHTML = text;

//! Using JSON.stringfy()

//? JavaScript objects can be converted to a string with JSON method JSON.stringfy().

//? JSON.stringfy() is included in JavaScript and supported in all major browsers.

// const person2 = {
// 	name: "Siam",
// 	age: 30,
// 	city: "Dhaka, Maniknagar",
// };

//* Display JSON

// document.getElementById("demo").innerHTML = JSON.stringify(person2);

//! Constructors Function for Person objects

// function Person3(first, last, age, eye) {
// 	this.firstName = first;
// 	this.lastName = last;
// 	this.age = age;
// 	this.eye = eye;
// }

// Create a Person Object

// const mySelf = new Person3("Rabbi", "Sheikh", 23, "Blue");

// Display Value

// document.getElementById("demo").innerHTML =
// 	"My name is " +
// 	mySelf.firstName +
// 	" " +
// 	mySelf.lastName +
// 	". My age is" +
// 	" " +
// 	mySelf.age;

// // Constructor Function for Person objects
// function Person(first, last, age, eye) {
// 	this.firstName = first;
// 	this.lastName = last;
// 	this.age = age;
// 	this.eyeColor = eye;
// }

// // Create a Person object
// const myFather = new Person("John", "Doe", 50, "blue");

// // Display age
// document.getElementById("demo").innerHTML = "My father is " + myFather.age;

// Constructor function for Person objects

// function Person(first, last, age, eye) {
// 	this.firstName = first;
// 	this.lastName = last;
// 	this.age = age;
// 	this.eyeColor = eye;
// }

// // Create two Person objects
// const myFather = new Person("Enamul", "Sheikh", 50, "Blue");

// const myMother = new Person("Hasna", "Begum", 38, "Black");
// const mySelf = new Person("Rabbi", "Sheikh", 23, "Blue");

//! Display all person age :-

// document.getElementById(
// 	"demo"
// ).innerHTML = `My Father age is ${myFather.age} and My mother age is ${myMother.age} and last my age is ${mySelf.age}`;

//! Constructor Function Methods

function Person(first, last, age, eyeColor) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eyeColor;
	this.fullName = function () {
		return this.firstName + " " + this.lastName;
	};
}

const mySelf = new Person("Rabbi", "Sheikh", 23, "blue");

document.getElementById(
	"demo"
).innerHTML = `My fullname is ${mySelf.fullName()} and my age is ${mySelf.age}`;

//! Built-in JavaScript Constructors

new Object(); //? A new Object object
new Array(); //? A new Array object
new Map(); //? A new Map object
new Set(); //? A new Set object
new Date(); //? A new Date object
new RegExp(); //? A new RegExp object
new Function(); //? A new Function object

//! Note :- The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.

//? Did you know ?

//todo:- Use object literals {} instead of new Object()

//todo:- Use array literals [] instead of new Array().

//todo:- Use pattern literals /()/ instead of new RegExp().

//todo:- Use function expressions () {} instead of new Function().

//! Example :-

(""); //! primitive string
0; //! primitive number
false; //! primitive boolean

{
} //! object object
[]; //! array object
/()/; //! regexp boolean
// function(){};//! function
