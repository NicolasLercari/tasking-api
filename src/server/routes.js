module.exports.setRoutes = (server) => {
  server.route({
    method: "GET",
    path: "/health",
    handler: () => "ok",
  });
};
