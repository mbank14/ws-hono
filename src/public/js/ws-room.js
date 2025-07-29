const ws = new WebSocket("ws://localhost:3000/ws-room");

ws.onopen = (evt) => {
    console.log("Connect ws");
}

ws.onmessage = (evt) => {
    
}