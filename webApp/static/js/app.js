(function(){

	var controller = {
		init:function () {
			router.init();
		}
	}


	var router = {
		init: function () {
			routie({
	    		'about': function() {
	    			console.log('Warp speed to about page');
	    		},
	    		'movies': function() {
	    			console.log('Warp speed to movies page');
	    		}
			});
		}
	};

	controller.init();
}());