const { Router } = require("express");
const CustomerController = require("../controllers/CustomerController");

const router = Router();

class ListCustomerRouter {
	setup() {
		return router.get("/customers", CustomerController.getCustomers);
	}
}

module.exports = new ListCustomerRouter();
