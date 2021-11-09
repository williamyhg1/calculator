const previousOperand = document.querySelector("[data-previous-operand]");
const currentOperand = document.querySelector("[data-current-operand]");

const allClearBtn = document.getElementById("allclear");
allClearBtn.addEventListener("click", () => {
  window.location.reload();
});

const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", () => {
  currentOperand.textContent = currentOperand.textContent.slice(0, -1);
});

const numberBtns = document.querySelectorAll("[data-number]");
numberBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (btn.textContent === "." && currentOperand.textContent.includes(".")) {
      return;
    } else {
      currentOperand.textContent += btn.textContent;
    }
  })
);

function operation() {
  let operator = previousOperand.textContent.slice(-1);
  if (operator === "+") {
    previousOperand.textContent =
      Math.round(
        (parseFloat(previousOperand.textContent) +
          parseFloat(currentOperand.textContent)) *
          10 ** 9
      ) /
      10 ** 9;
  } else if (operator === "-") {
    previousOperand.textContent =
      Math.round(
        (parseFloat(previousOperand.textContent) -
          parseFloat(currentOperand.textContent)) *
          10 ** 9
      ) /
      10 ** 9;
  } else if (operator === "*") {
    previousOperand.textContent =
      Math.round(
        parseFloat(previousOperand.textContent) *
          parseFloat(currentOperand.textContent) *
          10 ** 9
      ) /
      10 ** 9;
  } else if (operator === "/") {
    previousOperand.textContent =
      Math.round(
        (parseFloat(previousOperand.textContent) /
          parseFloat(currentOperand.textContent)) *
          10 ** 9
      ) /
      10 ** 9;
  }
  currentOperand.textContent = "";
}

const operationBtns = document.querySelectorAll("[data-operator]");

function addOperationListeners() {
  operationBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      if (
        previousOperand.textContent.includes("+") ||
        previousOperand.textContent.slice(-1) === "-" ||
        previousOperand.textContent.includes("*") ||
        previousOperand.textContent.includes("/")
      ) {
        if (!currentOperand.textContent) {
          btn.removeEventListener("click");
        }
      }
      if (currentOperand.textContent && previousOperand.textContent) {
        operation();
      }

      if (!currentOperand.textContent && previousOperand.textContent) {
        previousOperand.textContent += btn.textContent;
      }
      if (currentOperand.textContent && !previousOperand.textContent) {
        previousOperand.textContent = currentOperand.textContent;
        previousOperand.textContent += btn.textContent;
        currentOperand.textContent = "";
      }
    })
  );
}

addOperationListeners();

const equalsBtn = document.querySelector("[data-equals]");
equalsBtn.addEventListener("click", operation);
