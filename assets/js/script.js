alert("this is a test message")

//Username for the game

var username = prompt("Please enter your username: ");
            if (username != null) {
        document.getElementById("welcome").innerText =
        "Welcome, " + username + "!";
    }
   
//Select level of game to be played
  
    let buttons = document.getElementsByTagName("button");
        
    
        for (let button of buttons) {
            button.addEventListener ("click", function(){
                if (this.getAttribute("data-type") === "selection1") {
                    alert("Start Beginner Game!")
                } else (this.getAttribute("data-type") === "selection1"); {
                    alert("Start Advanced Game!")
        }
    })
}

const startButton = document.getElementById("start-btn")

startButton.addEventListener("click", startGame)

function startGame(){
    console.log("starting game!")

}


function selectNextQuestion(){

}

function selectAnswer(){

}