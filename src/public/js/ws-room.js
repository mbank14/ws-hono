

document.addEventListener("DOMContentLoaded", () => {
    const ws = new WebSocket("ws://localhost:3000/ws/play");
    const descReadyUser = document.getElementById("descReadyUser");

    let data ;
    let parsedMessage = "";

    ws.onopen = (evt) => {
        console.log("Connect ws");
    }

    ws.onmessage = (evt) => {
        parsedMessage = JSON.parse(evt.data);

        console.log(parsedMessage);
    }

    document.getElementById("playBtn").addEventListener("click", () => {
        const playBtn = document.getElementById("playBtn");
        const data = parsedMessage ;
        if (!data) return console.log("Data dari server notfound");

        if (data.isReady == true) {
            ws.send(JSON.stringify({
                type: "STATUS_USER",
                isReady: false
            }));
            playBtn.classList.remove("!bg-rose-600");
            playBtn.textContent = "Play"
        };

        ws.send(JSON.stringify({
            type: "STATUS_USER",
            isReady: true
        }));
        playBtn.classList.add("!bg-rose-600");
        playBtn.textContent = "Cancel"
    });


    descReadyUser.innerHTML = '';
    let desc
    if(data){
        desc = document.createElement("p")
        desc.textContent = `tinggal ${2} orang lagi, colek temen kamu !`
    }else{
        desc = document.createElement("p")
        desc.textContent = `Belum ada yang siap, jadilah yang pertama !`
    }

    descReadyUser.appendChild(desc);


});