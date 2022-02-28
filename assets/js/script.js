var timerEl = document.getElementById("timer");
var introductionEl = document.querySelector(".introduction");
var quizEl = document.querySelector(".quiz-form");
var startButtonEl = document.querySelector("#start-quiz");
var quizNumEl = document.querySelector("#quiz-number");
var questionEl = document.querySelector("#quiz-question");

quizEl.hidden = true;

var startQuiz = function() {
    introductionEl.hidden = true;
    quizEl.hidden = false;

    var answerEl = document.querySelector("#quiz-question");
    for (var i = 0 ; i < list.length; i++) {
        questionEl.textContent = list[i].question;

        var options = list[i].choices;
        for (var opt in options) {
            var btn = document.createElement("button")
            btn.type = "submit";
            btn.textContent = options[opt];
            answerEl.appendChild(btn);
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

var list =
    [
        {
            question: "question one",
            choices: ["one", "two", "three", "four"],
            answer: 2
        },
        {
            question: "question two",
            choices: ["one", "two", "three", "four"],
            answer: 4
        },
        {
            question: "question three",
            choices: ["one", "two", "three", "four"],
            answer: 1
        },
        {
            question: "question four",
            choices: ["one", "two", "three", "four"],
            answer: 2
        },
        {
            question: "question five",
            choices: ["one", "two", "three", "four"],
            answer: 3
        }
    ];


startButtonEl.addEventListener("click", startQuiz);
startButtonEl.addEventListener("click", countdown)

