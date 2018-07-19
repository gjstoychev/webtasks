// Task 4 : Web JS calculator with basic functions - javascript part

var total = 0;
var number = "";
var regexp = /[0-9]/;
var mainScreen = document.getElementById("mainScreen");

function InputSymbol(num) {
  var cur = document.getElementById(num).value;
  var prev = number.slice(-1);

  if (!regexp.test(prev) && !regexp.test(cur)) {
    // Do not allow 2 math operators in row
    return;
  }

  number = number.concat(cur);
  mainScreen.innerHTML = number;
}

function CalculateTotal() {
  total = (Math.round(eval(number) * 100) / 100);
  mainScreen.innerHTML = total;
}

function DeleteLastSymbol() {
  if (!number.length) {
    mainScreen.innerHTML = "0";
  }

  if (number) {
    number = number.slice(0, -1);
    mainScreen.innerHTML = number;
  }
}

function ClearScreen() {
  number = "";
  mainScreen.innerHTML = 0;
}
