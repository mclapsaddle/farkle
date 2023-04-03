var diceArr = [];
var rollNums = [0,0,0,0,0,0];


function initializeDice(){
	for(i = 0; i < 6; i++){
		diceArr[i] = {};
		diceArr[i].id = "die" + (i + 1);
		diceArr[i].value = i + 1;
		diceArr[i].clicked = 0;
		
	}
	rollNums = [0,0,0,0,0,0];
	localStorage.setItem("rollNumes", JSON.stringify(rollNums));
	localStorage.setItem("score",0);
}


/*Rolling dice values*/
function rollDice(){
	for(var i=0; i < 6; i++){
		
		if(diceArr[i].clicked === 0){
			diceArr[i].value = Math.floor((Math.random() * 6) + 1);
		}
	}
	updateDiceImg();
}

/*Updating images of dice given values of rollDice*/
function updateDiceImg(){

	var diceImage;
	for(var i = 0; i < 6; i++){
		diceImage = "images/" + diceArr[i].value + ".png";
		document.getElementById(diceArr[i].id).src =  diceImage;
		checkDieValue(diceArr[i].value);
	
	}
	rollPoints();

}

function diceClick(img){
	var i = img.getAttribute("data-number");

	img.classList.toggle("transparent");
	if(diceArr[i].clicked === 0){
		diceArr[i].clicked = 1;
	}
	else{
		diceArr[i].clicked == 0;
	}

	rollPointsClicked(i);

}
function checkDieValue(dieValue){
	var rolls = JSON.parse(localStorage.getItem("rollNumes"));
	
	
	var  ones=rolls[0];
	 var twos = rolls[1];
	 var threes = rolls[2];
	 var fours = rolls[3];
	 var fives = rolls[4];
	 var sixes = rolls[5];
	

	 switch(dieValue){
		case 1:
			ones++;
			break;
		case 2:
			twos++;
			break;
		case 3:
			threes++;
			break;
		case 4:
			fours++;
			break;
		case 5:
			fives++;
			break;
		case 6:
			sixes++;
			break;
		default:
			break;
	 }
	 rolls = [ones, twos, threes, fours, fives,sixes];
	 localStorage.setItem("rollNumes", JSON.stringify(rolls));

	

	
}
function rollPoints(){
	var score= localStorage.getItem("score");
	var rolls = JSON.parse(localStorage.getItem("rollNumes"));
	
	score = parseFloat(score);
	var tempScore = 0; 
	var  ones=rolls[0];
	 var twos = rolls[1];
	 var threes = rolls[2];
	 var fours = rolls[3];
	 var fives = rolls[4];
	 var sixes = rolls[5];
	if(ones < 3){
		tempScore = 100*ones;
		
	}else {
		while(ones >= 3 ){
			tempScore = tempScore + 1000;
			ones = ones - 3;
		}
		tempScore = tempScore + (100*ones);
	}
	if(twos >= 3){
		while(twos >= 3 ){
			tempScore = tempScore + 200;
			twos = twos - 3;
		}
	}
	if(threes >= 3){
		while(threes >= 3 ){
			tempScore = tempScore + 300;
			threes = threes - 3;
		}
	}
	if(fours >= 3){
		while(fours >= 3 ){
			tempScore = tempScore + 400;
			fours = fours - 3;
		}
	}
	if(fives < 3){
		tempScore = 50*fives;
		
	}else {
	
	
		while(fives >= 3 ){
			tempScore = tempScore + 500;
			fives = fives - 3;
		}
		tempScore = (50*fives) + tempScore;
	
	}
	if(sixes >= 3){
		while(sixes >= 3 ){
			tempScore = tempScore + 600;
			sixes = sixes - 3;
		}
	}
	if (tempScore == 0){
		score = 0
	}else {
	score = score + tempScore; 
	}

	document.getElementById("score").innerHTML = score;

	localStorage.setItem("score",score);
}
function rollPointsClicked(){
	var rolls = [0, 0, 0, 0, 0,0];
	var  ones=rolls[0];
	 var twos = rolls[1];
	 var threes = rolls[2];
	 var fours = rolls[3];
	 var fives = rolls[4];
	 var sixes = rolls[5];
	for(i = 0; i < 6; i++){
		if(diceArr[i].clicked == true){
			switch(diceArr[i].value){
				case 1:
					ones++;
					break;
				case 2:
					twos++;
					break;
				case 3:
					threes++;
					break;
				case 4:
					fours++;
					break;
				case 5:
					fives++;
					break;
				case 6:
					sixes++;
					break;
				default:
					break;
			 }
		}

	}
	
	rolls = [ones, twos, threes, fours, fives,sixes];
	 localStorage.setItem("rollNumes", JSON.stringify(rolls));
	 rollPoints();
}

