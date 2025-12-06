let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, secondNumber, operator){
    
}

function add(...numbers){
    return numbers.reduce((total, currentNumber) =>{
        return total += currentNumber
    },0)
}

function subtract(...numbers){
    return numbers.reduce((total, currentNumber) =>{
        return total -= currentNumber
    })
    
}

function multiply(...numbers){
    return numbers.reduce((total, currentNumber) =>{
        return total *= currentNumber
    })
}

function divide(...numbers){
    return numbers.reduce((total, currentNumber) =>{
        return total /= currentNumber
    })
}