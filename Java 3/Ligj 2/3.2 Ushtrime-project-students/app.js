// Initialize an empty array to store student information
const students = [];

// Get references by IDs
const txtName = document.getElementById("txtName");
const txtLastName = document.getElementById("txtLastName");
const txtPiketTotale = document.getElementById("txtPiketTotale");
const btnSave = document.getElementById("btnSave");

// Add an event listener to the save button
btnSave.addEventListener("click", function () {
  let studentMsg = `Student Name: ${txtName.value} ${txtLastName.value} , piket: ${txtPiketTotale.value}`;
  // add the student message into students array
  students.push(studentMsg);
  // Log the updated students
  console.log(students);
});
