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

// Define an asynchronous function named getCardAndFile
async function getCardAndFile() {
  // Call the getCardData function and wait for it to return a result
  let cardData = await getCardData();
  // Call the getFileFromArchive function with the obtained card data and wait for it to return a result
  let cardDataAndSrc = await getFileFromArchive(cardData);
  console.log(cardDataAndSrc);
}

getCardAndFile();
