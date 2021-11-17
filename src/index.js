const Hapi = require("@hapi/hapi");
const { startServer } = require("./server/server");
const { connectDB } = require("./database/db");

// Server http
const server = Hapi.server({
  port: process.env.HTTP_PORT || 4545,
  host: process.env.HTTP_HOST || "127.0.0.1",
});

process.on("unhandledRejection", (err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
(async () => {
  if (process.env.DB_ENABLED === "true") await connectDB();
  startServer(server);
})();
