const SOCKET_URL = "ws://127.0.0.1:16834/livesplit";

let socket;

function connectWebsocket() {

    console.clear();
    console.log("Connecting...");

    socket = new WebSocket(SOCKET_URL);

    socket.onopen = () => {

        console.log("Connected!");

        // Try a few common commands
        send("getcurrenttime");
        send("getsplitindex");
        send("getsplitnames");
        send("getcomparison");
        send("getbestpossibletime");

    };

    socket.onmessage = e => {

        console.log("RECEIVED >", e.data);

    };

    socket.onerror = e => {

        console.error(e);

    };

    socket.onclose = () => {

        console.log("Disconnected.");

    };

}

function send(cmd){

    console.log("SENT >", cmd);

    socket.send(cmd);

}