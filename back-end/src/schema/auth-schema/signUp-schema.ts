import Joi from "joi";

export const SignUpSchema = Joi.object({
  name: Joi.string().min(3).trim().required(),
  email: Joi.string().email().trim().required(),
  password: Joi.string().alphanum().min(6).max(16).trim().required(),
  confirmPassword:Joi.string().required().valid(Joi.ref("password")),
})