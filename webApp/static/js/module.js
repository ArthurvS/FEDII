(function () {
	importScripts("vendor/xhr.js");
	self.xhr.trigger("get", "http://dennistel.nl/movies", function (e) {
				postMessage(e);	
			}, null);
})();