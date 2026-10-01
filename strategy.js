// TODO: select the required elements
const canvas = document.getElementById("canvas");
const coloringButtonsSection = document.getElementById("colorBtnsSection");

// TODO:
// make the divs and add the class "pixel" to them
const pixel = document.createElement("div");
pixel.classList = "pixel";
pixel.style.backgroundColor = "black";

// TODO:
// add divs in a for loop FEATURE: add n in the loop and canvas for nxn
let n = 16;
for (let i = 0; i < n; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < n; j++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener("click", (ev) => {
      ev.target.style.backgroundColor = colorToDraw;
    });
    row.appendChild(pixel);
  }
  canvas.appendChild(row);
}

// TODO: make a function that takes a color and generates a button in a specified section
// but the default section is the colorBtnsSection
function handleButtonClick(button) {
  button.addEventListener("click", (ev) => {
    colorToDraw = ev.target.dataset.color;
    console.log(colorToDraw);
  });
}
let colorToDraw = "";
function createColorButton(color, section = coloringButtonsSection) {
  let button = document.createElement("button");
  button.style.backgroundColor = color;
  button.dataset.color = color;
  button.classList.add("colorBtn");
  handleButtonClick(button);
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
// 1. Make an undo button
// 2. Make a rainbow button
// 3. Make an rgb selector
// 4. Make a remove/clear canvas button
// 5. Make nxn grid buttons
