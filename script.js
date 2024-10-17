let screen = document.getElementById("screen");

function appendNumber(number) {
  screen.value += number;
}

function appendSymbol(symbol) {
  screen.value += symbol;
}

function clearScreen() {
  screen.value = "";
}

function deleteLast() {
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    alert("Invalid input");
  }
}
