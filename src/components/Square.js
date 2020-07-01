import React from "react";

//what it looks like coming in as props

// const props = {
//   onClick: () => "function",
//   value: "X"
// };


// const { value } = props;

const buttonstyle ={
  background: 'lightblue',
  border:'2px solid darkblue',
  fontSize:'50px',
  fontWeight:'800',
  outline:'none',
  cursor:'pointer'

}

const Square = ({ onClick, value }) => {
  return (
    <div>
      <button style={buttonstyle} onClick={onClick}>{value}</button>
      {/* <h1>{value}</h1> */}
    </div>
  );
};

export default Square;
