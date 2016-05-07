$(document).ready(function() { 
	$('#test-content-wrapper').hide();
	$('#test-result-wrapper').hide();
	$('#clickstart').click(startTest);

	var images = ['boat', 'book', 'bridge', 'butterfly', 'fancy', 'feathers', 'flower', 'forehead', 'helmet', 'lena', 'monkey', 'peppers', 'person', 'zebra'],
		testIndex = 0,
		recOnLeft = true,
		results = '',
		intervalId = -1,
		countdown = 10000,
		countdownInterval = 10;

	$('#img-left').click(function(){pick(0)});
	$('#img-right').click(function(){pick(1)});
	$('#button-same').click(function(){pick(2)});


	function startTest() {
		$('#clickstart').hide();
		$('#test-content-wrapper').show();
		testIndex = -1;
		nextStep();
	}

	function showImages() {
		left = 'patches/' + images[testIndex] + '_r.png'
		right = 'patches/' + images[testIndex] + '_c.png'
		recOnLeft = Math.random() > 0.5
		if (!recOnLeft) {
			var tmp = left;
			left = right;
			right = tmp;
		}
		$('#img-left img').attr('src', left);
		$('#img-right img').attr('src', right);
	}

	function pick(choice) {
		// 0 = left/rec
		// 1 = right/jpg
		// 2 = same
		// 3 = no response
		clearInterval(intervalId	);
		if (!recOnLeft && (choice == 0 || choice == 1)) {
			choice = Math.abs(1 - choice);
		}
		results += choice;
		nextStep();
	}

	function nextStep() {
		testIndex += 1;
		if (testIndex < images.length) {
			startTimer();	
			showImages();
		} else {
			$('#test-content-wrapper').hide();
			$('#test-result').text(results);
			$('#test-result-wrapper').show();
		}
	}

	function startTimer() {
		countdown = 10000;
		intervalId = setInterval(decrementTimer, countdownInterval);
	}

	function decrementTimer() {
		countdown -= countdownInterval;
		$('#timer').text((countdown / 1000).toFixed(2));
		if (countdown == 0) {
			pick(3);
		}
	}
});