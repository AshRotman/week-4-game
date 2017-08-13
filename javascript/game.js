

$(function() {

//global variables
var wins = 0;
var losses = 0;
var math = 0;
// var blue = ;
// var red = 0;
// var yellow = 0;
// var green = 0;

/**Random Number**/
var number = Math.floor((Math.random()* 100) + 19);
console.log(number);
$('#target').append(number);

var configmath = function(){
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('#math').empty();
	$('#math').append(math);
	
}

/**Random Crystal number**/
var randomGemNumber = function(){
	return Math.floor(Math.random()*12 +1);

}

var reset = function(){
	math = 0;
    number = Math.floor((Math.random()* 100) + 19);

	$('#target').empty();
	$('#target').append(number);

	blue = Math.floor((Math.random()* 12) + 1);
    red = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    configmath();
}

var config = function (){
	if (math == number) {
		wins = wins + 1;
		reset();
}
	else if(math > number){
		losses = losses + 1;
		reset();
}
	else{
		configmath();
}

	$('.math').append(math);
	$('.number').append(number);
}


	$('#blue').click(function() {
		math = math + randomGemNumber();
		config();
		console.log(math);
	});

	$('#red').click(function(){
		math  = math  + red;
		config();
	});
	$('#yellow').click(function(){
		math  = math  + yellow;
		config();
	});
	$('#green').click(function(){
		math  = math  + green;
		config();
	});
});



	







































//global variables
// var gem1 =  red;
// var gem2 = yellow;
// var gem3 = green;
// var gem4 = blue;
// var targetNumber = 0;


// //random number functions for target number and gems
// var randomTargetNumber = Math.floor(Math.random() * 19) +100;
// 	$('#target').html(randomTargetNumber);

// var randomGemNumber = Math.floor(Math.random() * 12) +1;
// 	$('#red').html(randomGemNumber);


// function randomGemNumber() {
// 	var num = Math.floor(Math.random() * 12) +1;
// 	document.getElementById('target') = num;
// 	console.log(num);
// }

//your points function



//win-loss


//reset