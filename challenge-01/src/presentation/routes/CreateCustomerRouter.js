const { Router } = require("express");
const CreateCustomerController = require("../controllers/CreateCustomerController");
const schemaValidator = require("../middleware/validators");

const router = Router();

class CreateCustomerRouter {
	setup() {
		return router.post("/customer", schemaValidator(), CreateCustomerController.handle);
	}
}

module.exports = new CreateCustomerRouter();
