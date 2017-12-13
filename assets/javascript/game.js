//game code draft

//Psuedocode
// create variables for HMTL Id's and tags
// create variables for each jewel image
// variables for game to run through
// create values for variables in array?

$( document ).ready(function() {

 var mathRandom = Math.floor(Math.random() * (89 - 30));
console.log(mathRandom);
$('.randomNumber').html(mathRandom);

//object method
// var randomNumbers = [89,30,67,46];
var gemValues = {
	gemZero: 89,
 	gemOne: 30,
 	gemTwo: 67,
 	gemThree: 46
};
 	


//TUTOR QUESTION: Line 60 says randomNumber is not defined
//Should change randomNumber on line 60 to variable mathRandom?

//second option 

$(document).ready(function () {
//click function for images 
//use counter method to add all of the numbers together 
var gameCounter=0;
$(".gemImages").on("click", function () {
	gameCounter += 1;

	//index into the gemValues object so to take value, and add
	//Total score + gameCounter + gemValues =?
	
	$('.totalScore').html("Total score:" + gameCounter) ;
	
	

	 

	

	

		//thought of using for loop to run through 
		//gemImages object that was defined on line 15
		// for ( var i = 0; i <gemImages.length; i ++) {
		// 	parseInt(totalScore) + parseInt(gemImages); 
		// 	console.log('did it work?');
		// }
	})

})

});

//make variable for when user finds variable 
var userVariable;
//conditional running through each number
if ( userVariable > 89) {
	console.log("right");
}
 else {
	console.log("wrong");
}

//make userGuess a click event?
var userGuess = 0;

//conditional summzarizing running through each number
if (userGuess === randomNumber) {
	alert("correct");
} else {
	alert("wrong");
}
//why is this on click function here when there is
//anothe click function above on line 34
// $(".gemImages").on("click", function () {

// });
//maybe use array to run through numbers. numbers in array can add together



//conditional to add wins and losses together
var win = 0; 
var lose = 0;

if (userGuess === randomNumber) {
	win++;
	$("#win").html("wins:" + win);
} else {
	lose++;
	$("#lose").html("lose:" + lose);

}


//}



	