const { client } = require("../client");

const KEY_NAME = "tasks";

module.exports.getAllTasks = async ({ skip, limit }) => {
  const tasks = (
    await client.lrange(KEY_NAME, skip, limit ? limit - 1 : -1)
  ).map(JSON.parse);
  const totalCount = await client.llen(KEY_NAME);

  return { tasks, totalCount };
};

module.exports.countAllTasks = async () => {
  return client.llen(KEY_NAME);
};

module.exports.createManyTask = async (tasks) => {
  return client.rpush([KEY_NAME, ...tasks.map(JSON.stringify)]);
};
