/* ================================
   Part 2: JavaScript Functions
   ================================ */

// Function with parameter & return value
function calculateSquare(num) {
  return num * num;
}

// Demonstrating scope
let globalMessage = "Global scope accessible!";

function showMessage() {
  let localMessage = "Local scope only!";
  console.log(globalMessage); // works
  console.log(localMessage);  // works here only
}

// Event listener to trigger function
document.getElementById("calcBtn").addEventListener("click", function() {
  let result = calculateSquare(5);
  document.getElementById("calcResult").textContent = "5 squared = " + result;
  showMessage();
});

/* ================================
   Part 3: Combining CSS & JS
   ================================ */
const jsBox = document.getElementById("jsBox");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", function() {
  jsBox.classList.toggle("animate"); // toggle CSS animation class
});
