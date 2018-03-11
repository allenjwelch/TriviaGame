/////////////// Variables /////////////////
var questionArr = {
  q1: ["question1", "answer1"], 
  q2: ["question2", "answer2"], 
  q3: ["question3", "answer3"], 
  q4: ["question4", "answer4"], 
  q5: ["question5", "answer5"], 
}; 

var questionCycle = [
  questionArr.q1, 
  questionArr.q2, 
  questionArr.q3, 
  questionArr.q4
];

var timerOn = false; 
var interval; 
var time = 10; 
// var questionSet; 


// console.log(questionArr.q1[0]); --> Displays question
// var q1 = questionArr.q1[0]; 
// console.log(questionCycle[0].questionArr[0]); 



/////////////// Functions /////////////////
$(document).ready(function() {
  function gamePlay() {
    $('#answerChoices').hide(); // --> initially hides answerChoices btns
    
    $('.jumbotron').on('click', '#start', function() {
      console.log('Button clicked!'); 
      $('#start').hide();

      // Round 1 begins
      // Timer Starts counting down
      timerOn = true; 
      timer(); 
      // setTimeout() ----> Used to delay an action until the end of the specified time 
      
      function cycle () {
        for (i = 0; i < questionCycle.length; i++) {

        }

      function questionSet() {
        for (i = 0; i < questionArr.length; i++) {
          setTimeout(questionSet, 1000 * 10); 
          
          
          $('#questionTag').text(questionArr.q1[i]);
          // answerChoices for q1 displayed
    
          $('#choiceA').text(questionArr.q1[i]);
          $('#answerChoices').show();
        }
      }


      // question 1 displayed
      

    }); 


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

