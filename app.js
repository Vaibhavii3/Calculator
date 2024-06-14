// let display = document.querySelector(".display");

// function appendToDisplay(inputValue) {
//     display.value += inputValue;
// }

// function backSpace() {
//     display.value = display.value.slice(0, -1);
// }

// function clearDisplay() {
//     display.value = "";
// }

// function calculate() {
//     display.value = eval(display.value);
// }

let display = document.querySelector(".display");

function appendToDisplay(inputValue) {
    display.value += inputValue;
}

function backSpace() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}

function changeTheme(theme) {
    document.getElementById('theme-link').href = theme;
}
