let displayOperand = document.querySelector("#operand");

// let displayOperandTest = document.querySelector("#operand_test");

let displayOperator = document.querySelector("#operator");
let displayPreviousOperand = document.querySelector("#previousOperand");
const btnOperatorInput = document.querySelectorAll("[data-operator]");
const btnNumberInput = document.querySelectorAll("[data-num-btn]");
const equalBtn = document.querySelector("[data-equal-btn]");
const allClearBtn = document.querySelector("[data-all-clear]");
const decimalBtn = document.querySelector("[data-decimal-btn]");
const delBtn = document.querySelector("[data-delete]");

const calculatorConstructor = {
  operand: "0",
  previousOperand: null,
  operator: null,
};

function updateDisplay() {
  // displayOperandTest.value = calculatorConstructor.operand;
  displayOperand.value = calculatorConstructor.operand;
  displayOperator.value = calculatorConstructor.operator;
  displayPreviousOperand.value = calculatorConstructor.previousOperand;
}

btnNumberInput.forEach((btn) => {
  btn.addEventListener("click", (calcBtn) => {
    //pass in the value of the button pressed into new varialbe
    let btnValue = calcBtn.target.value;

    //display that value on the screen
    //if equal to 0 replace with digit
    if (displayOperand.value === "0") {
      displayOperand.value = btnValue;
      //if not equal to zero append number
    } else if (displayOperand.value != "0") {
      let numCombined = (displayOperand.value =
        displayOperand.value + btnValue);

      //console.log(numCombined);
      let numFormatted = getDisplayNumber(numCombined);
      // console.log(numFormatted);

      displayOperand.value = numFormatted;
    }
  });
});

//goal: to take the number variable and break it into commas
//input: number
//output: number broken up into numbers with commas in appropriate places
//if length is greater than 3 every three numbers add a comma

decimalBtn.addEventListener("click", function () {
  if (!displayOperand.value.includes(".")) {
    displayOperand.value = displayOperand.value + ".";
  } else {
    return;
  }
});

allClearBtn.addEventListener("click", function () {
  displayPreviousOperand.value = "";
  displayOperator.value = "";
  displayOperand.value = "0";
});

btnOperatorInput.forEach((btn) => {
  btn.addEventListener("click", (calcBtn) => {
    let btnValue = calcBtn.target.value;

    if (
      displayPreviousOperand.value != "" &&
      displayOperator.value === "" &&
      displayOperand.value != ""
    ) {
      displayOperator.value = btnValue;
      return;
    }

    if (
      displayPreviousOperand.value != "" &&
      displayOperator.value != "" &&
      displayOperand.value != ""
    ) {
      handlingOperator(
        displayPreviousOperand.value,
        displayOperator.value,
        displayOperand.value
      );
      displayOperand.value = "0";
      displayOperator.value = btnValue;
      return;
    }

    if (displayOperand.value != "") {
      displayOperator.value = btnValue;
      displayPreviousOperand.value = displayOperand.value;
      displayOperand.value = "0";
      return;
    } else {
      return;
    }
  });
});

equalBtn.addEventListener("click", function () {
  if (
    displayPreviousOperand.value != "" &&
    displayOperator.value != "" &&
    displayOperand.value != ""
  ) {
    handlingOperator(
      displayPreviousOperand.value,
      displayOperator.value,
      displayOperand.value
    );
    displayOperator.value = "";
    displayOperand.value = "0";
  } else {
    return;
  }
});

//goal: to delete one space at a time when pressed, if 0 return
//input: number in displayOperand.value
//output: number in displayOperand.value -1;

delBtn.addEventListener("click", function () {
  if (displayOperand.value === "0") {
    return;
  } else {
    let deleteNum = displayOperand.value.slice(0, -1);
    let numberFormatted = getDisplayNumber(deleteNum);
    displayOperand.value = numberFormatted;
    return;
  }
});

function handlingOperator(
  previousOperandWithComma,
  operator,
  operandWithComma
) {
  let previousOperand = checkForCommas(previousOperandWithComma);
  let operand = checkForCommas(operandWithComma);

  if (operator === "+") {
    //i don't think you need to pass in .value because already there

    let sum = parseFloat(previousOperand) + parseFloat(operand);
    let number = parseFloat(sum);
    let numberWithComma = getDisplayNumber2(number);
    displayPreviousOperand.value = numberWithComma;
    return;
  }
  if (operator === "-") {
    //i don't think you need to pass in .value because already there
    let sum = parseFloat(previousOperand) - parseFloat(operand);
    let number = parseFloat(sum);
    let numberWithComma = getDisplayNumber2(number);
    displayPreviousOperand.value = numberWithComma;
    return;
  }
  if (operator === "*") {
    //i don't think you need to pass in .value because already there
    let sum = parseFloat(previousOperand) * parseFloat(operand);
    let number = parseFloat(sum);
    let numberWithComma = getDisplayNumber2(number);
    displayPreviousOperand.value = numberWithComma;
    return;
  }
  if (operator === "/") {
    //i don't think you need to pass in .value because already there
    let sum = parseFloat(previousOperand) / parseFloat(operand);
    let number = parseFloat(sum);
    let numberWithComma = getDisplayNumber2(number);
    displayPreviousOperand.value = numberWithComma;
    return;
  }
}

//goal: take in number from displayOperand.value and every number that is over three integers add a comma
//input: displayOperand.value + btnCalc.value
//output:  the collective number displayed on displayOperand.value with a comma inserted after every number with
//three intergers behind it

// function numberWithCommas(num) {
//   let numWithComma = parseFloat(num).toLocaleString("us-En");
//   displayOperand.value = numWithComma;
//   console.log(numWithComma);
// }

function getDisplayNumber(numberWithComma) {
  let number = checkForCommas(numberWithComma);
  const stringNumber = number.toString();
  const integerDigits = parseFloat(stringNumber.split(".")[0]);
  const decimalDigits = stringNumber.split(".")[1];
  let integerDisplay;
  if (isNaN(integerDigits)) {
    integerDisplay = "";
  } else {
    integerDisplay = integerDigits.toLocaleString("en", {
      maximumFractionDigits: 0,
    });
  }
  if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`;
  } else {
    return integerDisplay;
  }
}

function getDisplayNumber2(number) {
  const stringNumber = number.toString();
  const integerDigits = parseFloat(stringNumber.split(".")[0]);
  const decimalDigits = stringNumber.split(".")[1];
  let integerDisplay;
  if (isNaN(integerDigits)) {
    integerDisplay = "";
  } else {
    integerDisplay = integerDigits.toLocaleString("en", {
      maximumFractionDigits: 0,
    });
  }
  if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`;
  } else {
    return integerDisplay;
  }
}

//goal: check to see if there are commas in the number
//if there are commas in the number, break the number into an array, take out the commas, and join
//back together
//input: number(withcommas)
//output: number without commas

function checkForCommas(number) {
  let numWithOutComma = number.replaceAll(/,/g, "");
  console.log(numWithOutComma);
  return numWithOutComma;
}

updateDisplay();
