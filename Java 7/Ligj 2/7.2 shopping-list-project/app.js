const inpProduct = document.querySelector("#inpProduct");
const btnAdd = document.querySelector("#btnAdd");
const ulProductList = document.querySelector("#ulProductList");
const spnError = document.querySelector(".error");

let savedProducts = JSON.parse(localStorage.getItem("products")) || [];

savedProducts.forEach((element) => {
  createProductListItem(element);
});

function createProductListItem(productName) {
  let li = document.createElement("li");
  li.classList.add("list-group-item");
  li.append(productName);

  let button = document.createElement("button");
  button.innerText = "Remove";
  button.classList.add("btn", "btn-danger", "float-end");

  button.addEventListener("click", function () {
    ulProductList.removeChild(li);
    // Remove the product name from savedProducts
    const index = savedProducts.indexOf(productName);
    if (index !== -1) {
      savedProducts.splice(index, 1);
      localStorage.setItem("products", JSON.stringify(savedProducts));
    }
  });

  li.append(button);
  ulProductList.appendChild(li);
}

btnAdd.addEventListener("click", function (event) {
  /* The 'event' parameter provides additional information about the event (in this case, the click event)
    - e.type: The type of the event (e.g., "click")
    - e.target: The element that triggered the event (in this case, the btnAdd input field)
    - Other properties specific to the event (e.g., e.key for keyboard events)  
   */
  event.preventDefault();
  let productName = inpProduct.value;
  savedProducts.push(productName);
  localStorage.setItem("products", JSON.stringify(savedProducts));

  createProductListItem(productName);
});

/*
blur event occurs when an HTML element loses focus
*/
// Listen for the "blur" event on the inpProduct input field
inpProduct.addEventListener("blur", function (event) {
  /* The 'event' parameter provides additional information about the event (in this case, the blur event)
    - e.type: The type of the event (e.g., "blur")
    - e.target: The element that triggered the event (in this case, the inpProduct input field)
    - Other properties specific to the event (e.g., e.key for keyboard events ('keyup','keypress'...))
   */
  console.log(event.type);
  console.log(event.target);
  console.log(event.target.value);

  // Check if the input value is empty or contains only whitespace
  if (event.target.value.trim() === "") {
    // If empty, display an error message
    spnError.innerText = "Please provide data!";
    // Disable the btnAdd button
    btnAdd.setAttribute("disabled", "disabled");
  } else {
    // else remove the error message
    spnError.innerText = "";
    // Enable the btnAdd button
    btnAdd.removeAttribute("disabled");
  }
});
