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
var isiDelay = 1;
var isiScrollTime = 390;
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
		.set([getElem("cover"), getElem("border"), getElem("background"), getElem("hotspot"), getElem("isi-indicator-text"), getElem("disclaimer"), getElem("lybalvi-logo"), getElem("text-2"), getElem("isi"), getElem("isiHeader"),
		getElem("isiHeaderText"), getElem("isiTextHolder"), getElem("isiText")], { autoAlpha: 1 });

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
	.to(getElem("lybalvi-logo"), speed, {x:-300, delay: 2}, "frame1")
	.to(getElem("victoria-img"), speed, {autoAlpha:0, x:300},"frame1")
	.to(getElem("text-one"), speed, {autoAlpha:0, x:300},"frame1")

	.addLabel("frame2")
	.to(getElem("copper-bar"), speed, {autoAlpha:1, x:0, delay:.5}, "frame2")
	.to(getElem("text-two"), speed, {autoAlpha:1, x:0, delay:.5}, "frame2")
	.to(getElem("victoria-img"), speed, {autoAlpha:1, x:0, delay:.5},"-=1.2", "frame2")
	.to(getElem("text-one"), speed, {autoAlpha:1, x:0, delay:.5},"-=1.5", "frame2")
	.to(getElem("lybalvi-logo"), speed, {autoAlpha:1,x:0, y:- 56, delay: 2}, "frame3")

	.addLabel("frame3")
	.to(getElem("victoria-img"), speed, {autoAlpha:0, x:-300, delay:.5}, "frame3")
	.to(getElem("text-one"), speed, {autoAlpha:1, x:-300, delay:.5}, "frame3")
	.to(getElem("text-two"), speed, {autoAlpha:0, x:0, delay:.5}, "frame3")
	.to(getElem("copper-bar"), speed, {autoAlpha:0, x:0, delay:.5}, "frame3")
	.to(getElem("lybalvi-logo"), speed, {autoAlpha:1, delay: 1}, "frame3")
	.to(getElem("cta"), speed, {autoAlpha:1, x:0, delay:2}, "frame3")
}


// End of Animation
function finishTimeline() {
	if (getElem("isi") != null) {
		// startISIScroll(isiDelay, isiScrollTime, "pause~"+isiFinalPause);
	} else {
		animationComplete();
	}
}
