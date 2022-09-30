const actBtn = document.querySelector("#action-btn");
const updater = document.querySelector("#updater");   //This is the dialogue box for the main prompt 
const footer = document.querySelector(".faq");
const infoDiv = document.querySelector(".info-n-btn");
const playArea = document.querySelector("#click-area");


function countdown(){  //Countdown to start the game
    const timerHead = document.createElement("h1");
    timerHead.classList.add("timer");
    playArea.appendChild(timerHead);
    let eta = 3; //Timer value for the countdown of starting the game
    let decrementTime = setInterval(()=>{
        timerHead.textContent = eta;
        eta-=1;
        if(eta < 0){
            clearInterval(decrementTime);
            timerHead.style.display = "none";
        }
    }, 1000)
    decrementTime;
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
