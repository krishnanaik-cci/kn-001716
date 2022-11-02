// Onload call init()
window.onload = function () {
	init();
};

/* Timer code starts */
function timeToString(time) {
let diffInHrs = time / 3600000;
let hh = Math.floor(diffInHrs);

let diffInMin = (diffInHrs - hh) * 60;
let mm = Math.floor(diffInMin);

let diffInSec = (diffInMin - mm) * 60;
let ss = Math.floor(diffInSec);

let diffInMs = (diffInSec - ss) * 100;
let ms = Math.floor(diffInMs);

let formattedMM = mm.toString().padStart(2, "0");
let formattedSS = ss.toString().padStart(2, "0");
let formattedMS = ms.toString().padStart(2, "0");
return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

let startTime;
let elapsedTime = 0;
let timerInterval;
function print(txt) {
	document.getElementById("display").innerHTML = txt;
}

//Start Timer
function startwatch() {
	startTime = Date.now() - elapsedTime;
	timerInterval = setInterval(function printTime() {
			elapsedTime = Date.now() - startTime;
			print(timeToString(elapsedTime));
	}, 10);
}

//stop Timer
var obj = {
	create: function () {
			clearInterval(timerInterval);
	}
}
/* Timer code ends */

var id, time, loopMax = 0, loopCount = 0;
var stageWidth, stageHeight;
var animationStartTime, loopStartTime, loopFinishTime;
var timeline;

/* ISI */
/* Values in seconds */
var isiDelay;
var isiScrollTime = 446;
var isiFinalPause = 1;

/* start ISI scroll after animation completes */
var func = {
	startScroll: function () {
			isiDelay = timeline.totalDuration();
			startISIScroll(isiDelay, isiScrollTime, "pause~" + isiFinalPause);
	}
}
/* Frame elements */

// Init defined here
function init() {
	id = document.getElementsByTagName('body')[0].id;
	stageWidth = parseInt(id.substring(3, id.indexOf("x")));
	stageHeight = parseInt(id.substring(id.indexOf("x") + 1));
	createBorder();
	animationStartTime = new Date().getTime();

	loopMax = 0;
	getElem("isi-text").innerHTML = isiText;
	timeline = new TimelineMax({ onComplete: finishTimeline });
	timeline
		.set([getElem("cover"), getElem("border"), getElem("background"), getElem("hotspot"), getElem("isi-indicator-text"), getElem("disclaimer"), getElem("lybalvi-logo"), getElem("isi"), getElem("isi-header"),
		getElem("isi-header-text"), getElem("isi-text-holder"), getElem("isi-text")], { autoAlpha: 1 });
  
	/* Identify the if Mac chrome */
	if ((navigator.userAgent.indexOf("Mac") != -1) && (navigator.userAgent.indexOf("Chrome") != -1)) {
	var element = document.getElementById("cover");
	element.classList.add("mac-chrome");

}
	startAnimation();
}

// Start Animation defined here
var timeScale = 1;
var lastFrameTimeScale = 1.5;

function startAnimation() {
	var speed = 1 * timeScale;
	startISIScroll(isiDelay, isiScrollTime, "pause~" + isiFinalPause);
	timeline
	.add(func.startScroll)
	.addLabel("frame1", "+=3")
	.to(getElem("lybalvi-logo"), speed, {autoAlpha:0, x:-300}, "frame1")
	.to([getElem("victoria-img"), getElem("text-one")], speed, {autoAlpha:1, x:0,}, "frame1")
	.to([getElem("copper-bar"), getElem("text-two")], speed, {autoAlpha:1, delay:2}, "frame1")
	.to([getElem("lybalvi-logo")], speed, {autoAlpha:1, delay:2, scaleX:.89, scaleY:.89, x:1, y:-68}, "frame1")
	
	.addLabel("frame2", "+=2.15")
	.to(getElem("text-two"), speed, {autoAlpha:0}, "frame2")
	.to(getElem("text-three"), speed, {autoAlpha:1, delay:1}, "frame2")

	.addLabel("frame3", "+=1.85")
	.to([getElem("victoria-img"), getElem("text-one"), getElem("copper-bar"), getElem("text-three")], speed, {autoAlpha:0, x:-300}, "frame3")
	.to(getElem("cta"), speed, {autoAlpha:1, delay:2.6}, "frame3")

	/* Stop timer */
	.add(obj.create)//must be removed later
}

/* start timer function call */
startwatch(); //must be removed later 

// End of Animation
function finishTimeline() {
	if (getElem("isi") != null) {
		// startISIScroll(isiDelay, isiScrollTime, "pause~"+isiFinalPause);
	} else {
		animationComplete();
	}
}
