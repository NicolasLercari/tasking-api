const taskRepository = require("../../database/entities/task/task.repository");
const loremFakerServices = require("../../externalServices/loremFaker/loremFaker.service");

module.exports.getTasks = async ({ quantity }) => {
  const currentsTasks = await taskRepository.getAllTasks(quantity);

  let newTasks = [];

  if (currentsTasks.length < quantity) {
    const taskList = await loremFakerServices.getTasks({
      quantity: quantity - currentsTasks.length,
    });

    newTasks = await taskRepository.createManyTask(taskList);
  }

  return [...newTasks, ...currentsTasks];
};
