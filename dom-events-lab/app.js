let num1 = null;
let num2 = null;
let op = null;

let numbers = document.querySelectorAll(".number");
let opBtns = document.querySelectorAll(".operator");

let tot_screen = document.querySelector(".display");
tot_screen.innerText = "0";

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const divd = (a, b) => {
  if (b !== 0) {
    return a / b;
  } else {
    return null;
  }
};
const pow = (a, b) => Math.pow(a, b);

const calc = () => {
  let total;
  switch (op) {
    case "+":
      total = add(num1, num2);
      break;
    case "-":
      total = sub(num1, num2);
      break;
    case "*":
      total = mult(num1, num2);
      break;
    case "/":
      total = divd(num1, num2);
      if (total === null) {        
        window.location.href = "catMeme.html";
        return;
      }
      break;
    case "^":
      total = pow(num1, num2);
      break;
    default:
      total = tot_screen.innerText;
  }
  tot_screen.innerText = total;
};

const handleNumberClick = (event) => {
  if (num1 !== null && op !== null) {
    num2 = Number(event.target.innerText);
    tot_screen.innerText = num2;
  } else {
    num1 = Number(event.target.innerText);
    tot_screen.innerText = num1;
  }
};

const handleOperatorClick = (event) => {
  if (num1 !== null) {
    op = event.target.innerText;
  }
};

const handleEqualBtnClick = () => {
  if (num1 !== null && num2 !== null) {
    calc();
  }
};

const clear = () => {
  tot_screen.innerText = "0";
  num1 = null;
  num2 = null;
  op = null;
};

const equalsBtn = document.querySelector(".equals");
const cBtn = document.querySelector(".clear");

equalsBtn.addEventListener("click", handleEqualBtnClick);
cBtn.addEventListener("click", clear);

numbers.forEach((number) => {
  number.addEventListener("click", handleNumberClick);
});

opBtns.forEach((opButton) => {
  opButton.addEventListener("click", handleOperatorClick);
});