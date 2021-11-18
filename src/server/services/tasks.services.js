const taskRepository = require("../../database/entities/task/task.repository");
const loremFakerServices = require("../../externalServices/loremFaker/loremFaker.service");

module.exports.getTasks = async ({ quantity }) => {
  const totalTasks = await taskRepository.countTasks(quantity);

  if (totalTasks < quantity) {
    const taskList = await loremFakerServices.getTasks({
      quantity: quantity - totalTasks,
    });

    await Promise.all(
      taskList.map((taskData) => taskRepository.createTask(taskData))
    );
  }

  return taskRepository.getAllTasks(quantity);
};
