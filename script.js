var display = document.getElementById("display");

function toDisplay(values) {
  display.value += values;
}
function deleteOne() {
  display.value = display.value.slice(0, -1);
}
function clearAll() {
  display.value = "";
}

function calculater() {
  display.value = eval(display.value);
}
