var buttonEl=document.querySelector(".js-send");
var inputEl=document.querySelector(".js-user-message");

/* buttonEl.addEventListener("click",function(){
    console.log(inputEl.value);
    var rowElement=document.createElement("div");
    rowElement.classList.add("message-row");
    //create message
    var messageEl=document.createElement("div");
    messageEl.classList.add("message");
    messageEl.innerHTML=messageEl.ariaValueMax;
    console.log("rowElement.value")
}) */
var positivePhrases=[
    "Good for you, pall",
    "Nice, brah",
    "CRAZYYYY",
    "Totally tubular, dude!",
    "Radical moves!",
    "Sick, my man!",
    "That's gnarly!",
    "Keep shreddin'!",
    "Whoa, epic!",
    "Stoked for you, bro!",
    "You're killin' it!",
    "Dope skills!",
    "That's the spirit, skater!",
    "Ridin' high, my friend!",
    "You're on fire!"
];
var negativePhrases=[
        "Bummer, dude",
        "That's rough, brah",
        "Not cool, man",
        "Wipeout, huh?",
        "Harsh times, bro",
        "That's a drag",
        "Not the sickest move",
        "Dude, that's a no-go",
        "Totally bailed that one",
        "Skate or die, but that was close",
        "Rough ride, my friend",
        "Not your best trick",
        "Gotta bail on that idea",
        "Whoa, crash and burn",
        "Skatin' on thin ice there"
];
buttonEl.addEventListener("click",function(){
    addMessage(inputEl.value,false);

    if(inputEl.value.toLowerCase().includes("hello")==true){
        addMessage("Hiiii",true);
    }
    else if(inputEl.value.toLowerCase().includes("how are you") == true){
        addMessage("Fine and you?",true);
    }
    else if(
        inputEl.value.toLowerCase().includes("great") ||
        inputEl.value.toLowerCase().includes("fine") || 
        inputEl.value.toLowerCase().includes("perfect") ||
        inputEl.value.toLowerCase().includes("excellent") || // Synonym for great
        inputEl.value.toLowerCase().includes("superb") ||   // Synonym for great
        inputEl.value.toLowerCase().includes("wonderful") || // Synonym for great
        inputEl.value.toLowerCase().includes("marvelous") || // Synonym for great
        inputEl.value.toLowerCase().includes("satisfactory") || // Synonym for fine
        inputEl.value.toLowerCase().includes("decent") || // Synonym for fine
        inputEl.value.toLowerCase().includes("adequate") || // Synonym for fine
        inputEl.value.toLowerCase().includes("flawless") || // Synonym for perfect
        inputEl.value.toLowerCase().includes("impeccable") || // Synonym for perfect
        inputEl.value.toLowerCase().includes("faultless") || // Synonym for perfect
        inputEl.value.toLowerCase().includes("pristine") // Synonym for perfect  
    ){
        var randomIndex =Math.floor(Math.random()*positivePhrases.length);
        addMessage(positivePhrases[randomIndex],true);
    }
    else if(
        inputEl.value.toLowerCase().includes("bad") || // Antonym for great
        inputEl.value.toLowerCase().includes("poor") || // Antonym for fine
        inputEl.value.toLowerCase().includes("imperfect") || // Antonym for perfect
        inputEl.value.toLowerCase().includes("terrible") || // Antonym for great
        inputEl.value.toLowerCase().includes("awful") ||   // Antonym for great
        inputEl.value.toLowerCase().includes("horrible") || // Antonym for great
        inputEl.value.toLowerCase().includes("dreadful") || // Antonym for great
        inputEl.value.toLowerCase().includes("unsatisfactory") || // Antonym for fine
        inputEl.value.toLowerCase().includes("inferior") || // Antonym for fine
        inputEl.value.toLowerCase().includes("inadequate") || // Antonym for fine
        inputEl.value.toLowerCase().includes("flawed") || // Antonym for perfect
        inputEl.value.toLowerCase().includes("defective") || // Antonym for perfect
        inputEl.value.toLowerCase().includes("faulty") || // Antonym for perfect
        inputEl.value.toLowerCase().includes("blemished") // Antonym for perfect
    ){
        var randomIndex =Math.floor(Math.random()*negativePhrases.length);
        addMessage(negativePhrases[randomIndex],true);
    }
    inputEl.value="";
});

function addMessage(message, isBoat){
    //create row elements
    var rowElement=document.createElement("div"); //<div></div>
    rowElement.classList.add("message-row"); //<div class="message-row"></div>
    if(isBoat) rowElement.classList.add("message-bot");

    //create message
    var messageEl=document.createElement("div"); //<div></div>
    messageEl.classList.add("message"); //<div class="message"></div>
    messageEl.innerHTML=message; // <div class="message"></div>
    rowElement.appendChild(messageEl); //<div class="message">How are you</div>

    document.querySelector(".chatbox-messages").appendChild(rowElement);
}

