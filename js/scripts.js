const buttons = document.querySelectorAll('.button');
const calcScreen = document.querySelector(".calculations");
const calcHistory = document.querySelector(".calculations-history");
calcScreen.textContent = "";
let userInputNum = "";
let historyCalculations = "";
let previousNumber = 0;
let result = 0;
let signUsed = "";
let actionBtnFlag = true;
let equalPressedFlag = false;






initButtons();
//initialize the buttons giving them functions
function initButtons(){
    
    const arrClass = document.querySelectorAll(".buttons");
        for (let i of arrClass) {
            i.addEventListener("click", (e) => {
                
                if (e.target.classList.contains("button")) {
                    numberBtn(e.target);
                    console.log("button found" + e.target.textContent);
                }else if(e.target.classList.contains("action")){
                    console.log("action found"+e.target.textContent);
                    operate(e.target);
                }
            })
    }
}


//show the buttons pressed on the screen,and get the input into variable
function numberBtn(btnPressedId){
    if(userInputNum.length === 17 || equalPressedFlag === true){

    }else{
    userInputNum+=btnPressedId.textContent;
    calcScreen.textContent = userInputNum;
    actionBtnFlag =true;
    }
}


//give porupuse to the action buttons
function operate(btnActionId){
    
    
    let sign = btnActionId.textContent;
    switch(sign){
        case "C":
                deleteLastChar();
            break;
        case"AC":
                resetCalculator();
            break;
        case "=":
                equals();
            break;
        case"+":
            if(actionBtnFlag)
                add();
            break;
        case "-":
            if(actionBtnFlag)
                subtract();
            break;
        case "x":
            if(actionBtnFlag)
                multiply();
            break;
        case "/":
            if(actionBtnFlag)
                divide();
            break;
        case"+/-":
                numberStateChange();
            break;

        case ".":
                makeNumberDeci();
            break;
        
    }
    
}

function add(){
    
    if(equalPressedFlag === true){
        calcHistory.textContent = `${previousNumber} +`;
        equalPressedFlag = false;
        signUsed = "+";
        actionBtnFlag = false;
        calcScreen.textContent = "";
        console.log("4 input" + userInputNum);
        return;
    }

    if(signUsed !== "+" && signUsed !== ""){
        finishLastAction("+");
        actionBtnFlag = false;
        console.log("3");
        return;
        
    }
    
    if(signUsed === "+"){
        if(userInputNum == "")
            return;

        calcHistory.textContent += ` ${userInputNum} +`;
        result = Number(previousNumber) + Number(userInputNum);
        previousNumber = result;
        calcScreen.textContent = result;
        userInputNum = "";
        actionBtnFlag = false;
        console.log("2");
        return;
    }

    previousNumber = Number(userInputNum);
    calcHistory.textContent += ` ${previousNumber} +`;
    signUsed ="+";
    userInputNum = "";
    actionBtnFlag = false;
    console.log("1");
    
    
    

}

function subtract(){
    

    if(equalPressedFlag === true){
        calcHistory.textContent = `${previousNumber} -`;
        equalPressedFlag = false;
        signUsed = "-";
        actionBtnFlag = false;
        calcScreen.textContent = "";
        return;
    }

    if(signUsed !== "-" && signUsed !== ""){
        finishLastAction("-");
        actionBtnFlag = false;
        return;
    }

    if(signUsed === "-"){
        if(userInputNum == "")
            return;

        calcHistory.textContent += ` ${userInputNum} -`;
        result = Number(previousNumber) - Number(userInputNum);
        previousNumber = result;
        calcScreen.textContent = result;
        userInputNum = "";
        actionBtnFlag = false;
        
        return;
    }

    previousNumber = Number(userInputNum);
    calcHistory.textContent += ` ${previousNumber} -`;
    signUsed ="-";
    userInputNum = "";
    actionBtnFlag = false;
    
}

function multiply(){
    

    if(equalPressedFlag === true){
        calcHistory.textContent = `${previousNumber} x`;
        equalPressedFlag = false;
        signUsed = "x";
        actionBtnFlag = false;
        calcScreen.textContent = "";
        return;
    }

    if(signUsed !== "x" && signUsed !== ""){
        finishLastAction("x");
        actionBtnFlag = false;
        return;
    }

    if(signUsed === "x"){
        if(userInputNum == "")
            return;
        calcHistory.textContent += ` ${userInputNum} x`;
        result = Number(previousNumber) * Number(userInputNum);
        previousNumber = result;
        calcScreen.textContent = result;
        userInputNum = "";
        actionBtnFlag = false;
        return;
    }

    previousNumber = Number(userInputNum);
    calcHistory.textContent += ` ${previousNumber} x`;
    signUsed ="x";
    userInputNum = "";
    actionBtnFlag = false;
}
function divide(){
    

    if(equalPressedFlag === true){
        calcHistory.textContent = `${previousNumber} /`;
        equalPressedFlag = false;
        signUsed = "/";
        actionBtnFlag = false;
        calcScreen.textContent = "";
        return;
    }

    if(signUsed !== "-" && signUsed !== ""){
        if(userInputNum === "0"){
            calcHistory.textContent ="no can do";
            alert("division by 0 is not allowed");
            resetCalculator();
            return;
        }
        finishLastAction("/");
        actionBtnFlag = false;
        return;
    }

    if(signUsed === "/"){
        if(userInputNum == "")
            return;
        calcHistory.textContent += ` ${userInputNum} /`;
        result = Number(previousNumber) / Number(userInputNum);
        previousNumber = result;
        calcScreen.textContent = result;
        userInputNum = "";
        actionBtnFlag = false;
        
        return;
    }

    previousNumber = Number(userInputNum);
    calcHistory.textContent += ` ${previousNumber} /`;
    signUsed ="/";
    userInputNum = "";
    actionBtnFlag = false;
    
}

function equals(){
    let regexP = /[- + x /  . ]/g;
    if(calcHistory.textContent.slice(-1).match(/[=]/g) || (calcHistory.textContent.slice(-1).match(regexP) && userInputNum ===""))
    return;

    if(userInputNum ===  "0" && signUsed === "/"){
        calcHistory.textContent ="no can do";
        alert("division by 0 is not allowed");
        resetCalculator();
        return;
        
    }

    finishLastAction("=");
    equalPressedFlag = true;
    actionBtnFlag =true;
    
}

//finish the last action made by the user and show the result
function finishLastAction(actionUsedRightNow){
    if(userInputNum === "0"){
        calcHistory.textContent ="no can do";
        alert("division by 0 is not allowed");
        resetCalculator();
        return;
    }
    switch(signUsed){
        case"+":
            result = Number(previousNumber) + Number(userInputNum);
            break;

        case "-":
            result = Number(previousNumber) - Number(userInputNum);
            break;

        case "x":
            result = Number(previousNumber) * Number(userInputNum);
            break;
        case "/":
            result = Number(previousNumber) / Number(userInputNum);
            break;
    }


    calcScreen.textContent = result;
    calcHistory.textContent+=` ${userInputNum} ${actionUsedRightNow}`;

   // if(actionUsedRightNow !== "=")
    signUsed = actionUsedRightNow;

    previousNumber = result;     
    userInputNum = "";

}

//change the state of a number from 100 to -100
function numberStateChange(){
   
    if(userInputNum !== ""){
        if(userInputNum.indexOf("-") === -1){
            userInputNum = `-${userInputNum}`;
        }else
        userInputNum = calcScreen.textContent.slice(1,userInputNum.length);

        calcScreen.textContent = userInputNum;
    }

    if(userInputNum === "" && previousNumber !== 0){
        if(previousNumber > 0){
            calcScreen.textContent = `-${previousNumber}`;
            previousNumber *= -1;
        }else{
        calcScreen.textContent = calcScreen.textContent.slice(1,calcScreen.textContent.length); 
        previousNumber *= -1;
        }
    }
    
}

function makeNumberDeci(){

    if(userInputNum !== "" && userInputNum.indexOf(".") === -1){
        userInputNum = `${userInputNum}.`;
        calcScreen.textContent = userInputNum;
    }

}
function deleteLastChar(){

    if(userInputNum !== ""){
    userInputNum = calcScreen.textContent.slice(0,-1);
    calcScreen.textContent = userInputNum;
    }


}
function resetCalculator(){
    userInputNum = "";
    historyCalculations = "";
    signUsed = "";
    previousNumber = 0;
    result = 0;
    calcScreen.textContent = "";
    calcHistory.textContent = "";
    equalPressedFlag = false;
}


