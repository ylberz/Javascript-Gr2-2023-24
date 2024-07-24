// 1000ms -> 1sc

// Set a timeout to execute the function after (5 seconds)
setTimeout(function () {
  console.log("Finished");
}, 5000);

let timeOutId = setTimeout(function () {
  console.log("Hello World!!");
}, 3000);
// Clear (stop) timeout using its ID
clearTimeout(timeOutId);

// Set an interval to execute the function every  (1 second)
setInterval(() => {
  console.log("hello");
}, 1000);

let intervalId = setInterval(() => {
  console.log("hello world");
}, 1000);
// Clear interval using its ID
clearInterval(intervalId);
