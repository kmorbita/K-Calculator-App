let display = "";
let mdas = ["*", "/", "+", "-"];

function buttonFunc(value) {
    let displayHTML = document.getElementById("display");
    if (value == "clear") {
        display = "";
        displayHTML.innerHTML = "";
    } else if (value == "backspace") {
        display = display.slice(0, -1);
    } else if (value == "+" || value == "-" || value == "/" || value == "*") {
        let lastChar = getLastChar(display);
        if (mdas.includes(lastChar)) {
            display = display.slice(0, -1);
            display += value;
        } else {
            display += value;
        }
    } else {
        display += value;
    }
    displayHTML.innerHTML = display;
}

function getLastChar(data) {
    return data.charAt(data.length - 1);
}