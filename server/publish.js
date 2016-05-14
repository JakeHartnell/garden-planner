
Meteor.publish('crops', function(search) {
	//TODO: Implement search
	
	return Crops.find();
});