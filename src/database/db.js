const Mongoose = require("mongoose");
const config = require("config");

const logger = require("../logger/logger");

const { host, dbName } = config.get("dbConfig");

const connectDB = () =>
  new Promise((resolve) => {
    if (Mongoose.connection.readyState > 0) {
      logger.error(
        `[Database] Cannot connect until finish current state: ${Mongoose.connection.readyState}`
      );
      resolve(true);
    }

    const uri = `mongodb://${host}/${dbName}`;
    logger.info(`[Database] Connecting to ${host}/${dbName}`);
    Mongoose.connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
      .then(() => {
        logger.info(`[Database] Successfully connected to ${host}/${dbName}`);
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
