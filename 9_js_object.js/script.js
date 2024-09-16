/**
 * ! JavaScript Object
 *
 * ? Real Life Object
 *
 ** In real life, "objects" are things like: houses, cars, people, animals, or any other subjects. 

 ** Here is a car object example

 *? Car Object          Properties                  Methods

**  Car                 car.name = Fiat             car.start()
**  Car                 car.model = 500             car.drive()
**  Car                 car.weight = 850kg          car.brake()
**  Car                 car.color = white           car.stop()
 */

/**
 * !  Object Properties
 * 
 ** A real life car has "properties" like weight and color

 ** car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white.

 ** Car objects have the same properties, but the values differ from car to car.
 */

//? Create an Object
/**
const person = {
	firstName: "Rabbi",
	lastName: "Sheikh",
	age: 23,
	eyeColor: "blue",
};
*/

//! This example creates an empty JavaScript object, and then adds 4 properties:-

//? Create an Object

const cars = {};

// Add Properties

cars.color = "white";
cars.name = "Volvo";
cars.model = 500;

console.log(cars);

//! Using the new Keyword

//? Create an Object
//const person = new Object();

// Add properties
// person.firstName = "Rabbi";
// person.lastName = "Sheikh";
// person.age = 23;
// person.eyeColor = "blue";
// person.fullName = function () {
// 	return this.firstName + " " + this.lastName;
// };

//console.log(person);

const person = {
	firstName: "Rabbi",
	lastName: "Sheikh",
	age: 23,
	isRider: true,
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};

// const person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	id: 5566,
// 	fullName: function () {
// 		return this.firstName + " " + this.lastName;
// 	},
// };

document.getElementById("demo").innerHTML = person.fullName();
//document.getElementById("demo").innerHTML = person.fullName();

/**
 *!  JavaScript Primitives

 ** A primitive value is a value that has no properties or methods

 ** 3.1416 is a primitive value

 ** A primitive data type is data that has a primitive value.

 ** JavaScript defines 7 types of primitive data types:

 *? 1. String
 *? 2. Number
 *? 3. Boolean
 *? 4. Null
 *? 5. Undefined
 *? 6. Symbol
 *? 7. Bigint
 */

/**
 *!  JAVASCRIPT OBJECT PROPERTIES

 ** An Object is an Unordered Collection of Properties
 ** Properties are the most important part of JavaScript objects.
 ** Properties can be changes, added, deleted, and some are read only.
 */
