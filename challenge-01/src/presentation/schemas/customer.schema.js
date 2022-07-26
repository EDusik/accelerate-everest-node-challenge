const Joi = require("joi");
const { stringValidation, booleanValidation, numberValidation, emailValidator } = require("./baseValidators");

const customerSchema = Joi.object({
	full_name: stringValidation(8, 255),
	email: emailValidator(false),
	email_confirmation: emailValidator(true),
	cpf: stringValidation(11, 14),
	cellphone: stringValidation(6, 14),
	birth_date: Joi.date().max("now").required(),
	email_sms: booleanValidation(),
	whats_app: booleanValidation(),
	country: stringValidation(4, 56),
	city: stringValidation(1, 85),
	postal_code: stringValidation(8, 9),
	address: stringValidation(8, 255),
	number: numberValidation(),
});

module.exports = customerSchema;
