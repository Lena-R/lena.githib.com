let countdown;

const timerDisplay = document.querySelector('.display-timeleft');
const endTime = document.querySelector('.display-endtime');

//buttons in DOM
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
	//stop running an existing timer
	clearInterval(countdown);

	//date initialization
	const now = Date.now();
	const then = now + seconds * 1000;
	displayTimeLeft(seconds);
	//run a timer on DOM
	displayEndTime(then);

	countdown = setInterval(() => {
		const secondsLeft = Math.round(then - Date.now()) / 1000;
		//const secondsLeft = Math.floor(Date.now() - now) / 1000;
		//check if we have stop it:		
		if (secondsLeft < 0) {
			clearInterval(countdown);
			return;
		}
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);//get minutes
	const remainderSeconds = Math.floor(seconds % 60);//get seconds
	//display minutes and seconds in DOM:
	const display = `${minutes} : ${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
	document.title = display;//dispaly timer on a browser's rab Title
	timerDisplay.textContent = display;
	//console.log({minutes, remainderSeconds});
}

function displayEndTime(timestamp) {
	//new Date converts a timestamp (time in milliseconds) into a date format (day, month, year, hour. min, sec)
	const end = new Date(timestamp);
	const hour = end.getHours();
	const minutes = end.getMinutes();
	endTime.textContent = `Be back at ${hour}:${minutes < 10 ? `0` : ''}${minutes} `;
}

//dispaly timer in a DOM:
function startTimer() {
	//console.log(this.dataset.time);//data from the appropriated button
	const seconds = parseInt(this.dataset.time);
	timer(seconds);
}

//display buttons on a page
buttons.forEach(button => button.addEventListener('click', startTimer));

//display data from an input field
document.customForm.addEventListener('submit', function(e) {//customForm is a form name in HTML document(name = "customForm")
	e.preventDefault();
	const mins = this.minutes.value;
	//console.log(mins);
	timer(mins * 60);
	this.reset();
});
