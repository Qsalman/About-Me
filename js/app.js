'use strict'; // use strict mode to prevent doing mistakes 

var correctAnswers =0;
if (confirm('Have you Ever Meet Me?(yes or no)')) {
   
   
 //console.log('Great');
 alert("Great");
correctAnswers +=1;
  } else {
    
    //console.log('Maybe Another time');
   alert("Maybe Another time");
  }





  if (confirm('Do you know where im From ?(yes or no)')) {
   
   
    //console.log('Great');
    alert("Great");
correctAnswers +=1;
     } else {
       
       //console.log('Maybe Another time');
      alert("Im From Palestine");
     }


     if (confirm('Do you know whats my major is ?(yes or no)')) {
   
   
        //console.log('Great');
        alert("Great");
correctAnswers +=1;
         } else {
           
           //console.log('Maybe Another time');
          alert("Im a Devloper");
         }



         if (confirm('Do you know How Old am i  ?(yes or no)')) {
   
   
            //console.log('Great');
            alert("Great");
correctAnswers +=1;
             } else {
               
               //console.log('Maybe Another time');
              alert("Im 26");
             }




var Height = prompt('whats my Height ? (193 /170)');
if (Height.toLocaleLowerCase()=== '193'){

    alert('Correct');
    correctAnswers +=1;
  }
else {(Height.toLocaleLowerCase()=== '170')
alert('good luck next time');
}


// console.log(Height);
// console.log(Height.toLowerCase());
// console.log(Height.toUpperCase());



// give user 4 attempts to answer
// if correct
//  exit

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


  /*
  
  */

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