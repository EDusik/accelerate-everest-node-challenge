const UserService = require("../../domain/user/services/CustomerService").default;
const userService = new UserService();

class CreateCustomerController {
	async handle(req, res, next) {
		try {
			const response = await userService.create(req.body);
			res.send(response);
		} catch (err) {
			throw new Error(err);
		}
	}
}

module.exports = new CreateCustomerController();
