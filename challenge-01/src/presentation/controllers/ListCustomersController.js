const ListCustomerService = require("../../domain/user/services/ListCustomerService").default;
const listCustomerService = new ListCustomerService();

class ListCustomersController {
	async handle(req, res, next) {
		try {
			const response = await listCustomerService.getCustomers();
			res.status(200).send(response);
		} catch (err) {
			next(err);
		}
	}
}

module.exports = new ListCustomersController();
