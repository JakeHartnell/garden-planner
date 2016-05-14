
Template.cropSearch.helpers({
	search: function() {
		var search = Session.get('search') || '';
		return search;
	}
});

Template.cropSearch.events({
	'input .search-text': function(event) {
		var search = event.target.value;
		// console.log('search', search);

		Session.set('search', search);
	}
});