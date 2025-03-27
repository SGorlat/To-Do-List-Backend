const tasks = require("../data/tasks");

exports.deleteTasks = (req, res) => {
  const id = req.params.id;
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ msg: "Task not found" });
  }

  tasks.splice(taskIndex, 1);

  return res.status(200).json({ msg: "Task removed successfully" });
};
