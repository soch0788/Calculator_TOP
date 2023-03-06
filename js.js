function operate() {
    let ans = 0
    let num1 = new Number(document.querySelector('#num1').value)
    let num2 = new Number(document.querySelector('#num2').value)
    let type = this.id
   
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
    console.log(ans)
    document.querySelector('#answer').textContent = ans
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

const funcButtons = document.querySelectorAll(".function")
funcButtons.forEach(btn => btn.addEventListener('click', operate))


// const addButton = document.querySelector('#add')
// addButton.addEventListener('click', operate)

// const subButton = document.querySelector('#subtract')
// const multButton = document.querySelector('#multiply')
// const divaddButton = document.querySelector('#divide')