//See: https://github.com/ongoworks/meteor-security

Crops.permit('insert')
	// .ifHasRole(['admin'])
	//.setOwnerUser()//Moved to hook
	.allowInClientCode();

Crops.permit('update')
	// .ifHasRole(['admin'])
	// .ownerIsLoggedInUser()
	.allowInClientCode();

Crops.permit('remove')
	// .ifHasRole(['admin'])
	// .ownerIsLoggedInUser()
	.allowInClientCode();