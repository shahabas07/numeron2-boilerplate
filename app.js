// Iteration 1: Making the play button in the index.html functional.

var playbtn = document.getElementById("play-button")

// Description: When the play button is clicked the game.html page should be opened

playbtn.addEventListener("click",function(){
    window.location.href="game.html"
})
