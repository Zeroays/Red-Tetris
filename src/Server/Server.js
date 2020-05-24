class Server {
    constructor() {
        Server.port = 4001;
        this.app = require("express")();
        this.listener = this.listen();
    }
    listen() {
        return this.app.listen(Server.port, () => {
            console.log(`Listening on Port ${Server.port}`)
        });
    }
}

const server = new Server();
Object.freeze(server);

module.exports = server;