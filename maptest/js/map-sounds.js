var soundMainpage = function() {
    var audio = new Audio();
    audio.src = 'sounds/main-page-sound-link.mp3';
    audio.autoplay = true;
}
var soundbtn = document.querySelector('.main-page-link');
soundbtn.addEventListener('mouseenter', soundMainpage, false);

var soundAbout = function() {
    var audio = new Audio();
    audio.src = 'sounds/about-project-sound-link.mp3';
    audio.autoplay = true;
}
var soundbtn = document.querySelector('.about-link');
soundbtn.addEventListener('mouseenter', soundAbout, false);

var soundQuestions = function() {
    var audio = new Audio();
    audio.src = 'sounds/questions-sound-link.mp3';
    audio.autoplay = true;
}
var soundbtn = document.querySelector('.questions-link');
soundbtn.addEventListener('mouseenter', soundQuestions, false);

var soundEyeaccessabilityon = function() {
    var audio = new Audio();
    audio.src = 'sounds/eyes-accessability-button.mp3';
    audio.autoplay = true;
}
var soundbtn = document.querySelector('.sound-eye-accessability-on');
soundbtn.addEventListener('mouseenter', soundEyeaccessabilityon, false);

var soundOff = function() {
    var audio = new Audio();
    audio.src = 'sounds/sound-off-button.mp3';
    audio.autoplay = true;
}
var soundbtn = document.querySelector('.sound-off-btn');
soundbtn.addEventListener('mouseenter', soundOff, false);