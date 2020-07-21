const btn = document.querySelector("#clicker");

btn.onclick = function () {
  console.log("You Clicked Me!");
};

btn.addEventListener("click", function () {
  alert("Clicked");
});
btn.addEventListener("mouseover", function () {
  btn.innerText = "Stop Touching Me!";
});
btn.addEventListener("mouseout", function () {
  btn.innerText = "Click Me";
});
