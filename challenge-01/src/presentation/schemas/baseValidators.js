const Joi = require("joi");

const stringValidation = (minLength, maxLength) => {
	return Joi.string().min(minLength).max(maxLength).required();
};

const booleanValidation = () => {
	return Joi.boolean().required();
};

const numberValidation = () => {
	return Joi.number().required();
};

const emailValidator = (isConfirmation) => {
	return isConfirmation ? Joi.string().email().valid(Joi.ref("email")).required() : Joi.string().email().required();
};

module.exports = { stringValidation, booleanValidation, numberValidation, emailValidator };
