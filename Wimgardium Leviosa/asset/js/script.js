function myFun(){
   var x=25;
   var logo=document.querySelector(".imageFiled");
   var btnEl=parseInt(getComputedStyle(logo).bottom);
   logo.style.bottom =(btnEl+ x) + "px";
}


