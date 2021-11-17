const Task = require("./task.model");

module.exports.getAllTasks = async () => {
  const tasks = await Task.find({ feePercentage: { $gt: 0 } });
  return tasks;
};

module.exports.createTask = async (transaction) => {
    const newTask = new Task({ transaction });
    await task.save();

    return newTask;
};