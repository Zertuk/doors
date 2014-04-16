window.onload = function() {
var door1 = document.getElementById('door1');
var door2 = document.getElementById('door2');
var door3 = document.getElementById('door3');
var winner = document.getElementById('winner');
var surprise = document.getElementById('surprise');
var lose1 = document.getElementById('lose1');
var lose2 = document.getElementById('lose2');
var sad = document.getElementById('sad');
var spooky = document.getElementById('spooky');
var doors = document.getElementById('doors');

var open = document.createElement('audio');
open.setAttribute('src', 'open.wav');
var rain = document.createElement('audio');
rain.setAttribute('src', 'rain.mp3');
var cat = document.createElement('audio');
cat.setAttribute('src', 'cat.wav');
var ohno = document.createElement('audio');
ohno.setAttribute('src', 'ghost.mp3');



doors.addEventListener('click', function() {
	open.play();
	var random = Math.random() * 9;
	if (random < 4) {
	setTimeout(function() {

	doors.style.display = 'none';
	open.pause();
	
	cat.play();
	winner.style.display = 'block';
	surprise.style.display = 'block';
}, 1700);

}
	else if ((4 < random) && (random > 6)){

	setTimeout(function() {

	doors.style.display = 'none';
	open.pause();
	ohno.play();
	lose2.style.display = 'block';
	spooky.style.display = 'block';
}, 1700);

}
	else {

	open.play();
	setTimeout(function() {

	open.pause();
	doors.style.display = 'none';
	rain.play();
	lose1.style.display = 'block';
	sad.style.display = 'block';
}, 1700);
}
})



};

