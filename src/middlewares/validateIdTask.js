const tasksList = require("../data/tasks");
const users = require("../data/users");

const validateIdTask = (req, res, next) => {
  const id = req.params.id;

  if (!id || id.trim() === "") {
    return res.status(403).json({ msg: "Forbidden" });
  }

  const taskFound = tasksList.find((task) => task.id === id);

  if (!taskFound) {
    return res.status(404).json({ msg: "Task not found" });
  }

  const currentUserEmail = users[0].email;

  if (taskFound.user !== currentUserEmail) {
    return res.status(403).json({ msg: "Forbidden" });
  }

  next();
};

module.exports = validateIdTask;
