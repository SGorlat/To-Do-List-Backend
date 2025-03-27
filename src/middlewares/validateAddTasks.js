const tasks = require("../data/tasks");

const validateAddTasks = (req, res, next) => {
  const { title } = req.body;
  if (title === undefined) {
    return res.status(400).json({ msg: "You missed parameter 'title'" });
  }

  next();
};

module.exports = validateAddTasks;
