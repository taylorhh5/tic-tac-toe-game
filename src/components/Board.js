import React from 'react'
import Square from './Square.js'


//squares=array

const squareStyle ={
  border: '4px solid black',
  paddingTop:'2.5rem',
    borderRadius: '10px',
    width: '450px',
    height: '450px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
    background:'lightblue'

}
const Board = (props) => {
  console.log(props,"props in board")
  return (
    <div style={squareStyle}>
{props.boardState.map((square, i)=> {
  //passing props. the i, index the click is at is getting passed back to the player click function in game.js to know what sqaure is clicked
     return   <Square key={i} square={square} playerClick={() => props.playerClick(i)}/>

})}

      {/* <Square value="1" onClick={() => onClick("dummy value")}/>
      <Square value="2" onClick={() => onClick("dummy value")}/>
      <Square value="3" onClick={() => onClick("dummy value")}/>
      <Square value="4" onClick={() => onClick("dummy value")}/>
      <Square value="5" onClick={() => onClick("dummy value")}/>
      <Square value="6" onClick={() => onClick("dummy value")}/>
      <Square value="7" onClick={() => onClick("dummy value")}/>
      <Square value="8" onClick={() => onClick("dummy value")}/>
      <Square value="9" onClick={() => onClick("dummy value")}/> */}

      
    </div>
  )
}

export default Board