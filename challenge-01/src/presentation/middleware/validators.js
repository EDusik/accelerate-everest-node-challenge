const customerSchema = require("../schemas/customer.schema");
const createHttpError = require("http-errors");

module.exports = function () {
	return async function (req, res, next) {
		try {
			req.body = await customerSchema.validateAsync(req.body);
			next();
		} catch (err) {
			if (err.isJoi) return next(createHttpError(422, { message: err.message }));
			next(createHttpError(500));
		}
	};
};
