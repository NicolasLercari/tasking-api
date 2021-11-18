const Hapi = require("@hapi/hapi");
const config = require("config");
const { startServer } = require("./server/server");
const { connectDB } = require("./database/mongo/db");
const logger = require("./logger/logger");

// Server http
const server = Hapi.server({
  port: process.env.HTTP_PORT || 4545,
  host: process.env.HTTP_HOST || "127.0.0.1",
  routes: {
    validate: {
      failAction: async (request, h, err) => {
        // dispatch the Validation Error in all routes, to be managed on "PreResponse" function
        throw err;
      },
    },
  },
});

process.on("unhandledRejection", (err) => {
  // eslint-disable-next-line no-console
  logger.error(err);
  process.exit(1);
});
(async () => {
  if (config.get("dbConfig.enabled") === true) await connectDB();
  startServer(server);
})();
