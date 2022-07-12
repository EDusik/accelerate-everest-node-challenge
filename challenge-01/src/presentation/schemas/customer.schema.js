const Joi = require("joi");

const customerSchema = Joi.object({
	full_name: Joi.string().required(),
	email: Joi.string().required(),
	email_confirmation: Joi.string().valid(Joi.ref("email")).required(),
	cpf: Joi.string().required(),
	cellphone: Joi.string().required(),
	birth_date: Joi.date().required(),
	email_sms: Joi.boolean().required(),
	whats_app: Joi.boolean().required(),
	country: Joi.string().required(),
	city: Joi.string().required(),
	postal_code: Joi.string().required(),
	address: Joi.string().required(),
	number: Joi.number().required(),
});

module.exports = customerSchema;
