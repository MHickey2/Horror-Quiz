




//Username for the game

/*var username = prompt("Please enter your username: ");
            if (username != null) {
        document.getElementById("welcome").innerText =
        "Welcome, " + username + "!";
    }*/
   
//Select level of game to be played
  
    let buttons = document.getElementsByTagName("button");
        
    
        for (let button of buttons) {
            button.addEventListener ("click", function(){
                if (this.getAttribute("data-type") === "selection1") {
                   
                } else (this.getAttribute("data-type") === "selection1"); {
                    
        }
    })
}

let startButton = document.getElementById("start-btn")

startButton.addEventListener("click", startGame)
//startButton.addEventListener("click", updateTimer)

var timer; 
var timeLeft = 60; 

timer = setInterval(updateTimer, 1000);

const newLocal = $('#timer').html(timeLeft);
//shuffledAnswers = quiz.answers.sort(Math.random - .5)



function updateTimer() {
    timeLeft = timeLeft - 1;
    if(timeLeft >= 0)
    document.getElementById("time-keeper").innerHTML = "timeLeft"
    
  }

function startGame(){

   fetch("https://opentdb.com/api.php?amount=50&difficulty=hard&type=multiple")
   .then(response => response.json()) // or .json()
   .then(data => {
   
    
   
    const quiz = data.results[0];
         document.getElementById("category").innerHTML=' Category:' + quiz.category+ '' 
         document.getElementById("difficulty").innerHTML=' Difficulty: ' + quiz.difficulty+ ''
         document.getElementById("question").innerHTML=' Question:' + quiz.question+ ''
         document.getElementById("answer1").innerHTML= ' '+ quiz.correct_answer+ ''
         document.getElementById("answer2").innerHTML=' ' + quiz.incorrect_answers[0]+ ''
         document.getElementById("answer3").innerHTML=' ' + quiz.incorrect_answers[1]+ ''
         document.getElementById("answer4").innerHTML=' ' + quiz.incorrect_answers[2]+ ''
         console.log(quiz)
         
         
    
    
   })
          .catch((e) => {
              console.log("Error: ", e);
          })

} 


let correctButton = document.getElementById("answer1")
correctButton.addEventListener("click", () => {
alert("You are correct")
incrementScore();
startGame()
})

let incorrectButton = document.getElementById("answer2")
correctButton.addEventListener("click", () => {
alert("You are correct")
incrementScore();
startGame()
})
correctButton.addEventListener("click", () => {
alert("You are correct")
incrementScore();
startGame()
})
incorrectButton.addEventListener("click", () => {
alert("You are incorrect")
    incrementWrongAnswer();
startGame()
})

function checkAnswer(id) {
    /*if(id=="answer1")
     document.getElementById("answer1").style.backgroundColor ="green"; 
    else (id !=="answer1")
     document.getElementById("incorrect_answer").style.backgroundColor = "red";*/
     
    /* let isCorrect = userAnswer === correct_answer[0];
     if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${correct_answer[0]}!`);
        incrementWrongAnswer();
    }*/
}



function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    
}




       /*   fetch("https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple")
  .then(result => JSON.parse(result))
  .then(resultParsed => {
    displayData(resultParsed)
    console.log(resultParsed)
  })
  .catch((e) => {
    console.log("Error: ", e);
})*/var quiz;

          function displayData() {

            //document.getElementById("category").innerHTML=' Category: ' + quiz.category +''
           // document.getElementById("difficulty").innerHTML=' Difficulty: ' + quiz.difficulty+ ''
           // document.getElementById("question").innerHTML=` Question: ${resultParsed[0].question}`
            //document.getElementById("category").innerHTML = 'Question: ' + quiz[0].question + ' ' + quiz[0].correct_answer;
            //var mainContainer = document.getElementById("content");
           // for (var i = 0; i < quiz.length; i++) {
              
             // document.getElementById("category").innerHTML = 'Question: ' + quiz[0].category + ' ' + quiz[0].correct_answer; /*document.querySelector("#category").innerHTML = `Results: ${quiz.results[0].category}`
            // document.querySelector("#difficulty").innerHTML = `Difficullty: ${quiz.results[0].difficulty}`
             //document.querySelector("#question").innerHTML = `Question: ${quiz.results[0].question}`
            

             
          }
        

          
             
          
          
          
        
     

     /* const questions = [
        {
        question: 'What is your name?',
        answers: [
            {text: 'John', correct: false},
            {text: 'Bob', correct: false},
            {text: 'Mel', correct: true},
            {text: 'Bill', correct: false}
        ]
    }
    ]

    function displayQuestionSelection(questions) {
        document.getElementById("content").innerHTML = "questions[0].question";
        document.getElementById("category").innerHTML = "questions[0].answers";
        console.log(questions);
    }

    displayQuestionSelection(questions); 

     /* function appendData(data) {
          var mainContainer = document.getElementById("content");
          for (var i = 0; i < data.length; i++) {
              var div = document.createElement("div");
              div.innerHTML = 'Question: ' + data[i].question + ' ' + data[i].correct_answer;
              mainContainer.appendChild(div);
          }
      }

/*document.getElementById("content").innerText =
      fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple")
      .then((response) => response.json())
      .then((data) 
          
          .catch((e) => {
              console.log("Error: ", e);
          })

      /*function displayData(data) {
          document.getElementById("content").innerText = JSON.parse(this.responseText);
      }*/

      /*function displayData(data) {
          document.getElementById("content").innerText = data;
          console.log(data);
      }*/

     /* function load() {
              var data = JSON.parse(data);
              alert(data.length);

              var div = document.getElementById('content');

              for(var i = 0;i < data.length; i++)
              {
                  div.innerHTML = div.innerHTML + "<p class='inner' id="+i+">"+ data[i].name +"</p>" + "<br>";
              }
          }
*/
  /*       function initGame() {
// Pre populates DOM with loading message while waiting for data from API
document.getElementById("question-question").innerText =
  "Loading Question 1...";
// Fetch 10 questions from API from general knowledge category
fetch("https://opentdb.com/api.php?amount=15&category=${questionId}&difficulty=${difficulty}&type=multiple`")
  .then((response) => response.json())
  .then((data) => {
    formatData(data);
    console.log(data);
  })
  .catch(() => {
    alert("Error getting data from OpenTDB API...");
  });
}  */
 