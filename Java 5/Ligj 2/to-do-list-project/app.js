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
  console.log(toDoList);
}

// Function to remove a task from the to-do list based on ID
function removeTask(id) {
  let indexOfTask = toDoList.findIndex(function (task) {
    return task.id === id;
  });
  toDoList.splice(indexOfTask, 1);
}

// Function to get a task from the to-do list based on ID
function getTask(id) {
  let task = toDoList.find(function (taskEl) {
    return taskEl.id === id;
  });
  return task;
}

// Function to mark a task as completed based on ID
function markAsCompleted(id) {
  let task = getTask(id);
  task.isDone = true;
}

addTask("Testi ne matematik", "Duhet me msu integrale blla blla...");
addTask("Testi ne JAVASCRIPT", "Duhet me msu se sjom kerah...");
markAsCompleted(1);
display();

let task = getTask(1);
console.log(task);
