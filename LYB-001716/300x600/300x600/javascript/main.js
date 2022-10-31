// Onload call init()
window.onload = function () {
	init();
};


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
	.addLabel("frame1")
	.to(getElem("lybalvi-logo"), speed, {autoAlpha:0, x:-300,  delay: 3}, "frame1")
	.to(getElem("victoria-img"), speed, {autoAlpha:1, x:0, delay: 3},"frame1")
	.to(getElem("text-one"), speed, {autoAlpha:1, x:0, delay: 3},"frame1")
	.to(getElem("copper-bar"), 3, {autoAlpha:1, delay:4.5}, "frame1")
	.to(getElem("text-two"), 3, {autoAlpha:1, delay:4.5}, "frame1")

	.addLabel("frame2")
	.to(getElem("text-two"), speed, {autoAlpha:0, delay:.50}, "frame2")
	.to(getElem("text-three"), 2, {autoAlpha:1, delay:2.5}, "frame2")

	.addLabel("frame3")
	.to(getElem("victoria-img"), speed, {autoAlpha:0, x:-300, delay:.50}, "frame3")
	.to(getElem("text-one"), speed, {autoAlpha:0, x:-300, delay: .50},"frame3")
	.to(getElem("copper-bar"), speed, {autoAlpha:0, x:-300, delay:.50}, "frame3")
	.to(getElem("text-three"), speed, {autoAlpha:0, x:-300, delay:.50}, "frame3")
	.to(getElem("lybalvi-logo-two"), speed, {autoAlpha:1, delay: 1}, "frame3")
	.to(getElem("cta"), speed, {autoAlpha:1, delay:1.95}, "frame3")
}


// End of Animation
function finishTimeline() {
	if (getElem("isi") != null) {
		// startISIScroll(isiDelay, isiScrollTime, "pause~"+isiFinalPause);
	} else {
		animationComplete();
	}
}
