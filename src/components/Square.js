import React from "react";

//what it looks like coming in as props

// const props = {
//   onClick: () => "function",
//   value: "X"
// };


// const { value } = props;

const buttonstyle ={
  background: 'lightblue',
  // border:'1px solid black',

  fontSize:'50px',
  fontWeight:'800',
  height:'100%',
  width:'100%',
  outline:'none',
  cursor:'pointer'

}

const Square = ({ playerClick, square }) => {
  console.log(square,"square!!!!!!!!!!")
  // console.log(onclick,"vale")

  return (
    <div className="square-div">
      <button style={buttonstyle} onClick={playerClick}>{square}</button>
      {/* <h1>{value}</h1> */}
    </div>
  );
};

export default Square;
