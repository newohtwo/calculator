const buttons = document.querySelectorAll('.button');
const calcScreen = document.querySelector(".calculations");
const calcHistory = document.querySelector(".calculations-history");
calcScreen.textContent = "";
<<<<<<< HEAD
let userNumbers = "";
let historyNumber = ""


initButtons();

=======
let userNumber = "";
let historyNumbers = "";
let previous = 0;
let result = 0;
let signUsed = "";
let actionBtnFlag = true;
let equalPressed = false;






initButtons();
//initialize the buttons giving them functions
>>>>>>> 7425082 (added + - = logic function)
function initButtons(){
    
    const arrClass = document.querySelectorAll(".buttons");
        for (let i of arrClass) {
            i.addEventListener("click", (e) => {
<<<<<<< HEAD
                if (e.target.classList.contains("button")) {
                    console.log(calcScreen.length);
                    console.log("button found" + e.target.textContent);
                }else if(e.target.classList.contains("action")){
                    console.log("action found"+e.target.textContent);
=======
                
                if (e.target.classList.contains("button")) {
                    numberBtn(e.target);
                    console.log("button found" + e.target.textContent);
                }else if(e.target.classList.contains("action")){
                    console.log("action found"+e.target.textContent);
                    operate(e.target);
>>>>>>> 7425082 (added + - = logic function)
                }
            })
    }
}
<<<<<<< HEAD
=======


//show the buttons pressed on the screen
function numberBtn(btnPressedId){
    if(userNumber.length === 17 || equalPressed === true){

    }else{
    userNumber+=btnPressedId.textContent;
    calcScreen.textContent = userNumber;
    actionBtnFlag =true;
    }
}


//give porupuse to the action buttons
function operate(btnActionId){
    //calcHistory.textContent += `${userNumbers} ${btnActionId.textContent}`;
    
    let sign = btnActionId.textContent;
    switch(sign){
        case "C":
            
            userNumber = calcScreen.textContent.slice(0,-1);
            calcScreen.textContent = userNumber;
            break;

        case"AC":
            userNumber = "";
            historyNumbers = "";
            signUsed = "";
            previous = 0;
            result = 0;
            calcScreen.textContent = "";
            calcHistory.textContent = "";
            equalPressed = false;
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
        
    }
}

function add(){

    if(equalPressed === true){
        calcHistory.textContent = `${previous} +`;
        equalPressed = false;
        signUsed = "+";
        return;
    }

    if(signUsed !== "+" && signUsed !== ""){
        finishLastAction("+");
        console.log("in adding");
        actionBtnFlag = false;
        return;
    }
    
    if(signUsed === "+"){
        calcHistory.textContent += ` ${userNumber} + `;
        result = Number(previous) + Number(userNumber);
        previous = result;
        calcScreen.textContent = result;
        userNumber = "";
        actionBtnFlag = false;
        

        return;
    }

    previous = Number(userNumber);
    calcHistory.textContent += ` ${previous} +`;
    signUsed ="+";
    userNumber = "";
    actionBtnFlag = false;
    
    

}

function subtract(){
    //todo figure out how to switch bettwen + and - without losing track, make ther other action to finish first

    if(equalPressed === true){
        calcHistory.textContent = `${previous} -`;
        equalPressed = false;
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
        calcHistory.textContent += ` ${userNumber} - `;
        result = Number(previous) - Number(userNumber);
        previous = result;
        calcScreen.textContent = result;
        userNumber = "";
        actionBtnFlag = false;
        return;
    }

    previous = Number(userNumber);
    calcHistory.textContent += ` ${previous} -`;
    signUsed ="-";
    userNumber = "";
    actionBtnFlag = false;
}

function equals(){//todo figure out the equals function 
    finishLastAction("=");
    equalPressed = true;
    actionBtnFlag =true;
}



function finishLastAction(actionUsedRightNow){
    
    switch(signUsed){
        case"+":
            result = Number(previous) + Number(userNumber);
            calcScreen.textContent = result;
            calcHistory.textContent+=` ${userNumber} ${actionUsedRightNow}`;

            previous = result;     
            userNumber = "";
            if(actionUsedRightNow !== "=")
            signUsed = actionUsedRightNow;
            break;

        case "-":
            result = Number(previous) - Number(userNumber);
            calcScreen.textContent = result;
            calcHistory.textContent+=` ${userNumber} ${actionUsedRightNow}`;

            previous = result;     
            userNumber = "";
            if(actionUsedRightNow !== "=")
            signUsed = actionUsedRightNow;
            break;
        
    }

}
>>>>>>> 7425082 (added + - = logic function)
