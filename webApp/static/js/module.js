(function () {
	var xhr = { bind: function (data) { postMessage(data);} };
	var data = importScripts("http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/current_releases.json?page_limit=16&page=1&country=nl&apikey=5mz3wz9g8jfmgnbwt8a358nr&callback=xhr.bind");
	// importScripts('vendor/xhr.js');
	// self.xhr.trigger("get", "http://dennistel.nl/movies", function (e) {
	// 			postMessage(e);	
	// 		}, null);

	// var script = document.createElement("script"); 
	// script.src = 'http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/current_releases.json?page_limit=16&page=1&country=nl&apikey=5mz3wz9g8jfmgnbwt8a358nr&callback=APP.xhr.bind'; 
	// document.body.appendChild(script);

	// APP.xhr = { bind: function (data) { postMessage(data);} };
})();