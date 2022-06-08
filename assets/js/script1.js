
var answers = [];
var questions = [];
var username;

window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
    greeting();
});

//Username for the game
function greeting(){
    var username = prompt("Please enter your username: ");
           if (username != null) {
    document.getElementById("welcomeText").innerHTML = "Hello " + username + ", Welcome to my Quiz!";
           }
 
}


   
//Select level of game to be played
  
    let buttons = document.getElementsByTagName("button");
        
    
        for (let button of buttons) {
            button.addEventListener ("click", function(){
                if (this.getAttribute("data-type") === "selection1") {
                   
                } else (this.getAttribute("data-type") === "selection2"); {
                    
        }
    })
}

let startButton = document.getElementById("start-btn")
let option1 = document.getElementById("selection1")
let option2 = document.getElementById("selection2")
let option3 = document.getElementById("selection3")
let option4 = document.getElementById("selection4")
let option5 = document.getElementById("selection5")
let option6 = document.getElementById("selection6")
let option7 = document.getElementById("selection7")
let option8 = document.getElementById("selection8")

startButton.addEventListener("click", startGame)
startButton.addEventListener("click", updateTimer)

var timer; 
var timeLeft = 60; 
timer = setInterval(updateTimer, 1000);
         updateTimer();



//shuffledAnswers = quiz.answers.sort(Math.random - .5)



function updateTimer() {
    timeLeft = timeLeft - 1;
    if(timeLeft >= 0)
    document.getElementById("time-keeper").innerHTML = timeLeft
    //restartTimer()
}

 //restartTimer = clearInterval(this.interval);
    //    timer = setInterval(updateTimer, 1000);
     //           updateTimer();       

     //   this.count = this.countFrom;
    //    this.interval = setInterval((this.tick).bind(this), 1000)
    
    


function startGame(){
    const targetDiv = document.getElementById("hidden");
    targetDiv.style.display = "block";

   fetch("https://opentdb.com/api.php?amount=50&difficulty=hard&type=multiple")
   .then(response => response.json()) // or .json()
   .then(data =>  {  
    
    
   
    const quiz = data.results[0];
         document.getElementById("category").innerHTML=' Category:' + quiz.category+ '' 
         document.getElementById("difficulty").innerHTML=' Difficulty: ' + quiz.difficulty+ ''
         document.getElementById("question").innerHTML=' Question:' + quiz.question+ '' 

         answers = [quiz.correct_answer, quiz.incorrect_answers[0],quiz.incorrect_answers[1], quiz.incorrect_answers[2]]
         answers.sort();
         //Math.floor(Math.random(answers) * 4);
         console.log(answers)
         

         
    
         document.getElementById("answer1").innerHTML= ' '+ answers[0]+ ''
         document.getElementById("answer2").innerHTML=' ' + answers[1]+ ''
         document.getElementById("answer3").innerHTML=' ' + answers[2]+ ''
         document.getElementById("answer4").innerHTML=' ' + answers[3]+ ''
         console.log(quiz)             
    
   })
          .catch((e) => {
              console.log("Error: ", e);
          })

} 

  // let answers =  this.data.quiz.incorrect_answers + this.data.quiz.correct_answer;
  
// Randomly set location of correct answer
//let rand = Math.floor(Math.random() * 4);
//answers.splice(rand, 0, this.data.quiz.correct_answer);
//answers = rand;


//answers = [quiz.correct_answer + quiz.incorrect_answers[0][1][2]];
         //Math.floor(Math.random() * 4);
         //console.log(answers)

         //showNumberOfQuestions() {
        // var questionlist = quiz.questions.length;
         //console.log(questionlist);
        // }

         


         


let button1 = document.getElementById("answer1")
button1.addEventListener("click", () => {
if (button1.value === data.correct_answer){
    alert("you are correct")
    incrementScore();
} else {
    alert("you are incorrect")
    incrementWrongAnswer();
}
startGame()
})

/*let button1 = document.getElementById("answer1")
button1.addEventListener("click", () => {
alert("You are correct")
incrementScore();
startGame()
})*/

let button2 = document.getElementById("answer2")
button2.addEventListener("click", () => {
alert("You are incorrect")
incrementWrongAnswer();
startGame()
})
    
let button3 = document.getElementById("answer3")
button3.addEventListener("click", () => {    
alert("You are incorrect")
incrementWrongAnswer();
startGame()
})

let button4 = document.getElementById("answer4")
button4.addEventListener("click", () => {
alert("You are incorrect")
incrementWrongAnswer();
startGame()
})



/*function correctness() {
    if (this.button1.value === "correct_answer"){
       alert("Correct!");
   } else { 
       alert("Incorrect")
       
 }*/


//Scoring for the Game

function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    
}

function showRandomAnswers(){  
    answers = quiz.correct_answer + quiz.incorrect_answers
    
    answers.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    console.log(answers);
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
/*(function(){
   
  
    let timer = {
      interval: 1000,
      countFrom: 60, // second
      count: this.countFrom,
      progressView: document.getElementById('timer'),

      restart: function() {
        if (this.interval) {
          clearInterval(this.interval);
        }

        this.count = this.countFrom;
        this.interval = setInterval((this.tick).bind(this), 1000);
      }
    }
})*/