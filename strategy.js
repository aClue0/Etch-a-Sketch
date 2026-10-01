// TODO: select the required elements
const canvas = document.querySelector("#canvas");
const coloringButtonsSection = document.getElementById("colorBtnsSection");
const coloringButtons = Array.from(document.querySelectorAll(".colorBtn"));
// TODO:
// make the divs and add the class "pixel" to them
const pixel = document.createElement("div");
pixel.classList = "pixel";
pixel.style.backgroundColor = "black";

// TODO:
// add divs in a for loop in the canvas for nxn

// TODO:
// make the logic to choose a color
let colorToDraw = "";

// TODO: make a function that takes a color and generates a button in a specified section
// but the default section is the colorBtnsSection
function createColorButton(color, section = coloringButtonsSection) {
  let button = document.createElement("button");
  button.style.backgroundColor = color;
  button.classList.add("colorBtn");
  button.dataset.color = color;
  coloringButtonsSection.appendChild(button);
}
// TODO:
// make a for loop to generate colorbtns

const colors = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Purple",
  "Pink",
  "Brown",
  "Black",
  "White",
  "Gray",
];
for (const color of colors) {
  createColorButton(color);
}
// TODO:
// give each color btn an event listener that listens for
// a click and assigns color to the global variable
// for each colorbtn give them a color and assign it to the global variable
