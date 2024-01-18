var cellEls=document.querySelectorAll(".js-cell");
var ammountOfClicks=0;
var playerXpoints=0;
var playerOptionts=0;
for(var i=0;i<cellEls.length;i++){
    cellEls[i].addEventListener("click", function (){
        if(this.innerHTML ==""){
            ammountOfClicks++;
            if(ammountOfClicks%2!=0){
                this.innerHTML ="X";
                checkWinner("X");
            }
            else{
                this.innerHTML ="O";
                checkWinner("O");
            }
        }
        else{
            alert("This cell is already filled in");
        }
    });
}
function resetGame(){
    setTimeout( function (){
        for (var i=0;i<cellEls.length;i++){
            cellEls[i].innerHTML="";
        }
    }, 1000);
}
function checkWinner(char){
    var cell1=document.querySelector(".js-cell1").innerHTML;
    var cell2=document.querySelector(".js-cell2").innerHTML;
    var cell3=document.querySelector(".js-cell3").innerHTML;
    var cell4=document.querySelector(".js-cell4").innerHTML;
    var cell5=document.querySelector(".js-cell5").innerHTML;
    var cell6=document.querySelector(".js-cell6").innerHTML;
    var cell7=document.querySelector(".js-cell7").innerHTML;
    var cell8=document.querySelector(".js-cell8").innerHTML;
    var cell9=document.querySelector(".js-cell9").innerHTML;
    if(
        //horizontaly
        (cell1 ==char && cell2== char&& cell3==char)||
        (cell4 ==char && cell5== char&& cell6==char)||
        (cell7 ==char && cell8== char&& cell9==char)||
        // vertial
        (cell1==char && cell4==char&&cell7==char)||
        (cell2==char && cell5==char&&cell8==char)||
        (cell3==char && cell6==char&&cell9==char)||
        //digonal
        (cell1==char && cell5==char&&cell9==char)||
        (cell3==char && cell5==char&&cell7==char)
    ){
        if(char=="O"){
            playerOptionts++;
            document.querySelector(".js-score-o").innerHTML=playerOptionts;
            resetGame();
        }
        else if(char=="X"){
            playerXpoints++;
            document.querySelector(".js-score-x").innerHTML=playerXpoints;
            resetGame();
        }
    }
    if(ammountOfClicks==9)
        resetGame();
    
}