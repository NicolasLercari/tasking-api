const Task = require("./task.model");

module.exports.getAllTasks = async ({ page, limit }) => {
  const [{ tasks, pageInfo }] = await Task.aggregate([
    { $match: {} },
    {
      $facet: {
        tasks: [{ $skip: (page - 1) * limit }, { $limit: limit }],
        pageInfo: [{ $group: { _id: null, count: { $sum: 1 } } }],
      },
    },
  ]);
  return { tasks, totalCount: pageInfo[0].count };
};

module.exports.createTask = async (task) => {
  const newTask = new Task(task);
  await newTask.save();

  return newTask;
};

module.exports.createManyTask = async (tasks, callback) => {
  const newTask = await Task.insertMany(tasks, callback);

  return newTask;
};
