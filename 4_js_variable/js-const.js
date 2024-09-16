/**
 *! JavaScript Const

*? The const keyword was introduced in ES6 (2015)

*? Variables defined with const cannot be Redeclared

*? Variables defined with const cannot be Reassigned

*? Variables defined with const have Block Scope
*/

/**
 * ! Cannot be Reassigned
 *? A variable defined with the const keyword cannot be reassigned:
 */

//! Example

//const PI = 3.141592653589793;

// PI = 3.1416; //! This code given a error
// PI = PI + 10; //! this code also given a error

//console.log(PI);

/**
 * ! Must be Assigned
 *? JavaScript const variables must be assigned a value when they are declared:
 */

//! Example

//todo: Correct
// const PI = 3.1416;

//! Not Correct
//const PI; //! This code given a error

//PI = 3.1416;//! This code given a error

/**
 *! When to use JavaScript const?
*? Always declare a variable with const when you know that the value should not be changed.

*todo:- Use const when you declare:

*!:-- A new Array
*!:-- A new Object
*!:-- A new Function
*!:-- A new RegExp
 */

/**
 *! Constant Objects and Arrays
    The keyword const is a little misleading.

    It does not define a constant value. It defines a constant reference to a value.

    Because of this you can NOT:

    Reassign a constant value
    Reassign a constant array
    Reassign a constant object
    But you CAN:

    Change the elements of constant array
    Change the properties of constant object
 */

/**
 * ! Constant Arrays
 *? You can change the elements of a constant array:
 */

//! Example :-

//? You can create a constant array:

const cars = ["Volvo", "BMW", "Toyota"];
//todo:- You can change an element:

// cars.pop();

// console.log(cars);
// console.log(typeof cars);

/**
 * ! Constant Objects
 *? You can change the properties of a constant object:
 */

//! You can create a const object:

const car = {
	type: "Fiat",
	model: 500,
	color: "white",
};

//* You can change a property:

car.color = "red";
car["model"] = 1000;

//* You can add a property:

car["owner"] = "Rabbi Sheikh";

console.log(car);
console.log(typeof car);

//! Simple testing a error

try {
	let carName = "BMW";
	alert(carName);
} catch (err) {
	document.getElementById("demo").innerHTML = err;
}
