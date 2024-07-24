//Simulate fetching card data asynchronously using callbacks from an API or another source.
function getCardData(callback) {
  setTimeout(() => {
    callback({ id: "1", title: "Cacttus Education", imageSrc: "" });
  }, 2000);
}

// Simulate fetching a file associated with the card asynchronously from an API or anohter source.
function getFileFromArchive(card, callback) {
  setTimeout(() => {
    card.imageSrc = "./img.png";
    callback(card);
  }, 2000);
}

// Initiate the asynchronous function to get card data and associated image source
getCardData(function (cardResult) {
  console.log(cardResult); // display cardResult
  // call 'getFileFromArchive' function to handle card image source  (src) retrieval
  getFileFromArchive(cardResult, function (card) {
    console.log(card); //display card data after retrieving image source
  });
});
