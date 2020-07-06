import React, { useState } from "react";
import Board from "./Board.js";
import { calculateWinner } from "../helper.js";

const styles = {
  width: "200px",
  margin: "20px auto",
};

const Game = () => {
  //state for the board squares. An array containing 9 empty values, indexed 1-9

  const [board, setBoard] = useState(Array(9).fill(null));
  console.log(board, "board in game");
  //State for determining whos turn it is, true is player ones turn, false is player two's
  const [playerOnesTurn, setPlayerOnesTurn] = useState(true);
  const winner = calculateWinner(board);

  const playerClick = (i) => {
    // Make a copy of state so we dont mutate the original
    const boardCopy = [...board];

    //if user click occupied square or game won, return
    if (winner || boardCopy[i]) return;
    //    if (boardCopy[i]) return;
//   if (boardCopy[0] && boardCopy[1] && boardCopy[2] && boardCopy[3] && boardCopy[4] && boardCopy[5] && boardCopy[6] && boardCopy[7] && boardCopy[8]){
      
//   }

const playeOne = localStorage.getItem("playerOne")

const playerTwo = localStorage.getItem("playerTwo")


    //Put an x or o in clicked square. ex: board[8] value = whoever clicked on it
    boardCopy[i] = playerOnesTurn ? playeOne || 
    'X' : playerTwo || "O";
    // console.log(board, "board!!!");
    // console.log(
    //   board[1],
    //   "i!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    // );

    // boardCopy[i] = "pig";

    // set board state
    setBoard(boardCopy);

    //change turn
    setPlayerOnesTurn(!playerOnesTurn);
  };
  //   const jumpTo = () => {};

  const newGame = () => {
    return (
      <button onClick={() => setBoard(Array(9).fill(null))}>New Game</button>
    );
  };

  return (
    <div>
      Tic Tac Toe Game
      <Board boardState={board} playerClick={playerClick} />
      <div style={styles}>
        <h2>
          {winner === "Taylor" ? "The winner of course is " + winner+
"!"            : winner === "Beth" ? winner + " must have cheated!!"
            : "Player turn: " + (playerOnesTurn ? "Taylor" : "Beth")}
        </h2>
        {newGame()}
      </div>
    </div>
  );
};

export default Game;
