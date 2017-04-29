$(document).ready(
	function() {
		var a = $('<div></div>');
		var bg = $('#background');

		var intervalList = [];
		var listIndex = 0;
		$('#send').bind('click', function() {
			var inputWords = $('#input-box').val();

			intervalList[listIndex] = setInterval(function() {
				var top = getRandomInt(10, 380);
				var time = getRandomInt(1500, 9000);

				addItem(inputWords, bg, top, time, randomColor());

			}, 3000);
			$('#input-box').val('');
			listIndex++;

		});

		$('#input-box').keydown(function(event) {
			if(event.keyCode == 13) {
				var inputWords = $('#input-box').val();

				intervalList[listIndex] = setInterval(function() {
					var top = getRandomInt(10, 375);
					var time = getRandomInt(1500, 9000);

					addItem(inputWords, bg, top, time, randomColor());

				}, 3000);
				$('#input-box').val('');
				listIndex++;

			}
		});

		$('#clear').bind('click', function() {
			for(var i = 0; i < intervalList.length; i++) {
				clearInterval(intervalList[i]);
			}
			intervalList.length = 0;
			listIndex = 0;
			bg.empty();

		});

	}
);

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function randomColor() {
	var red = getRandomInt(0, 255);
	var green = getRandomInt(0, 255);
	var blue = getRandomInt(0, 255);
	var opacity = getRandomArbitrary(0.5, 1);
	return 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity + ')';
}

function addItem(words, aimBG, top, time, color) {

	var a = $('<div></div>');
	var needWith = aimBG.width() - 65;
	a.width(50);
	a.text(words).css({
		'position': 'absolute',
		'right': '20px',
		'top': top + 'px',
		'color': color
	}).animate({
		right: needWith + 'px'
	}, time, function() {

		this.remove();
	});
	aimBG.append(a);
}