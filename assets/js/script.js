var buttonEl = document.querySelector(".startBtn");
var mainEl = document.querySelector(".page-content");
var quizEl = document.querySelector(".info-box");
var confirmation = document.querySelector('#message');
var scoreEl = document.getElementById('your-score');
var objIndex = 0;
var userScore = 0;
var timeLeft = 100;
var timeStop = 0;
var highScoreList = JSON.parse(localStorage.getItem('user')) || [];
var val = 0;

//creating an array of 10 objects with question and list of answers to choose from
const quizQuestions = [
  {
    question: "What handles the structure of the webpage?",
    a: "CSS",
    b: "javaScript",
    c: "HTML",
    d: "git",
    answer: "c"
  },
  {
    question: "What handles the way webpages look?",
    a: "CSS",
    b: "javaScript",
    c: "HTML",
    d: "git",
    answer: "a"
  },
  {
    question: "What makes the webpages interactive?",
    a: "CSS",
    b: "javaScript",
    c: "HTML",
    d: "git",
    answer: "b"
  },
  {
    question: "What is the command before you do a commit command?",
    a: "git push origin main",
    b: "git add -A",
    c: "git checkout -b main",
    d: "git commit -m 'message'",
    answer: "b"
  },
  {
    question: "What are the parts that lies inside the <body> tag in html?",
    a: "head, body, foot",
    b: "header, body, footer",
    c: "html, body, foot",
    d: "header, content, footer",
    answer: "d"
  },
  {
    question: "In javaScript,  --> var classroom = []; is a declaration of a(n)?",
    a: "function",
    b: "array",
    c: "variable",
    d: "class'",
    answer: "b"
  },
  {
    question: "What has the highest priority in CSS?",
    a: "an id",
    b: "a class",
    c: "a flexbox",
    d: "a *",
    answer: "a"
  },
  {
    question: "What is the purpose of media queries?",
    a: "responsive web design",
    b: "can be view across many devices",
    c: "part of advance CSS",
    d: "all of the above",
    answer: "d"
  },
  {
    question: "What is hoisting in term of a function?",
    a: "rasing the function using a pulley",
    b: "local variables that can use by the function",
    c: "moving the declartion to the top of the code",
    d: "declaring the function",
    answer: "c"
  },
  {
    question: "How can you be successful in this Bootcamp?",
    a: "go over the modules",
    b: "complete your challenges",
    c: "seeking tutor and TA helps",
    d: "all of the above",
    answer: "d"
  }
];

buttonEl.addEventListener("click", outputQuiz);

function outputQuiz() {
  if(buttonEl ){
    userScore = 0;
    objIndex = 0;
    timeLeft = 100;
    timeStop = 0;
    makeQuiz();
    countdown();
    scoreKeeper();
    buttonEl.style.display = "none";
  } 
}

function restart() {
 
  var returnBtn = document.querySelector("#return");
  returnBtn.addEventListener("click", restart);

  if(returnBtn) {
  var mainParaEl = document.createElement("p");
    mainParaEl.style.width = "100%";
    quizEl.innerHTML = "";
    mainParaEl.className = "info-box";
    mainParaEl.innerHTML = "Try to answer the following code-related questions within the time limit. "
    mainParaEl.innerHTML += "Keep in mind that incorrect answers will penalize your time by fifteen seconds! "
    mainParaEl.innerHTML += "The quiz is over if you ran out of time or you have answered all the questions. "
    mainParaEl.innerHTML += "You will be able to record you score at the end by entering you inital and submit." 
    quizEl.appendChild(mainParaEl);

    buttonEl.style.display = "inline-block";
    }
}

function clearHighScore() {
  var clearBtn = document.querySelector("#clear");
  clearBtn.addEventListener("click", clearHighScore);
   if(clearBtn) {
      localStorage.clear();
      highScoreList = [];
      window.alert("All scores has been cleared.");
      restart();
   }
}

function countdown() {
  var timerEl = document.getElementById('timer');
  var timeInterval = setInterval(function() {
    timerEl.style.width = "15%";
    timerEl.style.float = "flex-end";
    timerEl.textContent = "Time: " + timeLeft;
   if(timeStop === 0) {
    timeLeft--;
   } else {
  timeLeft = timeStop;
   }
    if(timeLeft < 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

function scoreKeeper() {
  scoreEl.style.width = "85%";
  scoreEl.style.justifyContent = "flex-start";
  scoreEl.textContent = "Your Score: " + userScore;
}

function checkAns() {
  
  //checkEl gets the four choices of the questions
  var checkEl = document.getElementsByName('choices');
  confirmation.style.display = "inline-block";
  //var confirmation = document.querySelector('#form-group');
  //confirmation.textContent = "";
  //a local checkItem to hold the item that was selected in the radio button
  var checkItem = null;
  for(var i = 0; i < checkEl.length; i++) {
    //if the choice was selected, then set the checkItem to its value
    if(checkEl[i].checked) {
      checkItem = checkEl[i].value;
    }
  }

  if(checkItem === null) {
    return;
  }

  if(checkItem === quizQuestions[objIndex].answer) {
    confirmation.textContent = "😀 CORRECT 😀";
    if (objIndex === quizQuestions.length){
      confirmation.textContent = "";
    }
    userScore = userScore + 5;
    scoreKeeper();
  }else{
    timeLeft = timeLeft - 10;
    confirmation.textContent = "😭 WRONG 😭"
    if (objIndex === quizQuestions.length){
      confirmation.textContent = "";
    }
  }

  objIndex++;
  makeQuiz();
}

function makeQuiz() {
  //declare local variables for questions, 4 choices, and correct answers
  var quest, pickA, pickB, pickC, pickD, ans;
   //= quizQuestions[aIndex].question;
  var insertEl = document.createElement("p");
  //creating an insertEl at the <p> tag

  insertEl.className = "quizList";
  //giving its class name as quizList

 // insertEl.textContent = "";
  if(objIndex < quizQuestions.length && timeLeft > 0) {
    quizEl.innerHTML = "";
    quest = quizQuestions[objIndex].question;
    pickA = quizQuestions[objIndex].a;
    pickB = quizQuestions[objIndex].b;
    pickC = quizQuestions[objIndex].c;
    pickD = quizQuestions[objIndex].d;
    ans = quizQuestions[objIndex].answer;

    insertEl.innerHTML = "<h3>" + quest + "</h3>";
    insertEl.innerHTML += "<label> <input type='radio' name='choices' value='a'> " + pickA + "</label> <br>";
    insertEl.innerHTML += "<label> <input type='radio' name='choices' value='b'> " + pickB + "</label> <br>";
    insertEl.innerHTML += "<label> <input type='radio' name='choices' value='c'> " + pickC + "</label> <br>";
    insertEl.innerHTML += "<label> <input type='radio' name='choices' value='d'> " + pickD + "</label> <br>";
    insertEl.innerHTML += "<button id='selection' type='submit' onclick='checkAns()'>Submit Answer</button>";
    quizEl.appendChild(insertEl);
  } else {
    confirmation.style.display = "none";
    timeStop = timeLeft;
    getHighScore(insertEl);
  }
}


function getHighScore(insertEl) {
  quizEl.innerHTML = "";
  insertEl.innerHTML += "<h3>All Done</h3>";
  insertEl.innerHTML += "<h4>Your Final Score is: " + userScore + "</h4>";
  insertEl.innerHTML += "<label> <input type='text' id='yourInitial' placeholder='Your Initial'></label>";
  quizEl.appendChild(insertEl);
    
  insertEl.innerHTML += "<button id='initial' type='submit''>Submit</button>";
  var newBtn = document.querySelector("#initial");
  quizEl.appendChild(insertEl);
    
  var confirm = document.querySelector(".info-box2");
  confirm.textContent = "";
  
  newBtn.addEventListener("click", () => {
    var userInitialEl = document.getElementById('yourInitial').value;
      var user = {
        initial: userInitialEl,
        hscore: userScore
      };
    highScoreList.push(user);

    var newParagraph = document.createElement('p');
    localStorage.setItem("user", JSON.stringify(highScoreList));
    var store = JSON.parse(localStorage.getItem("user"));  
    quizEl.innerHTML = "";
    newParagraph.innerHTML += "<h3>High Scores</h3>";
    for(var j = 0; j < highScoreList.length; j++){
      newParagraph.innerHTML += "<table><tr><td>Initial</td> <td>Scores</td> </tr><tr><td>" + highScoreList[j].initial + "</td> <td>" + highScoreList[j].hscore + "</td></tr></table>";
    }
    newParagraph.innerHTML += "<button id='return' type='submit' onclick='restart()'>Go Back</button>";
    newParagraph.innerHTML += "<button id='clear' type='submit' onclick='clearHighScore()'>Clear High Scores</button>";
    quizEl.appendChild(newParagraph);
  });
}
