module.exports.setExtensions = (server) => {
  // Custom error handler
  server.ext({
    type: "onPreResponse",
    method: (request, h) => {
      if (request.response.isBoom && request.response.isCustomError) {
        // do something with custom error and return
        return h.continue;
      }
      return h.continue;
    },
  });
};
