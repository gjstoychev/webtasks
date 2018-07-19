// Task 5 : HTML Page that validates fractional numbers

function checkNumber() {
  var stringsFromInput = document.getElementById("inputNumber").value.split(/[,\n.]/);
  var numbers = [{
    name: "whole",
    regexp: /^[0-9]{1,10}$/,
    errorMsg: " number expected to be 10 symbols maximum"
  },
  {
    name: "fraction",
    regexp: /^[0-9]{0,5}$/,
    errorMsg: " number expected to be 5 symbols maximum"
  }];

  for (var n in numbers) {
    var name = numbers[n].name;
    var value = stringsFromInput[n];
    var regexp = numbers[n].regexp;
    var msg = numbers[n].errorMsg;
    var span = document.getElementById(name + "Span");
    
    regexp.test(value)
    ? span.innerHTML = name + " number is OK"
    : span.innerHTML = name + msg;
  }
}
