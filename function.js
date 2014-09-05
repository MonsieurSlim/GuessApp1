// $("submitGuess") = document.getElementById('#submit_guess');
// $ ("resetGame") = document.getElementById('#reset_game');
// var alertHolder = document.getElementById('alert_area');
var inputGuess;

var randomNum = Math.floor(Math.random()*100);
var guesser = function() {
while(true) {
	// inputGuess = parseInt(inputGuess,10);
	
			if (inputGuess === randomNum) {
				console.log("Your Guess Was Just Right!");
				break;
			}
			if (inputGuess < randomNum) {
				console.log("Yikes! Too Low!");
			}
			if (inputGuess > randomNum) {
				console.log("Yikes! Too High!");
			}
		}
		
}

$("#submit_guess").click(function (event) { 
	console.log("button click");
	inputGuess = parseInt($("#input_guess").val());
	guesser();
}); 