const list = document.querySelector("#categories");

const itemsList = list.querySelectorAll(".item");
console.log("Number of categories:", itemsList.length);

itemsList.forEach((item) => {
  const categoryTitle = item.firstElementChild.textContent;
  const categoryItem = item.lastElementChild.children.length;

  console.log("\nCategory:", categoryTitle);
  console.log("Elements", categoryItem);
});
