const customerSchema = require("../schemas/customer.schema");
const createHttpError = require("http-errors");

module.exports = function () {
	return async function (req, res, next) {
		try {
			const validated = await customerSchema.validateAsync(req.body);
			req.body = validated;
			next();
		} catch (err) {
			if (err.isJoi) return next(createHttpError(422, { message: err.message }));
			next(createHttpError(500));
		}
	};
};
