//Selector for the Screen
const screen = document.querySelector("#screen");

//Selectors for Actions
const clear = document.querySelector("#clear");
const plusMinus = document.querySelector(`#pm`);
const percent = document.querySelector("#percent");

//Selectors for Operations
const division = document.querySelector("#divide");
const multiplication = document.querySelector("#multiply");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal");

//Selectors for Numbers
const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const zeroBtn = document.querySelector("#zero")

function write(a){ 
    if (Number.isInteger(a)) {
        if (operator === null) {
            if (firstNum === null) {
                firstNum = a;
            }else {
                firstNum = Number(firstNum += `${a}`)
            }
            num = firstNum;
        }else {
            if (secondNum === null) {
                secondNum = a;
            }else {
                secondNum = Number(secondNum += `${a}`)
            }
            num = secondNum;
        }
        screen.textContent = num;
    }else {
        
    }
}

let firstNum = null;
let operator = null;
let secondNum = null;

oneBtn.addEventListener("click", () => {
    write(1);
})

twoBtn.addEventListener("click", () => {
    write(2);
})

threeBtn.addEventListener("click", () => {
    write(3);
})

fourBtn.addEventListener("click", () => {
    write(4);
})

fiveBtn.addEventListener("click", () => {
    write(5);
})

sixBtn.addEventListener("click", () => {
    write(6);
})

sevenBtn.addEventListener("click", () => {
    write(7);
})

eightBtn.addEventListener("click", () => {
    write(8);
})

nineBtn.addEventListener("click", () => {
    write(9);
})

zeroBtn.addEventListener("click", () => {
    write(0);
})