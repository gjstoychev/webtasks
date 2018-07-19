// Task 3 : Input forms with validation - javascript part

function checkInput() {
  var fields = [{
    name: "firstname",
    regexp: /^[a-zA-Z]{1,15}$/,
    errorMsg: "must be between 1 and 15 letters"
  },
  {
    name: "lastname",
    regexp: /^[a-zA-Z]{1,15}$/,
    errorMsg: "must be between 1 and 15 letters"
  },
  {
    name: "egn",
    regexp: /^[0-9]{10}$/,
    errorMsg: "must be exactly 10 numbers"
  },
  {
    name: "age",
    regexp: /^[0-9]{2,3}$/,
    errorMsg: "must be a number"
  },
  {
    name: "address",
    regexp: /^.{1,100}$/,
    errorMsg: "must be between 1 and 100 symbols"
  },
  {
    name: "password",
    regexp: /^[a-zA-Z0-9]{6,18}$/,
    errorMsg: "must be 6-18 letters or numbers"
  },
  {
    name: "confirm",
    regexp: /^[a-zA-Z0-9]{6,18}$/,
    errorMsg: "must be 6-18 letters or numbers"
  }];

  for (var f in fields) {
    var name = fields[f].name;
    var value = document.getElementById(name).value;
    var regexp = fields[f].regexp;
    var msg = fields[f].errorMsg;
    var span = document.getElementById(name + "Span");

    regexp.test(value) ? span.innerHTML = "OK" : span.innerHTML = msg;
  }
}
