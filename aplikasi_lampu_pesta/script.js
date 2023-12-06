let BtnRandom = document.getElementById("btnRandom");
let BtnRed = document.getElementById("btnRed");
let BtnBlue = document.getElementById("btnBlue");
let BtnGreen = document.getElementById("btnGreen");

function BtnRandomHandler() {
  let colors = ["crimson", "darkgreen", "darkblue"];
  let number = Math.floor(Math.random() * colors.length);
  let Body = document.querySelector("body");
  Body.style.backgroundColor = colors[number];
  console.log(colors[number]);
}

function BtnColorHandler(color) {
  let Body = document.querySelector("body");
  Body.style.backgroundColor = color;
  console.log(color);
}

BtnRandom.addEventListener("click", BtnRandomHandler);
BtnRed.addEventListener("click", () => BtnColorHandler("crimson"));
BtnBlue.addEventListener("click", () => BtnColorHandler("darkblue"));
BtnGreen.addEventListener("click", () => BtnColorHandler("darkgreen"));
