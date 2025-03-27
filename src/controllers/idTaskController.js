const tasks = require("../data/tasks");
exports.getIdTask = (req, res) => {
  const id = req.params.id;
  const taskFound = tasks.find((task) => task.id === id);

  return res.status(200).json(taskFound);
};
