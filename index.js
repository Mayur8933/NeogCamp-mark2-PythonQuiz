var readlineSync = require("readline-sync");

var score = 0;

function welcome(){
  var userName = readlineSync.question("What is your name?: ")
  console.log('welcome ' + userName + ' to the "Quiz on Python Language"')}

function play(que,ans){
  var userAns = readlineSync.question(que);
  if (userAns == ans){
    console.log('right!');
    score = score + 1;
  }else{
    console.log('wrong!');
  }
  console.log('current score: ',score)
  console.log('---------------------')
}
  
var questions = [{
    que: 'Python is interpreted or compiler language?: ',
    ans: 'interpreted'
  },
{
    que:'what is used to comment in python?: ',
    ans:'#'
  },
 {
    que:'Name two popular python frameworks?: ',
    ans:'django and flask'
  },
{
    que:'len() used to calculate?: ',
    ans: 'length'
  }]

function game(){ 
for(var i=0;i<questions.length; i++){
    var currentQue = questions[i];
    play(currentQue.que,currentQue.ans)
  }
if(score == 0){
  console.log("Oops! you got",score,"score")
}else{
console.log('Wow! You Scored: ',score)
}
}

welcome();
game();


