const express = require("express");
const router = express.Router();
const { getTasks } = require("../controllers/taskController");
const { getIdTask } = require("../controllers/idTaskController");
const validateIdTask = require("../middlewares/validateIdTask");
const { updateTask } = require("../controllers/updateTaskController");
const validateUpdateTask = require("../middlewares/validateUpdateTask");
const { deleteTasks } = require("../controllers/deleteTasksController");
const { addTasks } = require("../controllers/addTaskController");
const validateAddTask = require("../middlewares/validateAddTasks");
const { patchTasks } = require("../controllers/patchTasksController");
const validatePatchTask = require("../middlewares/validatePatchTask");

router.get("/", getTasks);
router.get("/:id", validateIdTask, getIdTask);
router.put("/:id", validateUpdateTask, updateTask);
router.delete("/:id", validateIdTask, deleteTasks);
router.post("/", validateAddTask, addTasks);
router.patch("/:id", validatePatchTask, patchTasks);
router.patch("/", (req, res) => {
  return res.status(400).json({ msg: "Missing parameter: id" });
});

module.exports = router;
