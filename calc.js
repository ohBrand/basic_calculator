const calculator = document.querySelector('#calculator-el')
const screen = document.querySelector('#display-screen')
const numberEl = document.querySelectorAll('.number-el')
const operatorEl = document.querySelectorAll('.operator-el')
const answerEl = document.querySelector('.result-el')
const clearEl = document.querySelector('.clear-el')
let numOne;
let numTwo;
let operation;
let operator;



function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}
function operate(operator, a, b) {
    if(operator === '+') {
        return add(a, b)
    } else if (operator === '-') {
        return subtract(a, b)
    } else if (operator === '*') {
        return multiply(a, b)
    } else if (operator === '/') {
        return divide(a, b)
    }
}

clearEl.addEventListener('click', () => {
    screen.textContent = ''
})

function displayOperator(e) {
    switch(e.target) {
        case operatorEl[0]:
            screen.textContent += ' ' + operatorEl[0].textContent + ' '
            break;
        case operatorEl[1]:
            screen.textContent += ' ' + operatorEl[1].textContent + ' '
            break;
        case operatorEl[2]:
            screen.textContent += ' ' + operatorEl[2].textContent + ' '
            break;
        case operatorEl[3]:
            screen.textContent += ' ' + operatorEl[3].textContent + ' '
            break;
    }
}

function displayNumber(e) {
    switch(e.target) {
        case numberEl[0]:
            screen.textContent += numberEl[0].textContent
            break;
        case numberEl[1]:
            screen.textContent += numberEl[1].textContent
            break;
        case numberEl[2]:
            screen.textContent += numberEl[2].textContent
            break;
        case numberEl[3]:
            screen.textContent += numberEl[3].textContent
            break;
        case numberEl[4]:
            screen.textContent += numberEl[4].textContent
            break;
        case numberEl[5]:
            screen.textContent += numberEl[5].textContent
            break;
        case numberEl[6]:
            screen.textContent += numberEl[6].textContent
            break;
        case numberEl[7]:
            screen.textContent += numberEl[7].textContent
            break;
        case numberEl[8]:
            screen.textContent += numberEl[8].textContent
            break;
        case numberEl[9]:
            screen.textContent += numberEl[9].textContent
            break;
    }

}


calculator.addEventListener('click', displayNumber)
calculator.addEventListener('click', (e) => {

    switch(e.target) {
        case operatorEl[0]:
            screen.textContent += ' ' + operatorEl[0].textContent + ' '
            break;
        case operatorEl[1]:
            screen.textContent += ' ' + operatorEl[1].textContent + ' '
            break;
        case operatorEl[2]:
            screen.textContent += ' ' + operatorEl[2].textContent + ' '
            break;
        case operatorEl[3]:
            screen.textContent += ' ' + operatorEl[3].textContent + ' '
            break;
    }

    if(e.target.matches('.operator-el')) {
        numOne = parseInt(screen.textContent)
        screen.textContent = e.target.textContent + ' '
        console.log(numOne)
    }
})


answerEl.addEventListener('click', () => {
   operator = screen.textContent.slice(0,1)
   console.log(operator)
   numTwo = parseInt(screen.textContent.slice(2))
   console.log(numTwo)

   if(operator === '+') {
    screen.textContent = operate('+', numOne, numTwo)
   } else if (operatorEl === '-') {
    screen.textContent = operate('-', numOne, numTwo)
   } else if (operatorEl === '*') {
    screen.textContent = operate('*', numOne, numTwo)
   } else if (operator === '/') {
    screen.textContent = operate('/', numOne, numTwo)
   }

})