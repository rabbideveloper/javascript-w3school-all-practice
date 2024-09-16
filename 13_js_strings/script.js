/**
 *! JavaScript Strings
 */

//? String length count

let text = "aquickbrownfoxjumpsoverthelazydog";

let length = text.length;

let elemnts = document.getElementsByClassName("demo");

for (let i = 0; i < elemnts.length; i++) {
	elemnts[i].innerHTML = length;
}

//! The escape sequence \" inserts a double quote in a string.

let text2 = 'We are the so-called "Vikings" from the north.';

document.getElementsByClassName("demo")[0].innerHTML = text2;

//! Note Templates are not supported in Internet Explorer.

/**
 *! JavaScript Strings as Objects

 *? Normally, JavaScript strigns are primitive values, created from literals;

 *! Example:-   let x = "Rabbi";

 ** But strings can also be defined as objects with the keyword new:

 *! Example:-   let y = new String("Rabbi");
 */
