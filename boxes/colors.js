const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet",
];
const changeColor = function () {
  const h1 = document.querySelector("h1");
  h1.style.color = this.style.backgroundColor;
};
const container = document.querySelector("#boxes");

for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);
  box.addEventListener("click", changeColor);
}

const addItem = document.querySelector("#addItem");
const itemsUl = document.querySelector("#items");

addItem.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const newItemText = this.value;
    const newItem = document.createElement("li");
    newItem.innerText = newItemText;
    itemsUl.appendChild(newItem);
    this.value = "";
  }
});
