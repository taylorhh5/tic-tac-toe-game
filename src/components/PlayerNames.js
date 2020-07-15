import React, { useState } from "react";
import '../App.css';


const PlayerNames = () => {
  const names = {
    playerOne: "",
    playerTwo: "",
  };
  const [players, setplayers] = useState(names);

  const handleChange = (event) => {
    event.persist();
    setplayers({
      ...players,
      [event.target.name]: event.target.value,
    });
  };
  const handleplayers = (event) => {
    event.preventDefault();
    localStorage.setItem('playerOne', players.playerOne)
    localStorage.setItem('playerTwo', players.playerTwo)
    window.location.reload()


console.log(players.playerOne,"playersubmit")  };

  return (
    <>

    <h2>Please choose player names.</h2>
      <form className="playersForm" onSubmit={handleplayers}>
        <label className ="playersLabel">
          Player One
          <input
          className="playersInput"
            type="text"
            name="playerOne"
            value={players.playerOne}
            onChange={handleChange}
            placeholder="Name"

          />
        </label>
        <label className ="playersLabel">
          Player Two 
        <input 
         className="playersInput"
          type="playerTwo"
          name="playerTwo"
          value={players.playerTwo}
          onChange={handleChange}
          placeholder="Name"
        />
</label>
        <button className="playersButton">Submit</button>
      </form>
    </>
  );
};


export default PlayerNames;
