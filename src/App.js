import React, { useState, useEffect } from 'react';
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

const colorFirstCell = (grid) => {
  grid[0][0] = "green";
  grid[0][1] = "blue";
  return grid;
}

const PlayerGrid = () => {
  const [ grid, setGrid ] = useState(INITIAL_PLAYER_STATE().grid);
  // setTimeout(setGrid(colorFirstCell(grid)), 2000);
  console.log(grid);
  useEffect(() => {
      setGrid(colorFirstCell(grid));
  }, []);

  return renderGrid(grid);
}

const INITIAL_PLAYER_STATE = () => {
  const [ row, col, color ] = [ 20, 10, "black" ];
  return {
    row,
    col,
    color,
    grid: initTetrisGrid( row, col, color )
  }
}

const initTetrisGrid = ( row, column, color ) => {
  const singleRow = Array(+column).fill(color);
  return Array.from({ length: row }, () => [...singleRow]);
}

const renderGrid = grid => {
  return grid.map( renderRows );
}

const renderRows = (row, rIdx) => {
  return (
    <div className="tetris-row" key={`r${rIdx}`}>
        { row.map( renderCells ) }
    </div>
  );
}

const renderCells = (cellColor, cIdx) => {
  return <Cell key={`c${cIdx}`} color={cellColor}/>
}

const Cell = ( { color } ) => {
  let cellStyle = { backgroundColor: color }
  return <div className="tetris-cell" style={cellStyle}></div>
}

export default App;
