const labelEl = document.getElementById("label-el")
const inputEl = document.getElementById("input-el")
const submitEl = document.getElementById("submit-el")
const correctEl = document.getElementById("correct-el")
const incorrectEl = document.getElementById("incorrect-el")
const buttonEl1 = document.getElementById("button-el1")
const buttonEl = document.getElementById("button-el")

let num1 = null;
let num2 = null;
let operator = null;
const operators = ["+", "-", "x", "/"]

function getRandomNumber() {
    let x = Math.floor( Math.random() * 100)
    return x
}

function newNumbers() {
    num1 = getRandomNumber()
    num2 = getRandomNumber()
    operator = randomOperator()
    while(operator == "/" && num1%num2 !== 0){
        num1 = getRandomNumber()
        num2 = getRandomNumber()
    }
    labelEl.textContent = num1 + " " +operator + " " + num2
}

function randomOperator() {
    let randIndex = Math.floor( Math.random() * 4)
    return operators[randIndex]
}

newNumbers();

buttonEl.addEventListener("click", function() {
    incorrectEl.style = "display: none"
})
buttonEl1.addEventListener("click", function() {
    correctEl.style = "display: none"
})


submitEl.addEventListener("click", function() { 
    if(inputEl.value == "")
    {
        incorrectEl.style = "display: flex;"
    }
    else {
        switch(operator){
        case "+": 
        if(inputEl.value == num1+num2) {
            correctEl.style = "display: flex;"
        }
        else {
            incorrectEl.style = "display: flex;"
        }
        break

        case "-": 
        if(inputEl.value == num1-num2) {
            correctEl.style = "display: flex;"
        }
        else {
            incorrectEl.style = "display: flex;"
        }
        break

        case "x": 
        if(inputEl.value == num1*num2) {
            correctEl.style = "display: flex;"
        }
        else {
            incorrectEl.style = "display: flex;"
        }
        break

        case "/": 
            if(inputEl.value == num1/num2) {
                correctEl.style = "display: flex;"
            }
            else {
                incorrectEl.style = "display: flex;"
            }
        break
    }
}
    
    newNumbers();
    inputEl.value = "";
})

