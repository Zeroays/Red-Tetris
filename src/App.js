import React from 'react';
import Game from './Grid.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Red Tetris</h1>
      <div className="game-container">
        <Game />
      </div>
    </div>
  );
}

export default App;
