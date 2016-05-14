
//TODO: Move favourites onto user account, rather than on record

Meteor.publish('crops', function(search) {
	return Crops.find((search && { 
		name: { 
			$regex: '.*'+search+'.*', 
			$options: 'im' 
		}}) || {}, { sort: { favourite: -1 }, limit: 20 });
});