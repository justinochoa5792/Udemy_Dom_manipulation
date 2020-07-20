// const inputs = document.getElementsByTagName("input");
// console.log(inputs);

// const header = document.getElementsByClassName("special");
// console.log(header);

// const veggies = document.querySelector("body section ul li.special");
// console.log(veggies);

// const form = document.querySelector("form");
// form.innerHTML = "<b> I am a bold tag </b>";

const input = document.querySelectorAll("input");

const anchor = document.querySelector("a");
anchor.href = "https://www.google.com/";

const range = document.querySelector('input[type="range"]');
range.setAttribute("max", "150");

// const allLi = document.querySelectorAll("li");
// const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
// for (let i = 0; i < allLi.length; i++) {
//   allLi[i].innerText = "We Are The Champions!";
// }

// styling
// if you use inline style you can update like this
//  set it to a variable then set it to the color you want
//  p.style.backgroundColor="black"

// allLi.forEach((li, i) => {
//   const color = colors[i];
//   li.style.color = color;
// });

const list = document.querySelector("#todos .todo");
// adds style
list.classList.add("done");
// toggles between adding and removing it
list.classList.toggle("done");

const newH2 = document.createElement("h2");
newH2.innerText = "I like animals!";
newH2.classList.add("special");
const section = document.querySelector("section");
section.appendChild(newH2);

const newLink = document.createElement("a");
newLink.innerText = "Mr.Bubz Video! Click Me!";
newLink.href = "https://www.youtube.com/watch?v=QQNL83fhWJU";

const paragraph = document.querySelector("p");
paragraph.appendChild(newLink);

const parentUL = document.querySelector("ul");
const newLI = document.createElement("li");
newLI.innerText = "I am a new Li!";
parentUL.appendChild(newLI);
const firstLI = document.querySelector("li.todo");
parentUL.insertBefore(newLI, firstLI);
const iTag = document.createElement("i");
iTag.innerText = "I am Italics";
parentUL.insertAdjacentElement("beforeend", iTag);

const ul = document.querySelector("section ul");
const removeMe = ul.querySelector(".special");
const deleted = ul.removeChild(removeMe);

const h1 = document.querySelector("h1");
h1.remove();
