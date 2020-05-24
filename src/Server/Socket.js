const { piece, Piece } = require("./Piece");
const server = require("./Server");

class Socket {
    constructor(server) {
        this.server = server;
        this.io = require("socket.io")(this.server.listener);
    }
    setupConnection() {
        this.io.on('connection', socket => {
            // this.socket = socket;
            console.log('New User connected');
            this.sendRandomPiece(socket);
        });
    }
    sendRandomPiece(socket) {
        const piece = new Piece();
        socket.emit("Send Random Piece", piece);
    }
}

const socket = new Socket(server);
Object.freeze(socket);

module.exports = socket;