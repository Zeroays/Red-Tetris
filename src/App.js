import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Red Tetris</h1>
      <div className="game-container">
        <div className="tetris-grid">
          <PlayerGrid row="20" column="10"/>
        </div>
        <div className="tetris-grid">
          <PlayerGrid row="20" column="10"/>
        </div>
      </div>
    </div>
  );
}



const PlayerGrid = ({ row, column }) => {
  const color = "black";
  const [ grid, setGrid ] = useState(initTetrisGrid( row, column, color ));
  return renderGrid(grid);
}

const initTetrisGrid = ( row, column, color ) => {
  const singleRow = Array(+column).fill(color);
  return Array(+row).fill(singleRow);
}

const renderGrid = grid => {
  return (
    grid.map((row, rIdx) =>
      <div className="tetris-row" key={`r${rIdx}`}>
        {row.map((cellColor, cIdx) =>
          <Cell key={`r${rIdx}c${cIdx}`} color={cellColor}/>
        )}
      </div>
    )
  )
}

const renderRows = render

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
