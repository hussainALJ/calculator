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

function write(a){ 
    screen.textContent = `${a}`;
}