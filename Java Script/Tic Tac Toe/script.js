let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn = document.querySelector("#newGame");
let msg = document.querySelector("#msg");

let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner");
        showWinner(pos1Val);
      }
    }
  }
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msg.classList.add("hide");
  resetBoard();
};
const checkTie = () => {
  let isTie = true;
  for (let box of boxes) {
    if (box.innerHTML === "") {
      isTie = false;
      break;
    }
  }
  if (isTie) {
    msg.innerText = "It's a tie!";
    msg.classList.remove("hide");
    disableBoxes();
  }
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
      box.classList.add("green");
    } else {
      box.innerHTML = "X";
      turnO = true;
      box.classList.add("red");
    }
    box.disabled = true;
    checkWinner();
    checkTie();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
  }
};

const showWinner = (winner) => {
  msg.innerText = "Congratulations, Winner is " + winner;
  msg.classList.remove("hide");
  disableBoxes();
};

newGameBtn.addEventListener("click", () => {
  resetGame();
  resetBoard();
});

resetBtn.addEventListener("click", resetGame);
const resetBoard = () => {
  for (let box of boxes) {
    box.innerHTML = "";
    box.disabled = false;
    box.classList.remove("green", "red");
  }
};
