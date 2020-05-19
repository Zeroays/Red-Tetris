import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Red Tetris</h1>
      <div className="game-container">
        <div className="tetris-grid">
          <Grid row="20" column="10"/>
        </div>
        <div className="tetris-grid">
          <Grid row="20" column="10"/>
        </div>
      </div>
    </div>
  );
}

const initTetrisGrid = ({row, column, color}) => {
  let grid = [];
  for (let i = 0; i < +row; i++) {
    const singleRow = Array(+column).fill(color);
    grid.push(singleRow);
  }
  return grid;
}

const Grid = ({row, column}) => {
  const color = "black";
  const [ grid, setGrid ] = useState(initTetrisGrid({ row, column, color }));
  console.log(setGrid);
  return (
    grid.map((row, rIdx) => {
      return (
        <div className="tetris-row" key={`r${rIdx}`}>
          {row.map((cellColor, cIdx) => {
            return <Cell key={`r${rIdx}c${cIdx}`} color={cellColor}/>
          })}
        </div>
      );
    })
  );
}

// const Row = ({cellAmount}) => {
//     let row = [];
//     for (let i = 0; i < cellAmount; i++)
//       row.push(<Cell />);
//     return row;
// }

const Cell = ({color}) => {
  let cellStyle = { backgroundColor: color }
  return (<div className="tetris-cell" style={cellStyle}></div>);
}

// window.addEventListener('keydown', e => {
//   switch(e.key) {
//     case 
//   }
// })

export default App;
