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


let equation = [null, {operator: null, selected: null}, null];


function add() {
    return equation[0] + equation[2]

}

function subtract() {
    return equation[0] - equation[2];
}

function multiply() {
    return equation[0] * equation[2];
}

function divide() {
    return equation[0] / equation[2];
}


function result() {
    if (equation[2] !== null) {
        equation[0] = equation[1].operator();
        equation[2] = null;
        screen.textContent = equation[0];
    }
}

function inputNum(num) {
        let onScreenNum = 0;
        if (equation[1].operator === null) {
            if (equation[0] === null) {
                equation[0] = num
            }else if(String(equation[0]).length < 5) {
                equation[0] = Number(equation[0] += `${num}`);
            }
            onScreenNum = equation[0];
        }else {
            if (equation[2] === null) {
                equation[2] = num
            }else if (String(equation[2]).length < 5) {
                equation[2] = Number(equation[2] += `${num}`);
            }
            onScreenNum = equation[2];
        }

        screen.textContent = onScreenNum;
}

//style
function select(target) {
    if (equation[1].selected === null) {
        equation[1].selected = target;
    }
    equation[1].selected.style.backgroundColor = "#161418";
    target.style.backgroundColor = "#361418"
    equation[1].selected = target
}


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
            if (equation[0] !== null && equation[2] === null){
                equation[1].operator = add;
                select(plus);
            }else if (equation[2] !== null) {
                result();
                equation[1].operator = add;
                select(plus);
            }
            break;
        case minus:
            if (equation[0] !== null && equation[2] === null){
                equation[1].operator = subtract;
                select(minus);
            }else if (equation[2] !== null) {
                result();
                equation[1].operator = subtract;
                select(minus);
            }
            break;
        case multiplication:
            if (equation[0] !== null && equation[2] === null){
                equation[1].operator = multiply;
                select(multiplication);
            }else if (equation[2] !== null) {
                result();
                equation[1].operator = multiply;
                select(multiplication);
            }
            break;
        case division:
            if (equation[0] !== null && equation[2] === null){
                equation[1].operator = divide;
                select(division);
            }else if (equation[2] !== null) {
                result();
                equation[1].operator = divide;
                select(division);
            }
            break;
        case equal:
            result();
            break;
        case plusMinus:
            break;
        case percent:
            break;
        case clear:
            break;
    }
})


