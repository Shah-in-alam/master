// To show the game after 2 seconds
setTimeout(function(){
    document.querySelector(".js-stopwatch").style.opacity= 1;
},3000);

var buttonEl= document.querySelector(".js-button");
var pauseButtonEl=document.querySelector(".js-pause-button");
var stopwatchEl=document.querySelector(".js-stop-button");


var seconds=0;
var stopwatch=null;


buttonEl.addEventListener("click",function(){
    stopwatch =setInterval(function(){
        seconds++;
        document.querySelector(".js-seconds").innerHTML=seconds;
    },1000)

});

pauseButtonEl.addEventListener("click",function(){
    clearInterval(stopwatch);
});


stopwatchEl.addEventListener("click",function(){
    clearInterval(stopwatch);

    seconds =0;
  document.querySelector(".js-seconds").innerHTML=seconds;  
});