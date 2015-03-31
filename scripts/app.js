(function () {

  "use strict";

  var $ = require('jquery');
  var p_guess = "";
  var pNumber = [];
  var warning = "<p>please enter a number</p>";
  var win = "<p>You win!</p>";
  var lose = "<p>You lose, again ; )</p><p class='playagain'>Please refresh your browser to play again</p>";
  var higher = "<p>Guess higher...</p>";
  var lower = "<p>Guess lower...</p>";
  var turns = 5;
  var goal = 0;


//generate random value
var getRandnum = function(){
  return Math.floor(Math.random()*100)+1;
};
//evaluate of its not a number - will return true because of !
function isNumber(n) {
  return !isNaN(n);
}

//make sure value exists
  function value_clean(){
    //get value
    p_guess = $(".player_input").val();
    //make it into an int
    p_guess = parseInt(p_guess);
    //if isNumber function evals to true return val else show warning
    if(isNumber(p_guess)===true){
      return p_guess;
    }else{
      console.log("get here");
      $(".warning").html(warning);
    }
  }

  //necessary to prevent form submission
  $('.player').submit(function () {
   return false;
  });

  //assign result of getRandnum to global goal var
   goal = getRandnum();
   console.log(goal,"goal");
   //upon keypress that is enter if turns are greater than 1
   $(document).keypress(function(e){
     if(e.which === 13) {
       if(turns > 1){
         //deincrement turns - 1
         turns--;
         //write value
         $(".number").html(turns);

         if(value_clean()=== goal){
           $(".status").html(win);
           $( "input" ).remove();
         }else if(value_clean()> goal){
           $(':input','.player').val('');
           $(".status").html(lower);
         }else{
           $(':input','.player').val('');
           $(".status").html(higher);
         }

       }else{
         turns--;
         $(".number").html(0);
          $(".status").html(lose);
          $( "input" ).remove();
          $( ".status" ).remove(warning);
        }

      }else{
        $(".number").html(turns);
        //  $(".status").html(warning);
       }
    });



}());


//put in number
//upon submit validate number
//if valid continue
//if invalid break and say why
