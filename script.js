var secretWord = "ScriptEd";

 

  $("button").on("click", function(){
      var guess =$("#pass").val(); 
      if(secretWord===guess){
    $("#result").append("WOOOOOOOHHHH!!111! You guessed the secret word!");
      }
  });
