let currentNum = "";
let previousNum = "";
let sum = "";
let numBtns = document.getElementsByClassName("grid-item-num");

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
let oneBtn = document.getElementById("one");
let twoBtn = document.getElementById("two");
let threeBtn = document.getElementById("three");
let subtractBtn = document.getElementById("subtract");
let decimalBtn = document.getElementById("decimal");
let zeroBtn = document.getElementById("zero");
let equalBtn = document.getElementById("equal");
let addBtn = document.getElementById("add");

const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  let display = document.getElementById("display");
  display = calculator.displayValue;
}

function updateDisplay() {
  //need to select element with class .calculatorScreen
  const display = document.getElementById("display");
  display.value = calculator.displayValue;
}

function displayValue(value) {}

updateDisplay();

clearBtn.addEventListener("click", function () {
  calculator.displayValue = "";
  calculator.firstOperand = "";
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
});

deleteBtn.addEventListener("click", function () {
  let numStr = display.value.slice(0, -1);
  display.value = numStr;
});

zeroBtn.addEventListener("click", function () {
  display.value += 0;
});

oneBtn.addEventListener("click", function (num) {
  if(display.value === 0){
    num = display.innerHTML
    display.value = num 
  }
  display.value = num 
});

twoBtn.addEventListener("click", function () {
  display.value += 2;
});

threeBtn.addEventListener("click", function () {
  display.value += 3;
});

fourBtn.addEventListener("click", function () {
  display.value += 4;
});

fiveBtn.addEventListener("click", function () {
  display.value += 5;
});

sixBtn.addEventListener("click", function () {
  display.value += 6;
});

sevenBtn.addEventListener("click", function () {
  display.value += 7;
});

eightBtn.addEventListener("click", function () {
  display.value += 8;
});

nineBtn.addEventListener("click", function () {
  display.value += 9;
});

addBtn.addEventListener("click", function () {
  console.log(display.innerHTML);
  currentNum = display.innerHTML;
  previousNum = currentNum;
  display.innerHTML = "";
  currentNum = 0;
  sum = parseInt(currentNum) + parseInt(previousNum);
  //display.innerHTML = sum;
});

equalBtn.addEventListener("click", function () {
  currentNum = display.innerHTML;
  console.log("currentNum " + currentNum);
  console.log("previousNum " + previousNum);
  sum = parseInt(currentNum) + parseInt(previousNum);
  display.innerHTML = sum;
  console.log("sum " + sum);
});
