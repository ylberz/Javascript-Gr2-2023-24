//Initiates a request to retrieve data from the specific server using fetch funciton - Get Request to server
fetch("https://dummyjson.com/products?limit=10")
  .then(function (result) {
    return result.json(); //parse the response to JSON -> Javascript Objects
  })
  .then(function (result) {
    console.log("Rezultati nga source i jashtem ose api", result); // log the JSON data
    console.log("Produktet ", result.products); //Log only products array from the JSON data
  });

// Define an asynchronous function
async function callApi() {
  // Call the fetch function and wait for it to return a result
  const response = await fetch("https://dummyjson.com/products?limit=10");
  // Wait for the response and parse it as JSON
  const result = await response.json();
  console.log(result);
}

console.log("1");
callApi();
console.log("2");
