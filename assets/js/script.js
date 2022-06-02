

var username = prompt("Please enter your username: ");
            if (username != null) {
        document.getElementById("welcome").innerText =
        "Welcome, " + username + "!";
    }
   
function beginnerGame()  {
        document.getElementById("beginner-button").addEventListener("click", startBeginnerGame);
        alert("Start Beginner Game!")
     
    
    //function startBeginnerGame() {
     //   alert("Start Beginner Game!")
     
    //}
}

function advancedGame() {
        document.getElementById("advanced-button").addEventListener("click", startAdvancedGame);
        alert("Start Advanced Game!")
    
    //function startAdvancedGame(){
    //    alert("Start Advanced Game!")
    //}  
}  
  
   /* let buttons = document.getElementsByTagName("button");
        
    
        for (let button of buttons) {
            button.addEventListener("click", function() {
                if (this.getAttribute("data-type") === "selection1") {
                    alert("Start Beginner Game!");
                } 
                else (this.getAttribute("data-type") === "selection2") {
                    alert("Start Advanced Game!");
            }    
       
    
   
    
    var username = prompt("Please enter your username: ");
        if (username != null) {
        document.getElementById("welcome").innerText =
        "Welcome, " + username + "!";
    }
/* 

function beginnerGame()  {
    document.getElementById("beginner-button").addEventListener("click", startBeginnerGame);

function startBeginnerGame() {
    alert("Start Beginner Game!")
 
}

}  

function advancedGame() {
    document.getElementById("advanced-button").addEventListener("click", startAdvancedGame);

function startAdvancedGame(){

}

}
*/
        