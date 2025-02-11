

function Gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }

  function getBoard() {
    return board;
  }

  function dropToken(row, column, player) {
    const cell = board[row][column];
    if (cell.getValue() === "") {
      cell.addToken(player);
      return true; // Successfully placed
    }
    return false; // Cell already occupied
  }

  function printBoard() {
    const boardWithCellValues = board.map((row) =>
      row.map((cell) => cell.getValue())
    );
    console.log(boardWithCellValues);
  }

  return { getBoard, dropToken, printBoard };
}

function Cell() {
  let value = "";

  function addToken(player) {
    value = player;
  }

  function getValue() {
    return value;
  }

  return { addToken, getValue };
}

const board = Gameboard();

function GameController(playerOneName = "Player One", playerTwoName = "Player Two") {
  let players = [
    { name: playerOneName, token: "X" },
    { name: playerTwoName, token: "O" },
  ];

  function ChangePlayerName() {
    form = document.querySelector(".form-container");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const P1Input = document.getElementById("playerOneName");
      let NewplayerOneName = P1Input.value;
      const P2Input = document.getElementById("playerTwoName");
      let NewplayerTwoName = P2Input.value;

      for (let object of players) {
        if (object.token === "X") {
          object.name = NewplayerOneName;
        } else if (object.token === "O") {
          object.name = NewplayerTwoName;
        }
      }

      return players;
    });

    console.log(players);
  }

  ChangePlayerName();

  const winMoves = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["02", "11", "20"],
  ];

  let activePlayer = players[0];
  let move = 0;

  function switchPlayerTurn() {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  }

  function getActivePlayer() {
    return activePlayer;
  }

  function printNewRound() {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn.`);
  }

  
  function playerWins(player) {
    const gameBoard = board.getBoard();
    return winMoves.some((threeInARow) =>
      threeInARow.every((cell) => {
        const row = parseInt(cell[0], 10);
        const column = parseInt(cell[1], 10);
        return gameBoard[row][column].getValue() === player;
      })
    );
  }

  function tie() {
    if (move === 9) {
      console.log("It's a tie!");
      return true;
    }
    return false;
  }

  function playRound(row, column) {
    console.log(
      `Dropping ${getActivePlayer().name}'s token into row ${row}, column ${column}`
    );

    // Attempt to drop the token
    const success = board.dropToken(row, column, getActivePlayer().token);

    if (!success) {
      console.log("Invalid move! Cell is already occupied.");
      return false; // Invalid move
    }

    // Check for a win condition
    if (playerWins(getActivePlayer().token)) {
      console.log(`${getActivePlayer().name} wins!`);
      return true; // Game over
    }

    // Increment move count on valid move
    move++;

    // Check for a tie
    if (tie()) {
      console.log("It's a tie!");
      return true; // Game over
    }

    // Switch player and continue
    switchPlayerTurn();
    printNewRound();
    return false; // Game continues
  }
  
  printNewRound();

  return {
    playRound,
    getActivePlayer,
    getBoard: board.getBoard,
    playerWins,
  };
}

function ScreenController() {
  const game = GameController();
  const playerTurnDiv = document.querySelector(".turn");
  const boardDiv = document.querySelector(".board");
  let gameOver = false;

  document.addEventListener("DOMContentLoaded", function () {
    gameOver = true;
    playerTurnDiv.textContent = "";
  });

  function updateScreen() {
    boardDiv.textContent = "";
    const start = document.querySelector(".btn-start");
    start.addEventListener("click", startClick, false);
    const board = game.getBoard();
    const activePlayer = game.getActivePlayer();

    function startClick() {
      gameOver = false;
      playerTurnDiv.textContent = `${activePlayer.name}'s turn...`;
    }

    if (!gameOver) {
      playerTurnDiv.textContent = `${activePlayer.name}'s turn...`;
    }

    board.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");
        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = columnIndex;
        cellButton.textContent = cell.getValue();
        boardDiv.appendChild(cellButton);
      });
    });
  }

  document.querySelector(".board").addEventListener("click", (e) => {
    if (gameOver) return; // Prevent moves after game over

    const selectedRow = parseInt(e.target.dataset.row, 10);
    const selectedColumn = parseInt(e.target.dataset.column, 10);

    if (isNaN(selectedRow) || isNaN(selectedColumn)) return; // Ignore invalid clicks

    const success = game.playRound(selectedRow, selectedColumn);
    updateScreen();

    if (success) {
      gameOver = true;
      if (game.playerWins(game.getActivePlayer().token)) {
        playerTurnDiv.textContent = `${game.getActivePlayer().name} wins!`;
      } else {
        playerTurnDiv.textContent = "It's a tie!";
      }
      
  }})  
  

  updateScreen();
}

ScreenController();

function togglePopup() {
  const popup = document.getElementById("popupOverlay");
  popup.classList.toggle("show");
}

