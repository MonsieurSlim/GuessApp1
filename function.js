// $("submitGuess") = document.getElementById('#submit_guess');
// $ ("resetGame") = document.getElementById('#reset_game');
// var alertHolder = document.getElementById('alert_area');
var inputGuess;

var randomNum = Math.floor(Math.random()*100);
console.log(randomNum);
var guesser = function(num) {
while(true) {
	// inputGuess = parseInt(inputGuess,10);
	
			if (num === randomNum) {
				$("#alert_area").html("Your Guess Was Just Right!");
			} else if (num < randomNum) {
				$("#alert_area").html("Yikes! Too Low!");
			} else if (num > randomNum) {
				$("#alert_area").html("Yikes! Too High!");
			} else {
				return;
			}
			break ;
		}
		
}

$("#submit_guess").click(function (event) { 
	console.log("button click");
	inputGuess = parseInt($("#input_guess").val());
	guesser(inputGuess);
}); 