const logger = require("../../logger/logger");
const tasksServices = require("../services/tasks.services");

module.exports.getTasks = async (req) => {
  const { quantity = 3 } = req.query;

  const tasks = tasksServices.getTasks({ quantity: Number(quantity) });

  return tasks;
};

module.exports.updateTask = async (req) => {
  const { taskId } = req.params;

  logger.info(`task update request with taskId: ${taskId}`);

  return "ok";
};
