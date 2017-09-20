$(document).ready(function(){
$("#submit").hide();
$("#restart").hide();
$("#questionssection").hide();




$("#start-button").on("click", function() {
$("#submit").show();
$("#restart").show();
$("#start-button").hide();
$("#questionssection").show();




var number = 51;
var counter = setInterval(timer, 1000);
var wronganswers = 0;
var correctanswers = 0;
var unfinishedanswers = 0;
var clickanswer = [];



function timer(){        
      number-- 
      $("#show-number").html("<h2>" + number + "</h2>" );
      if (number === 0){
        stop(); 
        alert("The Joker Has Defeated You!");
      }
    };


function stop(){
  clearInterval(counter);
  console.log("METAL");
};

 function finish(){
      number = 1; 
      clearInterval(counter); 
      console.log("CAPULLO!!!!!!!!")
    }

$("#restart").on("click", function() {
      number = 51;
      timer();
      console.log("THE MAN WHO LAUGHS");
      var wronganswers = 0;
      var correctanswers = 0;
      var unfinishedanswers = 0;
      var clickanswer = [];   
 });



});


//Questions Code
// Hold user guess from Radio Input Type
// Store answers
// When Submit Final Answers button is pressed check user guess against correct answers
// Display how many correct answers they got
// Display how many wrong answers they got
