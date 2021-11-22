const { httpClient } = require("./loremFaker.httpClient");
const { BASE_URL } = require("./config");
const { transformTaskResponse } = require("./loremFaker.transform");

module.exports.getTasks = async ({ quantity }) => {
  // TODO: paginate this request to avoid crash on loren faker api when the quantity is too high
  const response = await httpClient({
    method: "GET",
    url: `${BASE_URL}/api?quantity=${quantity}`,
  });

  return transformTaskResponse(response.body);
};
