//functions in js

//1. function- deklarimi
//2. 'helloWorld' emri i funksionit
//3. kllapat () -vendosen parametrat e funksionit nese ka
//4. scope i egzekutimit {}

function helloWorld() {
  console.log("Hello world!");
}

helloWorld();

// tipi  i kthimit te funksioneve
// number, string, array, boolean ...
// void -> pa kthim te naj vleres sikurse helloWorld();

function getFullName(name, lastname) {
  return `${name} ${lastname}`;
}

let fullName = getFullName("Filan", "Fisteku");
console.log(fullName);

function getSumOfArray(numbers) {
  let sum = 0;
  for (let element of numbers) {
    sum += element;
  }
  return sum;
}

let sum = getSumOfArray([1, 2, 3]);
console.log(sum);

// callbacks
// displayCb eshte parametri ne te cilin vendose si argument
// metoda per te shfaqur shumen e elementeve ne array
function getSumAndDisplay(array, displayCb) {
  let sum = 0;
  for (let element of array) {
    sum += element;
  }
  displayCb(sum);
}

// function
function show(element) {
  console.log(`Sum is ${element}`);
}

//show -> callback function
getSumAndDisplay([1, 2, 3], show);

// callback-metod anonime (pa emer te funksionit)
getSumAndDisplay([1, 1, 1], function (element) {
  console.log(element);
});
