const tasks = require("../data/tasks");
exports.getTasks = (req, res) => {
  return res.status(200).json(tasks);
};
