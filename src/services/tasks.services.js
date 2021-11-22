const taskRepository = require("../database/redis/entities/task/task.repository");
const loremFakerServices = require("../externalServices/loremFaker/loremFaker.service");

module.exports.getTasks = async ({ quantity, page, limit }) => {
  const currentTotalCount = await taskRepository.countAllTasks();

  if (currentTotalCount < quantity) {
    const taskList = await loremFakerServices.getTasks({
      quantity: quantity - currentTotalCount,
    });

    await taskRepository.createManyTask(taskList);
  }
  const skip = (page - 1) * limit;
  const repositoryLimit = skip + Math.min(quantity - skip, limit);

  const { tasks } = await taskRepository.getAllTasks({
    skip,
    limit: repositoryLimit,
  });

  return { tasks, totalCount: quantity };
};
