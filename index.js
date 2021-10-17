var readlineSync=require('readline-sync');
var score=0;
var userName=readlineSync.question('Enter Your Name  ');
console.log("Welcome  "+userName);
var questions=[
  {
    question:"How many article in Constitution ? ",
    answer:"395"
  },
  {
    question:"How many part in Constitution ?",
    answer:"22"
  },
  {
    question:"In which part fundamental right came ?",
    answer:"3"
  },
  {
    question:"In which part DPSP came ?",
    answer:"4"
  },
  {
    question:"How many Fundamental right are there ",
    answer:"6"
  },
  {
    question:"How many States are there in India? ",
    answer:"28"
  },
  {
    question:"How many UTs are there in India? ",
    answer:"8"
  }
];
function play(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if (userAnswer===answer)
  {  
  console.log("You are right");
  score=score+1;
  console.log("Your score is "+score);
  }
  else
  {
    score=score-1;
    console.log("Your score is "+score);
    console.log("Your answer is wrong");
  }
}

for (var i=0;i<questions.length;i++)
{
  var currentquestions=questions[i];
  play(currentquestions.question,currentquestions.answer)
}