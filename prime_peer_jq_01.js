
$(document).ready(function() {
	$("#Button").on('click', function(event){
		var person = new Person();
	$("#age").prepend('<p>' + person.age + '</p>');
	$("#sex").prepend('<p>' + person.sex + '</p>');	
	$("#weight").prepend('<p>' + person.weight + '</p>');
	$("#name").prepend('<p>' + person.firstName + " " + person.lastName + '</p>');	
	});
});
		
var maleNames = ["Jackson","Aiden","Liam","Lucas"];
var femaleNames = ["Sophia", "Emma", "Olivia", "Ava"];
var lastNames = ["Doe", "Johnson", "Smith", "Brown"];



function Person(){
	this.age = randomNumber(1, 100);
	var random = 0;
	random = randomNumber(0, 1);
	if (random == 0){
		this.sex = "Male";
		this.firstName = maleNames[randomNumber(0,3)];
	}
	else {
		this.sex ="Female";
		this.firstName = femaleNames[randomNumber(0,3)];
	}
	
	this.weight = randomNumber(1,100);
	this.lastName = lastNames[randomNumber(0,3)]
};




//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}


