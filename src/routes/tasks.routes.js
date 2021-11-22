const taskHandlers = require("../handlers/tasks.handlers");
const {
  getTasksQueryValidator,
} = require("./validators/getTasksQueryValidator");

module.exports.setTasksRoutes = (server) => {
  server.route({
    method: "GET",
    path: "/tasks",
    handler: taskHandlers.getTasks,
    options: {
      validate: {
        query: getTasksQueryValidator,
      },
    },
  });

  server.route({
    method: "PUT",
    path: "/tasks/{taskId}",
    handler: taskHandlers.updateTask,
  });
};
