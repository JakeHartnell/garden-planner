
Handlebars.registerHelper('log', function(a) {
	console.log(a);
});

Handlebars.registerHelper('startArray', function(arr, at) {
	return arr.splice(at).concat(arr.splice(0, at));
});