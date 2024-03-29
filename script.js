const actBtn = document.querySelector("#action-btn");
const updater = document.querySelector("#updater");   //This is the dialogue box for the main prompt 
const footer = document.querySelector(".faq");
const infoDiv = document.querySelector(".info-n-btn");
const playArea = document.querySelector("#click-area");
const timerHead = document.createElement("h1");
const desc = document.querySelector(".desc");

let start;
let gameStarted = false;

function countingClick(){  //Counts the time (in millisecond) in which the user clicks the screen
    var elapsed = new Date().getTime() - start;
    timerHead.textContent = `${elapsed}ms`;
    footer.style.display = "block";
    desc.textContent = "Click to continue";
    playArea.removeEventListener("click", countingClick);
    playArea.addEventListener("click", gamePlay);
}

function gamePlay(){ //Actual functionality of the gameplay 
    if(gameStarted){
        timerHead.textContent = "Wait for Green..."
        timerHead.style.color = "#09F63F"
        playArea.style.backgroundColor = "#F63F09";
        footer.style.display = "none";
    }
    let x = Math.floor((Math.random() * 10) + 1) * 1000;
    let makeGreen = setTimeout(()=>{    //Makes the screen given at a random pace between 1 and 10 seconds
        playArea.style.backgroundColor = "#09F63F";
        timerHead.style.color = "#F63F09";
        timerHead.textContent = "Click!"
        start = new Date().getTime();  //Start of the timer for clicking the green area
        playArea.addEventListener("click", countingClick);
        gameStarted = true;
    }, x);
    
}


function countdown(){  //Countdown to start the game
    timerHead.classList.add("timer");
    playArea.appendChild(timerHead);
    let eta = 3; //Timer value for the countdown of starting the game
    let decrementTime = setInterval(()=>{
        timerHead.textContent = eta;
        eta-=1;
        if(eta < 0){
            clearInterval(decrementTime);
            timerHead.textContent = "Wait for Green..."
        }
    }, 1000)
    gamePlay();

}

function startGame(){
    footer.style.display = "none";
    infoDiv.style.display = "none";

    countdown();  //Calls the countdown function after starting the game

    
}


function changeText(){
    let windowWidth = window.innerWidth;
    if(windowWidth < 455){
        updater.style.fontSize = "2rem"; 
        updater.style.cssText += "-webkit-text-stroke: 1px black; "
    }else if(windowWidth < 610){
        updater.style.fontSize = "3rem";
    }else{
        updater.style.fontSize = "4rem";
    }
    updater.textContent = "Right click on the screen when the lights turn green ";   
    actBtn.textContent ="OK";

    actBtn.removeEventListener("click",changeText);  //Removes the first event listener to add the second one to start the game
    actBtn.addEventListener("click", startGame);
}


function textResizer (){ //Scales the size of the text based on the window size and viewport of the browser
    let windowWidth = window.innerWidth;
    if(windowWidth < 455){
        updater.style.fontSize = "2rem";
        updater.style.cssText += "-webkit-text-stroke: 1px black; "
    }else if(windowWidth < 610){
        updater.style.fontSize = "3rem";
        updater.style.cssText += "-webkit-text-stroke: 2px black; "
    }else{
        updater.style.fontSize = "4rem";
    }
}

actBtn.addEventListener("click", changeText);
window.onresize = textResizer;
