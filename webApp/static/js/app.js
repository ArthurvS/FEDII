var movieApp = movieApp || { }; // namespace

(function(){
	//app controller
	//initiate application
	movieApp.controller = {
		init:function () {
			movieApp.movies.init();
			router.init();
		}
	};

	movieApp.config = {
		dataUrl: "http://dennistel.nl/movies"
	};
	// Router object
	// sets router parameters

	var router = {
		init: function () {
			routie({
	    		about: function() {
	    			movieApp.sections.about();
	    			movieApp.sections.toggle("about", "movies");
	    		},
	    		movies: function() {
	    			movieApp.sections.movies();
	    			movieApp.sections.toggle("movies", "about");
	    		}
			});
		}
	};


	// movieApp.Sections Object
	// Sets templater
	// toggle's movieApp.sections

	movieApp.sections = {
		init: function () {
			this.about();
			this.movies();
		},
		about: function () {
			Transparency.render(document.querySelector(".about"), movieApp.content.about, movieApp.aboutDirectives);
		},
		movies: function () {
			Transparency.render(document.querySelector(".movies"), movieApp.movies.content, movieApp.movieDirectives);
		},
		toggle: function (show, hide) {
			var show = queryUtils.getOne("." + show);
			var hide = queryUtils.getOne("." + hide);
			show.classList.add('active');
			hide.classList.remove('active');			
		} 
	};

	var queryUtils = {
		getOne: function(el){
			return document.querySelector(el);
		},
		getMultiple: function (el){
			return document.querySelectorAll(el);
		}		
	};

	movieApp.controller.init();
})();