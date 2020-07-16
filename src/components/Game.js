import React, { useState, useEffect } from "react";
import Board from "./Board.js";
import PlayerNames from './PlayerNames.js'
import { calculateWinner } from "../helper.js";

const styles = {
  width: "200px",
  margin: "20px auto",
};

const nameStyles = {
    color:"blue",
    fontWeight:"600"
  };

  const vsnameStyles = {
    color:"red",
    fontWeight:"600"
  };
  const gameTitle={
    textDecoration:"underline"
  }


const Game = () => {
  //state for the board squares. An array containing 9 empty values, indexed 1-9

  const [board, setBoard] = useState(Array(9).fill(null));
  console.log(board, "board in game");
  //State for determining whos turn it is, true is player ones turn, false is player two's
  const [playerOnesTurn, setPlayerOnesTurn] = useState(true);
  const winner = calculateWinner(board);




  
  const score1 = localStorage.getItem("score1")
  const score2 = localStorage.getItem("score2")

  
//   useEffect(() => {
 
//     const playerOne = localStorage.getItem("playerOne")

//     const playerTwo = localStorage.getItem("playerTwo")
 

//   }, [localStorage.getItem("playerOne")]);

 const playerOne = localStorage.getItem("playerOne")

const playerTwo = localStorage.getItem("playerTwo")

  const playerClick = (i) => {
    // Make a copy of state so we dont mutate the original
    const boardCopy = [...board];

    //if user click occupied square or game won, return
    if (winner || boardCopy[i]) return;
    //    if (boardCopy[i]) return;
//   if (boardCopy[0] && boardCopy[1] && boardCopy[2] && boardCopy[3] && boardCopy[4] && boardCopy[5] && boardCopy[6] && boardCopy[7] && boardCopy[8]){
      
//   }




    //Put an x or o in clicked square. ex: board[8] value = whoever clicked on it
    boardCopy[i] = playerOnesTurn ? playerOne || 
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


      {<h1 style={gameTitle}>Tic Tac Toe</h1>}
      {playerOne ? <h2 style={nameStyles}>{playerOne} <span style={vsnameStyles}>VS</span> {playerTwo}</h2> : null}

      {(!board[0] && !board[1] && !board[2] && !board[3] && !board[4] && !board[5] && !board[6] && !board[7] && !board[8]) || winner ? <PlayerNames/> : null} 
      {/* <h1>{playerTwo}</h1> */}
      <Board boardState={board} playerClick={playerClick} />
      <div style={styles}>
        {/* <h2>
          {winner === "Taylor" ? "The winner of course is " + winner+
"!"            : winner === "Beth" ? winner + " must have cheated!!"
            : "Player turn: " + (playerOnesTurn ? "Taylor" : "Beth")}
        </h2> */}
          {/* <h2>
           {board[1]!== null ?  " wins!" : "Please pick player names"}       </h2> */}

           {/* {board.map((square, i)=> {
              if (board[0] && board[1] &&board[0] && board[1])

     return   <h1>here</h1>

})} */}


               



           <h2 style={{color:"blue"}}>
           {winner ? winner + " wins!" : 'Next Turn: ' + (playerOnesTurn ? playerOne || "Player One" : playerTwo || 'Player Two')}       </h2>
        {newGame()}
      </div>
    </div>
  );
};

export default Game;
