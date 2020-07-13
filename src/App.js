import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game.js'
import PlayerNames from './components/PlayerNames.js'


const score1 = localStorage.setItem("score1", 0)
const score2 = localStorage.setItem("score2", 0)

function App() {
  return (
    <div className="App">
 <Game/>


    </div>
  );
}

export default App;
