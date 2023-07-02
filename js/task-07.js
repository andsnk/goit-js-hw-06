const inputFontSize = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

inputFontSize.addEventListener("input", changeSize);
function changeSize() {
  textElement.style.fontSize = inputFontSize.value + "px";
}
changeSize();
