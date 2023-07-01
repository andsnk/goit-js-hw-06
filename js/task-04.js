const counterValue = document.querySelector("#value");

const decrementValue = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementValue = document.querySelector(
  'button[data-action="increment"]'
);

let currentValue = 0;

decrementValue.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

incrementValue.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});
