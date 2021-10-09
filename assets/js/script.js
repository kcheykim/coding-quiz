var buttonEl = document.querySelector(".startBtn");
var quizEl = document.querySelector(".info-box");
var timerEl = document.getElementById('timer');
var objIndex = 0;
var timeLeft = 150;


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
    question: "What is the command before you commit a page?",
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
    d: "calling the function",
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
  }
}

function countdown() {
  var timeInterval = setInterval(function() {
    timerEl.textContent = "Time: " + timeLeft;

    timeLeft--;
    if(timeLeft < 0) {
      clearInterval(timeInterval);
      timerEl.style.display = "none";
    }
  }, 1000);
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
    insertEl.innerHTML += "<button onclick='check()'>Submit Answer</button>";
    
    quizEl.appendChild(insertEl);
    objIndex++;
    countdown();
  }
}

function check() {
  var checkEl = document.getElementsByName('choices');
  //console.log("In check")
  //console.log(checkEl.length);
  //console.log(checkEl);
  var checkItem;
  for( var i = 0; i < checkEl.length; i++) {
    debugger;
    if(checkEl[i].checked) {
      checkItem = checkEl[i].value;
      console.log("checkItem = ", checkItem)
    }
  }

  if(checkItem == quizQuestions[objIndex].answer) {
    //console.log("In the compare: ")
    console.log("CheckItem: ", checkItem, "ArrayindexValue: ", quizQuestions[objIndex].answer)
  } else {
    timeLeft -= 10;
    console.log("Time Left: ", timeLeft);
  }
}

/*
function makeQuiz(q) {
  //selecting the start button
var quiz = document.getElementById('startBtn');
startBtn.addEventListner('click', function() {
 var formEl = document.getElementById('form-group');
  formEl.textContent = q.question;
  var show = document.querySelector('.form-group');
  show.forEach(function(element, index) {
    element.textContent = q.answers[index];
    element.addEventListner('click', function() {
      if(q.correctAns == index) {
        console.log('Correct Answer');
      } 
      else {
        console.log('Wrong Answer!');
      }
    }
  }
}

   
  });

});

} */
/*
var counter = 0;
var correctAns = 0;
debugger;
if(counter >= quizQuestions.length) {
  quiz.innerHTML = "<h2> You got " + correctAns + "of " + quizQuestions.length + "questions correct</h2>";
  var createQuestion = document.createElment("form-group");
  createQuestion = quizQuestions[0];
}*/

  //an array that stores the the user's answers
  /*
  var output = [];
  var answers;

  for(var i = 0; i < questions.length; i++) {
    answers = [];
    for(letter in questions[i].answers){
      answers.push('<label> <input type="radio" name="question'+i+'" value="'+letter+'">'
      + letter + ': ' + questions[i].answers[letter] + '<label>');

    }
    output.push('<div class="question">' + questions[i].question + '<div>'
      +'<div class="answers">' + answers.join('') + '</div>');
  }
  quiz.innerHTML = output.join('');
}*/




  //telling the startQuizBtn to listen for a click and call the makeQuiz function
 // makeQuiz(quizQuestions);
 // quiz.addEventListener("click", makeQuiz);
 //countdown();