const userMock = require("../../domain/user/mocks/UserMock");
const UserService = require("../../domain/user/services/CustomerService").default;

class CustomerController {
	handle(req, res, next) {
		res.send("Hello World!");
	}

	getCustomers(req, res, next) {
		return res.status(200).json(userMock);
	}

	async createCustomer(req, res, next) {
		try {
			console.log(UserService);
			const userService = new UserService();
			const response = await userService.create(req.body);
			res.send(response);
		} catch (err) {
			console.log(err);
		}
	}
}

module.exports = new CustomerController();