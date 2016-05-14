
Template.limitMonths.helpers({
	canDecrease: function() {
		var months = Session.get('months') || 12;
		return (months > 1);
	},
	canIncrease: function() {
		var months = Session.get('months') || 12;
		return (months < 12);
	},
	months: function() {
		var months = Session.get('months') || 12;
		return months;
	}
});

Template.limitMonths.events({
	'click .increase-months': function(event) {
		var months = Session.get('months') || 12;
		if(months < 12) {
			Session.set('months', months + 1);
		}
	},
	'click .decrease-months': function(event) {
		var months = Session.get('months') || 12;
		if(months > 1) {
			Session.set('months', months - 1);
		}
	},
});