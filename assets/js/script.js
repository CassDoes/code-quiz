var list = [
    {
        question: "question one",
        answer1: "one",
        answer2: "two",
        answer3: "three",
        answer4: "four",
        correctAnswer: "1"
    },
    {
        question: "question two",
        answer1: "two",
        answer2: "two",
        answer3: "three",
        answer4: "four",
        correctAnswer: "2"
    },
    {
        question: "question three",
        answer1: "three",
        answer2: "two",
        answer3: "three",
        answer4: "four",
        correctAnswer: "3"
    },
    {
        question: "question four",
        answer1: "four",
        answer2: "two",
        answer3: "three",
        answer4: "four",
        correctAnswer: "4"
    },
    {
        question: "question five",
        answer1: "one",
        answer2: "two",
        answer3: "three",
        answer4: "four",
        correctAnswer: "1"
    },
];

var timerEl = document.getElementById("timer");
var startButtonEl = document.querySelector("#start-quiz");
var quizEl = document.querySelector(".quiz-form")
var questionEl = document.getElementById("question-text");
var quizNumTextEl = document.getElementById("quiz-number");
var introductionEl = document.querySelector(".introduction");
var optionsEl = document.querySelector(".options");
var button1 = document.getElementById("1");
var button2 = document.getElementById("2");
var button3 = document.getElementById("3");
var button4 = document.getElementById("4");
var checkAnswerEl = document.getElementById("check-answer");
var feedback = document.getElementsByName("feedback");


quizEl.classList.add("hide");



function startQuiz() {
    introductionEl.classList.add("hide");
    quizEl.classList.remove("hide");

    if (score === 0) {
        score = setInterval(function () {
            totalTime--;
            timerEl.textContent = "Time " + totalTime;

            if (totalTime <= 0) {
                clearInterval(score);
                endQuiz();
                timerEl.textContent = "Quiz Over!";
            }
        }, 1000);
    } 
    quizBegin();
};

var score = 0;
var penalty = 10;
var totalTime = 91;
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
    } else if (answer !== correct && currentQuestionList !== lastQuestion) {
        currentQuestionList++;
        totalTime = totalTime - penalty;
        timerEl.textContent = "Time " + totalTime;
        quizBegin();
        alert("INCORRECT! You've lost 10 seconds!");
    }
};

//answerButtons.addEventListener("click", answerClick)
startButtonEl.addEventListener("click", startQuiz);
//startButtonEl.addEventListener("click", countdown);