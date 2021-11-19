const redis = require("redis");
const util = require("util");
const logger = require("../../../logger/logger");

const client = redis.createClient();

client.on("error", (error) => {
  logger.error(error);
});

client.rpush = util.promisify(client.rpush);

client.lrange = util.promisify(client.lrange);

client.llen = util.promisify(client.llen);

module.exports.client = client;
