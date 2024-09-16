/**
 * ! JavaScript Funciton
 *
 * ? A Javascript function is a block of code designed to perform a particular task
 *? A javasscript function is executed when "something" invokes it (calls it).
 */

// function myFunction(p1, p2) {
// 	return p1 * p2;
// }

// const result = myFunction(10, 10);

// document.getElementById("demo").innerHTML = result;

/**
 * ! JavaScript Function Syntax 
 * 
 ** A JavaScript function is defined with the "function" keyword, followed by a name, followed by parentheses ().

 ** Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

 ** The parentheses may include parameter names separated by commas: (parameter1, parameter2, ....)

 ** The code to be executed, by the function, is placed inside curly brackets: {}

 *! Example

 function name(parameter1, parameter2) {
	// code to be executed
 }

** Function parameters are listed inside the parentheses () in the funciton definition. 

** Function arguments are the values received by the funciton when it is invoked.

** Inside the function, the arguments (the parameters) behave as local variables.
 */

/**
 * ! Function Invocation
 ** The code inside the function will execute when "something" invokes (calls) the function:

 1. When an event occurs (when a user clicks a button)
 2. When it is invoked (called) from JavaScript code
 3. Automatically (self invoked)

 *! Function Return

 ** When Javascript reaches a "return" statement, the function will stop executing.

 ** If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

 ** Function often compute a return value. The Value is "returned" back to the "caller".

 *! Example
 ** Calculate the product of two numbers, and return the result:-
 */

// Function is called, the return value will end up in x
//let x = myFunction(2, 4);

//function myFunction(a, b) {
// Function returns the product of a and b
//return a * b;
//}

// document.getElementById("demo").innerHTML = x;

/**
 * ! Why Functions ?
 *
 ** With functions you can reuse code.
 ** You can write code that can be used many times.
 ** You can use the same code with different arguments, to      produce different results.
 */

//! Convert Fahrenheit to Celsius
/**
function toCelsius(fahrenheit) {
	return (5 / 9) * (fahrenheit - 32);
}
const fahrenheit = prompt("Enter your Fahrenheit value :-");
parseFloat(fahrenheit);
let fahrenhitValue = toCelsius(fahrenheit);

document.getElementById("demo").innerHTML = fahrenhitValue;
*/

/**
 *! Local Variables
 */

//! code here can NOT use carName

function mySecondFunction() {
	let carName = "Volvo";
	// code here CAN use carName
}

//! code here can NOT use carName
