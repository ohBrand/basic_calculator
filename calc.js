const calculator = document.querySelector('#calculator-el')
const screen = document.querySelector('#display-screen')
const numberEl = document.querySelectorAll('.number-el')
const operatorEl = document.querySelectorAll('.operator-el')
const answerEl = document.querySelectorAll('.result-el')
const clearEl = document.querySelector('.clear-el')
let numOne;
let numTwo;
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
    screen.value = ''
})



numberEl[0].addEventListener('click', () => {
    screen.value += numberEl[0].textContent
})
numberEl[1].addEventListener('click', () => {
    screen.value += numberEl[1].textContent
})
numberEl[2].addEventListener('click', () => {
    screen.value += numberEl[2].textContent
})
numberEl[3].addEventListener('click', () => {
    screen.value += numberEl[3].textContent
})
numberEl[4].addEventListener('click', () => {
    screen.value += numberEl[4].textContent
})
numberEl[5].addEventListener('click', () => {
    screen.value += numberEl[5].textContent
})
numberEl[6].addEventListener('click', () => {
    screen.value += numberEl[6].textContent
})
numberEl[7].addEventListener('click', () => {
    screen.value += numberEl[7].textContent
})
numberEl[8].addEventListener('click', () => {
    screen.value += numberEl[8].textContent
})
numberEl[9].addEventListener('click', () => {
    screen.value += numberEl[9].textContent
})

operatorEl[0].addEventListener('click', () => {
    screen.value += ' ' + operatorEl[0].textContent + ' '
})
operatorEl[1].addEventListener('click', () => {
    screen.value += ' ' + operatorEl[1].textContent + ' '
})
operatorEl[2].addEventListener('click', () => {
    screen.value += ' ' + operatorEl[2].textContent + ' '
})
operatorEl[3].addEventListener('click', () => {
    screen.value += ' ' + operatorEl[3].textContent + ' '
})
