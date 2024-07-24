// Function to simulate fetching card data asynchronously using a Promise from an API or another source
function getCardData() {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve({ id: "1", title: "Cacttus Education", imageSrc: "" });
    }, 2000);
  });
  return promise;
}

// Function to simulate fetching a file associated with the card asynchronously using a Promise from an API or another source
function getFileFromArchive(card) {
  const promise = new Promise(function (resolve) {
    setTimeout(() => {
      card.imageSrc = "./img.png";
      resolve(card);
    }, 2000);
  });
  return promise;
}

console.log(getCardData());
// call getCardData to retrive card data
getCardData()
  // Call getFileFromArchive() after getCardDate() resolves
  .then(function (cardResult) {
    console.log(cardResult);
    return getFileFromArchive(cardResult);
  })
  .then(function (card) {
    console.log(card);
  });
