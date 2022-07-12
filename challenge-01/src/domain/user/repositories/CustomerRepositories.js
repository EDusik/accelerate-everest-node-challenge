const { User } = require("../mocks/UserMock");

class CustomerRepository {
	async create(customer) {
		User.push(customer);
		return User[User.length - 1];
	}
}

exports.default = CustomerRepository;
