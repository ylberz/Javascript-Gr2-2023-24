const inpName = document.querySelector("#inpName");
const inpDescription = document.querySelector("#inpDescription");
const tblBodyToDoList = document.querySelector("#tblBodyToDoList");
const btnAdd = document.querySelector("#btnAdd");

// Array to store the to-do list items
const toDoList = [];
// Each to-do item has properties: id, name, description, isDone

// Function to generate a unique ID, based on array lengthh
function generateId() {
  return toDoList.length + 1;
}

// Function to add a new task to the to-do list
function addTask(name, description) {
  let newTask = {
    id: generateId(),
    name: name,
    description: description,
    isDone: false,
  };

  toDoList.push(newTask);
}

// Function to display to-do list
function display() {
  tblBodyToDoList.innerHTML = ""; //clear the existing content of the body
  let tr = "";
  for (let task of toDoList) {
    let isDoneTd = ""; // Initialize an empty string for the "Done" badge

    // Check if the task is marked as done
    if (task.isDone) {
      isDoneTd = "<span class='badge bg-primary'>Finish</span>";
    } else {
      isDoneTd = "<span class='badge bg-danger'>Not Finished</span>";
    }
    tr = `
          <tr>
          <td>${task.id}</td>
          <td>${task.name}</td>
          <td>${task.description}</td>
          <td>${isDoneTd}</td>
          <td>
           <button  class="btn btn-sm btn-danger btn-remove"  data-id="${task.id}">Remove</button>
           <button  class="btn btn-sm btn-primary btn-finish" data-id="${task.id}">Finish</button>
          </td>
          </tr>
      `;
    tblBodyToDoList.innerHTML += tr;
  }
  // Add event listeners for the "Remove" and "Finish" buttons
  addRemoveBtnListeners();
  addFinishBtnListeners();
}

// Function to add event listeners for the "Remove" buttons
function addRemoveBtnListeners() {
  let removeButtons = document.querySelectorAll(".btn-remove");
  for (let removeBtn of removeButtons) {
    let id = removeBtn.getAttribute("data-id");
    removeBtn.addEventListener("click", function () {
      if (confirm("Do u want to remove this to do task: ", +id)) {
        removeTask(id);
      }
    });
  }
}

// Function to add event listeners for the "Finish" buttons
function addFinishBtnListeners() {
  let finishButtons = document.querySelectorAll(".btn-finish");
  for (let finishBtn of finishButtons) {
    let id = finishBtn.getAttribute("data-id");
    finishBtn.addEventListener("click", function () {
      if (confirm("Do u want to finish this to do task: " + id)) {
        markAsCompleted(id);
      }
    });
  }
}

// Function to remove a task from the to-do list based on ID
function removeTask(id) {
  let indexOfTask = toDoList.findIndex(function (task) {
    return task.id === Number.parseInt(id);
  });
  toDoList.splice(indexOfTask, 1);
  display();
}

// Function to get a task from the to-do list based on ID
function getTask(id) {
  let task = toDoList.find(function (taskEl) {
    return taskEl.id === Number.parseInt(id);
  });
  return task;
}

// Function to mark a task as completed based on ID
function markAsCompleted(id) {
  let task = getTask(id);
  task.isDone = true;
  display();
}

// addTask("Testi ne matematik", "Duhet me msu integrale blla blla...");
// addTask("Testi ne JAVASCRIPT", "Duhet me msu se sjom kerah...");
// markAsCompleted(1);
display();

// Add an event listener for the "Add" button
btnAdd.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  addTask(inpName.value, inpDescription.value); // Add task
  display(); // Update the display with the modified to-do list
});
