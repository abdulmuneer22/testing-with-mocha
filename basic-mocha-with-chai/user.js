// Stub for User Model
var User = function(user) {
	this.firstName = user.firstName;
	this.lastName = user.lastName;
	this.birthday = new Date(1975, 3, 20);
};

User.prototype.getName = function() {
	return this.firstName + ' ' + this.lastName;
};

User.prototype.getAge = function() {
	return new Date() - this.birthday;
};

module.exports = User;
