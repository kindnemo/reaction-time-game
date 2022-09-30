const actBtn = document.querySelector("#action-btn");
const updater = document.querySelector("#updater");   //This is the dialogue box for the main prompt 


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
