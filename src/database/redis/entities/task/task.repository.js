const { client } = require("../client");

const KEY_NAME = "tasks";

module.exports.getAllTasks = async ({ page, limit = -1 }) => {
  const start = (page - 1) * limit;
  const stop = start + limit - 1;

  const tasks = (await client.lrange(KEY_NAME, start, stop)).map(JSON.parse);
  const totalCount = await client.llen(KEY_NAME);

  return { tasks, totalCount };
};

module.exports.countAllTasks = async () => {
  return client.llen(KEY_NAME);
};

module.exports.createManyTask = async (tasks) => {
  return client.rpush([KEY_NAME, ...tasks.map(JSON.stringify)]);
};
