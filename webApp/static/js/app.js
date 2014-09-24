var movieApp = movieApp || { }; // namespace
window.onload = function(){

	//app controller
	//initiate application

	movieApp.controller = {
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

};