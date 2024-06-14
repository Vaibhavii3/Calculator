# Calculator

A simple web-based calculator with theme selection feature, built with HTML, CSS, and JavaScript.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Percentage calculation.
- Supports decimal numbers.
- Clear and backspace functionalities.
- Theme selection: Default, Dark, and Colorful.

## Usage

1. Clone or download the repository.
2. Open `index.html` in your web browser.
3. Use the theme selector dropdown to switch between themes.

### Calculator Interface

- **Display**: Shows the input and results.
- **Buttons**:
  - Numbers: `0-9`, `00`, `.` 
  - Operators: `+`, `-`, `*`, `/`, `%`
  - Functional: `C` (clear), `←` (backspace), `=` (calculate)

### Theme Selection

The calculator supports multiple themes to customize its appearance:

- **Default**: Clean and simple design.
- **Dark**: Dark-themed interface for reduced eye strain in low-light environments.
- **Colorful**: Vibrant colors for a visually engaging experience.

## Code Overview

### HTML

The main structure of the calculator is defined in `index.html`. It includes the display and buttons for the calculator, along with a dropdown for theme selection.

### CSS

Three CSS files control the appearance based on the selected theme:
- `style.css`: Default styles.
- `dark.css`: Dark-themed styles.
- `colorful.css`: Colorful-themed styles.

### JavaScript

The functionality for the calculator and theme switching is provided by `app.js`. It includes functions for handling button clicks, performing calculations, updating the display, and changing themes dynamically.


