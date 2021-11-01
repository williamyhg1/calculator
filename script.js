const display = document.getElementById('display');
const btnclear = document.getElementById('clear');
btnclear.addEventListener('click', ()=>window.location.reload());
// display.textContent = 'Test'
// display.addEventListener('')
// const btnOne = document.getElementById('one') 
// const btnTwo = document.getElementById('two') 
// const btnThree = document.getElementById('three') 
// const btnFour = document.getElementById('four') 
// const btnFive = document.getElementById('five') 
// const btnSix = document.getElementById('six') 
// const btnSeven = document.getElementById('seven') 
// const btnEight = document.getElementById('eight') 
// const btnNine = document.getElementById('nine') 
// const btnZero = document.getElementById('zero') 
// const btnDivide = document.getElementById('divide')
// const btnMultiply = document.getElementById('multiply') 
// const btnMinus = document.getElementById('minus') 
// const btnPlus = document.getElementById('plus') 
// const btnDecimal = document.getElementById('decimal') 



const btns = document.querySelectorAll('.btn')
btns.forEach(btn=>btn.addEventListener('click', toDisplay))

function toDisplay(e){
    const newText = document.createElement('div');
    switch (e.target.id){
        case 'one':
            newText.textContent = 1;
            break;
        case 'two':
            newText.textContent = 2;
            break;
        case 'three':
            newText.textContent = 3;
            break;
        case 'four':
            newText.textContent = 4;
            break;
        case 'five':
            newText.textContent = 5;
            break;
        case 'six':
            newText.textContent = 6;
            break;
        case 'seven':
            newText.textContent = 7;
            break;
        case 'eight':
            newText.textContent = 8;
            break;
        case 'nine':
            newText.textContent = 9;
            break;
        case 'zero':
            newText.textContent = 0;
            break;
        case 'plus':
            newText.textContent = '+';
            break;
        case 'minus':
            newText.textContent = '-';
            break;
        case 'multiply':
            newText.textContent = '*';
            break;
        case 'divide':
            newText.textContent = '/';
            break;
        case 'decimal':
            newText.textContent = '.';
            break;
        case 'equal':
            newText.textContent = '=';
            break;
   }
   display.append(newText)

}