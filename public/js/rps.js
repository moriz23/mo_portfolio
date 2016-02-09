$(document).ready(function() {
  var userChoice;
  var computerChoice;
  var userScore = 0;
  var computerScore = 0;
  var roundCounter = 1;
  var computerOptions = [
    "Rock",
    "Paper",
    "Scissors"
  ]

  $("h2").hide();
  $("h1").hide();
  $(".icons").hide();
  $(".btn-info").hide();


  $("button").on("click", function() {
    $("h2").fadeIn(500);
    $("h1").fadeIn(500);
    $(".btn-info").fadeIn(500);
    $(".icons").show();
    $(".btn-default").hide();
  });

  $("a").hover(function () {
  $(this).addClass("pulse");
  });

  $("a").on("click", function() {
    userChoice = this.id;
    computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
     if (roundCounter <= 5){
      roundCounter++;
        $(".round").html(roundCounter);

    if(userChoice === computerChoice) {
      $("h4").html("TIE GAME: You chose " + userChoice + " and Computer chose " + computerChoice);
      $("p").html("<img id='yo' src='http://www.reactiongifs.com/r/2013/02/tied.gif'>");
      $("#myModal").modal("show");
      gameOver();
      

    } else if (userChoice === "Rock" && computerChoice === "Scissors") {
        $("h4").html("YOU WON: You chose " + userChoice + " and Computer chose " + computerChoice);
        $("p").html("<img id='yo' src='https://usatftw.files.wordpress.com/2015/02/carltonjimmyfallon.gif?w=1000'>");
        $("#myModal").modal("show");
        gameOver();
        userScore++;
        $(".userScore").html(userScore);

    } else if (userChoice === "Rock" && computerChoice === "Paper") {
        $("h4").html("FAILED! COMPUTER WON: You chose " + userChoice + " and Computer chose " + computerChoice);
        $("p").html("<img id='yo' src='http://i748.photobucket.com/albums/xx124/ohkimosabe/GIFS/2ykx2msjpg.gif'>");
        $("#myModal").modal("show");
        gameOver();
        computerScore++;
        $(".computerScore").html(computerScore);

    } else if (userChoice === "Paper" && computerChoice === "Scissors") {
        $("h4").html("FAILED! COMPUTER WON: You chose " + userChoice + " and Computer chose " + computerChoice);
        $("p").html("<img id='yo' src='http://thirdmonk.net/postcont/2013/10/Trampoline-Dunk-Fail.gif'>");
        $("#myModal").modal("show");
        gameOver();
        computerScore++;
        $(".computerScore").html(computerScore);

    } else if (userChoice === "Paper" && computerChoice === "Rock") {
        $("h4").html("YOU WON: You chose " + userChoice + " and Computer chose " + computerChoice);
        $("p").html("<img id='yo' src='http://gifrific.com/wp-content/uploads/2012/08/LeBron-James-Dancing-After-Winning-Gold-Medal-2012-London-Olympics.gif'>");
        $("#myModal").modal("show");
        gameOver();
        userScore++;
        $(".userScore").html(userScore);

    } else if (userChoice === "Scissors" && computerChoice === "Rock") {
        $("h4").html("FAILED! COMPUTER WON: You chose " + userChoice + " and Computer chose " + computerChoice);
        $("p").html("<img id='yo' src='http://45.media.tumblr.com/tumblr_ltwddhOT1T1qfetl0o1_500.gif'>");
        $("#myModal").modal("show");
        gameOver();
        computerScore++;
        $(".computerScore").html(computerScore);

    } else if (userChoice === "Scissors" && computerChoice === "Paper") {
        $("h4").html("YOU WON: You chose " + userChoice + " and Computer chose " + computerChoice);
        $("p").html("<img id='yo' src='http://www.tapfortap.com/wp-content/uploads/2015/06/tumblr_ln9eat2mn61qa9fb5o1_500.gif'>");
        $("#myModal").modal("show");
        gameOver();
        userScore++;
        $(".userScore").html(userScore);
      }
    }

      console.log(userChoice, computerChoice);
      
  });
      function gameOver() {
        if (roundCounter === 6 && userScore > computerScore) {
          $("a").off();
          $("h4").html("CONGRATS YOU WON THE MOST ROUNDS");
          $("p").html("<img id='yo' src='https://media.giphy.com/media/iXmF48FlrGuTS/giphy.gif'>");
          $("#myModal").modal("show");

      } else if (roundCounter === 6 && computerScore > userScore) {
          $("a").off();
          $("h4").html("SERIOUSLY? THE COMPUTER WON MORE ROUNDS THAN YOU?");
          $("p").html("<img id='yo' src='http://i.imgur.com/1HWQIPa.gif'>");
          $("#myModal").modal("show");
      
      } else if (roundCounter === 6 && computerScore === userScore) {
          $("a").off();
          $("h4").html("YOU CAN KEEP SAYING THAT TO YOURSELF, BUT IT IS A TIE");
          $("p").html("<img id='yo' src='https://jessrunshappy.files.wordpress.com/2014/05/be-positive.gif'>");
          $("#myModal").modal("show");
      }

    } 



  
});