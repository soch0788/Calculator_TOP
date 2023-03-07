function operate(type) {
    let ans = 0
    let num1 = new Number(document.querySelector('#number1').textContent)
    let num2 = new Number(document.querySelector('#number2').textContent)
    // let type = this.id
    // console.log(num1, num2)
   
    if(type == "add"){
        ans = (add(num1, num2))
    }
    else if(type == "subtract"){
        ans = (subtract(num1, num2))
    }
    else if(type == "multiply"){
        ans = (multiply(num1, num2))
    }
    else if(type == "divide"){
        ans = (divide(num1, num2))
    }
    let temp = document.querySelector('#answer').textContent
    let temp2 = [...temp]  
    document.querySelector('#answer').textContent = ans
    document.querySelector('#number1').textContent = ans
    document.querySelector("#last-eq").textContent = temp2 + " " + functSymbol + " " + document.querySelector('#number2').textContent + " ="
}

function numberEnter() {
    if (clearSTS){
    document.querySelector('#number1').textContent += this.textContent
    document.querySelector('#answer').textContent += this.textContent
        
}
    else if(newNum == false){
        document.querySelector('#number2').textContent += this.textContent
        document.querySelector('#answer').textContent = document.querySelector('#number2').textContent
    }
    else {
        if(funcType == "add")
        {
            functSymbol = "+"
        } 
        else if(funcType == "subtract")
        {
            functSymbol = "-"
        } 
        else if (funcType == "multiply")
        {
            functSymbol = "*"
        }
        else if(funcType == "divide")
        {
            functSymbol = "/"
        } 
        document.querySelector('#last-eq').textContent = document.querySelector('#answer').textContent + " " + functSymbol
        newNum = false
        document.querySelector('#number2').textContent = this.textContent
        document.querySelector('#answer').textContent = document.querySelector('#number2').textContent
    }
}

function clearBTN() {
    document.querySelectorAll('.display').forEach(a => a.textContent = "")

    clearSTS = true
    newNum = true
}

function type() {
    if(newNum == false){
        operate(funcType)
    }
    funcType = this.id
    clearSTS = false
    newNum = true
}


function add(num1, num2) {
    return (num1+num2)
}

function subtract(num1, num2) {
    return (num1-num2)
}

function multiply(num1, num2){
    return (num1*num2)
}

function divide(num1, num2) {
    return (Math.floor(num1 / num2))
}
let functSymbol = "+"
let newNum = true
let clearSTS = true
const funcButtons = document.querySelectorAll(".function")
funcButtons.forEach(btn => btn.addEventListener('click', type))
let funcType = "add"
const eqlButton = document.querySelector("#equals")
eqlButton.addEventListener('click', function () {operate(funcType)})
const clrButton = document.querySelector("#clear")
clrButton.addEventListener('click', clearBTN)


const numberBTN = document.querySelectorAll(".number")
numberBTN.forEach(btn => btn.addEventListener('click', numberEnter))
// const addButton = document.querySelector('#add')
// addButton.addEventListener('click', operate)

// const subButton = document.querySelector('#subtract')
// const multButton = document.querySelector('#multiply')
// const divaddButton = document.querySelector('#divide')