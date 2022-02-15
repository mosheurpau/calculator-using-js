function calculate() {
    document.calc.output.value = eval(document.calc.output.value);
    console.log(document.calc.output.value);
}

function erase() {
    document.calc.output.value = '';
}
function backSpace() {
    const back = document.calc.output.value;
    document.calc.output.value = back.slice(0, -1);
}
// variable num contains the actual value of the button pressed 
function entries(num) {
    document.calc.output.value += num;
    console.log(num);
}