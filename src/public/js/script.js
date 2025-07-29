document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById("clickIni").addEventListener("click", ()=>{
        const randomString = Math.random().toString(36).substring(2, 7);
        window.location.href = "/play/"+ randomString;
    })

    const gasKeun = document.getElementById("join").addEventListener("click", () =>{
        const inputTextValue =  document.getElementById("inputRoom").value;
        console.log(inputTextValue)
        window.location.href = "/play/"+inputTextValue;
    })
})