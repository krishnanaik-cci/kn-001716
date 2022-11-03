/*DCS*/
window.onload = function() {
	if (Enabler.isInitialized()) {
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT,enablerInitHandler);
	}
}
function enablerInitHandler() {
	createBorder();
	politeLoad();
}
function politeLoad() {
	if (Enabler.isPageLoaded()) {
		pageLoadedHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
	}
}
function pageLoadedHandler() {
	if (Enabler.isVisible()) {
		init();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, init);
	}
}

function exitHandler(e) {
	var target = e.toElement || e.relatedTarget || e.target || function () { throw "Failed to attach an event target!"; }
    if (target.id != "replay") {
        switch (target.id) {
            case "clickTag1": Enabler.exit("clickTag1 exit", "https://www.lybalvi.com/lybalvi-prescribing-information.pdf"); break;
			case "clickTag2": Enabler.exit("clickTag2 exit", "https://www.fda.gov/medwatch"); break;
			case "clickTag3": Enabler.exit("clickTag3 exit", "https://www.lybalvi.com/lybalvi-prescribing-information.pdf"); break;
            default: Enabler.exit("hotspot exit", "https://www.lybalvihcp.com/registration"); break;
        }
    } else {
      //  replay();
    }
}

//ISI
var scrollTime;
var scrollInterrupted = false;

function setEventForExit(){
	getElem("hotspot").addEventListener('click', exitHandler, false);
	var array = getElem("cover").getElementsByTagName("a");
	var cc = array.length;
	for(i = 0; i < cc; i++){
		addNewEvent(array[i].id);
	}
}
function startISIScroll(delay, AscrollTime, completeAction) {
	setEventForExit();
    /*
        delay:int - number of seconds to delay before starting auoscroll
                    if zero or undefined, isi does not autoscroll
        scrollTime - number of seconds to reach stop point
        completeAction - "stop" OR "pause~#"
                    stop - means the autoscroll just stops when it reaches the stop point
                    pause~# - means, pause at stop point then after # seconds return to the top of the isi
    example:
        startISIScroll() = no autoscroll
        startISIScroll(1, 5, "stop") = after 1 second start scrolling for 5 seconds to stop point then stop
        startISIScroll(3, 5, "pause~1") = after 3 seconds start autoscrolling for 5 seconds to stop point, then pause for 1 second, then return to top
    */
	['mousedown','wheel'].forEach( evt => getElem('isiTextHolder').addEventListener(evt, interruptScroll));
	scrollTime = AscrollTime;
	var delay = delay;
	if (delay != undefined) {
		var stopStick = getElem("stop");
		var viewportHeight = getElem("isiTextHolder").clientHeight;
		var stopPointTop;
		if (stopStick != null) {
			stopPointTop = stopStick.offsetTop;
			if (stopPointTop > viewportHeight) {
				//if the stop point is outside of the display upon load, replace stop tag with sentence
				stopStick.className = "stop";
				stopStick.innerHTML = stopText;
				stopPointTop = stopStick.offsetTop - viewportHeight + (stopStick.clientHeight * 2);
				//auto-scroll
				TweenMax.to(getElem('isiTextHolder'), scrollTime, { scrollTo: { y: stopPointTop, autoKill: true }, delay: delay, ease: Linear.easeNone, onComplete: autoscrollComplete, onCompleteParams: [completeAction] });
			} else {
				autoscrollComplete(completeAction);
			}
		} else {
			stopPointTop = getElem("isiText").clientHeight;
			TweenMax.to(getElem('isiTextHolder'), scrollTime, { scrollTo: { y: stopPointTop, autoKill: true }, delay: delay, ease: Linear.easeNone, onComplete: autoscrollComplete, onCompleteParams: [completeAction] });
		}
	} else {
		animationComplete();
	}
}
function autoscrollComplete(completeAction) {
    /*
    called by startISIScroll when auto scroll is completed
        completeAction - see startISIScroll
    */
	if (completeAction == "stop") {
		animationComplete();
	} else { //pause ~ # (return to top)
		var acsdelay = completeAction.substr(completeAction.indexOf("~") + 1);
		TweenMax.to(getElem('isiTextHolder'), .25, { scrollTo: { y: 0, autoKill: true }, delay: acsdelay, ease: Linear.easeNone, onComplete: animationComplete });
	}
}
function interruptScroll(e){
	TweenMax.killTweensOf(getElem('isiTextHolder'));
	getElem('isiTextHolder').removeEventListener ("mousedown", interruptScroll);
	setEventForExit();
}
//ALL
function animationComplete() {
    //called at end of all animation
    var animationFinishTime = new Date().getTime();
	setEventForExit();
}

function addNewEvent(id){
	target = getElem(id);
	target.style.cursor = "pointer";
	target.style.zIndex = 4000;
	// target.style.textDecoration = "underline";
	target.style.position = "relative";
	target.addEventListener('click', exitHandler, false);
}

function createBorder() {
    //creates a 1 pixel border that allows interaction
    //  REQUIRES <div id="cover"> ... <div id="border"></div></div>
    var w = getElem("cover").clientWidth;
    var h = getElem("cover").clientHeight;
    var str = "";
    str += '<div style="border-left:1px solid #979797; opacity: 1 !important; width: 0px; height: ' + h + 'px; top: 0px; left: 0px; z-index:1000;"></div>';
    str += '<div style="border-right:1px solid #979797; opacity: 1 !important;  width: 0px; height: ' + h + 'px; top: 0px; left: ' + (w - 1) + 'px; z-index:1001;"></div>';
    str += '<div style="border-top:1px solid #979797; opacity: 1 !important; width: ' + w + 'px; height: 0px; top: 0px; left: 0px; z-index:1002;"></div>';
    str += '<div style="border-bottom:1px solid #979797; opacity: 1 !important;  width: ' + w + 'px; height: 0px; top: ' + (h - 1) + 'px; left: 0px; z-index:1003;"></div>';
    getElem("border").innerHTML = str;
}
function getElem(id) { return document.getElementById(id); }
function centerText(id,dir){
	dir = dir || "both";
	if(dir=="both" || dir == "horizontal") getElem(id).style.left = getElem(id).parentNode.clientWidth/2 - getElem(id).clientWidth/2 + "px";
	if(dir=="both" || dir == "vertical") getElem(id).style.top = getElem(id).parentNode.clientHeight/2 - getElem(id).clientHeight/2 + "px";
}
