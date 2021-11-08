const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]')
const btnAllClear = document.getElementById('allclear');
btnAllClear.addEventListener('click', ()=>{
    currentOperand.innerText = '';
    previousOperand.innerText ='';
});


const numberBtns = document.querySelectorAll('[data-number]')
numberBtns.forEach(btn=>btn.addEventListener('click', () => {
    if(btn.innertext === '.' && currentOperand.innerText.includes('.')){return}else{currentOperand.innerText += btn.textContent}
}));

const btnDelete = document.getElementById('delete');
btnDelete.addEventListener('click', () => {
    currentOperand.innerText = currentOperand.innerText.slice(0,-1)
});

const operationBtns = document.querySelectorAll('[data-operator]')
operationBtns.forEach(btn=>btn.addEventListener('click',()=>{
    previousOperand.innerText = currentOperand.innerText;
    currentOperand.innerText =''
}))