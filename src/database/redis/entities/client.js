const redis = require("redis");
const util = require("util");
const config = require("config");
const logger = require("../../../logger/logger");

const { host, port } = config.get("redisConfig");

const client = redis.createClient({
  host,
  port,
});

client.on("error", (error) => {
  logger.error(error);
});

client.rpush = util.promisify(client.rpush);

client.lrange = util.promisify(client.lrange);

client.llen = util.promisify(client.llen);

module.exports.client = client;
