var movieApp = movieApp || { }; // namespace

(function(){
	//app controller
	//initiate application
	movieApp.controller = {
		init:function () {			
			router.init();
			movieApp.movies.init();
			SHOTGUN.listen('getMovies', sections.init());
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
	    			sections.about();
	    			sections.toggle("about", "content");
	    		},
	    		movies: function() {
	    			sections.movies();
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

	var sections = {
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
		detail: function(movieID) {
			Transparency.render(document.querySelector(".detail"), movieApp.movies.content, movieApp.aboutDirectives);
		},
		toggle: function (show, hide) {
			var show = queryUtils.getOne("." + show);
			var hide =  queryUtils.getAll("." + hide);
			for (var i = 0; i < hide.length; i++) {
				hide[i].classList.remove('active');
			};

			show.classList.add('active');				
		} 
	};

	var queryUtils = {
		getOne: function(el){
			return document.querySelector(el);
		},
		getAll: function (el){
			return document.querySelectorAll(el);
		}		
	};

	movieApp.controller.init();
})();