//sum of integers from 0 to 10 using a for loop.
let sum = 0;
for (let i = 0; i <= 10; i++) {
  sum += i;
}
console.log(sum);

//write code to get this output of data (using js loops) in console

// Outter 0
// L
// O
// L
// Outter 1
// L
// O
// L
// Outter 2
// L
// O
// L
// Outter 3
// L
// O
// L
// Outter 4
// L
// O
// L

let msg = "LOL";
for (let i = 0; i <= 4; i++) {
  console.log(`Outter ${i}`);
  for (let j = 0; j < msg.length; j++) {
    console.log(msg[j]);
  }
}

let index = 0;
while (index <= 4) {
  console.log(`Outter ${index}`);
  for (let c of msg) {
    console.log(c);
  }
  index++;
}
