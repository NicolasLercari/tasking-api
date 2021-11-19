const { v1: uuidV1 } = require("uuid");

module.exports.transformTaskResponse = (responseBody = []) => {
  return responseBody.map((task) => ({ taskId: uuidV1(), title: task }));
};
