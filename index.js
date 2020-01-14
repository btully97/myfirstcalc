var array1 = [""];
var array2 = [""];

function numberClick(buttonId) {
  var output = document.getElementById("output-value").innerHTML;
  var number1 = document.getElementById("history-value1").innerHTML;
  var number2 = document.getElementById("history-value2").innerHTML;
  var operator = document.getElementById("history-operator").innerHTML;
  // if (output != "&nbsp;") {
  //   clearButton();
  //   array1.push(buttonId);
  //   document.getElementById("history-value1").innerHTML = array1.join("");
  // } else
  if (
    number1 != "&nbsp;" &&
    operator != "" &&
    number2 == "" &&
    output == "&nbsp;"
  ) {
    array2.push(buttonId);
    document.getElementById("history-value2").innerHTML = array2.join("");
  } else if (
    number1 != "&nbsp;" &&
    operator != "" &&
    number2 != "" &&
    output != "&nbsp;"
  ) {
    var newNumber = buttonId;
    clearButton();
    array1.push(newNumber);
    document.getElementById("history-value1").innerHTML = array1.join("");
  } else if (document.getElementById("history-operator").innerText == "") {
    array1.push(buttonId);
    document.getElementById("history-value1").innerHTML = array1.join("");
  } else {
    array2.push(buttonId);
    document.getElementById("history-value2").innerHTML = array2.join("");
  }
}

function operatorClick(operatorId) {
  var number1 = document.getElementById("history-value1").innerHTML;
  var number2 = document.getElementById("history-value2").innerHTML;
  var operator = document.getElementById("history-operator").innerHTML;
  var output = document.getElementById("output-value").innerHTML;
  var history = document.getElementById("history").innerText;
  if (
    (number1 != "&nbsp;" && number2 == "" && output == "&nbsp;") ||
    (number1 != "&nbsp;" && number2 == "" && output != "&nbsp;")
  ) {
    document.getElementById("history-operator").innerHTML = operatorId;
  } else if (number1 != "&nbsp;" && operator != "" && number2 != "") {
    var newOperator = operatorId;
    var newHistory = eval(history);
    clearButton();
    document.getElementById("output-value").innerHTML = "&nbsp;";
    document.getElementById("history-value1").innerHTML = newHistory;
    document.getElementById("history-operator").innerHTML = newOperator;
  }
}

function clearButton() {
  document.getElementById("history-value1").innerHTML = "&nbsp;";
  document.getElementById("history-operator").innerHTML = "";
  document.getElementById("history-value2").innerHTML = "";
  document.getElementById("output-value").innerHTML = "&nbsp";
  array1 = [""];
  array2 = [""];
}

function equalButton() {
  // var number1 = document.getElementById("history-value1").innerText;
  // var number2 = document.getElementById("history-value2").innerText;
  var history = document.getElementById("history").innerText;
  var output = eval(history);
  document.getElementById("output-value").innerHTML = output;
}

function positiveNegative() {
  var number1 = document.getElementById("history-value1").innerHTML;
  var number2 = document.getElementById("history-value2").innerHTML;
  var operator = document.getElementById("history-operator").innerHTML;
  if (operator == "") {
    if (number1 > 0) {
      array1[0] = "-";
      document.getElementById("history-value1").innerHTML = array1.join("");
    } else if (number1 < 0) {
      array1[0] = "";
      document.getElementById("history-value1").innerHTML = array1.join("");
    }
  } else {
    if (number2 > 0) {
      array2[0] = "-";
      document.getElementById("history-value2").innerHTML = array2.join("");
    } else if (number2 < 0) {
      array2[0] = "";
      document.getElementById("history-value2").innerHTML = array2.join("");
    }
  }
}

function decimalButton(buttonId) {
  var number1 = document.getElementById("history-value1").innerHTML;
  var number2 = document.getElementById("history-value2").innerHTML;
  var operator = document.getElementById("history-operator").innerHTML;
  var output = document.getElementById("output-value").innerHTML;
  if (number2 == "" && operator == "") {
    if (array1.includes(".")) {
      // array1 = array1.filter(e => e !== ".");
      // document.getElementById("history-value1").innerHTML =
      //   "&nbsp;" + array1.join("");
    } else {
      array1.push(".");
      document.getElementById("history-value1").innerHTML = array1.join("");
    }
  } else if (
    number1 != "&nbsp;" &&
    operator != "" &&
    number2.includes(".") == false
  ) {
    if (array2.includes(".")) {
      // array2 = array2.filter(e => e !== ".");
      // document.getElementById("history-value2").innerHTML = array2.join("");
    } else {
      array2.push(".");
      document.getElementById("history-value2").innerHTML = array2.join("");
    }
  } else if (
    number1 != "&nbsp;" &&
    operator != "" &&
    number2 != "" &&
    output != "&nbsp;"
  ) {
    var newNumber = buttonId;
    clearButton();
    array1.push(newNumber);
    document.getElementById("history-value1").innerHTML = array1.join("");
  }
}
