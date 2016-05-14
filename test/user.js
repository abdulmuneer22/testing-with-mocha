var User = require('../user');
var chai = require('chai');
var expect = chai.expect;

describe('User', function() {
	var user;
	beforeEach(function() {
		user = new User({
			firstName: "Douglas",
			lastName: "Keyholm",
			birthday: new Date(1975, 3, 20)
		});
	});

	it('can extract its name', function() {
		expect(user.getName()).to.equal('Douglas Keyholm');
	});

	it('can get its age in milliseconds', function() {
		var now = new Date();
		expect(user.getAge()).to.equal(now - user.birthday);
	});
});
