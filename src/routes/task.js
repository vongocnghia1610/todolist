const express = require("express");
const router = express.Router();
const taskController = require("../app/controllers/TaskControllers");
router.post("/create-task", taskController.createTask);
router.put("/delete-task", taskController.deleteTask);
router.get("/show-task", taskController.showTask);

module.exports = router;
