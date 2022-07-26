const CreateCustomerService = require("../../domain/user/services/CreateCustomerService").default;
const createCustomerService = new CreateCustomerService();

class CreateCustomerController {
	async handle(req, res, next) {
		try {
			const response = await createCustomerService.create(req.body);
			res.status(201).send(response);
		} catch (err) {
			next(err);
		}
	}
}

module.exports = new CreateCustomerController();
