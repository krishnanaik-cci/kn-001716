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
var isiDelay = 4;
var isiScrollTime = 448;
var isiFinalPause = 1;

/* Frame elements */

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
	getElem("isiText").innerHTML = isiText;
	timeline = new TimelineMax({ onComplete: finishTimeline });
	timeline
		.set([getElem("cover"), getElem("border"), getElem("background"), getElem("hotspot"), getElem("copper-bar"), getElem("isi"), getElem("isiHeader"), 
		getElem("isiHeaderText"), getElem("isiTextHolder"), getElem("isiText"), getElem("blue-gradient"), getElem("disclaimer"), getElem("text-2"), getElem("logo")], { autoAlpha: 1 });

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
	timeline
	// .add(func.startScroll)
	// .addLabel("frame1", "+=2.4")
	// .to(getElem("logo"), speed, {autoAlpha: 0}, "frame1")
	// .to([getElem("indication-text"), getElem("indication-list"), getElem("copper-bar")], speed, {autoAlpha: 0.5, delay: 0.5}, "frame1")

	// .addLabel("frame2", "-=0.4")
	// .to([getElem("indication-text"), getElem("indication-list"), getElem("copper-bar")], speed, {autoAlpha: 1}, "frame2")

	// .addLabel("frame3", "+=1.6")
	// .to([getElem("indication-text"), getElem("indication-list")], speed, {autoAlpha: 0}, "frame3")
	// .to(getElem("list-text-1"), speed, {autoAlpha: 0.5, delay: 0.8}, "frame3")
	// .to(getElem("list-text-1"), speed, {autoAlpha: 1, delay: 1.2}, "frame3")

	// .addLabel("frame4", "+=1.2")
	// .to(getElem("list-text-1"), speed, {autoAlpha: 0}, "frame4")
	// .to(getElem("list-text-2"), speed, {autoAlpha: 0.5, delay: 0.8}, "frame4")
	// .to(getElem("list-text-2"), speed, {autoAlpha: 1, delay: 1}, "frame4")

	// .addLabel("frame5", "+=0.2")
	// .to([getElem("list-text-2"), getElem("copper-bar")], speed, {autoAlpha: 0}, "frame5")
	// .to(getElem("rita-therapist"), speed, {autoAlpha: 1, x:0, delay: 0.8}, "frame5")
	// .to(getElem("text-3"), speed, {autoAlpha: 1, x: 67, delay: 1}, "frame5")
	// .to([getElem("copper-bar-1"), getElem("text-4")], speed, {autoAlpha: 1, delay: 0.9}, "frame5")

	// .addLabel("frame6")
	// .to(getElem("text-4"), speed, {autoAlpha: 0, delay: 0.6}, "frame6")
	// .to(getElem("text-5"), speed, {autoAlpha: 1, delay: 1.5}, "frame6")
	
	// .addLabel("frame7", "+=0.4")
	// .to(getElem("rita-therapist"), speed, {autoAlpha: 1, x:-140}, "frame7")
	// .to(getElem("text-3"), speed, {autoAlpha: 1, x: -100}, "frame7")
	// .to([getElem("text-5"), getElem("copper-bar-1")], speed, {autoAlpha: 0}, "frame7")
	// .to([getElem("lybalvi-logo-1"), getElem("button")], speed, {autoAlpha: 1, delay: 1}, "frame7")

}

// End of Animation
function finishTimeline() {
	if (getElem("isi") != null) {
		// startISIScroll(isiDelay, isiScrollTime, "pause~"+isiFinalPause);
	} else {
		animationComplete();
	}
}

