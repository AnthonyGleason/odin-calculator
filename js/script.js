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
    if (typeof userInput=="number"){
        calcDisplay.textContent="";
        calcDisplay.textContent+=(userInput);
    }else if (userInput.textContent=='clr'){
        calcDisplay.textContent="";
    }else{
        calcDisplay.textContent+=userInput.textContent;
    }
    return calcDisplay.textContent;
}
let performCalculations = function (displayValue){
    let displayValueModified=displayValue
    let displayValueArray=[];
    let total =0;
    let numa=0;
    let numb=0;
    //seperate operators for array split
    displayValueModified=displayValueModified.replaceAll("+",",+,")
    displayValueModified=displayValueModified.replaceAll("-",",-,")
    displayValueModified=displayValueModified.replaceAll("*",",*,")
    displayValueModified=displayValueModified.replaceAll("/",",/,")
    displayValueArray=displayValueModified.split(',');
    for (let i=0;i<=displayValueArray.length;i++){
        if (displayValueArray[i]=='+'||displayValueArray[i]=='-'||displayValueArray[i]=='*'||displayValueArray[i]=='/'){
            total=operate(displayValueArray[i],parseInt(displayValueArray[i-1]),parseInt(displayValueArray[i+1]));
            displayValueArray.splice(i+2,0,total);
            displayValueArray.splice(i-1,3);
            i--;
        }
    }
    displayInput(total);
}
const buttonContainer = document.querySelector('.button-container');
const allButtons=buttonContainer.querySelectorAll('button');
let displayValue="";
allButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        if (button.textContent=="="){
            performCalculations(displayValue);
        }else{
            displayValue=displayInput(button);
        }
    })
})
//send total as argument firstNum