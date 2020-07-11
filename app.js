
var milisec = 0;
var sec = 0;
var min = 0;
var milisecHeading = document.getElementById("milisec");
var secHeading = document.getElementById("sec");
var minHeading = document.getElementById("min");
var interval;


function timer() {
    milisec++
    milisecHeading.innerHTML= milisec;
    
    if (milisec>=100){
        sec++
        secHeading.innerHTML=sec
        milisec=0
    }
    else if(sec>=60){
        min++
        minHeading.innerHTML=min
        sec=0
    }

    
}


function Start() {
    interval = setInterval(timer,10)
    document.getElementById("start").disabled = true;
    
    
    
}

function Pause() {
    clearInterval(interval)
    document.getElementById("start").disabled = false;
     
}

function Clear() {
    Pause()
milisecHeading = document.getElementById("milisec");
secHeading = document.getElementById("sec");
minHeading = document.getElementById("min");
milisecHeading.innerHTML="00"
secHeading.innerHTML="00"
minHeading.innerHTML="00"


    
}
