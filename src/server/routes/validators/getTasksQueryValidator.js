const Joi = require("joi");

module.exports.getTasksQueryValidator = Joi.object({
  quantity: Joi.number().integer().min(1).default(3),
  // Your other parameters ...
  limit: Joi.number().integer(),
  page: Joi.number().integer(),
});
