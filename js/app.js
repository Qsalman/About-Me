'use strict' 

var correctAnswers =0;
if (prompt('Have you Ever Meet Me?(yes or no)')) {

   
 newFunction();}
var userName = '';
userAnswer = prompt('Whats your name?');
alert('Welcome! ' + userAnswer);
console.log(userName);

var correct = 'yes';
var wrong = 'no';

function newFunction() {
  alert("Great");
  correctAnswers += 1;
}

function firstQuestion () {
var firQue = prompt('Do you know what is my name ');
if(firQue === correct){
  alert('it was an honor.');
}else if(firQue === wrong){;
  alert('maybe later)');
} }
firstQuestion();

function secondQue(){
  var secQue = prompt('');
  if(secQue === correct){
    alert('it was an honor.');
  }else if(secQue === wrong){;
    alert('maybe later)');
  }
  
}
var firstQue = 'yes.';
firstQue = prompt('have you ever met me? yes or no');
if(firstQue.toLowerCase() ==='yes')
{
alert('nice, you know me.')
}else if(firstQue.toLowerCase() ==='no')
{
  alert('maybe later.')
}
 else {
    
    console.log('Maybe Another time');
   alert("Maybe Another time");
  }





  if (prompt('Do you know where im From ?(yes or no)')) {
   
   
    alert("Great");
correctAnswers +=1;
     } else {
       
      alert("Im From Palestine");
     }


     if (prompt('Do you know whats my major is ?(yes or no)')) {
   
   
        alert("Great");
correctAnswers +=1;
         } else {
           
          alert("Im a Devloper");
         }



         if (prompt('Do you know How Old am i  ?(yes or no)')) {
   
   
            alert("Great");
correctAnswers +=1;
             } else {
             alert("Im 26");
             }

for(var i=0; i<4; i++){
var myhair  = parseInt( prompt('how much years of experince i have ?') );
  if(myhair === 4){
    alert('correct answer')
    correctAnswers +=1;
    break;}
    else if(myhair > 4){
      alert('too high')
    }else if(myhair < 4){
      alert('too low')
    }
  }




  
  var listOfAnswers = [44,22,33,11,55,66];
loop1:
  for(var i=0; i<6; i++){
    var userAnswer  = parseInt( prompt('guess 1 answer from several correct answers from 1 to 100 ?') );
    for(var j=0;j<listOfAnswers.length; j++){
      if(userAnswer === listOfAnswers[j]){
        alert('correct');
        correctAnswers +=1;
        break loop1;
      }
    }
  }
alert('list of correct answers are : ' + listOfAnswers)

alert('u ansewred correctly out of 7 questions '+ correctAnswers +' answers')

  var { listOfAnswers, i, userAnswer, j } = newFunction();
           function newFunction() {
             var listOfAnswers = [44, 22, 33, 11, 55, 66];
             loop1: for (var i = 0; i < 6; i++) {
               var userAnswer = parseInt(prompt('guess 1 answer from several correct answers from 1 to 100 ?'));
               for (var j = 0; j < listOfAnswers.length; j++) {
                 if (userAnswer === listOfAnswers[j]) {
                   alert('correct');
                   correctAnswers += 1;
                   break loop1;
                 }
               }
             }
             alert('list of correct answers are : ' + listOfAnswers);

             alert('u ansewred correctly out of 7 questions ' + correctAnswers + ' answers');
             return { listOfAnswers, i, userAnswer, j };
           }

