//Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress-filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player-slider');

//Build functions
function togglePlay() {
	//if (video.paused) {
		//video.play();
	//} else {
		//video.pause();
	//}//the same function but shorter below
	const method = video.paused ? 'play' : 'pause';
	video[method]();	
}

function updateButton() { //changing icon on a button Play
	const icon = this.paused ? '➧  ' : '■ ■';
	toggle.textContent = icon;
	//console.log(icon);
}

function skip() { //skip buttons >> and <<
	//console.log(this.dataset.skip);
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() { //volume and speed changing (range bars)
	video[this.name] = this.value;
	//console.log(this.name);
	//console.log(this.value);
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100; //progressbar duration in %
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {//show and hide navigation bar (all buttons)
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

//Hook the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);//while the video is playing - run a function updateButton
video.addEventListener('pause', updateButton);//while the video is paused - run a function updateButton
video.addEventListener('timeupdate', handleProgress);//progressbar updating

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', () => {
	if (mousedown) {
		scrub();
	}
});//moving a progressbar duration
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);