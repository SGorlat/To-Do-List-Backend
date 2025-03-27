const tasks = require("../data/tasks");
const users = require("../data/users");

const validateUpdateTask = (req, res, next) => {
  const id = req.params.id;
  const { title, description, dueDate } = req.body;
  const taskFound = tasks.find((task) => task.id === id);

  if (title === undefined || title.trim() === "") {
    return res.status(400).json({
      msg: "You missed parameters: 'id' or 'title'",
    });
  }

  if (!taskFound) {
    return res.status(404).json({ msg: "Task not found" });
  }
  const currentUserEmail = users[0].email;

  if (taskFound.user !== currentUserEmail) {
    return res.status(403).json({ msg: "Forbidden" });
  }

  next();
};

module.exports = validateUpdateTask;
