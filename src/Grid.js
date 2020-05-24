import React, { useState, useEffect } from 'react';
import { socket } from "./Socket.js";


/* CUSTOM HOOK */
const useSocket = (event, callback) => {
    useEffect(() => {
        socket.on(event, data => { callback(data) });
    });
}

const useInterval = (callback, delay) => {
    useEffect(() => {
        const time = setInterval(() => { callback(); }, delay);
        return () => clearInterval(time);
    });
}
/* END HOOK */

const Game = () => {
    const [ start, setStart ] = useState(false);
    const [ piece, setPiece ] = useState({});

    useSocket("Send Random Piece", setPiece);

    const exertGravity = () => {
        if (start) {
            setPiece(prevPiece => {
                const newPiece = {...prevPiece};
                if (!isEmpty(newPiece)) newPiece.location.y += 1;
                return newPiece;
            })
        }
    }
    useInterval(exertGravity, 500);

    
    const move = ({ keyCode }) => {
        if (!isEmpty(piece) && start === true) {
            if (keyCode === 39) {
                const newP = {...piece};
                newP.location.x += 1;
                setPiece(newP);
            } else if (keyCode == 37) {
                const newP = {...piece};
                newP.location.x -= 1;
                setPiece(newP);
            }
        }
    }
    const changeGameState = () => {
        setStart(!start);
    }
    
    return (
        <div tabIndex="0" onKeyDown={e => move(e)}>
            <button onClick={changeGameState}>Click to start</button>
            <div className="tetris-grid" >
                <PlayerGrid piece={piece}/>
            </div>
        </div>
    );
}

const PlayerGrid = ( { piece } ) => {
    const [ grid, setGrid ] = useState({ config: INITIAL_PLAYER_STATE().grid });
    useEffect(() => {
        const updateGrid = prevGrid => {
            const newGrid = {...prevGrid};
            if (!isEmpty(piece)) newGrid.config = plotPiece(piece);
            return newGrid;
        }
        setGrid(prev => updateGrid(prev))
    }, [piece]);
    return renderGrid(grid.config);
}

const plotPiece = ( { location, type } ) => {
    const grid = INITIAL_PLAYER_STATE().grid;
    type.forEach((row, rIdx) => row.forEach((cell, cIdx) => {
        if (cell !== 0)
            grid[location.y + rIdx][location.x + cIdx] = "green"
    }));
    return grid;
}


/* UTIL FUNCTIONS */
const isEmpty = obj => {
    if (obj == null) return true;
    if (Array.isArray(obj) || typeof obj === "string") return obj.length === 0;
    return Object.keys(obj).length === 0;
}

/* END UTILS */

/* State Function */
const INITIAL_PLAYER_STATE = () => {
    const [ row, col, color ] = [ 20, 10, "lightgray" ];
    return {
        row,
        col,
        color,
        grid: initTetrisGrid( row, col, color )
    }
}


/* RENDERS */
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
/*END RENDERS */

export default Game;