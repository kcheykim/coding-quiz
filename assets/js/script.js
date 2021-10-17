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

//listening for the start button to click then call the outputQuiz function
buttonEl.addEventListener("click", outputQuiz);

//outputQuiz function will make a call to makeQuiz function, countdown 
// function, scoreKeeper function and it will hide the start button
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

//restart function listens for the return button then it will display the quiz information,
// and display the start button
function restart() {
  var returnBtn = document.querySelector("#return");
  returnBtn.addEventListener("click", restart);

  if(returnBtn) {
  var mainParaEl = document.createElement("p");
    mainParaEl.style.width = "100%";
    quizEl.innerHTML = "";
    mainParaEl.className = "info-box";
    mainParaEl.innerHTML = "Try to answer the following code-related questions within the time limit. "
    mainParaEl.innerHTML += "Keep in mind that incorrect answers will penalize your time by ten seconds! "
    mainParaEl.innerHTML += "The quiz is over if you ran out of time or you have answered all the questions. "
    mainParaEl.innerHTML += "You will be able to record you score at the end by entering you inital and submit." 
    quizEl.appendChild(mainParaEl);

    buttonEl.style.display = "inline-block";
    }
}

//clearHighScore function will listen for the clear button, then it will clear the highscore from
// the localStorage and reset the user array to empty and call restart function
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

//countdown function will start the timer and count down by one second until the quiz is done or 
// time ran out so that timeLeft is set to timeStop, where the time stops
function countdown() {
  //getting the timer element and display it in the header
  var timerEl = document.getElementById('timer');
  var timeInterval = setInterval(function() {
    timerEl.style.width = "15%";
    timerEl.style.float = "flex-end";
    timerEl.textContent = "Time: " + timeLeft;
    //if timeStop is equal to zero, decrement the timeLeft by one second, else set timeLeft to timeStop
    if(timeStop === 0) {
      timeLeft--;
    } else {
      timeLeft = timeStop;
    }
    //make sure the time is by one second
    if(timeLeft < 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

//scoreKeeper function display teh tally scores
function scoreKeeper() {
  scoreEl.style.width = "85%";
  scoreEl.style.justifyContent = "flex-start";
  scoreEl.textContent = "Your Score: " + userScore;
}

function checkAns() {
  //checkEl gets the four choices of the questions
  var checkEl = document.getElementsByName('choices');
  confirmation.style.display = "inline-block";

  //a local checkItem to hold the item that was selected in the radio button
  var checkItem = null;
  for(var i = 0; i < checkEl.length; i++) {
    //if the choice was selected, then set the checkItem to its value
    if(checkEl[i].checked) {
      checkItem = checkEl[i].value;
    }
  }
  //forces the user to select one of the answer
  if(checkItem === null) {
    return;
  }
  //if the answer is correct, display the the correct message
  if(checkItem === quizQuestions[objIndex].answer) {
    confirmation.textContent = "😀 CORRECT 😀";
    if (objIndex === quizQuestions.length){
      confirmation.textContent = "";
    }
    //increment the score by 5
    userScore = userScore + 5;
    scoreKeeper();
  }else{
    //otherwise, display wrong message and decrement time by 10 seconds
    timeLeft = timeLeft - 10;
    confirmation.textContent = "😭 WRONG 😭"
    if (objIndex === quizQuestions.length){
      confirmation.textContent = "";
    }
  }
  //increment the index of the array and call to makQuiz again
  objIndex++;
  makeQuiz();
}

//this makeQuiz functionw will display the quiz questions and answer choices
function makeQuiz() {
  //declare local variables for questions, 4 choices, and correct answers
  var quest, pickA, pickB, pickC, pickD, ans;

  //creating an insertEl at the <p> tag
  var insertEl = document.createElement("p");

  //giving its class name as quizList
  insertEl.className = "quizList";

  //check to see if the index is less than the length or the array and timeLeft is greater than zero
  if(objIndex < quizQuestions.length && timeLeft > 0) {
    quizEl.innerHTML = "";
    quest = quizQuestions[objIndex].question;
    pickA = quizQuestions[objIndex].a;
    pickB = quizQuestions[objIndex].b;
    pickC = quizQuestions[objIndex].c;
    pickD = quizQuestions[objIndex].d;
    ans = quizQuestions[objIndex].answer;

    //diplay the questions, answer choices and submit button to submit the answer    
    insertEl.innerHTML = "<h3>" + quest + "</h3>";
    insertEl.innerHTML += "<label> <input type='radio' name='choices' value='a'> " + pickA + "</label> <br>";
    insertEl.innerHTML += "<label> <input type='radio' name='choices' value='b'> " + pickB + "</label> <br>";
    insertEl.innerHTML += "<label> <input type='radio' name='choices' value='c'> " + pickC + "</label> <br>";
    insertEl.innerHTML += "<label> <input type='radio' name='choices' value='d'> " + pickD + "</label> <br>";
    //if the button is click, call checkAns function 
    insertEl.innerHTML += "<button id='selection' type='submit' onclick='checkAns()'>Submit Answer</button>";
    quizEl.appendChild(insertEl);
  } else {
    //otherwise, hide the correct or wrong message, set timeStop to timeLeft and call getHighScore function
    confirmation.style.display = "none";
    timeStop = timeLeft;
    getHighScore(insertEl);
  }
}

//display the user's score, ask the user for the initial and submit the  user's initial and score to local storage
// once score + initial is submit, the highscore page will display all the highscore up to date with option to
// clear the high score or return to the beginning
function getHighScore(insertEl) {
  //display the user's highscore and ask for initial and submit
  quizEl.innerHTML = "";
  insertEl.innerHTML += "<h3>All Done</h3>";
  insertEl.innerHTML += "<h4>Your Final Score is: " + userScore + "</h4>";
  insertEl.innerHTML += "<label> <input type='text' id='yourInitial' placeholder='Your Initial'></label>";
  quizEl.appendChild(insertEl);
    
  insertEl.innerHTML += "<button id='initial' type='submit''>Submit</button>";
  var newBtn = document.querySelector("#initial");
  quizEl.appendChild(insertEl);
  
  //listen for the user to submit the inital and score
  newBtn.addEventListener("click", () => {
    var userInitialEl = document.getElementById('yourInitial').value;
      var user = {
        initial: userInitialEl,
        hscore: userScore
      };
    //push the object user into the highScoreList array
    highScoreList.push(user);

    var newParagraph = document.createElement('p');
    //store the user object into the local storage
    localStorage.setItem("user", JSON.stringify(highScoreList));

    //retrieve the user initial and score back from the local storage
    var store = JSON.parse(localStorage.getItem("user"));  
    quizEl.innerHTML = "";
    //dispaly all the store scores
    newParagraph.innerHTML += "<h3>High Scores</h3>";
    for(var j = 0; j < highScoreList.length; j++){
      newParagraph.innerHTML += "<table><tr><td>Initial</td> <td>Scores</td> </tr><tr><td>" + highScoreList[j].initial + "</td> <td>" + highScoreList[j].hscore + "</td></tr></table>";
    }
    //button options to start over or clear the high score and start over
    newParagraph.innerHTML += "<button id='return' type='submit' onclick='restart()'>Start Over</button>";
    newParagraph.innerHTML += "<button id='clear' type='submit' onclick='clearHighScore()'>Clear High Scores</button>";
    quizEl.appendChild(newParagraph);
  });
}
