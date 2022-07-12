const { Router } = require("express");
const schemaValidator = require("./middleware/validators");

const router = Router();

const CustomerController = require("./controllers/CustomerController");

router.get("/", CustomerController.handle);
router.get("/customers", CustomerController.getCustomers);
router.post("/customer", schemaValidator(), CustomerController.createCustomer);

module.exports = router;
