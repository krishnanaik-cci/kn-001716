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
var isiDelay = 3;
var isiScrollTime = 448;
var isiFinalPause = 1;
/* Frame elements */
// Init defined here
function init() {
	id = document.getElementsByTagName('body')[0].id;
	stageWidth = parseInt(id.substring(3, id.indexOf("x")));
	stageHeight = parseInt(id.substring(id.indexOf("x") + 1));
	createBorder();
	animationStartTime = new Date().getTime();
	loopMax = 0;
	getElem("isiText").innerHTML = isiText;
	timeline = new TimelineMax({ onComplete: finishTimeline });
	timeline
		.set([getElem("cover"), getElem("border"), getElem("background"), getElem("hotspot"), getElem("prescribing-text"), getElem("isi"), getElem("isiHeader"),
		getElem("isiHeaderText"), getElem("isiTextHolder"), getElem("isiText"), getElem('sponsored-text'), getElem("lybalvi-logo"), getElem("chalkboard")], { autoAlpha: 1 });
	
	/* Identify the if Mac chrome */
	if ((navigator.userAgent.indexOf("Mac") != -1) && (navigator.userAgent.indexOf("Chrome") != -1)) {
		var element = document.getElementById("cover");
		element.classList.add("mac-chrome");
	}
	startAnimation();
}
// Start Animation defined here
var timeScale = 1;
var lastFrameTimeScale = 1.25;
function startAnimation() {
	var speed = 1 * timeScale;
	startISIScroll(isiDelay, isiScrollTime, "pause~" + isiFinalPause);
	timeline
	.addLabel("frame1")
	.to(getElem("text-1"), speed, {autoAlpha: 1}, "frame1")

	.addLabel("frame2", "+=2")
	.to([getElem("lybalvi-logo"), getElem("text-1")], speed, {autoAlpha: 0}, "frame2")
	.to([getElem("indication-text"), getElem("indication-list")], speed, {autoAlpha: 1, delay: 1}, "frame2")
	.to(getElem("lybalvi-logo"), speed, {autoAlpha:0, delay:2, scale:1.32, x:149, y:-7}, "frame2")
	.to(getElem("indication-list-item1"), speed, {autoAlpha: 1, delay: 3}, "frame2")
	.to(getElem("indication-list-item2"), speed, {autoAlpha: 1, delay: 5}, "frame2")

	.addLabel("frame3", "+=.84")
	.to([getElem("indication-text"), getElem("indication-list")], speed, {autoAlpha: 0}, "frame3")
	.to([getElem("first-word")], speed, {autoAlpha: 1, width: "102px", delay: .75}, "frame3")
	.to([getElem("plus")], speed, {autoAlpha: 1, width: "14px", delay: 1.55}, "frame3")
	.to([getElem("second-word")], speed, {autoAlpha: 1, width: "117px", delay: 2.25}, "frame3")
	.to([getElem("equal")], speed, {autoAlpha: 1, width: "14px", delay: 3.20}, "frame3")
	.to([getElem("lybalvi-logo")], speed, {autoAlpha: 1, delay: 4}, "frame3")
	.to([getElem("first-word"), getElem("plus"), getElem("second-word"), getElem("equal")], speed, {autoAlpha: 0, delay: 4}, "frame3")
	
	.addLabel("frame4")
	.to([getElem("lybalvi-logo")], speed, {autoAlpha: 1, scale:1, x:0, y:0}, "frame4")
	.to([getElem("cta")], speed, {autoAlpha: 1, delay: .56}, "frame4")

  /* Stop timer */
  .add(obj.create)
}
/* start timer function call */
startwatch();

// End of Animation
function finishTimeline() {
	if (getElem("isi") != null) {
		// startISIScroll(isiDelay, isiScrollTime, "pause~"+isiFinalPause);
	} else {
		animationComplete();
	}
}