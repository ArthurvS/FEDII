var movieApp = movieApp || { }; // namespace

(function(){
	//app controller
	//initiate application
	movieApp.config = {
		dataUrl: "http://dennistel.nl/movies"
	};
	// Router object
	// sets router parameters
	var sections = {
		about: function () {
			Transparency.render(myFunctions.getOneEl(".about"), movieApp.about.content, movieApp.about.directives);
		},
		movies: function () {
			Transparency.render(myFunctions.getOneEl(".movies"), movieApp.movies.content, movieApp.movies.directives);
		},
		detail: function(movieID) {
			Transparency.render(myFunctions.getOneEl(".detail"), movieApp.movies.content, movieApp.aboutDirectives);
		},
		toggle: function (show, hide) {
			var show = myFunctions.getOneEl("." + show);
			var hide =  myFunctions.getAllEl("." + hide);
			for (var i = 0; i < hide.length; i++) {
				hide[i].classList.remove('active');
			};

			show.classList.add('active');				
		} 
	};

	var router = {
		init: function () {
			routie({
	    		about: function() {
	    			sections.about();
	    			sections.toggle("about", "content");
	    		},
	    		movies: function() {	
	    			SHOTGUN.listen('getMovies', sections.movies);
					movieApp.movies.init();
	    			sections.toggle("movies", "content");
	    		},
	    		'movies/*': function(id) {
	    			sections.detail(id);
	    			sections.toggle("detail", "content");
	    		}
			});
		} 
	};


	// movieApp.Sections Object
	// Sets templater
	// toggle's movieApp.sections
	router.init();
})();