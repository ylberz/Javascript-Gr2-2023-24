let array = ["name", "lastname"];

console.log(array.length);
console.log(array[0]);
console.log(array[1]);

//array[2] = "age";

// array.shift();
// array.pop();
array.unshift("birthdate");
array.push("age");

console.log(array);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//array methods

console.log(array.concat("PhoneNumber"));
console.log(array.includes("age"));
console.log(array.indexOf("age"));
console.log(array.join("/"));
console.log(array.reverse());

console.log(array.sort());

//filter method
console.log(
  array.filter(function (item) {
    if (item.includes("name")) {
      return item;
    }
  })
);

const students = ["Anda", "Arif"];
students.push("Fatlind");
console.log(students);

// students = []; //error => students variable is a constant

const nestedArray = [
  ["red", "green"],
  ["orange", "blue"],
];

// access to nested array element
console.log(nestedArray[0][1]);
console.log(nestedArray[(1, 1)]);
