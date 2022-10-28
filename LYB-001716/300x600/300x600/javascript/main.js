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
		.set([getElem("cover"), getElem("border"), getElem("background"), getElem("hotspot"), getElem("disclaimer"), getElem("text-2"), getElem("isi"), getElem("isiHeader"),
		getElem("isiHeaderText"), getElem("isiTextHolder"), getElem("isiText")], { autoAlpha: 1 });

	startAnimation();
}

// Start Animation defined here
var timeScale = 1;
var lastFrameTimeScale = 1.25;

function startAnimation() {
	var speed = 1 * timeScale;
	startISIScroll(isiDelay, isiScrollTime, "pause~" + isiFinalPause);

}


// End of Animation
function finishTimeline() {
	if (getElem("isi") != null) {
		// startISIScroll(isiDelay, isiScrollTime, "pause~"+isiFinalPause);
	} else {
		animationComplete();
	}
}
