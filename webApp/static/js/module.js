(function () {
	if (!localStorage.getItem("movies")) {
		console.log("Data ophalen en in localstorage plaatsen");
		xhr.trigger("get", movieApp.config.dataUrl, function (e) {
			localStorage.setItem("movies", e);	
		}, null);
	};

	movieApp.content.movies = JSON.parse(localStorage.getItem("movies"));
	movieApp.controller.init();
	

})();