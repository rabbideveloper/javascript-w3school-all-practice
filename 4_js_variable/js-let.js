// Javascript Let

/**
 * The let keyword was introduced in ES6 (2015)
 * ! Variables declared with let have Block Scope
 * ! Variables declared with let must be Declared before use
 * ? Variables declared with let cannot be Redeclared in the same scope
 */

/**
 * Block Scope :

  *!  Before ES6 (2015), JavaScript did not have Block Scope.

   *! JavaScript had Global Scope and Function Scope.

 *! ES6 introduced the two new JavaScript keywords: let and const.

    These two keywords provided Block Scope in JavaScript:
 */

// ! Example

// todo:- Variables declared inside a { } block cannot be accessed from outside the block:

{
	let isFrontendDesigner = true;
	let isNameRabbi = true;
	const age = 23;
}

console.log(); //! isFrontendDesigner, isNameRabbi, age variable use here (because this variable inside {} block ).

/**
 *? Global Scope
    Variables declared with the var always have Global Scope.

    Variables declared with the var keyword can NOT have block scope:
 */

//! Example

{
	var designerName = "Rabbi";
	var age = 23;
}

console.log(designerName);
console.log(age);

/**
 *! Cannot be Redeclared - Let
    Variables defined with let can not be redeclared.

    You can not accidentally redeclare a variable declared with let.
 */

//! Example

let fullName = "Rabbi";
//! let fullName = "Rabbi"; //! Don't use it

/**
 * ! With var you can do this:
 */

var sisterName = "Samia";
var sisterName = "Sayra"; //! you can use it because you use var keyword

console.log(sisterName);

/**
 *!Redeclaring Variables

    Redeclaring a variable using the var keyword can impose problems.

    Redeclaring a variable inside a block will also redeclare the variable outside the block: 
 */

//! Example

var x = 10;

//! x value is = 10;
// console.log(x);

{
	var x = 5;
	//! x value is = 5
	// console.log(x);
}

//! x value is 5 here
console.log(x);

/**
 * ! Redeclaring Variables
*?  Redeclaring a variable using the var keyword can impose problems.

    Redeclaring a variable inside a block will also redeclare the variable outside the block:
 */

let z = 10;

//! z value here 10
//console.log(z);

{
	let z = 3;

	//? z value here 3
	//console.log(z);
}

//! z value here 10
//console.log(z);
