const { Router } = require("express");
const ListCustomersController = require("../controllers/ListCustomersController");

const router = Router();

class ListCustomersRouter {
	setup() {
		return router.get("/customers", ListCustomersController.handle);
	}
}

module.exports = new ListCustomersRouter();
