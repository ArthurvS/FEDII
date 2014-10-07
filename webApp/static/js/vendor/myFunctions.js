var myFunctions = {
	cleanStrings: function(string) {
			return string.replace(/(^\-+|[^a-zA-Z0-9\/_| -]+|\-+$)/g, '').toLowerCase().replace(/[\/_| -]+/g, '-');
        }
};