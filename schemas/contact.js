const Joi = require("joi");

const contactSchema = Joi.object({
   name: Joi.string()
      .min(1)
      .pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, "name")
      .required(),
   email: Joi.string().email().required(),
   phone: Joi.string().min(1).required(),
});

module.exports = contactSchema;