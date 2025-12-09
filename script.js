let firstNumber = "";
let secondNumber = "";
let operator = "";
let input = document.querySelector(".input")

function display(){
    let operators = ["+","-","x","/"]
    let equation = document.querySelector(".equation")
    
    if (operators.includes(this.textContent)){ // User clicked operator
        if (!operator){
            operator = this.textContent;
        }
    }

    else if (this.textContent === "AC"){
        firstNumber = ""
        secondNumber = ""
        operator = ""
        input.textContent = ""
    }

    else if (this.textContent === "DEL"){
        // console.log(equation.textContent)
        // console.log(Boolean(equation.textContent))
        // console.log(equation.textContent === "")

        console.log(firstNumber, secondNumber, operator)

        if (!operator && firstNumber){
            firstNumber = firstNumber.slice(0, -1)
        }
        else if (operator && !secondNumber){
            operator = operator.slice(0, -1)
        }
        else if (firstNumber && operator && secondNumber) {
            secondNumber = secondNumber.slice(0, -1)
        }
        else {
            input.textContent = ""
        }
    }

    else { // User clicked number
        if (!operator){
            firstNumber += this.textContent
        }
        else {
            secondNumber += this.textContent
        }
    }
    equation.textContent = `${firstNumber}${operator}${secondNumber}`
}

function operate(firstNumber, secondNumber, operator){
    firstNumber = Number(firstNumber)
    secondNumber = Number(secondNumber)
    switch (operator) {
        case "+":
            return firstNumber + secondNumber
        case "-":
            return firstNumber - secondNumber
        case "x":
            return firstNumber * secondNumber
        case "/":
            return firstNumber / secondNumber
    }
}

function add(...numbers){
    return numbers.reduce((total, currentNumber) =>{
        return total += currentNumber
    },0)
}

function subtract(...numbers){
    return numbers.reduce((total, currentNumber) =>{
        return total -= currentNumber
    },0)
    
}

function multiply(...numbers){
    return numbers.reduce((total, currentNumber) =>{
        return total *= currentNumber
    },0)
}

function divide(...numbers){
    return numbers.reduce((total, currentNumber) =>{
        return total /= currentNumber
    },0)
}

let digits = document.querySelectorAll(".digits")

digits.forEach(function(digit){
    digit.addEventListener("click", display)
})

let op = document.querySelectorAll(".operator")

op.forEach(function(operator){
    operator.addEventListener("click", display)
})

let allclear = document.querySelector(".allclear")
allclear.addEventListener("click", display)

let del = document.querySelector(".delete")
del.addEventListener("click", display)

let result = document.querySelector(".result")
result.addEventListener("click", () => {
    let input = document.querySelector(".input")
    if (firstNumber && secondNumber && operator){
        answer = operate(firstNumber, secondNumber, operator)
        input.textContent = answer
    }
})