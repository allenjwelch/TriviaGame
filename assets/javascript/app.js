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

var correctComments = ['Nice!', 'Great job!', 'Keep it up!']; 
var incorrectComments = ['Are you drunk?', 'Nope!', 'Way off!']; 
var correctAudio = new Audio('../TriviaGame/assets/images/bottle3.mp3'); 
var incorrectAudio = new Audio('../TriviaGame/assets/images/glassBreak.mp3'); 

// console.log(questionArr.q1[0]); --> Displays question
// var q1 = questionArr.q1[0]; 
// console.log(questionArr[0]); 



/////////////// Functions /////////////////
$(document).ready(function() {
  function gamePlay() {
    $('#answerChoices').hide(); // --> initially hides answerChoices btns
    
    $('.jumbotron').on('click', '#start', function() {
      console.log('Button clicked!'); 
      $('#start').hide();
      comment(); // Remember to remove later

      qSet1(); 
      setTimeout(qSet2, 1000 * 20); 
      setTimeout(qSet3, 1000 * 35); 
      setTimeout(qSet4, 1000 * 45); 
      clearTimeout(qSet4); 

      // Round 1 begins
      // Timer Starts counting down
      // setTimeout() ----> Used to delay an action until the end of the specified time 
      

          
          
          
          
          
    }); 
        
    function qSet1() {
      timerOn = true; 
      timer(); 
      $('#questionTag').text(questionArr.q1[0]);
      
      // answerChoices for q1 displayed
      $('#answerChoices').show();
      $('#choiceA').text(questionArr.q1[1]);
      $('#choiceB').text(questionArr.q1[2]);
      $('#choiceC').text(questionArr.q1[3]);
      $('#choiceD').text(questionArr.q1[4]);
      
      //-----Better way to cycle through assignment of values??----
      // for (i = 0; i < questionArr.length; i++) {
      //   console.log(questionArr.q1[i]); 
      // }

      // setTimeout(qSet1, 1000 * 10); 
    }; // END qSet1()

    function qSet2() {
      timerOn = true; 
      timer(); 
      $('#questionTag').text(questionArr.q2[0]);
      
      // answerChoices for q1 displayed
      $('#answerChoices').show();
      $('#choiceA').text(questionArr.q2[1]);
      $('#choiceB').text(questionArr.q2[2]);
      $('#choiceC').text(questionArr.q2[3]);
      $('#choiceD').text(questionArr.q2[4]);
      
      //-----Better way to cycle through assignment of values??----
      // for (i = 0; i < questionArr.length; i++) {
      //   console.log(questionArr.q1[i]); 
      // }

      // setTimeout(qSet1, 1000 * 10); 
    }; // END qSet2()

    function qSet3() {
      timerOn = true; 
      timer(); 
      $('#questionTag').text(questionArr.q3[0]);
      
      // answerChoices for q1 displayed
      $('#answerChoices').show();
      $('#choiceA').text(questionArr.q3[1]);
      $('#choiceB').text(questionArr.q3[2]);
      $('#choiceC').text(questionArr.q3[3]);
      $('#choiceD').text(questionArr.q3[4]);
      
      //-----Better way to cycle through assignment of values??----
      // for (i = 0; i < questionArr.length; i++) {
      //   console.log(questionArr.q1[i]); 
      // }

      // setTimeout(qSet1, 1000 * 10); 
    }; // END qSet3()

    function qSet4() {
      timerOn = true; 
      timer(); 
      $('#questionTag').text(questionArr.q4[0]);
      
      // answerChoices for q1 displayed
      $('#answerChoices').show();
      $('#choiceA').text(questionArr.q4[1]);
      $('#choiceB').text(questionArr.q4[2]);
      $('#choiceC').text(questionArr.q4[3]);
      $('#choiceD').text(questionArr.q4[4]);
      
      //-----Better way to cycle through assignment of values??----
      // for (i = 0; i < questionArr.length; i++) {
      //   console.log(questionArr.q1[i]); 
      // }

      // setTimeout(qSet1, 1000 * 10); 
    }; // END qSet4()
        
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
        time = 10; 
        return timerOn; 
      }
    }; // END countDown()

    function comment() {
      var x = Math.floor(Math.random() * 3); 
      console.log(x); 

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

