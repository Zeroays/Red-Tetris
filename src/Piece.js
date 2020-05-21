const tetrimino = () => {
    return {
      piece: chooseRndPiece(),
      location: { x: 0, y: 0 },
      color: chooseRndColor()
    }
  }
  
const Colors = () => {
    return {
        RED: "red",
        GREEN: "green",
        BLUE: "blue",
        PURPLE: "purple",
        YELLOW: "yellow"
    }
}
  
/* Returns a random number, from start to end (exclusive) */
const rndNumber = (start, end) => Math.floor( start + Math.random() * (end - start) );

const chooseRndColor = () => {
    return chooseRnd( Object.keys(Colors) );
}

const chooseRndPiece = () => {
    return chooseRnd( pieces() );
}

const chooseRnd = arr => {
    const idxChoice = rndNumber(0, arr.length);
    return arr[idxChoice];
}

const mirror = matrix => {
    return matrix.map(row => row.reverse());
}

const transpose = matrix => {
    return matrix[0].map((col, cIdx) => matrix.map(row => row[cIdx]));
}

const rotateCCW = matrix => {
    return transpose( mirror(matrix) );
}

const pieces = () => {
    return [ 
        IPiece(), JPiece(), LPiece(), 
        OPiece(), SPiece(), TPiece(), 
        ZPiece()
    ]
}

const IPiece = () => {
    return [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
}

const JPiece = () => {
    return [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ]
}

const LPiece = () => {
    return [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
    ]
}

const OPiece = () => {
    return [
        [1, 1],
        [1, 1]
    ]
}

const SPiece = () => {
    return [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ]
}

const TPiece = () => {
    return [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ]
}

const ZPiece = () => {
    return [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ]
}


