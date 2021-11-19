const { setTasksRoutes } = require("../routes/tasks.routes");
const { setHealthRoutes } = require("../routes/health.routes");

module.exports.setRoutes = (server) => {
  setHealthRoutes(server);
  setTasksRoutes(server);
};
