const CreateCustomerRouter = require("./routes/CreateCustomerRouter");
const ListCustomerRouter = require("./routes/ListCustomerRouter");

const { Router } = require("express");

const router = Router();
const createCustomerRouter = CreateCustomerRouter;
const listCustomerRouter = ListCustomerRouter;

router.use(createCustomerRouter.setup());
router.use(listCustomerRouter.setup());

module.exports = router;
