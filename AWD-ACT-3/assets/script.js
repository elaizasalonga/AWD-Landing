let display = document.getElementById('display');

function appendToDisplay(value) {
    if (value === '<') {
        display.value = display.value.slice(0, -1);
    } else {
        display.value += value;
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}
