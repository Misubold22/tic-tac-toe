# Library Management App

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

---

## Introduction
**Tic Tac Toe Game** is a web-based implementation of the classic Tic Tac Toe game. It allows two players to take turns placing their marks on a 3x3 grid. The project is designed to reinforce JavaScript concepts such as Factory Functions, the Module Pattern, Closures, and Immediately Invoked Function Expressions (IIFE). The game dynamically updates the board and announces the winner or a tie.

---

## Features
- **Two-Player Mode**: Allows two players to compete by entering their names.
- **Dynamic Game Board**: The game board updates in real-time using JavaScript DOM manipulation.
- **Turn-Based Gameplay**: Players take turns placing their symbols ('X' and 'O').
- **Win Detection**: The game automatically checks for a winning combination after each move.
- **Tie Condition**: If all cells are filled without a winner, the game announces a tie.
- **Restart Button**: Players can restart the game at any time.
- **Custom Player Names**: Users can enter their names via a popup form.
- **Modular Code Structure**: Implements Factory Functions and the Module Pattern for cleaner, reusable code.
---

## Technologies Used
- **HTML5**: Provides the structure of the game.
- **CSS3**: Styles the board and UI elements for an enhanced user experience.
- **JavaScript(ES6+)**: Handles game logic, event listeners, and DOM updates.
---

## Usage
To set up and use the Library Management App, follow these steps:

```bash
git clone https://github.com/Misubold22/tic-tac-toe.git
cd tic-tac-toe
Open index.html in a browser to start playing.

Usage:
Click the Start button to begin the game.
Players take turns clicking on a cell to place their symbol ('X' or 'O').
The game will display the winner or announce a tie if no moves are left.
Click Restart to start a new game.
Click Change Name to update player names via the popup form.

File Structure
The file structure of the project is as follows:


tic-tac-toe/
├── fonts
├── style.css
├── index.html
├── script.js
└── README.md


index.html: The main HTML file containing the game structure.
style.css: Styles the game board, buttons, and overall layout.
script.js: Implements the game logic using JavaScript.
fonts/: Contains custom font files used in the UI.
README.md: Documentation for the project.

## Credits

Icons & Styling: Inspired by various open-source UI designs.
Fonts: Custom fonts used for styling.

## License
License
This project is licensed under the MIT License. See the LICENSE file for details.

