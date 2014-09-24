(function () {

	xhr.trigger("get", "http://dennistel.nl/movies", function (e) {
		movieApp.content.movies = JSON.parse(e);
		movieApp.controller.init();
	}, null);

})();