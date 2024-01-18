function prime(number){
    if(number<=1){
        return false;
    }
    for(var i=2;i<=Math.sqrt(number);i++){
        if(number%i==0){
            return false;
        }
    }
    return true;
}
 function Divisor(number){
    const divisors=[];
    for(var i=1;i<=number;i++){
        if(number%i==0){
            divisors.push(i);
        }
    }
    return divisors;
 }
function checkprime(){
    const inputEl=document.getElementById("inputbtn");
    const resultEl=document.getElementById("result");

    const numberInput=parseInt(inputEl.value);
    if(isNaN(numberInput)){
        resultEl.textContent="Enter valid number";
        return;
    }
    const numberPrime=prime(numberInput);
    const divisors=Divisor(numberInput);
    if(numberPrime){
        resultEl.textContent = ">> "+numberInput + " >>" + " true";

    }
    else{
        resultEl.textContent= ">> "+numberInput + " >>" + " false " + divisors.join(" ");
    }
}