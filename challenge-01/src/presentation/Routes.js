const { Router } = require("express");

const router = Router();

const CustomerController = require("./controllers/CustomerController");

router.get("/", CustomerController.handle);
router.get("/customers", CustomerController.getCustomers);
router.post("/customer", CustomerController.createCustomer);

module.exports = router;
