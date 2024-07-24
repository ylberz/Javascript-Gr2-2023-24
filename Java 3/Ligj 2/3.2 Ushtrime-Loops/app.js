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
