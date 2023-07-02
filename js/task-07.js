const inputFontSize = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

inputFontSize.addEventListener("input", changeSize);
function changeSize() {
  textElement.style.fontSize = inputFontSize.value + "px";
}
changeSize();
// const fontSizeControl = document.querySelector("#font-size-control");
// const textElement = document.querySelector("#text");

// fontSizeControl.addEventListener("input", () => {
//   const fontSize = fontSizeControl.value + "px";
//   textElement.style.fontSize = fontSize;
// });
