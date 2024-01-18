var btnEl=document.querySelector(".js-screambtn");
var inputEl =document.querySelector(".js-input");

btnEl.addEventListener("click", function (){
    window.alert(inputEl.value);
})