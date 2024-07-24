console.log("Hello World!");

console.error("Network Error!", { status: "500" });

console.warn("Warning");

console.table({ name: "Olt", lastName: "Thaqi", age: 20 });

// Define a style string with CSS properties
var style = "padding:20px;background-color:white;color:black;";
console.log("%cHello", style); // Log the message "Hello" with the specified style

// Grouping in the console
console.group("person");
console.log("name:", "Drin");
console.log("age:", "20");
console.groupEnd();

console.group("Te dhenat e studentit:");
console.table({
  emri: "EmriStudentit",
  mbiemri: "MbiemriStudentit",
  vendlindja: "Vendlindja e Studentit",
  mosha: "18 - 20",
});
console.groupEnd();

console.group("Veprimet Aritmetike:");
console.log("Mbledhja", 3 + 3);
console.log("Zbritja", 7 - 4);
console.log("Shumezimi", 2 * 3);
console.log("Pjestimi", 8 / 2);
console.groupEnd();

// Variables in js

// declare variable and initialize
let currentYear = 2024;

//declare variable
let year;
//initialize variable
year = 2024;
console.log(year);

//declare and initialize string variable
let name = "Filan";
let lastname = "Fisteku";
const vendlindja = "Prishtine";

let notAnumber = 1 + NaN;
let notAnumber2 = 0 / 0;
let notAnumber3 = "a" * 2;

console.log(notAnumber);
console.log(notAnumber2);
console.log(notAnumber3);

// const hens = 4;
// hens = 10;

// const age = 18;
// age = age + 1;

//declare and initialize boolean variable
let loggedIn = true;
//re-initialize boolean variable
loggedIn = false;

let msg = "Allo allo";
//check type of variable using typeof
console.log(typeof msg);
msg = 100;
console.log(typeof msg);
msg = false;
console.log(typeof msg);
