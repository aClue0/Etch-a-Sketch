# Etch-a-Sketch

A browser-based Etch-a-Sketch project built with **HTML, CSS, and JavaScript** as part of [The Odin Project](https://www.theodinproject.com/) Foundations course.

## Live Demo

**[Try the live version](https://aclue0.github.io/Etch-a-Sketch/)**

## Features

* Dynamically generated drawing grid using JavaScript.
* Starts with a **16×16** grid.
* Switch between:

  * 16×16
  * 32×32
  * 64×64
* Existing grids are removed and regenerated when changing the grid size.
* Hover over the grid to create a drawing trail.
* Choose from multiple drawing colors:

  * Red
  * Orange
  * Yellow
  * Green
  * Blue
  * Purple
  * Pink
  * Brown
  * Black
  * White
  * Gray
* Clicking a pixel applies the currently selected color.
* Uses flexbox and DOM manipulation to create and size the grid dynamically.

## How It Works

The grid is generated dynamically using DOM rather than manually adding all the divs

A nested loop is used to create the grid:

1. The outer loop creates each row.
2. The inner loop creates the pixels inside each row.
3. Event listeners are attached to the pixels.
4. The completed rows are appended to the canvas.

When a different grid size is selected, the existing grid is removed and a new grid is generated with the selected dimensions.

The color buttons are also generated dynamically from a JavaScript array. Each button stores its associated color using a `data-color` attribute.

## Project Structure

```text
Etch-a-Sketch/
├── index.html
├── style.css
├── strategy.js
└── README.md
```

## What I Practiced

This project helped me practice:

* Creating and manipulating DOM elements with JavaScript
* Using nested loops to generate a dynamic grid
* Adding and handling DOM events
* Working with `data-*` attributes and `dataset`
* Managing application state
* Removing and regenerating DOM elements
* Creating reusable JavaScript functions
* Using CSS Flexbox for dynamic layouts

## Future Improvements

The current version focuses on the core functionality of the project. Possible future improvements include:

* Clear/reset canvas button
* Rainbow/random color mode
* Custom RGB color picker
* Undo functionality
* Arbitrary grid sizes
* Progressive darkening
* Improved drawing behavior
* More polished responsive UI

## Credits

Built by **Clue** as part of [The Odin Project Foundations](https://www.theodinproject.com/).

[Live Demo](https://aclue0.github.io/Etch-a-Sketch/)
