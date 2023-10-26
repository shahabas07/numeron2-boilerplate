// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional
const num1 = Math.floor(Math.random()*100)+1;
const num2 = Math.floor(Math.random()*100)+1;

const contnum1 = document.getElementById("number1")
const contnum2 = document.getElementById("number2")

contnum1.innerText = num1;
contnum2.innerText = num2;

var score = Number(sessionStorage.getItem("chavi")) || 0 
const btns = document.getElementById("buttons")
var result ;

function any(){
    operator=Math.ceil(Math.random()*5)
    switch(operator){
    case 1:
    result=num1 + num2;
    break;
    case 2:
    result=num1 - num2;
    break;
    case 3:
    result=num1 * num2;
    break;
    case 4:
    result=Math.floor(num1 / num2);
    break;
    case 5:
    result=num1 % num2;
    break;
    }
}
any()
var result1 = document.getElementById("number3")
result1.innerHTML = result;
btns.addEventListener("click", function (event){
    if(num1+num2==result && event.target.alt == "plus"){
        console.log("correct")
        score += 10
        window.location.href="game.html"
        sessionStorage.setItem("chavi",score)

    }else if(num1-num2==result && event.target.alt == "minus" ){
        console.log("correct")
        score += 10
        window.location.href="game.html"
        sessionStorage.setItem("chavi",score)

    }else if(num1*num2==result && event.target.alt == "mul"){
        console.log("correct");
        score += 10
        window.location.href="game.html"
        sessionStorage.setItem("chavi",score)

    }else if(Math.floor(num1 / num2)==result && event.target.alt == "divide"){
        console.log("correct");
        score += 10
        window.location.href="game.html"
        sessionStorage.setItem("chavi",score)

    }else if(num1 % num2==result && event.target.alt == "modulus"){
        console.log("correct");
        score += 10
        window.location.href="game.html"
        sessionStorage.setItem("chavi",score)

    }else{
        window.location.href="gameover.html"
    }
})

const timer = document.getElementById('timer');
let countdown = 15;

timer.textContent=`${countdown}`;
const timeinterval=setInterval(()=>{
    countdown--;

    timer.innerText=`${countdown}`;

    if(countdown==0){
        clearInterval(timeinterval);
        window.location.href='gameover.html'
    }
},1000);