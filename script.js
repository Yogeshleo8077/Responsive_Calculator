function appendTodisplay(value) {
    document.getElementById("display").value += value;
    saveData()
}

function clearDisplay(value) {
    document.getElementById("display").value = "";
    saveData()
}

function deleteLastValue() {
    document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);
    saveData()
}

function calculate() {
    document.getElementById("display").value = eval(display.value);
    saveData()
}

function saveData() {
    let currentValue = document.getElementById("display").value;
    localStorage.setItem("data", currentValue);
}

function showData() {
    let storedValue =  localStorage.getItem("data");
    if(storedValue) {
        document.getElementById("display").value = storedValue;
    }
}

showData();