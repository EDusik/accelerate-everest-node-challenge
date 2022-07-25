const { Router } = require("express");
const CustomerController = require("../controllers/CustomerController");
const schemaValidator = require("../middleware/validators");
const router = Router();

class CreateCustomerRouter {
	setup() {
		return router.post("/customer", schemaValidator(), CustomerController.createCustomer);
	}
}

module.exports = new CreateCustomerRouter();
