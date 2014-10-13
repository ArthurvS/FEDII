var movieApp = movieApp || { }; // namespace
(function(){
	movieApp.movies = {
		init: function(){
			if (localStorage.getItem("movies")){
				this.content = this.getFromLocalStorage();
				SHOTGUN.fire('getMovies');
			} else {
				this.getFromAjax();
			}								
		},
		getFromLocalStorage: function() {
			return JSON.parse(localStorage.getItem("movies"));
		},
		getFromAjax: function(){
			var self = this;
			console.log("Data ophalen en in localstorage plaatsen");
			var module = new Worker("static/js/module.js");
			module.onerror = function (event) {
				console.log(event);
			};
			module.onmessage = function(event){
				self.setLocalStorage("movies", event.data);
			};
		},
		setLocalStorage: function(name, value) {
			localStorage.setItem(name, value);			
			this.content = this.getFromLocalStorage();
			SHOTGUN.fire('getMovies');
		},
		content: [
			{title:"Shawshank Redemption", releaseDate:"Release date: <time>14 October 1994</time>", description:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency", cover:"images/shawshank-redemption.jpg"},
			{title:"The Godfather", releaseDate:"Release date: <time>24 March 1972</time>", description:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", cover:"images/the-godfather.jpg"},
			{title:"Pulp Fiction", releaseDate:"Release date: <time>14 October 1994</time>", description:"The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", cover:"images/pulp-fiction.jpg"},
			{title:"The Dark Knight", releaseDate:"Release date: <time>18 July 2008</time>", description:"When Batman, Gordon and Harvey Dent launch an assault on the mob, they let the clown out of the box, the Joker, bent on turning Gotham on itself and bringing any heroes down to his level.", cover:"images/the-dark-knight.jpg"}
		],
		directives: {
		    myImg: { 
		        src: function() { return this.cover; }
		     },
		    myHtml: {
		    	html: function () { return this.release_date; }
		    },
		    myLink:{
		    	href: function() { return "#movies/" + myFunctions.cleanStrings(this.title); }
		    }
  		}
	};
})();