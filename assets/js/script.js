var timerEl = document.getElementById('timer');
console.log("timerEl");

var buttonEl = document.querySelector(".startBtn");
var tasksToDoEl = document.querySelector(".info-box");



//creating an array of 10 objects with question and list of answers to choose from
const quizQuestions = [
  {
    question: "What handles the structure of the webpage?",
    answers: {
      a: "CSS",
      b: "javaScript",
      c: "HTML",
      d: "git"
    },
    correctAns: "c"
  },
  {
    question: "What handles the way webpages look?",
    answers: {
      a: "CSS",
      b: "javaScript",
      c: "HTML",
      d: "git"
    },
    correctAns: "a"
  },
  {
    question: "What makes the webpages interactive?",
    answers: {
      a: "CSS",
      b: "javaScript",
      c: "HTML",
      d: "git"
    },
    correctAns: "b"
  },
  {
    question: "What is the command before you commit a page?",
    answers: {
      a: "git push origin main",
      b: "git add -A",
      c: "git checkout -b main",
      d: "git commit -m 'message'"
    },
    correctAns: "b"
  },
  {
    question: "What are the parts that lies inside the <body> tag in html?",
    answers: {
      a: "head, body, foot",
      b: "header, body, footer",
      c: "html, body, foot",
      d: "header, content, footer"
    },
    correctAns: "d"
  },
  {
    question: "In javaScript,  --> var classroom = []; is a declaration of a(n)?",
    answers: {
      a: "function",
      b: "array",
      c: "variable",
      d: "class'"
    },
    correctAns: "b"
  },
  {
    question: "What has the highest priority in CSS?",
    answers: {
      a: "an id",
      b: "a class",
      c: "a flexbox",
      d: "a *"
    },
    correctAns: "a"
  },
  {
    question: "What is the purpose of media queries?",
    answers: {
      a: "responsive web design",
      b: "can be view across many devices",
      c: "part of advance CSS",
      d: "all of the above"
    },
    correctAns: "d"
  },
  {
    question: "What is hoisting in term of a function?",
    answers: {
      a: "rasing the function using a pulley",
      b: "local variables that can use by the function",
      c: "moving the declartion to the top of the code",
      d: "calling the function"
    },
    correctAns: "c"
  },
  {
    question: "How can you be successful in this Boot?",
    answers: {
      a: "responsive web design",
      b: "can be view across many devices",
      c: "part of advance CSS",
      d: "all of the above"
    },
    correctAns: "d"
  }
];

buttonEl.addEventListener("click", function() {
  makeQuiz();
  //countdown();
 
});

function countdown() {
  var timeLeft = 15;
  var timeInterval = setInterval(function() {
    timerEl.textContent = "Time: " + timeLeft + "  seconds";
    if(timeLeft === 1){
      timerEl.textContent = "Time: " + timeLeft + "  second";
    }
    console.log("got inside countdown")

    timeLeft--;
    if(timeLeft < 0) {
      clearInterval(timeInterval);
      timerEl.style.display = "none";
    }
  }, 1000);
}


function makeQuiz() {

  var listItemEl = document.createElement("li");
  //debugger;
  console.log("make li");
  listItemEl.className = "quiz-items";
 // debugger;
  console.log("make classname");
  listItemEl.textContent = "In MAKE QUIZ";
 // debugger;
  console.log("insert string");
  tasksToDoEl.appendChild(listItemEl);
  //debugger;
  console.log("append?");

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
 countdown();