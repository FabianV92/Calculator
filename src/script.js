"use strict";

// Selecting all the elements needed
const acEl = document.querySelector(".ac");
const plusOrMinusEl = document.querySelector(".minusOrPlus");
const moduloEl = document.querySelector(".modulo");
const divideEl = document.querySelector(".divide");
const sevenEl = document.querySelector(".seven");
const eightEl = document.querySelector(".eight");
const nineEl = document.querySelector(".nine");
const multiplyEl = document.querySelector(".multiply");
const fourEl = document.querySelector(".four");
const fiveEl = document.querySelector(".five");
const sixEl = document.querySelector(".six");
const minusEl = document.querySelector(".minus");
const oneEl = document.querySelector(".one");
const twoEl = document.querySelector(".two");
const threeEl = document.querySelector(".three");
const plusEl = document.querySelector(".addition");
const zeroEl = document.querySelector(".zero");
const dotEl = document.querySelector(".dot");
const equalEl = document.querySelector(".equals");
let inputField = document.querySelector(".inputBox");
const resultScreen = document.querySelector(".resultDisplay")

// String all the user input saved in
let inputContainer = "";

// Function to transfer current user input to the input container
const transferToContainer = function () {
    inputField.value = inputContainer;
}

// Function to add user input into the input container
sevenEl.addEventListener("click", function () {
    inputContainer += sevenEl.textContent;
    transferToContainer();
});

// Event listener for the 0 - 9 numbers
eightEl.addEventListener("click", function () {
    inputContainer += eightEl.textContent;
    transferToContainer();
});
nineEl.addEventListener("click", function () {
    inputContainer += nineEl.textContent;
    transferToContainer();
});
fourEl.addEventListener("click", function () {
    inputContainer += fourEl.textContent;
    transferToContainer();
});
fiveEl.addEventListener("click", function () {
    inputContainer += fiveEl.textContent;
    transferToContainer();
});
sixEl.addEventListener("click", function () {
    inputContainer += sixEl.textContent;
    transferToContainer();
});
oneEl.addEventListener("click", function () {
    inputContainer += oneEl.textContent;
    transferToContainer();
});
twoEl.addEventListener("click", function () {
    inputContainer += twoEl.textContent;
    transferToContainer();
});
threeEl.addEventListener("click", function () {
    inputContainer += threeEl.textContent;
    transferToContainer();
});
zeroEl.addEventListener("click", function () {
    inputContainer += zeroEl.textContent;
    transferToContainer();
});
dotEl.addEventListener("click", function () {
    inputContainer += dotEl.textContent;
    transferToContainer();
});

// Clearing display method
acEl.addEventListener("click", function () {
    resultScreen.textContent = "";
    inputContainer = "";
    transferToContainer();
})

// Arithmetic operators methods
plusOrMinusEl.addEventListener("click", function () {
    inputContainer += "-";
    transferToContainer();
})
moduloEl.addEventListener("click", function () {
    inputContainer += " % ";
    transferToContainer();
})
divideEl.addEventListener("click", function () {
    inputContainer += " / ";
    transferToContainer();
})
multiplyEl.addEventListener("click", function () {
    inputContainer += " * ";
    transferToContainer();
})
minusEl.addEventListener("click", function () {
    inputContainer += " - ";
    transferToContainer();
})
plusEl.addEventListener("click", function () {
    inputContainer += " + ";
    transferToContainer();
})
equalEl.addEventListener("click", function () {
    resultScreen.textContent = eval(inputField.value);
})

// When "enter" pressed calculates and displays the result to the screen
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter")
        resultScreen.textContent = eval(inputField.value);
})
