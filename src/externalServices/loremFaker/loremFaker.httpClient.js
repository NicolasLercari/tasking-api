const got = require("got");

const httpClient = ({ method, url }) =>
  got({
    method,
    url,
    responseType: "json",
  });

module.exports = {
  httpClient,
};
