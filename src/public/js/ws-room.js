document.addEventListener("DOMContentLoaded", () => {
    const ws = new WebSocket("ws://localhost:3000/ws/play");
    
    ws.onopen = (evt) => {
        console.log("Connect ws");
    }
    
    ws.onmessage = (evt) => {
        let parsedMessage = JSON.parse(evt.data);

        console.log(parsedMessage);
    }

    document.getElementById("playBtn").addEventListener("click", ()=>{
        ws.send(JSON.stringify({message: "Klik ready"}))
    })

})