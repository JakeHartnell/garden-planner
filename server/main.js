import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

	//Import test data
	if(!Crops.find().count()) {
		var scheduleKeys = {
			'I': ['indoors'],
			'O': ['outdoors'],
			'IO': ['indoors', 'outdoors'],
			'SH': ['outdoors', 'harvest'],
			'H': ['harvest'],
		};

	  var plants = Assets.getText('planting-data.json');
	  if(plants && plants.length) {
		  plants = JSON.parse(plants);
		  plants = plants.map(function(plant, ppos) {
		  	if(ppos) {
			  	var name = '', type = '', calendar = {};
			  	plant.forEach(function(schedule, pos) {
			  		if(pos === 0) {
			  			name = schedule.val;
			  			type = schedule.class;
			  		} else if(pos != (plant.length - 1)) {
			  			if(schedule.class != 'empt') {
			  				var keys = scheduleKeys[schedule.class];
				  			keys.forEach(k => (calendar[k] = (calendar[k] || [])).push(pos));
				  		}
			  		}
			  	});

			  	return { name, type, calendar, favourite: false };
	  		}
		  }).filter(x => !!x);
		  // console.log(JSON.stringify(plants.slice(0, 2)));
		  plants.forEach(plant => Crops.insert(plant));
		}
	}
});
