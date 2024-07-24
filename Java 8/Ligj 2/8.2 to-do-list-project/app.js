const inpName = document.querySelector("#inpName");
const inpDescription = document.querySelector("#inpDescription");
const tblBodyToDoList = document.querySelector("#tblBodyToDoList");
const btnAdd = document.querySelector("#btnAdd");
const inpSearch = document.querySelector("#inpSearch");

// Array to store the to-do list items
// Each to-do item has properties: id, name, description, isDone
// const toDoList =  [];
const toDoList = JSON.parse(localStorage.getItem("toDoList")) || []; // Retrieve the "toDoList" from local storage or initialize an empty array if it doesn't exist

// Function to generate a unique ID, using Date.now
function generateId() {
  // return toDoList.length + 1;  //changed because of localstorage
  return Date.now(); // always is unike -> Date.now()
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
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

// Function to display to-do list
function display(toDoList) {
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
  // Save the "toDoList" array to local storage as a string
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  display(toDoList);
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
  // Save the "toDoList" array to local storage as a string
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  display(toDoList);
}

// Add an event listener for the "Add" button
btnAdd.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  addTask(inpName.value, inpDescription.value); // Add task
  display(toDoList); // Update the display with the modified to-do list
});

let timeOutId; // Define a variable to store the timeout ID
// Event listener for filtering the to-do list based on search input

inpSearch.addEventListener("keyup", function () {
  // Clear any existing timeout to prevent rapid firing of the search function
  clearTimeout(timeOutId);
  timeOutId = setTimeout(function () {
    let searchValue = inpSearch.value;
    if (searchValue) {
      display(filterToDolist(searchValue)); // Update the display with the filtered to-do list
    } else {
      display(toDoList);
    }
  }, 2000);
});

// Function to filter tasks based on task descripion
function filterToDolistBasedTaskDesc(taskdescription) {
  let filteredArray = toDoList.filter(function (item) {
    return item.description.includes(taskdescription);
  });
  return filteredArray;
}

// Function to filter tasks based on taskName
function filterToDolist(taskName) {
  let filteredArray = toDoList.filter(function (item) {
    return item.name.includes(taskName);
  });
  return filteredArray;
}

display(toDoList);
