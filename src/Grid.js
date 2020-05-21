import React, { useState, useEffect } from 'react';


const colorFirstCell = (row) => {
    let grid = INITIAL_PLAYER_STATE().grid;
    grid[row][0] = "green";
    grid[row][1] = "green";
    grid[row + 1][1] = "green";
    grid[row + 2][1] = "green";
    return grid;
  }

const PlayerGrid = () => {
    const [ grid, setGrid ] = useState({
      g: INITIAL_PLAYER_STATE().grid,
      row: 0
    });
    useEffect(() => {
        const time = window.setInterval(() => {
          setGrid(newGrid => {
            const obj = {...newGrid};
            console.log(obj === newGrid);
            obj.g = colorFirstCell(newGrid.row);
            obj.row = newGrid.row + 1;
            return obj;
          })
        }, 750);
        return () => window.clearInterval(time);
    }, []);
    return renderGrid(grid.g);
}

const INITIAL_PLAYER_STATE = () => {
    const [ row, col, color ] = [ 20, 10, "lightgray" ];
    return {
        row,
        col,
        color,
        grid: initTetrisGrid( row, col, color )
    }
}

const initTetrisGrid = ( row, column, color ) => {
    const singleRow = Array(column).fill(color);
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

export default PlayerGrid;