const { setRoutes } = require("./routes");
const { setExtensions } = require("./extensions");
const { setRegisters } = require("./registers");
const logger = require("../logger/logger");

module.exports.startServer = async (server) => {
  // Setup error handler
  setExtensions(server);

  // Setup Swagger, Insert, Vision and HapiPino
  await setRegisters(server);

  // Setup routes
  setRoutes(server);
  try {
    await server.start();
    logger.info("Server running on %s", server.info.uri);
  } catch (error) {
    logger.error(`Server cannot start:  ${error.message}`);
    process.exit(1);
  }
};
