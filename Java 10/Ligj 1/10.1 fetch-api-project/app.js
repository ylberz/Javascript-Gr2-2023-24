const container = document.querySelector(".container");

async function getProductData() {
  const response = await fetch("https://dummyjson.com/products?limit=10");
  const result = await response.json();
  displayProducts(result.products);
}

//method to create cards using template literals (Template String ``)
function displayProducts1(products) {
  container.innerHTML = "";
  for (let product of products) {
    let cardHtml = `
            <div class="card">
            <div class="cardHeader">
            <h3>${product.title}</h3>
            </div>
            <div class="cardBody">
            <img
                src="${product.thumbnail}"
                alt="product image"
                width="200px"
                class="cardBodyImg"
            />
            <p class="cardBodyDescription">
                ${product.description}
            </p>
            </div>
        </div>
    `;
    container.innerHTML += cardHtml;
  }
}

//method to create cards using createElement function
function displayProducts(products) {
  for (let product of products) {
    const cardDiv = createElement("div", "card", "", container);
    const cardHeader = createElement("div", "cardHeader", "", cardDiv);
    const cardHeaderH3 = createElement("h3", "", product.title, cardHeader);
    const cardBody = createElement("div", "cardBody", "", cardDiv);
    const cardBodyImg = createElement("img", "cardBodyImg", "", cardBody);

    // const cardBodyBtn = createElement("button", "", "Click me", cardBody);
    // cardBodyBtn.addEventListener("click", function () {
    //   alert("yoy clicked me ");
    // });

    cardBodyImg.setAttribute("src", product.thumbnail);
    const cardBodyDescription = createElement(
      "p",
      "cardBodyDescription",
      product.description,
      cardBody
    );
  }
}

// createElement is a function which creates and configures an HTML element
function createElement(
  elementName,
  classList = null,
  textContent = null,
  parent = null
) {
  const element = document.createElement(elementName);
  if (classList) {
    element.classList = classList;
  }
  if (textContent) {
    element.textContent = textContent;
  }
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}

getProductData();
