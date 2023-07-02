const inputText = document.querySelector("#validation-input");
const inputLength = Number(inputText.dataset.length);
console.log(inputLength);
inputText.addEventListener("blur", () => {
  if (inputText.value.trim().length === inputLength) {
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
  } else {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  }
});
