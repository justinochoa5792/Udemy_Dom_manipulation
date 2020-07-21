const button = document.querySelector("button");

button.addEventListener("mouseover", function () {
  console.log("Moused Over");
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  button.style.left = `${width}px`;
  button.style.top = `${height}px`;
});

button.addEventListener("click", function () {
  button.innerText = "You Got Me!";
  document.body.style.backgroundColor = "green";
});
