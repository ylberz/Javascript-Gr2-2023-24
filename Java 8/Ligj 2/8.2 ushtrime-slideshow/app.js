// const slideItems = document.querySelectorAll(".slide-item");

// let indexSlide = 0;
// function showSlide() {
//   indexSlide++;
//   if (indexSlide >= slideItems.length) {
//     indexSlide = 0;
//   }
//   slideItems.forEach(function (item, index) {
//     if (index === indexSlide) {
//       item.classList.add("show");
//     } else {
//       item.classList.remove("show");
//     }
//   });
// }

// setInterval(function () {
//   showSlide();
// }, 3000);

// REFACTORED CODE
const slideItems = document.querySelectorAll(".slide-item");
let indexSlide = 0;

//Function to display a specific slide based on its index
function showSlide(index) {
  slideItems.forEach(function (item) {
    item.classList.remove("show");
  });
  slideItems[index].classList.add("show");
}
//Function to move to the next slide
function nextSlide() {
  // Increment indexSlide and reset to 0 if it surpasses the total number of slide items available
  indexSlide++;
  if (indexSlide >= slideItems.length) {
    indexSlide = 0;
  }

  // Display the slide at the updated index
  showSlide(indexSlide);
}

// interval to execute nextSlide method every 3 seconds
setInterval(function () {
  nextSlide();
}, 3000);

/*
  TASK: Implement logic to navigate between slides using buttons for previous and next slide.
*/
