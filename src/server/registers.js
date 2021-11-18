const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");
const HapiPagination = require("hapi-pagination");

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
      plugin: HapiPagination,
      options: {
        routes: {
          include: ["/tasks"],
        },
      },
    },
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);
};
