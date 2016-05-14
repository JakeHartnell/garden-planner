
Template.crops.onCreated(function () {
  var instance = this;

  instance.autorun(function () {
		instance.subscribe('crops');

    if (instance.subscriptionsReady()) {
			// Session.set('page-title', instance.crops().count()+' crops');
    }
  });

  instance.crops = function() { 
    return Crops.find({}, { sort: { favourite: -1, name: 1 }});
  };
});

Template.crops.events({
	'click .toggle-favourite': function(event) {
		Crops.update(this._id, {
			$set: {
				favourite: !this.favourite
			}
		});
	}
});

Template.crops.helpers({
  crops: function () {
  	return Template.instance().crops();
  },
  cropTypes: function() {
  	return ['harvest', 'indoors', 'outdoors'];
  },
  months: function() {
  	var months = [
  		{ num: 1, name: 'Jan' },
  		{ num: 2, name: 'Feb' },
  		{ num: 3, name: 'Mar' },
  		{ num: 4, name: 'Apr' },
  		{ num: 5, name: 'May' },
  		{ num: 6, name: 'Jun' },
  		{ num: 7, name: 'Jul' },
  		{ num: 8, name: 'Aug' },
  		{ num: 9, name: 'Sep' },
  		{ num: 10, name: 'Oct' },
  		{ num: 11, name: 'Nov' },
  		{ num: 12, name: 'Dec' },
  	];

		var currentMonth = (new Date()).getMonth();
  	months[currentMonth].current = true;
  	return months;
  },
  currentMonth: function() {
  	return (new Date()).getMonth();
  },
  currentClass: function() {
  	return this.current ? 'current' : '';
  },
  cropClasses: function() {
  	var month = this;
  	var plant = Template.parentData(1);
  	// console.log(month, plant);

		var cropClasses = Object.keys(plant.calendar).map(function(calKey) {
			// console.log(plant.calendar[calKey]);
			return plant.calendar[calKey] instanceof Array &&
				plant.calendar[calKey].indexOf(month.num) > -1 &&
				calKey;
		}).filter(x => !!x);
		// console.log(cropClasses);
		
		return cropClasses;
  }
});