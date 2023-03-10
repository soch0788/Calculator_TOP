function add() {
    let addAns = (num1+num2)
    
    return (num1+num2)
}

function subtract() {
    return (num1-num2)
}

function multiply(){
    return (Math.floor((num1 * num2)*100)/100)
}

function divide() {
    return (Math.floor((num1 / num2)*100)/100)
}

function clearBTN() {
    num1 = new Number
    num2 = new Number
    ansText.textContent = ""
    newNum = true
    oldA.textContent = ""
    firstEq = true
}

function partialClear() {
    ansText.textContent = ""
    newNum = true
}

function operate()
{
    if(this.id != "equals"){
        funcType = this.id
        switch(funcType){
            case "add":
                functSymbol = "+"
                break;
            case "subtract":
                functSymbol = "-"
                break;
            case "divide":
                functSymbol = "/"
                break;
            case "multiply":
                functSymbol = "*"
                break;
            }
        if(firstEq){
            firstEq = false
            num1 = Number(ansText.textContent)
            oldA.textContent = num1 + " " + functSymbol
            ansText.textContent = ""
        }
        else{
            num2 = num1
            num1 = Number(ansText.textContent)
            temp = num1
            num1 = num2
            num2 = temp
            switch(oldFunc){
                case "add":
                    ans = add();
                    break;
                case "subtract":
                    ans = subtract();
                    break;
                case "divide":
                    ans = divide();
                    break;
                case "multiply":
                    ans = multiply();
                    break;
                }
            if(ans > 999999999){
                ansText.textContent = "Too large"
                oldA.textContent = ""
                firstEq = true
            }
            else {
            ansText.textContent = ans
            num3 = num1
            num1 = ans
            oldA.textContent = num1 + " " + functSymbol
            }
            }
        oldFunc = funcType
        newNum = true
        }
    else {
        firstEq = true
        newNum = true
        num2 = num1
        num1 = Number(ansText.textContent)
        temp = num1
            num1 = num2
            num2 = temp
        switch(funcType){
            case "add":
                ans = add();
                break;
            case "subtract":
                ans = subtract();
                break;;
            case "divide":
                ans = divide();
                break;
            case "multiply":
                ans = multiply();
                break;
            }
            if(ans > 999999999){
                ansText.textContent = "Too large"
                oldA.textContent = ""
            }
            else {
            ansText.textContent = ans
            num3 = num1
            num1 = ans
            oldA.textContent = num3 + " " + functSymbol + " " + num2 + " = "
            }
    }
}

function enterNum() {
    
    if(newNum) {
        newNum = false
        ansText.textContent = this.textContent
    }
    else if(ansText.textContent.length > 8){
        ansText.textContent = ansText.textContent.slice(1,) + this.textContent
    }
    else {
        ansText.textContent += this.textContent
    }
}

function plusMinus() {
    ansText.textContent *= -1
}

function decimal() {
    if(newNum) {
        newNum = false
        ansText.textContent = "0."
    }
    else if(!ansText.textContent.includes(".")) {
        ansText.textContent += this.textContent
    }
}

let firstEq = true
let newNum = true
let funcType = ""
let num1 = new Number
let num2 = new Number
let ans
let oldFunc
let functSymbol


let ansText = document.querySelector('#answer')
let oldA = document.querySelector('#last-eq')

let plusminusBTN = document.querySelector('#plusminus')
plusminusBTN.addEventListener("click", plusMinus)

let decimalBTN = document.querySelector('#decimal')
decimalBTN.addEventListener("click", decimal)

let partialClearBTN = document.querySelector("#partclear")
partialClearBTN.addEventListener("click", partialClear)

let funcBTN = document.querySelectorAll('.function')
funcBTN.forEach(a => a.addEventListener("click", operate))

let clearBT = document.querySelector('#clear')
clearBT.addEventListener("click", clearBTN)

let numBTN = document.querySelectorAll(".number")
numBTN.forEach(a => a.addEventListener("click", enterNum))

