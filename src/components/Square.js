import React from "react";

//what it looks like coming in as props

// const props = {
//   onClick: () => "function",
//   value: "X"
// };


// const { value } = props;

const buttonstyle ={
  background: 'lightblue',
  border:'2px solid orange',
  fontSize:'50px',
  fontWeight:'800',
  height:'30px',
  width:'30px',
  outline:'none',
  cursor:'pointer'

}

const Square = ({ playerClick, square }) => {
  console.log(square,"square!!!!!!!!!!")
  // console.log(onclick,"vale")

  return (
    <div>
      <button style={buttonstyle} onClick={playerClick}>{square}</button>
      {/* <h1>{value}</h1> */}
    </div>
  );
};

export default Square;
