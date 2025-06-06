import Joi from "joi";

export const candidateValidationRegistration = Joi.object({
  Mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  Email: Joi.string().email().required(),
  Name: Joi.string().required().min(1),
  Password: Joi.string().required().min(8),
});
