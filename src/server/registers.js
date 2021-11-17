const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");

module.exports.setRegisters = async (server) => {
  const swaggerOptions = {
    info: {
      title: "Zetl MS boilerplate API Documentation",
      version: "alpha",
    },
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);
};
