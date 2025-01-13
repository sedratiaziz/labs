//1) Define the required variables used to track the state of the game.
let board;
let turn;
let winner;
let tie;
let message;

//2) Store cached element references.
const squareEls = document.querySelectorAll(".sqr");
const resetBtnEl = document.querySelector("#reset");
const messageEl = document.querySelector("#message");

//3) Upon loading, the game state should be initialized, and a function should
//   be called to render this game state.
const init = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  messageEl.textContent = `Turn : ${turn}`;
};

init();

//4) The state of the game should be rendered to the user.
const render = () => {
  updateBoard();
  updateMessage();
};

const updateBoard = () => {
  for (let i = 0; i < board.length; i++) {
    squareEls[i].textContent = board[i];
  }

  // if you want to count how many x's and o's
  // let x = 0;
  // let o = 0;

  board.forEach((square) => {
    //set X to blue
    if (square === "X") {
      squareEls.forEach((squareEl) => {
        if (squareEl.innerText === "X") {
          squareEl.style.color = "blue";
        }
      });

      //set O to red
    } else if (square === "O") {
      squareEls.forEach((squareEl) => {
        if (squareEl.innerText === "O") {
          squareEl.style.color = "red";
        }
      });
    }
  });
};

const updateMessage = () => {
  if (winner === false && tie === false) {
    messageEl.textContent = `Turn : ${turn}`;
  } else if (winner === false && tie === true) {
    messageEl.textContent = "Tie!";
  } else {
    messageEl.textContent = `${turn} Wins !`;
  }
};

//5) Define the required constants.
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//6) Handle a player clicking a square with a `handleClick` function.
const handleClick = () => {
  const squareIndex = event.target.id;
  if (
    board[squareIndex] === "X" ||
    board[squareIndex] === "O" ||
    winner === true
  ) {
    return;
  }

  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
};

const placePiece = (index) => {
  board[index] = turn;
};

const checkForWinner = () => {
  if (board[0] !== "" && board[0] === board[1] && board[0] === board[2]) {
    winner = true;
  } else if (
    board[3] !== "" &&
    board[3] === board[4] &&
    board[3] === board[5]
  ) {
    winner = true;
  } else if (
    board[6] !== "" &&
    board[6] === board[7] &&
    board[6] === board[8]
  ) {
    winner = true;
  } else if (
    board[0] !== "" &&
    board[0] === board[3] &&
    board[0] === board[6]
  ) {
    winner = true;
  } else if (
    board[1] !== "" &&
    board[1] === board[4] &&
    board[1] === board[7]
  ) {
    winner = true;
  } else if (
    board[2] !== "" &&
    board[2] === board[5] &&
    board[2] === board[8]
  ) {
    winner = true;
  } else if (
    board[0] !== "" &&
    board[0] === board[4] &&
    board[0] === board[8]
  ) {
    winner = true;
  } else if (
    board[2] !== "" &&
    board[2] === board[4] &&
    board[2] === board[6]
  ) {
    winner = true;
  }
};

const checkForTie = () => {
  if (winner === true) {
    return;
  }

  board.forEach((square) => {
    if (square === "") {
      tie = false;
    } else {
      tie = true;
    }
  });
};

const switchPlayerTurn = () => {
  if (winner === true) {
    return;
  }

  if (turn === "X") {
    turn = "O";
    messageEl.textContent = `Turn : ${turn}`;
  } else if (turn === "O") {
    turn = "X";
    messageEl.textContent = `Turn : ${turn}`;
  }
};

// Event listners
squareEls.forEach((square) => {
  square.addEventListener("click", (event) => handleClick());
});

//7) Create Reset functionality.

resetBtnEl.addEventListener("click", () => {
  init();
  for (let i = 0; i < board.length; i++) {
    squareEls[i].textContent = board[i];
  }
});
