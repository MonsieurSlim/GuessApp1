// $("submitGuess") = document.getElementById('#submit_guess');
// $ ("resetGame") = document.getElementById('#reset_game');
// var alertHolder = document.getElementById('alert_area');
var inputGuess;
var randomNum = Math.floor(Math.random()*100);
console.log(randomNum);
var prevInput;
var randomNum;
var newGame = function () {
	randomNum = Math.floor(Math.random()*100);
	console.log(randomNum);
	$("#input_guess").val("");
}
newGame();

var validate = function () {
	return ((inputGuess === "") || (isNaN(inputGuess)) || (inputGuess > 100) || (inputGuess < 0))? false : true ;
}

var guesser = function(num) {
	 inputGuess = parseInt(inputGuess,10);
			if (num === randomNum) {
				$("#alert_area").html("Your Guess Was Just Right!");
			} 
			if (num < randomNum) {
					if(num > prevInput) {
						console.log("You are getting Warmer.....");
						$("#alert_area").html("You are getting Warmer.....");
					}
					else if (num < prevInput) {
						console.log("You are getting Colder....");
						$("#alert_area").html("You are getting Colder....");
					}
					else if (num === prevInput) {
						console.log("Guess same as previous guess....");
						$("#alert_area").html("Guess same as previous guess....");
					}
					else {
						console.log("Your guess was smaller than the secret Number!");
						$("#alert_area").html("Your guess was smaller than the secret Number!");
					}
								
			} if (num > randomNum) {
					if (num < prevInput) {
						console.log("You are getting Warmer....");
						$("#alert_area").html("You are getting Warmer....");
					}
					else if (num > prevInput) {
						console.log("You are getting Colder.....");
						$("#alert_area").html("You are getting Colder.....");
					}
					else if (num === prevInput) {
						console.log("Guess same as previous guess....");
						$("#alert_area").html("Guess same as previous guess....");
					}
					else {
						console.log("Your guess was greater than the secret Number!");
						$("#alert_area").html("Your guess was greater than the secret Number!");
					}
				
			}
		
}

$("#submit_guess").click(function (event) {
	event.preventDefault(); 
	console.log("button click");
	inputGuess = parseInt($("#input_guess").val());
	if(validate()) {
		guesser(inputGuess);
		prevInput = inputGuess;
	}else{
		alert("Please Enter An Integer Between 0 and 100!");
	}
}); 

$("#reset_game").click(function(event) {
	newGame();
});

