var handEls=document.querySelectorAll(".js-hand");
var hands=["paper","rock","scissors"];
// var stopwatch;
for(var i=0;i<handEls.length;i++){
    handEls[i].addEventListener("click",function (){
        var userChoice =this.dataset.sign;
        document.querySelector(".js-step-1").classList.add("hidden");
        document.querySelector(".js-step-2").classList.remove("hidden");
        var seconds=0;
        var stopwatch=setInterval(function (){
            seconds++;
            document.querySelector(".js-seconds").textContent= 3-seconds;
            // document.querySelector("h1").textContent ="Time remains "+ (3-seconds) +" seconds";
            if(seconds==3){
                clearInterval(stopwatch);
                var randomHand =Math.floor(Math.random()*hands.length);
                var pcChoice =hands[randomHand];
                addPicture(pcChoice);
                showWinner(userChoice,pcChoice);
            }
        },1000);
        addPicture(userChoice);
    });
    function showWinner (userChoice,pcChoice){
        var scoreboardEl=document.querySelector(".js-scoreboard");
        if(userChoice == pcChoice){
            scoreboardEl.textContent="Tie";
        }
        else if(
            (userChoice =="paper" && pcChoice =="rock")||
            (userChoice=="rock" && pcChoice =="scissors")||
            (userChoice =="scissors" && pcChoice=="paper")
        ){
            scoreboardEl.textContent= "USER WIN";
        }
        else{
            scoreboardEl.textContent ="PC WIN";
        }
    }
    function addPicture(hand){
        var imgElement=document.createElement("img");
        imgElement.src="./assets/imeges/"+hand +".png";
        document.querySelector(".js-result").appendChild(imgElement);
    }
}