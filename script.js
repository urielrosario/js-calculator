const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
const num0 = document.querySelector(".num0");

const allBtns = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num0];

const calcDisplay = document.querySelector("input");

const btnAdd = document.querySelector(".btn.add");
const btnSub = document.querySelector(".btn.sub");
const btnDiv = document.querySelector(".btn.div");
const btnMlt = document.querySelector(".btn.mlt");
const btnEq = document.querySelector(".equalbtn");
const btnAC = document.querySelector(".btn.ac");
const btnDot = document.querySelector(".btn.dot");

let value1 = "";
let value2 = "";
let result = "";
let operator = "";

allBtns.forEach((button) => {
  button.addEventListener("click", () => {
    allBtn = button.dataset.num;
    calcDisplay.value += allBtn;
  });
});

function calculate() {
  switch (operator) {
    case "add":
      result = Number(value1) + Number(value2);
      calcDisplay.value = result;
      break;

    case "sub":
      result = Number(value1) + Number(value2);
      calcDisplay.value = result;
      break;

    case "div":
      result = Number(value1) + Number(value2);
      calcDisplay.value = result;
      break;

    case "mlt":
      result = Number(value1) + Number(value2);
      calcDisplay.value = result;
      break;
  }
}
