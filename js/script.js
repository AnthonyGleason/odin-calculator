let add = function (firstNum,secondNum){
    let total = 0;
    total=firstNum+secondNum;
    return total;
}
let subtract = function (firstNum,secondNum){
    let total = 0;
    total=firstNum-secondNum;
    return total;
}
let multiply = function (firstNum,secondNum){
    let total = 0;
    total=firstNum*secondNum;
    return total;
}
let divide = function (firstNum,secondNum){
    let total = 0;
    total=firstNum/secondNum;
    return total;
}

let operate = function (operator,firstNum,secondNum){
    switch (operator){
        case '+':
            total=add(firstNum,secondNum);
            break;
        case '-':
            total=subtract(firstNum,secondNum);
            break;
        case '*':
            total=multiply(firstNum,secondNum);
            break;
        case '/':
            total=divide(firstNum,secondNum);
            break;
    }
    return total;
}
let displayInput = function (userInput){
    const calcDisplay=document.querySelector('.screen');
    if (userInput.textContent=='clr')
    {
        calcDisplay.textContent="";
    }else{
        calcDisplay.textContent+=userInput.textContent;
    }
}

const buttonContainer = document.querySelector('.button-container');
const allButtons=buttonContainer.querySelectorAll('button');
allButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        displayInput(button);
    })
})
//send total as argument firstNum