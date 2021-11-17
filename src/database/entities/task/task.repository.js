const Task = require("./task.model");

module.exports.getAllTasks = async (limit) => {
  const tasks = await Task.find({}).limit(limit);
  return tasks;
};

module.exports.countTasks = async () => {
  const count = await Task.countDocuments();
  return count;
};

module.exports.createTask = async (task) => {
  const newTask = new Task(task);
  await newTask.save();

  return newTask;
};

module.exports.createManyTask = async (tasks) => {
  const newTask = Task.insertMany(tasks);

  return newTask;
};
