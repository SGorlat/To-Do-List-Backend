const tasks = require("../data/tasks");

exports.patchTasks = (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  const taskFound = tasks.find((task) => task.id === id);

  taskFound.status = "DONE";
  return res.status(200).json({ msg: "Task marked as completed" });
};
