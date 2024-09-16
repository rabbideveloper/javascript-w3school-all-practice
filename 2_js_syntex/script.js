// JavaScript syntax মানে হলো ভাষাটির নিয়ম এবং গঠন যা দিয়ে কোড লেখা হয়। প্রতিটি প্রোগ্রামিং ভাষার নিজস্ব নিয়ম থাকে, যেগুলো ঠিকমত না মানলে কোড কাজ করবে না। JavaScript এর syntax কিছু মৌলিক নিয়ম এবং কাঠামো অনুসরণ করে। নিচে কয়েকটি গুরুত্বপূর্ণ অংশ দেওয়া হলো:

// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;

// Variable declaration (ভেরিয়েবল ঘোষণা):
let name = "Rabbi"; // এখানে let ব্যবহৃত হয়েছে ভেরিয়েবল ঘোষণা করতে
const age = 25; // const দিয়ে স্থায়ী মান রাখা হয়

// Data Type
let number = 10; // Number
// let name = "Rabbi"; // String
let isRider = true; // Boolean
let list = [1, 2, 3]; // Array
let person = { name: "Rabbi", age: 25 }; // Object

console.log(isRider);

// Functions (ফাংশন):
function greet() {
	console.log("Salam, Rabbi!");
}
greet(); // ফাংশন কল করা হচ্ছে

// Conditional statements (শর্ত নির্ধারণ):

if (age > 18) {
	console.log("Adult");
} else {
	console.log("Not adult");
}

// Loop

for (let i = 0; i < 5; i++) {
	console.log(i);
}

document.getElementById("demo").innerHTML = (5 + 6) * 20;

document.getElementById("demo").innerHTML = "Rabbi " + "Sheikh";
