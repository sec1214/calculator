let currentNum = "";
let previousNum = "";
let sum = "";

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
let oneBtn = document.getElementById("one");
let twoBtn = document.getElementById("two");
let threeBtn = document.getElementById("three");
let subtractBtn = document.getElementById("subtract");
let decimalBtn = document.getElementById("decimal");
let zeroBtn = document.getElementById("zero");
let equalBtn = document.getElementById("equal");
let addBtn = document.getElementById("add");

display.innerHTML = "";

clearBtn.addEventListener("click", function () {
  display.innerHTML = "";
});

deleteBtn.addEventListener("click", function () {
  let numStr = display.innerHTML.slice(0, -1);
  display.innerHTML = numStr;
});

zeroBtn.addEventListener("click", function () {
  display.innerHTML += 0;
});

oneBtn.addEventListener("click", function () {
  display.innerHTML += 1;
});

twoBtn.addEventListener("click", function () {
  display.innerHTML += 2;
});

threeBtn.addEventListener("click", function () {
  display.innerHTML += 3;
});

fourBtn.addEventListener("click", function () {
  display.innerHTML += 4;
});

fiveBtn.addEventListener("click", function () {
  display.innerHTML += 5;
});

sixBtn.addEventListener("click", function () {
  display.innerHTML += 6;
});

sevenBtn.addEventListener("click", function () {
  display.innerHTML += 7;
});

eightBtn.addEventListener("click", function () {
  display.innerHTML += 8;
});

nineBtn.addEventListener("click", function () {
  display.innerHTML += 9;
});

// addBtn.addEventListener("click", function () {
//   display.innerHTML += "+";
// });

// equalBtn.addEventListener("click", function () {
//   display.innerHTML += "&#61";
// });

if (
  addBtn.addEventListener("click", function () {
    currentNum = display.innerHTML;
    previousNum = currentNum;
    console.log("currentNum " + currentNum);
    currentNum = "";
    console.log("currentNum " + currentNum);
    display.innerHTML = "";
    console.log("previousNum " + previousNum);
  })
);

if (
  equalBtn.addEventListener("click", function () {
    currentNum = display.innerHTML;
    console.log("currentNum " + currentNum);
    console.log("previousNum " + previousNum);
    sum = parseInt(currentNum) + parseInt(previousNum);
    console.log("sum " + sum);
  })
);

// function operate() {
//   if (addBtn.addEventListener === true) {
//     firstNum = display.innerHTML;
//     display.innerHTML = "";
//     firstNum += firstNum;
//     console.log(firstNum);
//   }
// }
