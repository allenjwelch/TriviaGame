/////////////// Variables /////////////////
var questionArr = {
  q1: ["What is the science of brewing beer called?", "Brewology", "Zymurgy", "Distillation", "Saccharomyces"], //Correct answer [2]
  q2: ["How many styles of beer are recognized by the Brewer’s Association?", "152", "123", "45", "10"], //Correct answer [1]
  q3: ["What is Atlanta's oldest craft brewery?", "Jekyll", "Red Brick", "Monday Night", "Sweetwater"],  //Correct answer [2]
  q4: ["About how many years was the length of Prohibition?", "2", "10", "13", "21"],  //Correct answer [3]
  q5: ["What country has the most individual beer brands?", "Germany", "Croatia", "United States", "Belgium"], //Correct answer [4]
}; 

// var questionCycle = [
//   questionArr.q1, 
//   questionArr.q2, 
//   questionArr.q3, 
//   questionArr.q4
// ];

var timerOn = false; 
var interval; 
var time = 10; 
var correct = false; // ---- Will need to set to true when correct answer is chosen then reset back to false for the next question.
var answerSelected; 

var userChoice; 
// var q1Answer = questionArr.q1[2]; 
// var q2Answer = 'choiceA'; 
// var q3Answer = 'choiceB'; 
// var q4Answer = 'choiceC'; 
// var q5Answer = 'choiceD'; 


var numCorrect = 0; 
var numIncorrect = 0; 
var numUnanswered = 0; 



var correctComments = ['Nice!', 'Barroom Hero!', 'Keep it up!', 'Next round\'s on me!']; 
var incorrectComments = ['Are you drunk?', 'Nope!', 'Way off!', 'Seriously?']; 
var correctAudio = new Audio('../TriviaGame/assets/images/bottle3.mp3'); 
var incorrectAudio = new Audio('../TriviaGame/assets/images/glassBreak.mp3'); 

// console.log(questionArr.q1[0]); --> Displays question
// var q1 = questionArr.q1[0]; 
// console.log(questionArr[0]); 



/////////////// Functions /////////////////
$(document).ready(function() {
  function gamePlay() {
    $('#answerChoices').hide(); // --> initially hides answerChoices btns
    $('#lastCall').hide(); 
    // lastCall(); 
    startBtn(); 
    
    
    function checkAnswer(q) { /////////////////////
      console.log('correct answer', q); 
      if (!answerSelected) {
        $('#answerChoices').on('click', '.btn', function() {
        userChoice = ($(this).attr('id')); 
        console.log('userChoice', userChoice); 
        var answer = "#" + q; 
        // console.log('answer', answer); 
        answerSelected = true; 
        $(answer).css("background-color", "#3c993c");
          if (userChoice == q) {
            correct = true; 
            // $(this).css("background-color", "#3c993c");
            comment(); 
            numCorrect++; 
            console.log('numCorrect: ', numCorrect); 
            offClick();  
            return correct = false;
          } else if (userChoice != q) {
            correct = false;            
            $(this).css("background-color", "#aa2b2b"); // 
            comment(); 
            numIncorrect++; 
            console.log('numIncorrect: ', numIncorrect); 
            offClick();  
          } else {
          } // END if userChoice  
        }); // END answer choice click()
      } //END if answerSelected
    }; // END checkAnswer () /////////////////////
    
    function offClick() {
      $('#answerChoices').off('click', '.btn'); 
    }; // END offClick

    function questionSetReset() {
      answerSelected = false; 
      timerOn = true; 
      $('.btn').css("background-color", "#948e3a"); 
      timer(); 
    }; // END questionSetReset

    function startBtn() {
      $('#start').show();
      timerOn = false; 
      time = 10; 
      clearInterval(interval); 

      $('.jumbotron').on('click', '#start', function() {
        console.log('Button clicked!'); 
        $('#start').hide();
  
        qSet1(); 
        // setTimeout(qSet2, 1000 * 15); 
        // setTimeout(qSet3, 1000 * 30); 
        // setTimeout(qSet4, 1000 * 45); 
        // setTimeout(qSet5, 1000 * 60); 
        // setTimeout(endScreen, 1000 * 75); 
        // clearTimeout(endScreen); 
  
  
  
        // Round 1 begins
        // Timer Starts counting down
        // setTimeout() ----> Used to delay an action until the end of the specified time 
           
      }); // END Start 
    }; //END startBtn

    function qSet1() {
      console.log('Q1'); 
      $('#questionTag').text(questionArr.q1[0]);
      
      $('#answerChoices').show();
      $('#choiceA').text(questionArr.q1[1]);
      $('#choiceB').text(questionArr.q1[2]);
      $('#choiceC').text(questionArr.q1[3]);
      $('#choiceD').text(questionArr.q1[4]);
      
      
      questionSetReset(); 
      checkAnswer('choiceB'); 
      setTimeout(qSet2, 1000 * 15); 

      // setTimeout(qSet2, 1000 * 10); 

      // if (answerSelected == false) {
      //   setTimeout(qSet2, 1000 * 10); 
      //   return answerSelected = true; 
      // } else if (answerSelected == true) {
      //   setTimeout(qSet2, 1000 * 1); 
      // }

      //-----Better way to cycle through assignment of values??----
      // for (i = 0; i < questionArr.length; i++) {
      //   console.log(questionArr.q1[i]); 
      // }

      // setTimeout(qSet1, 1000 * 10); 
    }; // END qSet1()

    function qSet2() {
      console.log('Q2'); 
      $('#questionTag').text(questionArr.q2[0]);
      
      $('#answerChoices').show();
      $('#choiceA').text(questionArr.q2[1]);
      $('#choiceB').text(questionArr.q2[2]);
      $('#choiceC').text(questionArr.q2[3]);
      $('#choiceD').text(questionArr.q2[4]);
      
      questionSetReset(); 
      checkAnswer('choiceA'); 
      setTimeout(qSet3, 1000 * 15); 



    }; // END qSet2()

    function qSet3() {
      console.log('Q3');
      $('#questionTag').text(questionArr.q3[0]);
      
      // answerChoices for q1 displayed
      $('#answerChoices').show();
      $('#choiceA').text(questionArr.q3[1]);
      $('#choiceB').text(questionArr.q3[2]);
      $('#choiceC').text(questionArr.q3[3]);
      $('#choiceD').text(questionArr.q3[4]);
      
      questionSetReset(); 
      checkAnswer('choiceB'); 
      setTimeout(qSet4, 1000 * 15); 


    }; // END qSet3()

    function qSet4() {
      console.log('Q4'); 
      $('#questionTag').text(questionArr.q4[0]);
      
      $('#answerChoices').show();
      $('#choiceA').text(questionArr.q4[1]);
      $('#choiceB').text(questionArr.q4[2]);
      $('#choiceC').text(questionArr.q4[3]);
      $('#choiceD').text(questionArr.q4[4]);
      
      questionSetReset(); 
      checkAnswer('choiceC'); 
      setTimeout(qSet5, 1000 * 15); 


    }; // END qSet4()
        
    function qSet5() {
      console.log('Q5'); 
      $('#questionTag').text(questionArr.q5[0]);
      
      // answerChoices for q1 displayed
      $('#answerChoices').show();
      $('#choiceA').text(questionArr.q5[1]);
      $('#choiceB').text(questionArr.q5[2]);
      $('#choiceC').text(questionArr.q5[3]);
      $('#choiceD').text(questionArr.q5[4]);
      
      questionSetReset(); 
      // lastCall(); 
      checkAnswer('choiceD'); 
      setTimeout(endScreen, 1000 * 15); 


    }; // END qSet5()

    function endScreen() {
      $('#timerTag').text('Total Correct: ').append(numCorrect);
       
      $('#questionTag').text('Total Incorrect: ').append(numIncorrect).append('<br>Unanswered: ').append(numUnanswered);

      $('#answerChoices').hide();

      setTimeout(startBtn, 1000 * 5); 


    }; // END endScreen()

    function timer() {
      if (timerOn == true) {
        $('#timerTag').text(time); 
        interval = setInterval(countDown, 1000);
        return timerOn; 
      }    
    }; // END timer()
    
    function countDown() {
      if (time > 0) {
        $('#timerTag').text(time); 
        time--; 
      } else {
        $('#timerTag').text('Times up!'); 
        timerOn = false; 
        clearInterval(interval); 
          if (answerSelected == false) {
            numUnanswered++; 
            console.log('numUnanswered: ', numUnanswered); 
          }
        time = 10; 
        // return timerOn; 
        return time = 10;
      }
    }; // END countDown()

    function comment() {
      var x = Math.floor(Math.random() * 4); 
      // console.log(x); 

      if (correct) {
        correctAudio.play(); 
        $('#comment').text(correctComments[x]); 
        $('#comment').animate({opacity: '1'}); 
        function fadeOut() {
          $('#comment').animate({opacity: '0'});
        }
        setTimeout(fadeOut, 1000 * 2); 
      } else {
        incorrectAudio.play(); 
        $('#comment').text(incorrectComments[x]); 
        $('#comment').animate({opacity: '1'}); 
        function fadeOut() {
          $('#comment').animate({opacity: '0'});
        }
        setTimeout(fadeOut, 1000 * 2); 
      }
    }

    // function lastCall() {
    //   $('#lastCall').show().animate({left: "+=5000"}, 5000); 
    // }


  } // END gamePlay()

  /////////////// Calls /////////////////
  gamePlay(); 


}); // END document.ready()













/////////////// NOTES /////////////////

// create array of Qs&As
// Function of gameplay with a start button
// Function questionRound contains question, timer
// each question has a timer



// onClick --> $(".btn").css("background-color", "yellow");

// $('button.btn-info').toggleClass('btn-danger'); ---> can change the color by changing the class





// .removeClass() --> change bootstrap buttons to btn-danger
// $( "#foo" ).toggleClass( className, addOrRemove );

