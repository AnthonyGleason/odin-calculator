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
    }else if(userInput=="Error divide by zero!"){
        calcDisplay.textContent=userInput;
    }else if(userInput=="Error multiple decimals!"){
        calcDisplay.textContent=userInput;
    }else if (userInput.textContent=='clr'){
        calcDisplay.textContent="";
    }else if (userInput=="remove"){
        calcDisplay.textContent=calcDisplay.textContent.substring(0,calcDisplay.textContent.length-1);
    }else{s
        calcDisplay.textContent+=userInput.textContent;
    }
    return calcDisplay.textContent;
}
let multipleDecimals = function (num){
    let counter=0;
    num=num.toString();
    for (let i=0;i<=num.length;i++){
        if (num.charAt(i)=='.'){
            counter++;
            if (counter==2){
                return true;
            }
        }
    }
    console.log(num);
    return false;
}
let performCalculations = function (displayValue){
    let displayValueModified=displayValue
    let displayValueArray=[];
    let total=0;
    //seperate operators for array split
    displayValueModified=displayValueModified.replaceAll("+",",+,")
    displayValueModified=displayValueModified.replaceAll("-",",-,")
    displayValueModified=displayValueModified.replaceAll("*",",*,")
    displayValueModified=displayValueModified.replaceAll("/",",/,")
    displayValueArray=displayValueModified.split(',');
    for (let i=0;i<=displayValueArray.length;i++){
        if (displayValueArray[i]=='+'||displayValueArray[i]=='-'||displayValueArray[i]=='*'||displayValueArray[i]=='/'){
            if (displayValueArray[i]=='/' && displayValue[i-1]==0 || displayValue[i+1]==0){
                total="Error divide by zero!";
                break;
            } else if (multipleDecimals(displayValueArray[i-1]) || multipleDecimals(displayValueArray[i+1])){
                total="Error multiple decimals!";
                break;
            }
            total=operate(displayValueArray[i],parseFloat(displayValueArray[i-1]),parseFloat(displayValueArray[i+1]));
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
        }else if (button.textContent=="Backspace"){
            displayValue=displayInput("remove");
        }else{
            displayValue=displayInput(button);
        }
    })
})