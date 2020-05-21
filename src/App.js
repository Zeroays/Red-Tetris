import React from 'react';
import PlayerGrid from './Grid.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Red Tetris</h1>
      <div className="game-container">
        <div className="tetris-grid">
          <PlayerGrid />
        </div>
        <div className="tetris-grid">
          <PlayerGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
