import React, { useState } from "react";
import Board from "./Board.js";
import { calculateWinner } from "../helper.js";

const styles = {
  width: "200px",
  margin: "20px auto",
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    //spread in copy of state so we dont mutate directly
    const boardCopy = [...board];
    //if user click occupied square or game won, return
    if (winner || boardCopy[i]) return;

    //Put an x or o in clicked square
    boardCopy[i] = xIsNext ? "X" : "O";

    // set board state
    setBoard(boardCopy);

    //change turn
    setXisNext(!xIsNext);
  };
  const jumpTo = () => {};
  const renderMoves = () => {
    return (
      <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
    );
  };

  return (
    <div>
      Tic Tac Toe Game
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </div>
  );
};

export default Game;
