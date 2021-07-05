const express = require("express");
const router = express.Router();
const taskController = require("../app/controllers/TaskControllers");
router.post("/create-task", taskController.createTask);
router.put("/delete-task", taskController.deleteTask);
router.put("/done-task", taskController.doneTask);
router.put("/edit-task", taskController.editTask);
router.get("/show-task", taskController.showTask);
router.get("/show-done-task", taskController.showDoneTask);

module.exports = router;
