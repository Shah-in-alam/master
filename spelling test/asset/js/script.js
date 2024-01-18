var correctAttempts=0;
function checkSpell(){
    var spellInput= document.getElementById("spellInput");
    var resultEl=document.getElementById("result");
    var attemptsEl=document.getElementById("attemptsCount");

    var enteredSpell=spellInput.value;

    var rightSpells= ["Accio", "Alohomora", "Alarte Ascendare"];

    if(rightSpells.includes(enteredSpell)){
       
        spellInput.value ="";
        correctAttempts++;
        attemptsEl.textContent=correctAttempts;
        resultEl.textContent = "";
    }
    else if(enteredSpell.includes!=rightSpells){
        resultEl.textContent="Not a correct spell";
        resultEl.style.color ="red";
        
    }
}