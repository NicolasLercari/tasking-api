const Hapi = require("@hapi/hapi");
const config = require("config");
const { startServer } = require("./server/server");
const logger = require("./logger/logger");

const { host, port } = config.get("server");

// Server http
const server = Hapi.server({
  port,
  host,
  routes: {
    cors: {
      origin: ["*"],
      additionalHeaders: [
        "Cache-Control",
        "Accept-Encoding",
        "Accept-Language",
        "Access-Control-Request-Headers",
        "Access-Control-Request-Method",
        "Access-Control-Allow-Origin",
        "Connection",
        "Host",
        "Pragma",
        "User-Agent",
      ],
    },
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
  startServer(server);
})();
