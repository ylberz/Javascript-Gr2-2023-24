const inpName = document.querySelector("#inpName");
const btnSave = document.getElementById("btnSave");
const lblDisplay = document.querySelector("#lblDisplay");
const btnRemove = document.querySelector("#btnRemove");
displayName();

btnSave.addEventListener("click", function () {
  let name = inpName.value; // Get the value from the input field
  localStorage.setItem("name", name); // Save the name in local storage
  displayName(); // Update the display
});

// Function to display the saved name
function displayName() {
  let name = localStorage.getItem("name");
  lblDisplay.innerText = name;
}

// Event listener for the Remove button
btnRemove.addEventListener("click", function () {
  localStorage.removeItem("name"); // Remove the saved name from local storage
  displayName(); // Update the display
});

// Example: Storing an array of students in local storage
let students = ["ylber zeqiri", "Filan Fisteku"];

localStorage.setItem("students", JSON.stringify(students)); // Example: Storing an array of students in local storage

//Retrieving and parsing the students array from local storage
console.log(JSON.parse(localStorage.getItem("students"))); // Convert the string back to an array and log it
