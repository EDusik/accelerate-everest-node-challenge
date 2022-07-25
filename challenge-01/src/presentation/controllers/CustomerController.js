const userMock = require("../../domain/user/mocks/UserMock");
const UserService = require("../../domain/user/services/CustomerService").default;

class CustomerController {
	getCustomers(req, res, next) {
		return res.status(200).json(userMock);
	}

	async createCustomer(req, res, next) {
		try {
			const userService = new UserService();
			const response = await userService.create(req.body);
			res.send(response);
		} catch (err) {
			throw new Error(err);
		}
	}
}

module.exports = new CustomerController();
