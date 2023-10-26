// Iteration 8: Making scoreboard functional
const scoreboard = document.getElementById("score-board");

const btn = document.getElementById("play-again-button");
btn.addEventListener("click",()=>{
    window.location.href="game.html"
    sessionStorage.removeItem("chavi")
})

scoreboard.innerText = sessionStorage.getItem("chavi") || 0;