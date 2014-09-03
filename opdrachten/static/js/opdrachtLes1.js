
function god(){
	function persoon (name) {
		this.name = name;

		this.speak = function () {
			console.log('hello world, ik ben ' + this.name);
		}
	}

	persoon.prototype.walk = function() {
		console.log(this.name + " is walking");
	};

	persoon.prototype.eat = function() {
		console.log(this.name + " is eating");
	};

	var bob = new persoon('boberta');
	bob.speak();
}

function bob () {
	var persoon = {
		name: "bob",
		speak: function () { console.log('hello world, ik ben ' + this.name); },
		walk: function() { console.log(this.name + " is walking"); },
		eat: function() { console.log(this.name + " is eating"); }

	};
	persoon.speak();
}

function optimizedGod () {
	function persoon (name){
		this.name = name;
		this.action = function (action){
			console.log(this.name + " is " + action);
		}
	}
	var bobo = new persoon("bobo");
	bobo.action("walking");
}

god();
bob();
optimizedGod();


