 var cards=["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
shuffle(cards);
cards.forEach(card=> console.log(card));

function shuffle(array){
    var currentIndex =array.length;
    while(currentIndex !=0){
        var randomIndex=-Math.floor(Math.random()* array.length);
        currentIndex-=1;
        var temp= array[currentIndex];
        array[currentIndex]=array[randomIndex];
        array[randomIndex] =temp;
    }
    return array;
}

// nested function 
var userName= "shahin";
var userInbox= 0;


login();
function login(){
dsiplayUserName();
displayUserInbox();
    function dsiplayUserName(){
        console.log('welcome '+userName);
    }
    function displayUserInbox(){
        console.log('you have ' + userInbox +' new message');
    }
}
// map = object that holds key- value 
 const store=new Map([
    ["t-shirts",20],
    ["jeans",30],
    ["shockes",10],
    ["underware",50],
 ]);

var shoppinngCards=0;
shoppinngCards+=store.get("t-shirts");
shoppinngCards+=store.get("jeans");
store.set("hat",29);
console.log(shoppinngCards);
console.log(store.has("underware"));
console.log(store.size);

 store.forEach((value,key)=> console.log(key + " $" +value));

 // object orentitent 

 const car ={
    model: "Mustang",
    color: "red",
    year: 2023,
    drive: function(){
        console.log("You drive the car");
    },
    break: function(){
        console.log("You step on the breaks");
    }
 }
 console.log(car.model);
 console.log(car.color);
 console.log(car.year);

 car.drive();
 car.break();

 const car2 ={
    model: "muhin",
    color: "green",
    year: 2029,
    drive: function(){
        console.log("You drive the car");
    },
    break: function(){
        console.log("You step on the breaks");
    }
 }
 console.log(car2.model);
 console.log(car2.color);
 console.log(car2.year);

 car2.drive();
 car2.break();

 // this key word 

window.name="myCoolwindow";
console.log(window.name);

// classs ==> creating obj 
 //                     => define properties and methode
 //                    => use for the unique properties
 
class player{
    score =0;
    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("you exieted the game");
    }
}
const player1= new player();
const player2= new player();
player1.score+=1;
player2.score-=1;
console.log(player1.score);
console.log(player2.score);
player1.pause();
player1.exit();
player2.pause();
player2.pause();

// constactor 

class Student{
    constructor (name, age, gpa){
        this.name= name;
        this.age= age;
        this.gpa= gpa;
        
    }
    study(){
        console.log(this.name + " is studing");

    }
}
const student1= new Student("shahin",23,3.12);
const student2= new Student("tuhin",25,3.70);
const student3= new Student("sandy",21,4.70);
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();

console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
student3.study();