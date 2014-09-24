var movieApp = movieApp || { }; // namespace
window.onload = function(){

	//app controller
	//initiate application

	var controller = {
		init:function () {
			router.init();
			sections.init();
		}
	};

	// Router object
	// sets router parameters

	var router = {
		init: function () {
			routie({
	    		about: function() {
	    			sections.about();
	    			sections.toggle("about", "movies");
	    		},
	    		movies: function() {
	    			sections.movies();
	    			sections.toggle("movies", "about");
	    		}
			});
		}
	};


	// Sections Object
	// Sets templater
	// toggle's sections

	var sections = {
		init: function () {
			this.about();
			this.movies();
		},
		about: function () {
			Transparency.render(document.querySelector(".about"), movieApp.content.about, movieApp.aboutDirectives);
		},
		movies: function () {
			Transparency.render(document.querySelector(".movies"), movieApp.content.movies, movieApp.movieDirectives);
		},
		toggle: function (show, hide) {
			var show = document.querySelector("." + show);
			var hide = document.querySelector("." + hide);
			show.classList.add('active');
			hide.classList.remove('active');			
		} 
	};

	// initiate controller
	controller.init();
};