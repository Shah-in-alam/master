// array = think of it as a veriable 
//  that can store multiple values

var fruit =["apple","orange","banana"];
fruit.push("lemon");
fruit.pop();
fruit.unshift("mango");
fruit.shift();
var len =fruit.length;
console.log(len);

// array of length 

 var prices =[2,5,67,89,3];
for(var i=prices.length;i>=0;i--){
    console.log(prices[i]);
} 
//sorting arrqay of string 
var fruits= ["banana","mango","kiwi","orange"];

fruits.sort().reverse();

for(var fruit of fruits){
    console.log(fruit);
}
//2d array
var fruit =   ["apple","orange","lemon"];
var vegetable=["carrotes","onions","potatoes"];
var meats=    ["eggs","chicken","fish"];
var grocery=  [fruit,vegetable,meats];

grocery[1][2]=["steak" ,"gool"];

for(var list of grocery){
    
    for(var food of list){
        console.log(food);
    }   
}

//spread operatoer
var number =[1,2,3,4,5,6,7,8,9];
var maximum=Math.max(...number);
console.log(number);
console.log(maximum);


var class1= ["shahin","tuhin","nahin"];
var class2=["tomas","sandy","sargey"];
class1.push(...class2);
console.log(...class1);

var a =1;
var b=2;
var c=3;
var d=5;

console.log(sum(a,b,c,d));

function sum(...numbers){
    var total =0;
    for(var number of numbers){
        total+=number;
    }
    return total;
}
/// call back
var total =sum(2,5);
displayDOM(total);
function sum(x,y){
    var result =x+y;
    return result;
}
function displayConsole(output){
    console.log(output);
}
function displayDOM(output){
    document.getElementById("myLabel").innerHTML =output;
}

//ARRAY FOREACH ()
var students=["shahin","muhin","mujahid"];
students.forEach(capitalized);
students.forEach(print);
function capitalized(element, index,array){
    array[index]=element[0].toUpperCase()+element.substring(1);

}

function print (element){
    console.log(element);
}

// array map
var numbers =[1,2,3,4,5,6,7,8];
var squares =numbers.map(square);
squares.forEach(print);

function square(element){
    return Math.pow(element,2);
}
function print(element){
    console.log(element);
}
//array filter methode
var age=[18,23,12,13,45,17,78,90];
var adults=age.filter(checkage);
adults.forEach(print);

function checkage(element){
    return element >=18;

}
function print(element){
    console.log(element);
}
// array reduce
var prices=[5,6,8,24,56,30];
var total =prices.reduce(checkOut);
console.log("the total "+total);

function checkOut(total, element){
 return total + element;
}

// student grade

var grades=[100,50,60,70,40,80];
grades=grades.sort(descendingSort);
grades.forEach(print);
function descendingSort(x,y){
    return y-x;
}
function print(element){
    console.log(element);
}
//function argument 
//methode 1
/* var count=0;
function increaseCount(){
    count+=1;
    document.getElementById("myLabel").innerHTML =count;
}
function decreaseCount(){
    count-=1;
    document.getElementById("myLabel").innerHTML =count;
}
 */
/// methode 2
var count =0;

document.getElementById("increasebtn").onclick = function(){
        count+=1;
        document.getElementById("myLabel").innerHTML =count;
    
}
document.getElementById("decreasebtn").onclick = function(){
    count-=1;
    document.getElementById("myLabel").innerHTML =count;

}
//arrow function exprection . an alternative of the traditional function
const persent = (x,y)=> x/y *100;
console.log('persent '+ persent(37,45)+'%');

//arro sort function 
var grades= [100,34,45,56,67,78,94];
grades.sort((x,y)=> x-y);
grades.forEach((element) => console.log(element));