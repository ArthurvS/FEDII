var CL4P = CL4P || { };
window.onload = function(){

	var controller = {
		init:function () {
			router.init();
			sections.init();
		}
	};

	var router = {
		init: function () {
			routie({
	    		about: function() {
	    			sections.about();
	    			sections.toggle(".about", ".movies");
	    		},
	    		movies: function() {
	    			sections.movies();
	    			sections.toggle(".movies", ".about");
	    		}
			});
		}
	};

	var sections = {
		init: function () {
			this.about();
			this.movies();
		},
		about: function () {
			Transparency.render(document.querySelector(".about"), CL4P.content.about, CL4P.aboutDirectives);
		},
		movies: function () {
			Transparency.render(document.querySelector(".movies"), CL4P.content.movies, CL4P.movieDirectives);
		},
		toggle: function (show, hide) {
			var show = document.querySelector(show);
			var hide = document.querySelector(hide);
			show.classList.add('active');
			hide.classList.remove('active');			
		} 
	};
	controller.init();
};