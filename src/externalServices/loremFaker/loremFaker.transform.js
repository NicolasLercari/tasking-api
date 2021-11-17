module.exports.transformTaskResponse = (responseBody = []) => {
  return responseBody.map((task) => ({ title: task }));
};
