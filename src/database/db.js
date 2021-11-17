const Mongoose = require("mongoose");
const logger = require("../logger/logger");

const connectDB = () =>
  new Promise((resolve) => {
    if (Mongoose.connection.readyState > 0) {
      logger.error(
        `[Database] Cannot connect until finish current state: ${Mongoose.connection.readyState}`
      );
      resolve(true);
    }

    const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

    const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
    logger.info(`[Database] Connecting to ${DB_HOST}/${DB_NAME}`);
    Mongoose.connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
      .then(() => {
        logger.info(
          `[Database] Successfully connected to ${DB_HOST}/${DB_NAME}`
        );
        resolve(true);
      })
      .catch((error) => {
        logger.error("[Database] Error connecting to database: ", error);
        resolve(false);
      });

    Mongoose.connection.once("error", () => {
      logger.error("[Database] Error connecting to database");
    });

    Mongoose.connection.once("disconnected", () => {
      logger.info("[Database] Disconnected status");
      setTimeout(() => {
        connectDB();
      }, 5000);
    });
  });

module.exports = {
  connectDB,
};
