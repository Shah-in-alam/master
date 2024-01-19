/* var userName =window.prompt("what is your name");
console.log(userName); */

/* var userName;
document.getElementById("myButton").onclick=function()
{
    username=document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML="Hello"+username;
} */


/* var age= window.prompt("How old are you?");
console.log(typeof age);
age=Number(age);
age+=1;
console.log("happy birth ",age,"year old"); */


/* var x;
var y;
var z;
x=Number("pizza");
y=String(3.14);
z=Boolean(true);
console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z); */

/* var pi=3.14159;
var radius;
var curcumentence;
radius=window.prompt("Enter the the radius ");
radius =Number(radius);
curcumentence=2*radius*pi;
console.log("The circumenfrance is : ",curcumentence); */

/* 
var x=3.14;
var y= 5;
var z=9;
var maximum;
var minimum;
  //x=Math.round(x);
  //x=Math.floor(x);
 //x=Math.ceil(x);
 //x=Math.pow(x,2);
// x=Math.sqrt(x)
// x=Math.abs(x);

//maximum=Math.max(x,y,z);
console.log(maximum); */


/* var a;
var b;
var c;
a=window.prompt("Enter side a");
a=Number(a);
b=window.prompt("Enter side b");
b=Number(b);
c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
console.log("side c: ",c); */

/* document.getElementById("submitButton").onclick=function(){
  a=document.getElementById("aTextBox").value;
a=Number(a);
b=document.getElementById("bTextBox").value;
b=Number(b);
c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
document.getElementById("clabel").innerHTML="Side C: " + c ;
} */


/// Counting
/* var count =0;

document.getElementById("decreaseBtn").onclick = function(){
    count -=1;
    document.getElementById("countLabel").innerHTML=count;
}
document.getElementById("resetBtn").onclick = function(){
  count =0;
  document.getElementById("countLabel").innerHTML=count;
}
document.getElementById("increaseBtn").onclick = function(){
  count +=1;
  document.getElementById("countLabel").innerHTML=count;
} */

/// game:random number;;

/* var x;
var y;
var z;
 x=Math.floor(Math.random()*6)+1;
 y=Math.floor(Math.random()*6)+1;
z=Math.floor(Math.random()*6)+1;

document.getElementById("rollButton").onclick = function (){
  x=Math.floor(Math.random()*6)+1;
  y=Math.floor(Math.random()*6)+1;
 z=Math.floor(Math.random()*6)+1;

 document.getElementById("xlabel").innerHTML=x;
 document.getElementById("ylabel").innerHTML=y;
 document.getElementById("zlabel").innerHTML=z;
}
 */

// useful string properties & methods

/* var userName="bro code   ";
var phoneNumber =  "123-456-7890";
console.log(userName.length);
console.log(userName.charAt(1));
console.log(userName.indexOf("c"));
consconsole.log(userName).lastindexOf("c");
userName= userName.trim(); //space will remove
userName= userName.toUpperCase(); //converting in to uppercase
console.log(userName);
phoneNumber=phoneNumber.replaceAll("-","");
userName.
console.log(phoneNumber); */

// slice  () extracts a section of a string
//    and returns it as a new string
//  without modifiying the original string
/* 
var fullName="Snoop Doggg";
var fullName="BRO CODE";
var firstName;
var lastName;
//firstName=fullName.slice(0,3);
//lasttName=fullName.slice(4);
firstName=fullName.slice(0,fullName.indexOf(" "));
lastName=fullName.slice(fullName.indexOf(" ")+1);
console.log(firstName);
console.log(lastName); */

// methode chaining = calling one methode after anther
//         in one countinious line of code

/* var userName =" bro";
var letter =userName.charAt(2).toUpperCase().trim();
console.log(letter); */

/// if statement = a basic from of decision making 
//           if  a condition is true  than do something
//     if not than don't do it!

/*
let age =65; 
if(age>18)
{
 console.log("you are an adult");
}
else if(age<0)
{
  console.log("you are not brown");
}
else if(age<=65)
{
  
  console.log("you have not ");
}
else{
  console.log("you need some more time");
}*/
/*
var online =true;
if(online)
{
  console.log(online);
}
else{
  console.log("you are not online");
}*/


// checkbox

/* document.getElementById("myButton").onclick = function(){
  const myCheckBox=document.getElementById("myCheckbox");
  const visaBtn=document.getElementById("visaBtn");
  const mastercardBtn=document.getElementById("mastercardBtn");
  const paypalBtn=document.getElementById("paypalBtn");
  if(myCheckBox.checked)
  {
    console.log("you are subscribe");

  }
  else{
    console.log("you are  not subscribe");
  }
  if(visaBtn.checked)
  {
    console.log("you are payiong with a visa");
  }
 else if(mastercardBtn.checked)
  {
    console.log("you are paying with a master card");
  }
 else if(paypalBtn.checked)
  {
    console.log("you are paying with paypal card");
  }
 else{
  console.log("you must selsect a card");
 }
} */


// /switch case = statement that eximies a value 
//    for match a 

/* 
var grade ="pizza";
 switch(grade)
 {
   case"A":
   console.log("you did great");
   break;
   case"B":
   console.log("you did OKEY");
   break;
   case"C":
   console.log("you did not bad");
   break;
   case"D":
   console.log("you passed by this time... man");
   break;
   case"F":
   console.log("you FAILED !");
   break;
   default:
   console.log(grade,"is not a letter grade");
 } */

 // give   && and logical operator 
 // ||  or 

 /* var temp= 23;
 var sunny= true;
 if(temp>0 && temp< 30 && sunny)
 {
  console.log("wether is good");
 }
 else{
  console.log("wether is bad");
 } */

 //not logical op 
 // tepically used to reverse a  condition 
 // true -> falser

 /* var temp=15;
 var sunny= true;
 if(!temp>0)
 {c
  onsole.log("its  cold coutside");
 }
 else{
  console.log("it;s warm outside");
 }
 if(sunny)
 {
  console.log(" it is sunny not outside");
 }
 else{
  console.log("itis sunny out side")
 } */


 //  while loop = repit the some code 
 //     while some cosndition is true

/*  var userName=" ";
  while( userName==" " || userName==null){
    userName=window.prompt("Enter your name");
  }
  console.log( "Hello", userName);
 */
/* var userName= "";
while( userName== "" || userName == null){
  userName= window.prompt("Enter your name");
 
}
console.log("Hello",userName);

 */



/// for loop 
/* 
 for( var i=10;i>0;i--){
  console.log(i);
}
 document.getElementById("jscount").innerHTML="HAPPY NEW YEAR";
    
 */


 //brak  and continue

/*  for(var i=1;i<=20;i++)
 {
  if(i==13){
    console.log("i love you man");
    continue;
  }
 console.log(i);
 }
  */

 // nested loop
 /* var syumbel=window.prompt("enter A  symbel to use");
 var rows=window.prompt("enter a numbe r of rows");
 var columns= window.prompt("Enter # of columns");
 for(var i=1;i<=rows; i++)
 {
  for(var j=1;j<=columns;j++)
  {
    document.getElementById("myrac").innerHTML+=syumbel;
  }
  document.getElementById("myrac").innerHTML+= "<br>";
 } */

  //function == defien
  //  
  /* startprogram();
 function startprogram(){
  var userName ="shahin alam";
 var age=21;
happabirthday(userName,age);
 }

 function happabirthday(userName,age){
console.log("Happy birthdayvto you!");
console.log("Happy birthdayvto you!");
console.log("Happy birthdayvto you!",userName);
console.log("Happy" ,age , " birthdayvto you!");
 } */


 //return satement
//
/*  
var area;
var width;
var height;
width =window.prompt("Enter  the width ");
height=window.prompt("Enter the heigth");
area=getarea(width,height);
console.log("The are is a: ",area);
function getarea(width, heigth){
 var result =width* height;
 return result;
} */

// ternary opertor =shorts for an if/ else

// condition? exceptiontrue : expetionfalse

var adult= checkage(21);
console.log(adult);
function checkage(age){
 return age>=18? true : false;
  }
  winner(false);
  function  winner(win){
    win? console.log("you win"): console.log("you loss");
  }
 var name="bro";
 dosometihng(name);
  function dosometihng(name){
    for(var i=1;i<=3;i++){
      //console.log(i);
      for(var j=1;j<=3;j++){
        for( var k=1;k<=3;k++){
          console.log(k);
        }
      }

    }
  }


  var name="bro";



  var myNum=100;
  //myNum=myNum.toLocaleString("en-US"); //US EMGLISH
 // myNum=myNum.toLocaleString("hi-IN"); // HINDI
  //myNum=myNum.toLocaleString("de-DE"); //GERMAN
 // myNum=myNum.toLocaleString("en-US",{style:"currency", currency:"USD"});
/* myNum= myNum.toLocaleString(undefined,{style: "unit", unit: "celsius"});
 console.log(myNum);
 */

 
const answer =Math.floor(Math.random()*10+1);
var guesses =0;
document.getElementById("submitButton").onclick =function (){
  let guess =document.getElementById("guessfield").value
  guesses++;
  if(guess==answer){
    alert("${answer} is the #. it took you {guesses} guess");
  }
  else if(guess< answer){
    alert("Too small !");
  }
  else{
    alert("too big");
  }
}
