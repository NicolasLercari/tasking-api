const logger = require("../logger/logger");

module.exports.setExtensions = (server) => {
  // Custom error handler
  server.ext({
    type: "onPreResponse",
    method: (request, h) => {
      if (request.response.isBoom) {
        // do something with custom error and return
        logger.error(request.response);
        return h.continue;
      }
      return h.continue;
    },
  });
};
