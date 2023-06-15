"use strict";

// selecting the elements
let layout = document.querySelector(".layout");
let step1 = document.querySelector(".step-1");
let player_1 = document.querySelector(".player1-s1");
let player_2 = document.querySelector(".player2-s1");
let player1_score = document.getElementById("score1");
let player2_score = document.getElementById("score2");
let player1_name = document.getElementById("player1");
let player2_name = document.getElementById("player2");
const play_button = document.querySelector(".play-s1");
const reset_button = document.querySelector(".reset");
const end_button = document.querySelector(".end_game");

//initialization of the cells

let c00 = document.getElementById("0-0");
let c01 = document.getElementById("0-1");
let c02 = document.getElementById("0-2");
let c10 = document.getElementById("1-0");
let c11 = document.getElementById("1-1");
let c12 = document.getElementById("1-2");
let c20 = document.getElementById("2-0");
let c21 = document.getElementById("2-1");
let c22 = document.getElementById("2-2");
let positions;

// initial condition of the grid
const grid = function () {
  c00.innerHTML = "";
  c01.innerHTML = "";
  c02.innerHTML = "";

  c10.innerHTML = "";
  c11.innerHTML = "";
  c12.innerHTML = "";

  c20.innerHTML = "";
  c21.innerHTML = "";
  c22.innerHTML = "";

  //array that contains the position of game
  positions = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ];
};

//initial condition of the whole game
const initial = function () {
  layout.classList.add("hidden");
  step1.classList.remove("hidden");
  player1_score.innerHTML = 0;
  player2_score.innerHTML = 0;

  grid();
};

// initial function call
initial();

// on clicking the play button
play_button.addEventListener("click", function () {
  layout.classList.remove("hidden");
  step1.classList.add("hidden");
  if (player_1.value == "" || player_2.value == "") {
    player1_name.innerHTML = "player-1 (O)";
    player2_name.innerHTML = "player-2 (X)";
  } else {
    player1_name.innerHTML = player_1.value + " (O)";
    player2_name.innerHTML = player_2.value + " (X)";
  }
});

//on clicking the end button
end_button.addEventListener("click", function () {
  initial();
  console.log(positions);
});

// on clicking the reset button
reset_button.addEventListener("click", function () {
  grid();
});

//condition to check which player is currently active
let player1 = 1;
let player2 = 0;

// initial scores of the players
let score1 = 0; //player1
let score2 = 0; //player2

// condition to check if the game was completed or not
let win = 0;

// function to return to the starting state if any of the players win
const winning = function () {
  if (win === 1) {
    grid();
  }
  win = 0;
  // console.log(win);
};

// function to check if it's a draw

// (player1 = O = 1) (player2 = X = 0)

//adding event listeners to each cell in the grid
//cell - 1-1
c00.addEventListener("click", function () {
  if (c00.innerHTML === "") {
    if (player1 === 1) {
      c00.innerHTML = "O";
      player1 = 0;
      player2 = 1;
      positions[0][0] += 2;
    } else {
      c00.innerHTML = "X";
      player1 = 1;
      player2 = 0;
      positions[0][0] += 1;
    }
  }

  // checking if the winning condition is met or not
  if (
    // row - 1
    (positions[0][0] === positions[0][1] &&
      positions[0][0] === positions[0][2]) ||
    // column -1
    (positions[0][0] === positions[1][0] &&
      positions[0][0] === positions[2][0]) ||
    // diagnol through 00
    (positions[0][0] === positions[1][1] && positions[0][0] === positions[2][2])
  ) {
    if (positions[0][0] == 0) {
      score2 += 1;
      player2_score.innerHTML = score2;
    } else {
      score1 += 1;
      player1_score.innerHTML = score1;
    }
    win = 1;
    console.log(win);
    setTimeout(function () {
      winning();
    }, 500);

    // console.log("win");
  }
});

//cell - 1-2
c01.addEventListener("click", function () {
  if (c01.innerHTML === "") {
    if (player1 === 1) {
      c01.innerHTML = "O";
      player1 = 0;
      player2 = 1;
      positions[0][1] += 2;
    } else {
      c01.innerHTML = "X";
      player1 = 1;
      player2 = 0;
      positions[0][1] += 1;
    }
  }

  // checking if the winning condition is met or not
  if (
    // row -1
    (positions[0][1] === positions[0][0] &&
      positions[0][1] === positions[0][2]) ||
    // cloumn - 2
    (positions[0][1] === positions[1][1] && positions[0][1] === positions[2][1]) //||
    // // mostly not needed
    // (positions[0][0] === positions[1][1] && positions[0][0] === positions[2][2])
  ) {
    if (positions[0][1] == 0) {
      score2 += 1;
      player2_score.innerHTML = score2;
    } else {
      score1 += 1;
      player1_score.innerHTML = score1;
    }
    win = 1;
    console.log(win);
    setTimeout(function () {
      winning();
    }, 500);

    // console.log("win");
  }
});

//cell - 1-3
c02.addEventListener("click", function () {
  if (c02.innerHTML === "") {
    if (player1 === 1) {
      c02.innerHTML = "O";
      player1 = 0;
      player2 = 1;
      positions[0][2] += 2;
    } else {
      c02.innerHTML = "X";
      player1 = 1;
      player2 = 0;
      positions[0][2] += 1;
    }
  }

  // checking if the winning condition is met or not
  if (
    // row -1
    (positions[0][2] === positions[0][0] &&
      positions[0][2] === positions[0][1]) ||
    // cloumn - 3
    (positions[0][2] === positions[1][2] &&
      positions[0][2] === positions[2][2]) ||
    //diagnol - 2
    (positions[0][2] === positions[1][1] && positions[0][2] === positions[2][0])
  ) {
    if (positions[0][2] == 0) {
      score2 += 1;
      player2_score.innerHTML = score2;
    } else {
      score1 += 1;
      player1_score.innerHTML = score1;
    }
    win = 1;
    console.log(win);
    setTimeout(function () {
      winning();
    }, 500);

    // console.log("win");
  }
});

//cell - 2-1
c10.addEventListener("click", function () {
  if (c10.innerHTML === "") {
    if (player1 === 1) {
      c10.innerHTML = "O";
      player1 = 0;
      player2 = 1;
      positions[1][0] += 2;
    } else {
      c10.innerHTML = "X";
      player1 = 1;
      player2 = 0;
      positions[1][0] += 1;
    }
  }

  // checking if the winning condition is met or not
  if (
    // row -2
    (positions[1][0] === positions[1][1] &&
      positions[1][0] === positions[1][2]) ||
    // cloumn - 1
    (positions[1][0] === positions[0][0] && positions[1][0] === positions[2][0]) //||
    // // mostly not needed
    // (positions[0][0] === positions[1][1] && positions[0][0] === positions[2][2])
  ) {
    if (positions[1][0] == 0) {
      score2 += 1;
      player2_score.innerHTML = score2;
    } else {
      score1 += 1;
      player1_score.innerHTML = score1;
    }
    win = 1;
    console.log(win);
    setTimeout(function () {
      winning();
    }, 500);

    // console.log("win");
  }
});

//cell - 2-2
c11.addEventListener("click", function () {
  if (c11.innerHTML === "") {
    if (player1 === 1) {
      c11.innerHTML = "O";
      player1 = 0;
      player2 = 1;
      positions[1][1] += 2;
    } else {
      c11.innerHTML = "X";
      player1 = 1;
      player2 = 0;
      positions[1][1] += 1;
    }
  }
  // checking if the winning condition is met or not
  if (
    // row -2
    (positions[1][1] === positions[1][0] &&
      positions[1][1] === positions[1][2]) ||
    // cloumn - 2
    (positions[1][1] === positions[0][1] &&
      positions[1][1] === positions[2][1]) ||
    // diagnol - 1
    (positions[0][0] === positions[1][1] &&
      positions[0][0] === positions[2][2]) ||
    //diagnol - 2
    (positions[0][2] === positions[1][1] && positions[0][2] === positions[2][0])
  ) {
    if (positions[1][1] == 0) {
      score2 += 1;
      player2_score.innerHTML = score2;
    } else {
      score1 += 1;
      player1_score.innerHTML = score1;
    }
    win = 1;
    console.log(win);
    setTimeout(function () {
      winning();
    }, 500);

    // console.log("win");
  }
});

//cell - 2-3
c12.addEventListener("click", function () {
  if (c12.innerHTML === "") {
    if (player1 === 1) {
      c12.innerHTML = "O";
      player1 = 0;
      player2 = 1;
      positions[1][2] += 2;
    } else {
      c12.innerHTML = "X";
      player1 = 1;
      player2 = 0;
      positions[1][2] += 1;
    }
  }

  // checking if the winning condition is met or not
  if (
    // row -2
    (positions[1][2] === positions[1][1] &&
      positions[1][2] === positions[1][0]) ||
    // cloumn - 3
    (positions[1][2] === positions[0][2] && positions[1][2] === positions[2][2]) //||
    // // mostly not needed
    // (positions[0][0] === positions[1][1] && positions[0][0] === positions[2][2])
  ) {
    if (positions[1][2] == 0) {
      score2 += 1;
      player2_score.innerHTML = score2;
    } else {
      score1 += 1;
      player1_score.innerHTML = score1;
    }
    win = 1;
    console.log(win);
    setTimeout(function () {
      winning();
    }, 500);

    // console.log("win");
  }
});

//cell - 3-1
c20.addEventListener("click", function () {
  if (c20.innerHTML === "") {
    if (player1 === 1) {
      c20.innerHTML = "O";
      player1 = 0;
      player2 = 1;
      positions[2][0] += 2;
    } else {
      c20.innerHTML = "X";
      player1 = 1;
      player2 = 0;
      positions[2][0] += 1;
    }
  }

  // checking if the winning condition is met or not
  if (
    // row -3
    (positions[2][0] === positions[2][1] &&
      positions[2][0] === positions[2][2]) ||
    // cloumn - 1
    (positions[2][0] === positions[1][0] &&
      positions[2][0] === positions[0][0]) ||
    // diagnol - 2
    (positions[2][0] === positions[1][1] && positions[2][0] === positions[0][2])
  ) {
    if (positions[2][0] == 0) {
      score2 += 1;
      player2_score.innerHTML = score2;
    } else {
      score1 += 1;
      player1_score.innerHTML = score1;
    }
    win = 1;
    console.log(win);
    setTimeout(function () {
      winning();
    }, 500);

    // console.log("win");
  }
});

//cell - 3-2
c21.addEventListener("click", function () {
  if (c21.innerHTML === "") {
    if (player1 === 1) {
      c21.innerHTML = "O";
      player1 = 0;
      player2 = 1;
      positions[2][1] += 2;
    } else {
      c21.innerHTML = "X";
      player1 = 1;
      player2 = 0;
      positions[2][1] += 1;
    }
  }
  // checking if the winning condition is met or not
  if (
    // row -3
    (positions[2][1] === positions[2][0] &&
      positions[2][1] === positions[2][2]) ||
    // cloumn - 1
    (positions[2][1] === positions[1][1] && positions[2][1] === positions[0][1]) //||
    // mostly not needed
    // (positions[2][0] === positions[1][1] && positions[2][0] === positions[0][2])
  ) {
    if (positions[2][1] == 0) {
      score2 += 1;
      player2_score.innerHTML = score2;
    } else {
      score1 += 1;
      player1_score.innerHTML = score1;
    }
    win = 1;
    console.log(win);
    setTimeout(function () {
      winning();
    }, 500);

    // console.log("win");
  }
});

//cell - 3-3
c22.addEventListener("click", function () {
  if (c22.innerHTML === "") {
    if (player1 === 1) {
      c22.innerHTML = "O";
      player1 = 0;
      player2 = 1;
      positions[2][2] += 2;
    } else {
      c22.innerHTML = "X";
      player1 = 1;
      player2 = 0;
      positions[2][2] += 1;
    }
  }
  // checking if the winning condition is met or not
  if (
    // row -3
    (positions[2][1] === positions[2][0] &&
      positions[2][1] === positions[2][2]) ||
    // cloumn - 3
    (positions[2][2] === positions[1][2] &&
      positions[2][2] === positions[0][2]) ||
    // diagnol - 1
    (positions[2][2] === positions[1][1] && positions[2][2] === positions[0][0])
  ) {
    if (positions[2][2] == 0) {
      score2 += 1;
      player2_score.innerHTML = score2;
    } else {
      score1 += 1;
      player1_score.innerHTML = score1;
    }
    win = 1;
    console.log(win);
    setTimeout(function () {
      winning();
    }, 500);

    // console.log("win");
  }
});

console.log(positions);
