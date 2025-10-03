//Selectors
const screen = document.querySelector("#screen");

const clear = document.querySelector("#clear");
const plusMinus = document.querySelector(`#pm`);
const percent = document.querySelector("#percent");

const division = document.querySelector("#divide");
const multiplication = document.querySelector("#multiply");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const equal = document.querySelector("#equal");

const oneBtn = document.querySelector("#one");
const twoBtn = document.querySelector("#two");
const threeBtn = document.querySelector("#three");
const fourBtn = document.querySelector("#four");
const fiveBtn = document.querySelector("#five");
const sixBtn = document.querySelector("#six");
const sevenBtn = document.querySelector("#seven");
const eightBtn = document.querySelector("#eight");
const nineBtn = document.querySelector("#nine");
const zeroBtn = document.querySelector("#zero");
const point = document.querySelector("#decimal");

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (e) => {
    let button = e.target;
    switch (button) {
        case zeroBtn:
            inputNum(0);
            break;
        case oneBtn:
            inputNum(1);
            break;
        case twoBtn:
            inputNum(2);
            break;
        case threeBtn:
            inputNum(3);
            break;
        case fourBtn:
            inputNum(4);
            break;
        case fiveBtn:
            inputNum(5);
            break;
        case sixBtn:
            inputNum(6);
            break;
        case sevenBtn:
            inputNum(7);
            break;
        case eightBtn:
            inputNum(8);
            break;
        case nineBtn:
            inputNum(9);
            break;
        case plus:
            break;
        case minus:
            break;
        case multiplication:
            break;
        case division:
            break;
        case equal:
            break;
        case plusMinus:
            break;
        case percent:
            break;
        case clear:
            break;
    }
})

let equation = [null, null, null];

function inputNum(num) {
    let onScreenNum = 0;
    if (equation[1] === null) {
        (equation[0] === null) ? 
        equation[0] = num: equation[0] = Number(equation[0] += `${num}`);

        onScreenNum = equation[0];
    }else {
        (equation[2] === null) ?
        equation[2] = num: equation[2] = Number(equation[2] += `${num}`);

        onScreenNum = equation[2];
    }

    screen.textContent = onScreenNum;
}