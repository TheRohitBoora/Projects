let ip = document.querySelector("#display");
let isError = false; 

function appendToDisplay(input) {
    if (isError) {
        ip.value = '';
        isError = false;
    }
    ip.value += input;
}

function iback() {
    if (isError) {
        ip.value = '';
        isError = false;
    } else {
        ip.value = ip.value.slice(0, -1);
    }
}

function iclear() {
    ip.value = '';
    isError = false;
}

function calculate() {
    try {
        ip.value = eval(ip.value);
    } catch (error) {
        ip.value = 'Error';
        isError = true;
    }
}
