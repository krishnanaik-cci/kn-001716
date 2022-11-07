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
		.set([getElem("cover"), getElem("border"), getElem("background"), getElem("hotspot"), getElem("prescribing-text-container"), getElem("prescribing-text"), getElem("text-1"), getElem("indication-text"), getElem("indication-text"), getElem("indication-list"), getElem("first-word"), getElem("second-word"), getElem("isi"), getElem("isiHeader"), getElem("cta"),
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
	// startISIScroll(isiDelay, isiScrollTime, "pause~" + isiFinalPause);
	// timeline
	// .addLabel("frame1", "+=2.3")
	// .to(getElem("lybalvi-logo"), speed, {autoAlpha: 0}, "frame1")
	// .to([getElem("indication-text"), getElem("indication-list")], speed, {autoAlpha: 0.5, delay: 0.6}, "frame1")
	// .addLabel("frame2")
	// .to([getElem("indication-text"), getElem("indication-list")], speed, {autoAlpha: 1, delay: -0.4}, "frame2")
	// .addLabel("frame3", "+=1.8")
	// .to([getElem("indication-text"), getElem("indication-list")], speed, {autoAlpha: 0}, "frame3")
	// .to(getElem("list-text-1"), speed, {autoAlpha:0.5, delay: 0.9}, "frame3")
	// .to(getElem("list-text-1"), speed, {autoAlpha:1, delay: 1.2}, "frame3")
	// .addLabel("frame4", "+=1.8")
	// .to(getElem("list-text-1"), speed, {autoAlpha:0}, "frame4")
	// .to(getElem("list-text-2"), speed, {autoAlpha: 0.5, delay: 0.9}, "frame4")
	// .to(getElem("list-text-2"), speed, {autoAlpha:1, delay: 1.1}, "frame4")
	// .addLabel("frame5")
	// .to(getElem("list-text-2"), speed, {autoAlpha:0, delay: 0.8}, "frame5")
	// .to(getElem("rita-therapist"), 1.2, {autoAlpha: 1, x:0, delay: 1.4}, "frame5")
	// .to(getElem("disclaimer-text"), 1.1, {autoAlpha: 1, x: 86, delay: 1.5}, "frame5")
	// .to([getElem("copper-bar"), getElem("text-4")], speed, {autoAlpha: 1, delay: 1.8}, "frame5")
	// .addLabel("frame6", "+=2.1")
	// .to(getElem("text-4"), speed, {autoAlpha: 0}, "frame6")
	// .to(getElem("text-5"), speed, {autoAlpha: 1, delay: 0.8}, "frame6")
	// .addLabel("frame7", "+=0.8")
	// .to([getElem("rita-therapist"), getElem("disclaimer-text")], speed, {autoAlpha: 0, x:-150, delay: 0.3}, "frame7")
	// .to([getElem("text-5"), getElem("copper-bar")], speed, {autoAlpha: 0}, "frame7")
	// .to([getElem("lybalvi-logo-1"), getElem("copper-arrow-right"), getElem("button")], speed, {autoAlpha: 1, delay: 0.8}, "frame7")
}
// End of Animation
function finishTimeline() {
	if (getElem("isi") != null) {
		// startISIScroll(isiDelay, isiScrollTime, "pause~"+isiFinalPause);
	} else {
		animationComplete();
	}
}