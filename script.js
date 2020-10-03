var questions = [
  {
      title: "Primarily, inside which tag of an HTML document do you put the JavaScript?",
      choices: ["<java>", "<body>", "<script>", "<img>"],
      answer: "<script>"
  },
  {
      title: "The condition in an if/else statement is enclosed within ______.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
  },
  {
      title: "What is the syntax for referencing an external script called 'abc.js'?",
      choices: ["<script class='abc.js'>", "<script href='abc.js'>", "<script link='abc.js'>", "<script src='abc.js'>"],
      answer: "<script src='abc.js'>"
  },
  {
      title: "Which type of pop up box will allow a user to type a response?",
      choices: ["input", "prompt", "alert", "confirm"],
      answer: "prompt"
  },
  {
      title: "What is a DOM in JavaScript?",
      choices: ["Data of Mine", "Document of Master", "Data Object Modal", "Document Object Model"],
      answer: "Document Object Model"
  },
  {
      title: "Is JS case-sensitive?",
      choices: ["Yes", "No", "I have no clue", "Only when it feels like it."],
      answer: "Yes"
  },
];

console.log(questions);
var startBtn = document.getElementById("startBtn");
var submitBtn = document.querySelector("button.submitBtn")
var secondsLeft = (questions.length * 15 + 1);
var timerEl = document.getElementById("timer");
var submitScoreEl = document.querySelector("#submit-score");
var userScoreEl = document.getElementById("user-score");
var userNameInput;
var questionHead = document.getElementById("questions");
var answerChoices = document.getElementById("answers");

var questionNumber = -1;
var answer;


function startTimer() {
  
  document.getElementById("home").classList.add('d-none');
  document.getElementById("quiz").classList.remove('d-none');

  setTimer();
  makeQuestions();
}

function setTimer() {

  var countdown = setInterval(function () {
      secondsLeft--;
      timerEl.textContent = "Time: " + secondsLeft;

      if (secondsLeft === 0 || questionNumber === questions.length) {
          clearInterval(countdown);
          setTimeout(displayScore, 500);
      }
  }, 1000);
}

function makeQuestions() {
  questionNumber++;
  answer = questions[questionNumber].answer

  questionHead.textContent = questions[questionNumber].title;
  answerChoices.innerHTML = "";

  var choices = questions[questionNumber].choices;

  for (var q = 0; q < choices.length; q++) {
      var nextChoice = document.createElement("button");

      nextChoice.textContent = choices[q]
      answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
  }
}

function displayScore() {
  document.getElementById("quiz").classList.add('d-none');
  document.getElementById("submit-score").classList.remove('d-none');
  userScoreEl.textContent = "Your final score is " + secondsLeft + ".";
}

startBtn.addEventListener("click", startTimer);
submitBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  addScore();

startBtn.addEventListener("click", makeQuestions);
  
  window.location.href = './high-score-index.html'
});

function addScore () {
  userNameInput = document.getElementById("userName").value
  
 
var newScore = {
      name: userNameInput,
      score: secondsLeft
  };
 
  var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
  
  highScores.push(newScore)
  
  localStorage.setItem("highScores", JSON.stringify(highScores));

}

function hideFeedback(){
  var pEl= document.getElementsByClassName("feedback")[0]
  pEl.style.display='none'
}

function showFeedback(){
  var pEl= document.getElementsByClassName("feedback")[0]
  pEl.removeAttribute('style');
}

answerChoices.addEventListener("click", function (event) {
  var pEl= document.getElementsByClassName("feedback")[0]
  
  if (answer === event.target.textContent) {   
      pEl.innerHTML = "Correct!";
      setTimeout(hideFeedback,1000);
      showFeedback();   
  } else {
      pEl.innerHTML = "Sorry, that's incorrect.";
      setTimeout(hideFeedback,1000);
      secondsLeft = secondsLeft - 10;
      showFeedback();
  }    
  makeQuestions();
});

var restartBtn = document.querySelector("button.restartBtn");
 var clearBtn = document.querySelector("button.clearBtn");
   var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
 var  scoreList = document.getElementById("score-list");

    highScores.sort(function (a,b){
        return b.score - a.score
    })

    for (var s = 0; s < highScores.length; s++) {
        var newLi = document.createElement("li")
        newLi.textContent = highScores[s].name + " - " + highScores[s].score
        scoreList.appendChild(newLi)
    }
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    history.back()
});
restartBtn.addEventListener("click", function () {
    history.back();
});
var restartBtn = document.querySelector("button.restartBtn"),
    clearBtn = document.querySelector("button.clearBtn"),
    highScores = JSON.parse(localStorage.getItem("highScores") || "[]"),
    scoreList = document.getElementById("score-list");

for (var s = 0; s < highScores.length; s++) {
  var newLi = document.createElement("li")
  newLi.textContent = highScores[s].name + " - " + highScores[s].score
  scoreList.appendChild(newLi)

    highScores.sort(function (a,b){
        return b.score - a.score
    })

    for (var s = 0; s < highScores.length; s++) {
        var newLi = document.createElement("li")
        newLi.textContent = highScores[s].name + " - " + highScores[s].score
        scoreList.appendChild(newLi)
    }


clearBtn.addEventListener("click", function () {
    localStorage.clear();
    history.back()
});
restartBtn.addEventListener("click", function () {
    history.back();
});