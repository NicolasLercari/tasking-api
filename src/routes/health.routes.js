module.exports.setHealthRoutes = (server) => {
  server.route({
    method: "GET",
    path: "/health",
    handler: () => "ok",
  });
};
