var s = document.createElement('script');
s.src = chrome.extension.getURL("myapi.js");
document.documentElement.appendChild(s);

document.addEventListener('captureScreenshot', function(event) {
 	takeScreenshot(function(data){
 		 var sendCanvasBytes = new CustomEvent('sendCanvasBytes', {"detail": data});
    	document.dispatchEvent(sendCanvasBytes);
 	});
});

var takeScreenshot = function(callback) {
    chrome.extension.sendMessage({name: 'screenshot'}, function(response) {
       var data = response.screenshotUrl;
       callback(data);
    });
}