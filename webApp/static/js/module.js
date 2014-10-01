(function () {
	self.xhr.trigger("get", movieApp.config.dataUrl, function (e) {
				postMessage(e);	
			}, null);
})();