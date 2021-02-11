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


//show the buttons pressed on the screen
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
            
            userInputNum = calcScreen.textContent.slice(0,-1);
            calcScreen.textContent = userInputNum;
            break;

        case"AC":
            userInputNum = "";
            historyCalculations = "";
            signUsed = "";
            previousNumber = 0;
            result = 0;
            calcScreen.textContent = "";
            calcHistory.textContent = "";
            equalPressedFlag = false;
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
        
    }
}

function add(){

    if(equalPressedFlag === true){
        calcHistory.textContent = `${previousNumber} +`;
        equalPressedFlag = false;
        signUsed = "+";
        console.log("in fourth add");
        return;
    }

    if(signUsed !== "+" && signUsed !== ""){
        finishLastAction("+");
        console.log("in adding");
        actionBtnFlag = false;
        console.log("in third add");
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
        console.log("in second add");

        return;
    }

    previousNumber = Number(userInputNum);
    calcHistory.textContent += ` ${previousNumber} +`;
    signUsed ="+";
    userInputNum = "";
    actionBtnFlag = false;
    console.log("in first add");
    
    

}

function subtract(){
    

    if(equalPressedFlag === true){
        calcHistory.textContent = `${previousNumber} -`;
        equalPressedFlag = false;
        signUsed = "-";
        return;
    }

    if(signUsed !== "-" && signUsed !== ""){
        finishLastAction("-");
        console.log("in subtract");
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



function equals(){
    let regexP = /[- + x /  . ]/g;
    if(calcHistory.textContent.slice(-1).match(/[=]/g) || (calcHistory.textContent.slice(-1).match(regexP) && userInputNum ===""))
    return;

    
    finishLastAction("=");
    equalPressedFlag = true;
    actionBtnFlag =true;
    
}



function finishLastAction(actionUsedRightNow){
    
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
    }

    calcScreen.textContent = result;
    calcHistory.textContent+=` ${userInputNum} ${actionUsedRightNow}`;

   // if(actionUsedRightNow !== "=")
    signUsed = actionUsedRightNow;

    previousNumber = result;     
    userInputNum = "";

}
