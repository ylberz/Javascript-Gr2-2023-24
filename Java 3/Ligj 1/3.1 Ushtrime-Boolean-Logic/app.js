// Boolean values: true, false
console.log(true);
console.log(false);

let a = "1";
let b = "1";
let c = "2";
let d = 2;

//check type
console.log(typeof c);
console.log(typeof d);

// check values
let condition = c == d;
console.log(condition);

// checks value and types
let condition1 = c === d;
console.log(condition1);

let condition2 = a === b && c === d; // false

if (!condition2) {
  console.log("value", condition2);
}

let condition3 = a == b || c === d;
console.log(condition3);
