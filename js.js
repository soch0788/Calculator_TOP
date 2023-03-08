function add() {
    return (num1+num2)
}

function subtract() {
    return (num1-num2)
}

function multiply(){
    return (num1*num2)
}

function divide() {
    return (Math.floor(num1 / num2))
}

function clearBTN() {
    num1 = new Number
    num2 = new Number
    ansText.textContent = ""
    newNum = true
    oldA.textContent = ""
    firstEq = true
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
            ansText.textContent = ans
            num3 = num1
            num1 = ans
            oldA.textContent = num1 + " " + functSymbol
            }
        oldFunc = funcType
        newNum = true
        }
    else {
        firstEq = true
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
        ansText.textContent = ans
        num3 = num1
        num1 = ans
        oldA.textContent = num3 + " " + functSymbol + " " + num2 + " = "
    }
}

function enterNum() {
    if(newNum) {
        newNum = false
        ansText.textContent = this.textContent
    }
    else {
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

let funcBTN = document.querySelectorAll('.function')
funcBTN.forEach(a => a.addEventListener("click", operate))

let clearBT = document.querySelector('#clear')
clearBT.addEventListener("click", clearBTN)

let numBTN = document.querySelectorAll(".number")
numBTN.forEach(a => a.addEventListener("click", enterNum))

