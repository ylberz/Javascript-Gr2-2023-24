console.log("Start...");

setTimeout(() => {
  console.log("timeout finished!");
}, 0);

console.log("End...");

//our timeout function to block main thread
function timeOut() {
  let endTime = Date.now() + 4000;
  while (Date.now() < endTime) {}
}
// timeOut();

//Simulate fetching  data asynchronously  from an API or another source using callbacks
function fetchSomeData(cb) {
  let response;
  setTimeout(function () {
    response = { name: "ylber", lastnaem: "Zeiri" };
    cb(response);
  }, 3000);
}

// Call fetchSomeData function and log the result when it is finished
fetchSomeData(function (result) {
  console.log("Rezultati pas marrjes se te dhenave:", result);
});
