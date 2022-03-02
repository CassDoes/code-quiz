var timerEl = document.getElementById("timer");
var startButtonEl = document.querySelector("#start-quiz");
var quizEl = document.querySelector(".quiz-form")

//code2.0 elements
const falseBtnEl = document.getElementById("False");
const trueBtnEl = document.getElementById("True");
const questionEl = document.getElementById("question-text");
const quizNumTextEl = document.getElementById("quiz-number");
const introductionEl = document.querySelector(".introduction");

quizEl.classList.add("hide");

let currentQuestion = 0;


function startQuiz() {
    introductionEl.classList.add("hide");
    quizEl.classList.remove("hide");
    currentQuestion = 0;

    quizNumTextEl.innerHTML = "Question " + list.length;
    questionEl.innerHTML = list[currentQuestion].question;
    trueBtnEl.innerHTML = list[currentQuestion].answers[0].option;

    trueBtnEl.onclick = () => {
        if (currentQuestion < 5) {
            next();
        }
    }

    falseBtnEl.innerHTML = list[currentQuestion].answers[1].option;

    falseBtnEl.onclick = () => {
        if (currentQuestion < 5) {
            next();
        }
    }

    startQuiz();

    function next() {
        currentQuestion++;

        quizNumTextEl.innerHTML = "Question " + list.length;
        questionEl.innerHTML = list[currentQuestion].question;
        trueBtnEl.innerHTML = list[currentQuestion].answers[0].option;

        trueBtnEl.onclick = () => {
        if (currentQuestion < 5) {
            next();
        }
    }
      
        falseBtnEl.innerHTML = list[currentQuestion].answers[1].option;

        falseBtnEl.onclick = () => {
            if (currentQuestion < 5) {
            next();
            }
        }
    }
};

function countdown() {
  var timeLeft = 90;

  //timer set to to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    if ( timeLeft > 1) {
      timerEl.textContent = "Time Remaining:" + timeLeft;
      timeLeft--;
    }else if ( timeLeft === 1) {
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
    }
  }, 1000);
}

let list = [
    {
        question: "question one",
        answers: [
            {option: "one", answer: true},
            {option: "two", answer: false},
            {option: "three", answer: false},
            {option: "four", answer: false},
        ]
    },
    {
        question: "question two",
        answers: [
            {option: "one", answer: false},
            {option: "two", answer: false},
            {option: "three", answer: true},
            {option: "four", answer: false},
        ]
    },
    {
        question: "question three",
        answers: [
            {option: "one", answer: false},
            {option: "two", answer: true},
            {option: "three", answer: false},
            {option: "four", answer: false},
        ]
    },
    {
        question: "question four",
        answers: [
            {option: "one", answer: false},
            {option: "two", answer: true},
            {option: "three", answer: false},
            {option: "four", answer: false},
        ]
    },
    {
        question: "question five",
        answers: [
            {option: "one", answer: false},
            {option: "two", answer: false},
            {option: "three", answer: false},
            {option: "four", answer: true},
        ]
    }
];



startButtonEl.addEventListener("click", startQuiz);
startButtonEl.addEventListener("click", countdown);