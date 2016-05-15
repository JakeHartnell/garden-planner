
Template.crops.onCreated(function () {
  var instance = this;

  instance.autorun(function () {
    var search = Session.get('search');
		instance.subscribe('crops', (search || ''));

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
  		{ num: 1, name: 'Jan', full: 'January' },
  		{ num: 2, name: 'Feb', full: 'February' },
  		{ num: 3, name: 'Mar', full: 'March' },
  		{ num: 4, name: 'Apr', full: 'April' },
  		{ num: 5, name: 'May', full: 'May' },
  		{ num: 6, name: 'Jun', full: 'June' },
  		{ num: 7, name: 'Jul', full: 'July' },
  		{ num: 8, name: 'Aug', full: 'August' },
  		{ num: 9, name: 'Sep', full: 'September' },
  		{ num: 10, name: 'Oct', full: 'October' },
  		{ num: 11, name: 'Nov', full: 'November' },
  		{ num: 12, name: 'Dec', full: 'December' },
  	];

		var currentMonth = (new Date()).getMonth();
  	months[currentMonth].current = true;
  	return months;
  },
	numberOfMonths: function() {
		var months = Session.get('months') || 12;
		return months;
	},
  currentMonth: function() {
  	return (new Date()).getMonth();
  },
  currentClass: function() {
  	return this.current ? 'current' : '';
  },
  title: function() {
    var type = this;
    var month = Template.parentData(1);
    var plant = Template.parentData(2);
    // console.log(type, month, plant);
    var action = (type == 'harvest' ? 'Harvest' : 'Plant ' + type);
    return action + ' in ' + month.full;
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