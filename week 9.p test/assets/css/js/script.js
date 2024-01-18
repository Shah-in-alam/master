// get all the hands
var handEls = document.querySelectorAll(".js-hand");
var hands = ["paper","rock","scissors"];

var stopwatch;
// loop over the hands and tell 1 hand to listen
for (var i = 0; i < handEls.length; i++) {
    handEls[i].addEventListener("click", function() {
        var userChoice = this.dataset.sign; 

        // hide step 1, and show step 2
        document.querySelector(".js-step-1").classList.add("hidden");
        document.querySelector(".js-step-2").classList.remove("hidden");

        // Timer
        var seconds = 0;
        stopwatch = setInterval(function() {
            seconds++;
            document.querySelector(".js-seconds").innerHTML = 3 - seconds;
            document.querySelector("h1").innerHTML = "Timer remains " + (3 - seconds) + "seconds";

            if (seconds == 3) {
                clearInterval(stopwatch);
                var randomHand = Math.floor(Math.random() * hands.length);
                var pcChoice = hands[randomHand];
                addPicture(pcChoice);

                // show the winner
                showWinner(userChoice, pcChoice);
            }
        }, 1000);

        // Add the user element inside result
        addPicture(userChoice);

    });

    function showWinner(userChoice, pcChoice) {
        var scoreboardEl = document.querySelector(".js-scoreboard");
        if (userChoice == pcChoice) {
            scoreboardEl.innerHTML =  "tie";
        } else if (
            (userChoice == "paper" && pcChoice == "rock") ||
            (userChoice == "rock" && pcChoice == "scissors") ||
            (userChoice == "scissors" && pcChoice == "paper")
        ) {
            scoreboardEl.innerHTML =  "user win";
        } else {
            scoreboardEl.innerHTML =  "pc win";
        }
    }

    function addPicture(hand) {
        var imgElement = document.createElement("img");
        imgElement.src = "./images/" + hand + ".png";
        document.querySelector(".js-result").appendChild(imgElement);
    }
}