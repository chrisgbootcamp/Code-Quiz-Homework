//tasks that need completing 

//make questions
//make them interactive
//implement a timer function
//figure out wht to do about wrong answers
//likely something involving booleans
//make a function that subtracts time from the timer for every wrong answer
//give ability to save initals and score
 var Start= document.getElementById("start");
 var quiz= document.getElementById("quiz")
 var ImageQ= document.getElementById("ImageQ")
 var question= document.getElementById("question")
 var counter= document.getElementById("counter")
 var timeGauge= document.getElementById("timeGauge")
 var choiceA= document.getElementById("A")
 var choiceB= document.getElementById("B")
 var choiceC= document.getElementById("C")
   array = [ a,b,c,d]

var lastQUestionIndex = questions.length - 1; Array.length -> 4 array[3] -> d  
var runningQuestionIndex = 0;
 function renderQuestions()
 for q = questions[runningQuestionIndex];
     {
        question:"what does HTML stand for?",
         imgSrc: 
         choiceA: "Hyper Text Markup Language"
         choiceB: "Hyperlinks and Text Markup Language"
         choiceC:"Home Tool Markup Language"
         correct: "A"
     }

