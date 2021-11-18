const { httpClient } = require("./loremFaker.httpClient");
const { BASE_URL } = require("./config");

module.exports.getTasks = async (quantity) => {
  const response = await httpClient({
    method: "GET",
    url: `${BASE_URL}/api?quantity=${quantity}`,
  });

  return response.body;
};
