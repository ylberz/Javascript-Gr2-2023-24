/* 
        getElementById(), 
        getElementsByTagName(),
        getElementsByClassName(),
        querySelector(), 
        querySelectorAll()
       
        are all methods in JavaScript used to select elements 
        from the DOM (Document Object Model);

        

*/

/* SELECTING ELEMENTS  */

// get element instance based its ID from the document
const mainHeading = document.getElementById("main-heading");

// const title = document.getElementsByTagName("h2")[0]; // First form to get an element based on tag name and index

const title = document.getElementsByClassName("title")[0]; // Second form to get an element based on class and index

console.log(title);
// get first element instance based its class from the document using querySelector
const card = document.querySelector(".card");
console.log(card);

// get element instance based its Id from the document using querySelector
const cardHeader = document.querySelector("#card-header");
console.log(cardHeader);

// get element instance based on tag name from the document using querySelector
const h3 = document.querySelector("h3");
console.log(h3);

// get all elements instances based on class from the document using querySelector
const titles = document.querySelectorAll(".title");
console.log(titles);

/* MANIPULATE ELEMENTS  */

// Set the color of the heading element to red
mainHeading.style.color = "red";
// Set the text of the mainHeading element to "Cacttus education"
mainHeading.innerText = "Cacttus education";
// Set the text content of the mainHeading element to "cacttus education"
mainHeading.textContent = "cacttus education";

console.log(mainHeading.innerText);
console.log(mainHeading.textContent);

// Add new class "b-black" to the heading element
mainHeading.classList.add("b-black");

// Remove the "c-red" class from the heading element
mainHeading.classList.remove("c-red");
console.log(mainHeading.classList);

const cardBody = document.querySelector("#card-body");
// add html to cardBody using innerHtml property
cardBody.innerHTML = "<h1>Hello world</h1>";

// get and set value from input using value property
const inpSearch = document.querySelector("#inp-search");
console.log(inpSearch.value);
inpSearch.value = "Hello";

const imgStudnets = document.querySelector("#img-students");

//get value of the "src" attribute from imgStudnets element using getAttribute method
console.log(imgStudnets.getAttribute("src"));

//set attribute to the imgStudnets element using setAttribute method
imgStudnets.setAttribute(
  "src",
  "https://cacttus.education/wp-content/uploads/2019/06/Right-2.jpg"
);

//create html element using createElement method;
const cardTitle = document.createElement("h3");

//set content using innerText or innerContent
cardTitle.innerText = "im h3 element created from JAVASCRIPT";

//add html element to the dom using append, appendChild or prepend method
cardBody.append(cardTitle);
//cardBody.appendChild(cardTitle);
//cardBody.prepend(cardTitle);

// Remove the cardTitle element from the DOM
//cardTitle.remove();
//Remove the cardTitle element from the cardBody element
//cardBody.removeChild(cardTitle);

const btnAlert = document.querySelector("#btn-alert");

// Add an event listener to the btnAlert element, listening for a 'click' event,
// and when clicked, trigger an alert with the message "Hello World".
btnAlert.addEventListener("click", function () {
  alert("Hello World");
});
