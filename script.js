const numbersScreen = document.querySelector(".numbers");
const resetButton = document.getElementById("reset");
const pickButton = document.querySelector("#pick");
let picks = 0;

// Clear the existing content in numbersScreen:
numbersScreen.innerHTML = "";

// function on click:
pickButton.onclick = function () {
  // Generate a random lottery number from 1 to 45:
  const selectedNumber = Math.ceil(Math.random() * 45);

  // Create a span element for number:
  const span = document.createElement("span");
  span.className = "dynamic-span";
  span.textContent += selectedNumber;

  // Append the span to numbersScreen:
  numbersScreen.appendChild(span);

  // increase picks by one on click:
  picks += 1;

  // disable the button when 6 numbers have been selected:
  if (picks === 6) {
    pickButton.disabled = true;
  }
};

// reset button:
resetButton.onclick = function () {
  numbersScreen.innerHTML = "";
  picks = 0;
  pickButton.disabled = false;
};
