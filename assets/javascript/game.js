//game code draft

//Psuedocode
// create variables for HMTL Id's and tags
// create variables for each jewel image
// variables for game to run through
// create values for variables in array?

$( document ).ready(function() {

var win = 0; 
var lose = 0;
var userGuess = 0;

//score user must try to achieve
 var mathRandom = Math.floor(Math.random() * (89 - 30));
console.log(mathRandom);
$('.randomNumber').html(mathRandom);


//function that creates random number
function superRandomNumber () {
	return Math.floor(Math.random() * 100);
}

//function for winning and losing
// function checkWins () {
// 	if (totalScore === mathRandom) {
// 		console.log("you won!");
// 	} else {
// 	    console.log("you're almost there....");
// 	}
// }


function checkLoss() {
	if (totalScore > mathRandom) {
		console.log("you lost!");
		alert("you lost!");
		lose++;
		$("#losses").html("lose:" + lose);
	} else if(totalScore === mathRandom) {
		console.log("you won!");
		alert("you won!");
		win++;
		$("#wins").html("wins:" + win);

	} 
	
}


//object method
// var randomNumbers = [89,30,67,46];
var gemValues = {
	gemZero: superRandomNumber(),
 	gemOne: superRandomNumber(),
 	gemTwo: superRandomNumber(),
 	gemThree: superRandomNumber()
};
 	
 	//check gem values through console.log
 	console.log("gem value currently is:" + gemValues.gemZero);
 	console.log("gem value currently is:" + gemValues.gemOne);
 	console.log("gem value currently is:" + gemValues.gemTwo);
 	console.log("gem value currently is:" + gemValues.gemThree);

 	//SUBLIME CHEAT CODE:
	//cmd + ] --indents left or right

	//click function for images 
	//use counter method to add all of the numbers together 
		var totalScore=0;
		

		//gemZero click event
		$("#gemZero").on("click", function () {
			//console.log("gemZero works"); //works
		     //totalScore = totalScore + gemValues.gemZero;
			//console.log(gemValues.gemZero); works

			totalScore += gemValues.gemZero;
			console.log("total score is :" + gemValues.gemZero);
			$("#current-points").html(totalScore);

			//call win/loss function
			//checkWins();
			checkLoss(); 

		})

		//gemOne click event
		$("#gemOne").on("click", function () {
			//console.log("gemZero works"); //works
		     //totalScore = totalScore + gemValues.gemZero;
			//console.log(gemValues.gemZero); works

			totalScore += gemValues.gemOne;
			console.log("total score is :" + gemValues.gemOne);
			$("#current-points").html(totalScore);

			//call win/loss function
			//checkWins();
			checkLoss(); 

		})

		//gemTwo click event 
		$("#gemTwo").on("click", function () {
			//console.log("gemZero works"); //works
		     //totalScore = totalScore + gemValues.gemZero;
			//console.log(gemValues.gemZero); works

			totalScore += gemValues.gemTwo;
			console.log("total score is :" + gemValues.gemTwo);
			$("#current-points").text(totalScore);

			//call win/loss function
			//checkWins();
			checkLoss(); 

		})

		//gemThree click event 
		$("#gemThree").on("click", function () {
			//console.log("gemZero works"); //works
		     //totalScore = totalScore + gemValues.gemZero;
			//console.log(gemValues.gemZero); works

			totalScore += gemValues.gemThree;
			console.log("total score is :" + gemValues.gemThree);
			$("#current-points").text(totalScore);

			//call win/loss function
			//checkWins();
			checkLoss(); 

		})

		//gemFour click event
		$("#gemFour").on("click", function () {
			//console.log("gemZero works"); //works
		     //totalScore = totalScore + gemValues.gemZero;
			//console.log(gemValues.gemZero); works

			totalScore += gemValues.gemFour;
			console.log("total score is :" + gemFour);
			$("#current-points").text(totalScore);

			//call win/loss function
			//checkWins();
			checkLoss(); 

		})


		$("#current-points").html(totalScore);
		$("#current-wins").html();
		$("#current-losses").html();

	})




//make variable for when user finds variable 
// var userVariable;
// //conditional running through each number
// if ( userVariable > 89) {
// 	console.log("right");
// }
//  else {
// 	console.log("wrong");
// }

//make userGuess a click event?
// var userGuess = 0;
// var randomNumber = 0;
// //conditional summzarizing running through each number
// if (userGuess === randomNumber) {
// 	alert("correct");
// } else {
// 	alert("wrong");
// }



//conditional to add wins and losses together
// var win = 0; 
// var lose = 0;
// var userGuess = 0;

//$("#card-block").html(totalScore);




// }


//}