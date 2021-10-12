var buttonEl = document.querySelector(".startBtn");
var quizEl = document.querySelector(".info-box");

var scoreEl = document.getElementById('high-score');
var objIndex = 0;
var highscore = 0;
var userScore = 0;
var timeLeft = 150;
var highScoreList = JSON.parse(localStorage.getItem('user')) || [];


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
  if(buttonEl){
    makeQuiz();
    countdown();
  } 
  buttonEl.style.display = "none";
}

function countdown() {
  var timerEl = document.getElementById('timer');
  var timeInterval = setInterval(function() {
    timerEl.style.width = "15%";
    timerEl.style.float = "flex-end";
    timerEl.textContent = "Time: " + timeLeft;

    timeLeft--;
    if(timeLeft < 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

function scoreKeeper() {
  scoreEl.style.width = "85%";
  scoreEl.style.justifyContent = "flex-start";

  userScore += 5;
  if(userScore > highscore) {
    highscore = userScore;
  }
  scoreEl.textContent = "Your Score: " + userScore;
}

function makeQuiz() {
  //declare local variables for questions, 4 choices, and correct answers
  var quest, pickA, pickB, pickC, pickD, ans;
   //= quizQuestions[aIndex].question;
  var insertEl = document.createElement("p");
  //creating an insertEl at the <p> tag

  insertEl.className = "quizList";
  //giving its class name as quizList

  //insertEl.textContent = "";
  if(objIndex < quizQuestions.length) {
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
    insertEl.innerHTML += "<button id='selection' type='submit' onclick='check()'>Submit Answer</button>";
    
    quizEl.appendChild(insertEl);
  } else {
    //var userEl = document.createElement("p");
    console.log("creating all done");
  quizEl.innerHTML = "";
  insertEl.innerHTML += "<h3>All Done</h3>";
  insertEl.innerHTML += "<h4>Your Final Score is: " + userScore + "</h4>";
 // insertEl.innerHTML += "<label> <input type='text' id='yourInitial' placeholder='Your Initial'></label>";
  var newLabel = document.createElement('label');
  var newInput = document.createElement('input');
  newInput.setAttribute('id', 'yourInitial');
  newInput.setAttribute('placeholder', 'Your Initial');
  newLabel.appendChild(newInput);
  insertEl.appendChild(newLabel);

  //insertEl.innerHTML += "<button id='initial' type='submit''>Submit</button>";
  var newBtn = document.createElement('button');
  newBtn.setAttribute('id', 'initial');
  newBtn.type = 'submit';
  insertEl.appendChild(newBtn);
  quizEl.appendChild(insertEl);

    var confirm = document.querySelector('#form-group');
    console.log(confirm);
    confirm.textContent = "";
    //quizEl.innerHTML = "";
     userInfoEl = newInput;
    console.log(userInfoEl);
   userBtn = newBtn;
    console.log("Btn", userBtn);
    userBtn.addEventListener("click", () => {
      var userInputEl = document.getElementById('yourInitial'); 
        var user = {
          initial: userInfoEl.value,
          hscore: highscore
        };
        console.log(highScoreList);
        highScoreList.push(user);
     var newParagraph = document.createElement('p');
        // debugger;
        localStorage.setItem("user", JSON.stringify(highScoreList));
        //debugger;
        //console(localStorage.setItem("user", JSON.stringify(user)));
        //debugger;
        var store = JSON.parse(localStorage.getItem("user"));  
     
  
        console.log(store);
        //console.log(localStorage.clear);
        newParagraph.innerHTML += "<h3>High Scores</h3>";
        newParagraph.innerHTML += "<li>" + store.initial + " " + store.hscore + "</li>";
        newParagraph.innerHTML += "<button id='return' type='submit' onclick='outputQuiz()'>Go Back</button>";
        newParagraph.innerHTML += "<button id='clear' type='submit' onclick='localstorage.clear()'>Clear High Score</button>";
        quizEl.appendChild(newParagraph);
      });
   // getHighScore();

    //getHighScoreLog();
  } 
}

function check() {
  
  //checkEl gets the four choices of the questions
  var checkEl = document.getElementsByName('choices');
  
  var confirmation = document.querySelector('#form-group');


  //a local checkItem to hold the item that was selected in the radio button
  var checkItem = null;
  for(var i = 0; i < checkEl.length; i++) {
    //if the choice was selected, then set the checkItem to its value
    if(checkEl[i].checked) {
      checkItem = checkEl[i].value;
    }
  }
  if(checkItem === null) {
   // console.log("Nothing found");
    return;
  }

 if(checkItem === quizQuestions[objIndex].answer) {
    confirmation.textContent = "😀 CORRECT 😀";
    if (objIndex === quizQuestions.length){
      confirmation.textContent = "";
    }
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

function getHighScore() {
  var confirm = document.querySelector('#form-group');
  console.log(confirm);
  confirm.textContent = "";
  quizEl.innerHTML = "";
  var userInfoEl = document.querySelector('#yourInitial');
  console.log(userInfoEl);
  var userBtn = document.getElementById('initial');
  console.log("Btn", userBtn);
  /*userBtn.addEventListener("click", () => {

      var user = {
        initial: userInfoEl.value(),
        hscore: highscore
      };
   
      // debugger;
      localStorage.setItem("user", JSON.stringify(user));
      //debugger;
      //console(localStorage.setItem("user", JSON.stringify(user)));
      //debugger;
      var store = JSON.parse(localStorage.getItem("user"));  
    });
      debugger;
      console.log(store);
      // });
      debugger;
      var userInputEl = document.createElement("p");
      debugger;
     
      debugger;
      console.log(store);
      console.log(localStorage.clear);
      userInputEl.innerHTML += "<h3>High Scores</h3>";
      userInputEl.innerHTML += "<li>" + store + "</li>";
      userInputEl.innerHTML += "<button id='return' type='submit' onclick='outputQuiz()'>Go Back</button>";
      userInputEl.innerHTML += "<button id='clear' type='submit' onclick='localstorage.clear()'>Clear High Score</button>";
      quizEl.appendChild(userInputEl);*/
   
}
