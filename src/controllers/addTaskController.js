const tasks = require("../data/tasks");

exports.addTasks = (req, res) => {
  const { title, description, dueDate } = req.body;

  const newTask = {
    id: "123456",
    title: title,
    description: description || "",
    dueDate: dueDate || "",
  };

  tasks.push(newTask);

  return res.status(201).json({ msg: "Task created", id: "123456" });
};
