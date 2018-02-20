//Call this method from your application code to get the screenshot byte array by passing the callback
function getScreenshotData(callback){
	var captureScreenshotEvent = new CustomEvent('captureScreenshot')
	document.dispatchEvent(captureScreenshotEvent);


	 document.addEventListener('sendCanvasBytes', function respListener(event) {
        var data = event.detail;

        // check if this response is for this request
        if(data) {
            callback(data);
            document.removeEventListener('sendCanvasBytes', respListener);
        }
    });
}
