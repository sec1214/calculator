let previousNum = 0;
let display = document.getElementById("display");
let clearBtn = document.getElementById("clear");
let deleteBtn = document.getElementById("delete");
let sevenBtn = document.getElementById("seven");
let eightBtn = document.getElementById("eight");
let nineBtn = document.getElementById("nine");
let divideBtn = document.getElementById("divide");
let fourBtn = document.getElementById("four");
let fiveBtn = document.getElementById("five");
let sixBtn = document.getElementById("six");
let multiplynBtn = document.getElementById("multiply");
let sevenBtn = document.getElementById("seven");
let oneBtn = document.getElementById("one");
let twoBtn = document.getElementById("two");
let threeBtn = document.getElementById("three");
let subtractBtn = document.getElementById("subtract");
let decimalBtn = document.getElementById("decimal");
let zeroBtn = document.getElementById("zero");
let equalBtn = document.getElementById("equal");
let addBtn = document.getElementById("add");

document.display = 0;


document.clearBtn.addEventListener("click", function(){ alert("Hello World!"); });





function operate(a) {
  return add(a);
}

function add(a) {
  let sum = a + previousNum;
  return sum;
}

function subtract(a, b) {
  let sum = a - b;
  return sum;
}

function multiply(a, b) {
  let sum = a * b;
  return sum;
}

function divide(a, b) {
  let sum = a / b;
  return sum;
}

console.log(operate(2, 4));
