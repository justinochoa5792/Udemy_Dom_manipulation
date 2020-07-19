// const inputs = document.getElementsByTagName("input");
// console.log(inputs);

// const header = document.getElementsByClassName("special");
// console.log(header);

// const veggies = document.querySelector("body section ul li.special");
// console.log(veggies);

const h1 = document.querySelector("h1");
h1.innerHTML += " is Cool!";

// const form = document.querySelector("form");
// form.innerHTML = "<b> I am a bold tag </b>";

const input = document.querySelectorAll("input");

const anchor = document.querySelector("a");
anchor.href = "https://www.google.com/";

const range = document.querySelector('input[type="range"]');
range.setAttribute("max", "150");

const allLi = document.querySelectorAll("li");
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
for (let i = 0; i < allLi.length; i++) {
  allLi[i].innerText = "We Are The Champions!";
}

// styling
// if you use inline style you can update like this
//  set it to a variable then set it to the color you want
//  p.style.backgroundColor="black"

allLi.forEach((li, i) => {
  const color = colors[i];
  li.style.color = color;
});
