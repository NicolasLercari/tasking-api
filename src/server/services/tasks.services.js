const taskRepository = require("../../database/mongo/entities/task/task.repository");
const loremFakerServices = require("../../externalServices/loremFaker/loremFaker.service");

module.exports.getTasks = async ({ quantity, page, limit }) => {
  const { tasks, totalCount } = await taskRepository.getAllTasks(page, limit);

  const newTasks = [];

  if (totalCount < quantity) {
    const taskList = await loremFakerServices.getTasks({
      quantity: quantity - totalCount,
    });

    taskRepository.createManyTask(taskList);
  }

  return { tasks: [...newTasks, ...tasks], totalCount };
};
