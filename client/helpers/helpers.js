
Handlebars.registerHelper('log', function(a) {
	console.log(a);
});

Handlebars.registerHelper('isFalsey', function(a) {
	return !a;
});
Handlebars.registerHelper('isFalsy', function(a) {
	return !a;
});
Handlebars.registerHelper('isTruthy', function(a) {
	return !!a;
});

Handlebars.registerHelper('startArray', function(arr, at, limit) {
	return arr.splice(at).concat(arr.splice(0, at)).slice(0, limit || 12);
});