const pieces = {
    I: [ [0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0] ],
    J: [ [1, 0, 0], [1, 1, 1], [0, 0, 0] ],
    L: [ [0, 0, 1], [1, 1, 1], [0, 0, 0] ],
    O: [ [1, 1], [1, 1] ],
    S: [ [0, 1, 1], [1, 1, 0], [0, 0, 0] ],
    T: [ [0, 1, 0], [1, 1, 1], [0, 0, 0] ],
    Z: [ [1, 1, 0], [0, 1, 1], [0, 0, 0] ]  
}

class Piece {
    constructor() {
        this.type = this.randomPiece();
        this.location = { x: 0, y: 0 };
    }
    randomPiece() {
        const piecesArr = Object.keys(pieces);
        const rndIdx = Math.floor(Math.random() * piecesArr.length);
        return pieces[piecesArr[rndIdx]];
    }
}

Object.freeze(pieces);

module.exports = { pieces, Piece };

