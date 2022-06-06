
//Username for the game

/*var username = prompt("Please enter your username: ");
            if (username != null) {
        document.getElementById("welcome").innerText =
        "Welcome, " + username + "!";
    }*/
   
//Select level of game to be played, you will be redirected to game choice
  
    let buttons = document.getElementsByTagName("button");
        
    
        for (let button of buttons) {
            button.addEventListener ("click", function(){
                if (this.getAttribute("data-type") === "selection1") {
                    window.location.href = "game.html";
                } else (this.getAttribute("data-type") === "selection1"); {
                    window.location.href = "gameAdvanced.html";
        }
    })
}

const questionContainerElement = document.getElementById('question-container')
const answerElement = document.getElementById('choice-container')





let shuffledQuestions; 
let currentQuestionIndex = 0;

//Use Start button to begin the game
let startButton = document.getElementById("start-btn")

startButton.addEventListener("click", startGame)
shuffledQuestions = questions.sort((Math.random - .5)


function startGame(){
    

}

let displayQuestion = document.getElementById('question-container')



function setNextQuestion(){
     showQuestions(shuffledQuestions[currentQuestionIndex])

}


function showQuestion(beginnerQuestions){
    questionContainerElement.innerHTML = questions.question;
    answerElement.innerHTML.forEach(answer => {
        constButton = createElement('button')
        button.innerText = answer.text
        button.classlist.add('btn')

    } 

}



const questions = [
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