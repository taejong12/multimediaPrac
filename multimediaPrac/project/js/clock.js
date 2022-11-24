const clock = document.querySelector("h2#clock");
const clockFont = document.querySelector("h2");

clockFont.classList.add("fontSize");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    // const hours =  date.getHours();
    // const minutes = date.getMinutes();
    // const seconds = date.getSeconds();
    
    clock.innerText = `${hours}:${minutes}:${seconds}`;


}

getClock();
setInterval(getClock, 1000);