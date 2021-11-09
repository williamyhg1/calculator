

const previousOperand = document.querySelector("[data-previous-operand]");
const currentOperand = document.querySelector("[data-current-operand]");

const allClearBtn = document.getElementById("allclear");
allClearBtn.addEventListener("click", () => {
  currentOperand.textContent = "";
  previousOperand.textContent = "";
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

const operationBtns = document.querySelectorAll('[data-operator]')

function addOperationListeners(){
operationBtns.forEach((btn)=>btn.addEventListener('click',()=>{
    if(previousOperand.textContent.includes('+')||previousOperand.textContent.includes('-')||previousOperand.textContent.includes('*')||previousOperand.textContent.includes('/')){btn.removeEventListener('click')};

    previousOperand.textContent = currentOperand.textContent
    previousOperand.textContent += btn.textContent;
    currentOperand.textContent = '';
}))
}

addOperationListeners();

const equalsBtn = document.querySelector('[data-equals]')
equalsBtn.addEventListener('click',()=>{
    if(previousOperand.textContent.slice(-1)==='+'){
        previousOperand.textContent = parseFloat(previousOperand.textContent) + parseFloat(currentOperand.textContent)
    } else if (previousOperand.textContent.slice(-1)==='-'){
        previousOperand.textContent = parseFloat(previousOperand.textContent) - parseFloat(currentOperand.textContent)
    } else if (previousOperand.textContent.slice(-1)==='*'){
        previousOperand.textContent = parseFloat(previousOperand.textContent) * parseFloat(currentOperand.textContent)
    } else if (previousOperand.textContent.slice(-1)==='/'){
        previousOperand.textContent = parseFloat(previousOperand.textContent) / parseFloat(currentOperand.textContent)
    }
    currentOperand.textContent = ''
   
})




// const equalsBtn = document.querySelector('[data-equals]')
// equalsBtn.addEventListener('click',()=>{
//     console.log('equals pressed')
//     previousOperand.textContent= operate(previousOperand.textContent[-1],previousOperand.textContent,currentOperand.textContent)
// })

// function compute(){
//     if (currentOperand.textContent === null) return
//   if (currentOperation === '÷' && currentOperationScreen.textContent === '0') {
//     alert("You can't divide by 0!")
//     return
//   }
//   secondOperand = currentOperationScreen.textContent
//   currentOperationScreen.textContent = (
//     operate(currentOperation, firstOperand, secondOperand)
//   )
//   lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
//   currentOperation = null
// }