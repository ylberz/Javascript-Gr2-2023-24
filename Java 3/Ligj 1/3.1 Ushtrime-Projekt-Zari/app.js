// Get elements with new IDs and store them in constant variables
const txtFirstPlayerRolledValue = document.getElementById(
  "txtFirstPlayerRolledValue"
);
const btnRollFirstPlayer = document.getElementById("btnRollFirstPlayer");
const txtSecondPlayerRolledValue = document.getElementById(
  "txtSecondPlayerRolledValue"
);
const btnRollSecondPlayer = document.getElementById("btnRollSecondPlayer");
const btnWinner = document.getElementById("btnWinner");

// Add an event listener (on click button) to btnRollFirstPlayer
btnRollFirstPlayer.addEventListener("click", function () {
  // Generate a random value and store it in a variable
  let rolledValue = getRandomValue();
  // Set the value of the txtFirstPlayerRolledValue element to the generated value
  txtFirstPlayerRolledValue.value = rolledValue;
});

// Add an event listener to btnRollSecondPlayer
btnRollSecondPlayer.addEventListener("click", function () {
  let rolledValue = getRandomValue();
  txtSecondPlayerRolledValue.value = rolledValue;
});

// Add an event listener to btnWinner
btnWinner.addEventListener("click", function () {
  // Check winner
  if (txtFirstPlayerRolledValue.value > txtSecondPlayerRolledValue.value) {
    alert("First player wins!");
  } else if (
    txtFirstPlayerRolledValue.value < txtSecondPlayerRolledValue.value
  ) {
    alert("Second player wins!");
  } else {
    alert("It's a tie!");
  }
});

// Function to generate a random value between 1 and 6
function getRandomValue() {
  return Math.floor(Math.random() * 6 + 1);
}
