

function operate(a, b, operator){
    if(operator == "+"){
        return a + b;
    }
    if(operator == "-"){
        return a - b;
    }
    if(operator == "x"){
        return a*b;
    }
    if(operator == "/"){
        return a / b;
    }
    if(operator == "%"){
        return a % b;
    }
}

let digit1 = "";
let digit2 = "";
let op = "";
let result = 0;
let r = 0;

let digits = document.querySelectorAll(".number");
let display = document.querySelector(".screen");
let operators = document.querySelectorAll(".operator");
let clear = document.querySelector(".C");
let equale = document.querySelector(".equale");
let audio = document.querySelector("audio");

function populate(){
    
}

digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        audio.play();
        if(r == 1){
            display.textContent = "";
            r = 0;
            digit1 = "";
        }
        if(op == ""){ 
            display.textContent += digit.textContent;
            digit1 += digit.textContent;
            console.log("digit1", digit1);
        }
        else if (digit2 == ""){
            display.textContent = digit.textContent;
            digit2 += digit.textContent;
            console.log("digit2", digit2);
        }
        else{
            display.textContent += digit.textContent;
            digit2 += digit.textContent;
            console.log("digit2", digit2);
        }

    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        r = 0;
        audio.play();
        if(digit1 != "" && digit2 == ""){
            op = operator.textContent;
            console.log(op);
        }
        if(digit2 != ""){
            console.log("digit 1: ", digit1);
            result = operate(Number(digit1), Number(digit2), op);
            digit1 = result;
            display.textContent = result;
            op = operator.textContent;
            digit2 = "";
        }
    })
})

clear.addEventListener("click", () => {
    audio.play();
    digit1 = "";
    digit2 = "";
    op = "";
    display.textContent = "";
})

equale.addEventListener("click", () => {
    r = 1;
    audio.play();
    result = operate(Number(digit1), Number(digit2), op);
    digit1 = result;
    display.textContent = result;
    op = "";
    digit2 = "";

})