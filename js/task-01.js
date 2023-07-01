const list = document.querySelector("#categories");

const itemsList = list.querySelectorAll(".item");
console.log("Number of categories:", itemsList.length);

itemsList.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryItem = item.querySelectorAll("li").length;

  console.log("\nCategory:", categoryTitle);
  console.log("Elements", categoryItem);
});
