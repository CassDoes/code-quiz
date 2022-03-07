var list = [
    {
        question: "Should I have skipped this homework and done modules instead???",
        answer1: "Obvs.",
        answer2: "two",
        answer3: "three",
        answer4: "four",
        correctAnswer: "1"
    },
    {
        question: "I'm going to request a tutor this week.",
        answer1: "two",
        answer2: "I obviously don't understand functions.",
        answer3: "three",
        answer4: "four",
        correctAnswer: "2"
    },
    {
        question: "Will I do better next week?",
        answer1: "three",
        answer2: "two",
        answer3: "I freakin' hope so.",
        answer4: "four",
        correctAnswer: "3"
    },
    {
        question: "Did I fail at this homework assignment?",
        answer1: "four",
        answer2: "two",
        answer3: "three",
        answer4: "YES. I give up.",
        correctAnswer: "4"
    },
    {
        question: "If this is a terrible quiz, just let the time run out because I forgot to add a callback after the last question.",
        answer1: "duh.",
        answer2: "two",
        answer3: "three",
        answer4: "four",
        correctAnswer: "1"
    },
];

var timerEl = document.getElementById("timer");
var startButtonEl = document.querySelector("#start-quiz");
var highscoreEl = document.querySelector("#highscore");
var questionEl = document.getElementById("question-text");
var quizNumTextEl = document.getElementById("quiz-number");
var optionsEl = document.querySelector(".options");
var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");
var checkAnswerEl = document.getElementById("check-answer");
var feedback = document.getElementsByName("feedback");
var nameInput = document.querySelector(".user");

var introductionEl = document.querySelector(".introduction");
var quizEl = document.querySelector(".quiz-form")
var endQuizEl = document.querySelector(".end-quiz");
var endGameEl = document.querySelector(".play-again");
var displayScoreEl = document.querySelector(".displayHighscore");


quizEl.classList.add("hide");
endQuizEl.classList.add("hide");
endGameEl.classList.add("hide");


function startQuiz() {
    introductionEl.classList.add("hide");
    quizEl.classList.remove("hide");
    endGameEl.classList.add("hide");

    if (score === 0) {
        score = setInterval(function () {
            totalTime--;
            timerEl.textContent = "Time " + totalTime;

            if (totalTime <= 0) {
                clearInterval(score);
                endQuiz();
            }
        }, 1000);
    } 
    quizBegin();
};

var score = 0;
var penalty = 10;
var totalTime = 41;
var currentQuestionList = 0;
var lastQuestion = list.length;

function quizBegin() {
    var currentQuestion = list[currentQuestionList];
        questionEl.innerHTML = currentQuestion.question;
        button1.textContent = currentQuestion.answer1;
        button2.textContent = currentQuestion.answer2;
        button3.textContent = currentQuestion.answer3;
        button4.textContent = currentQuestion.answer4;
};

function checkAnswer(answer) {
    correct = list[currentQuestionList].correctAnswer;
    
    if (answer === correct && currentQuestionList !== lastQuestion) {
        currentQuestionList++;
        quizBegin();
        document.querySelector(".feedback").innerHTML = "CORRECT!"
    } else if (answer !== correct && currentQuestionList !== lastQuestion) {
        currentQuestionList++;
        totalTime = totalTime - penalty;
        timerEl.textContent = "Time: " + totalTime;
        quizBegin();
        document.querySelector(".feedback").innerHTML = "Incorrect! You've lost 10 seconds!"
    }
};

function endQuiz() {
    endQuizEl.classList.remove("hide");
    quizEl.classList.add("hide");

    document.querySelector(".score").innerHTML = "Your final score is: " + totalTime;
    document.querySelector(".user").value = "";
    console.log(value)
};



highscoreEl.addEventListener("click", function highscore() {

    var user = {
        name: nameInput.value.trim(),
        score: totalTime
    };

    localStorage.setItem("input",JSON.stringify(user))
    startOver();
});

function startOver() {
    endQuizEl.classList.add("hide");
    endGameEl.classList.remove("hide");
};

startButtonEl.addEventListener("click", startQuiz);