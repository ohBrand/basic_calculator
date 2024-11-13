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

clearEl.addEventListener('click', (e) => {
    screen.textContent = ''
    operatorEl.forEach((element) => element.style.backgroundColor = '#03b1fc')
})

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
             e.target.style.backgroundColor = 'white'
            break;
        case operatorEl[1]:
             e.target.style.backgroundColor = 'white'
            break;
        case operatorEl[2]:
             e.target.style.backgroundColor = 'white'
            break;
        case operatorEl[3]:
             e.target.style.backgroundColor = 'white'
            break;
    }

    if(e.target.matches('.operator-el')) {
        e.target.style.backgroundColor = 'white'
        operator = e.target.textContent
        numOne = parseInt(screen.textContent)
        screen.textContent =  ' ' 
    }
    
})


answerEl.addEventListener('click', () => {
   operatorEl.forEach((element) => element.style.backgroundColor = '#03b1fc')
   numTwo = parseInt(screen.textContent)

   if(operator === '+') {
    screen.textContent = operate('+', numOne, numTwo)
   } else if (operator === '-') {
    screen.textContent = operate('-', numOne, numTwo)
   } else if (operator === '*') {
    screen.textContent = operate('*', numOne, numTwo)
   } else if (operator === '/') {
    screen.textContent = operate('/', numOne, numTwo)
   }

})