const logger = require("../logger/logger");
const tasksServices = require("../services/tasks.services");

module.exports.getTasks = async (req, h) => {
  const { quantity, limit, page } = req.query;

  const { tasks, totalCount } = await tasksServices.getTasks({
    quantity: Number(quantity),
    page,
    limit,
  });

  return h.response({ results: tasks, totalCount });
};

module.exports.updateTask = async (req) => {
  const { taskId } = req.params;

  logger.info(`task update request with taskId: ${taskId}`);

  return { status: "OK" };
};
