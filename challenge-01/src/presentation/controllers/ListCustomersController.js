const userMock = require("../../domain/user/mocks/UserMock");

class ListCustomersController {
	handle(req, res, next) {
		return res.status(200).json(userMock);
	}
}

module.exports = new ListCustomersController();
