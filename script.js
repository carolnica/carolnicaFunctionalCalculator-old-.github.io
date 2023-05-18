let displayDiv = document.getElementById('display');
let addBtn = document.getElementById('plus');
let minusBtn = document.getElementById('minus');
let multiplyBtn = document.getElementById('multiply');
let divideBtn = document.getElementById('divide');
let equalBtn = document.getElementById('equals');
let resultDiv = document.getElementById('result');
let secondResDiv = document.getElementById('upperres');
let firstResDiv = document.getElementById('lowerres');

function numberBtn(number) {
    switch(number) {
        case zero:
            secondResDiv.textContent += 0;
            break;
        case one:
            secondResDiv.textContent += 1;
            break;
        case two:
            secondResDiv.textContent += 2;
            break;
        case three: 
            secondResDiv.textContent += 3;
            break;
        case four: 
            secondResDiv.textContent += 4;
            break;
        case five: 
            secondResDiv.textContent += 5;
            break;
        case six: 
            secondResDiv.textContent += 6;
            break;
        case seven: 
            secondResDiv.textContent += 7;
            break;
        case eight: 
            secondResDiv.textContent += 8;
            break;
        case nine: 
            secondResDiv.textContent += 9;
            break;
    }
}

let temp = 0;
let value;
let array = []

addBtn.onclick = () => {
    let value = parseInt(secondResDiv.textContent)
    if(!isNaN(value)){
        temp = temp + value
        secondResDiv.textContent = '+'
    }
}

minusBtn.onclick = () => {

    let value = parseInt(secondResDiv.textContent)
    if(!isNaN(value)){
        temp = temp - value
        secondResDiv.textContent = '-'

    }
}

multiplyBtn.onclick = () => {
    let value = parseInt(secondResDiv.textContent)
    if (temp == 0) {
        temp = 1
    }
    if(!isNaN(value)){
        temp *= value
        secondResDiv.textContent = '*' 
    }
}

divideBtn.onclick = () => {
    let value = parseInt(secondResDiv.textContent)
    if (temp == 0) {
        temp = 1
    }
    if(!isNaN(value)){
        temp = temp / value
        secondResDiv.textContent = '/'
    }

}

equalBtn.onclick = () => {
    secondResDiv.textContent = ''
    firstResDiv.innerText = temp
}

