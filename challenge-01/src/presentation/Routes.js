const CreateCustomerRouter = require("./routes/CreateCustomerRouter");
const ListCustomersRouter = require("./routes/ListCustomersRouter");

const { Router } = require("express");

const router = Router();
const createCustomerRouter = CreateCustomerRouter;
const listCustomersRouter = ListCustomersRouter;

router.use(createCustomerRouter.setup());
router.use(listCustomersRouter.setup());

module.exports = router;
