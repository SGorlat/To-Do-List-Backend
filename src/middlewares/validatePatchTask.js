const tasks = require("../data/tasks");
const users = require("../data/users");

const validatePatchTask = (req, res, next) => {
  const id = req.params.id;
  const { status } = req.body;

  const taskFound = tasks.find((task) => task.id === id);

  if (!id || id.trim() === "") {
    return res.status(400).json({ msg: "You missed parameter 'id'" });
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

module.exports = validatePatchTask;
