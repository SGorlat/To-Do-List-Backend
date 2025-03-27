const tasks = require("../data/tasks");
const users = require("../data/users");

exports.updateTask = (req, res) => {
  const id = req.params.id;
  const { title, description, dueDate } = req.body;

  const taskFound = tasks.find((task) => task.id === id);

  taskFound.title = title;
  if (description !== undefined) {
    taskFound.description = description;
  }
  if (dueDate !== undefined) {
    taskFound.dueDate = dueDate;
  }

  return res.status(200).json({ msg: "Task updated" });
};
