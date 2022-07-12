const Joi = require("joi");

const customerSchema = Joi.object({
	full_name: Joi.string().required(),
});

module.exports = customerSchema;
