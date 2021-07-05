const todos = require("../models/tasks");
//Post admin/create-product-type
class taskController {
  async createTask(req, res, next) {
    try {
      var result = await todos.create(req.body);
      res.status(200).send({
        data: result,
        error: "null",
      });
    } catch (error) {
      res.status(500).send({
        data: "",
        error: error,
      });
    }
  }
  async showTask(req, res, next) {
    try {
      var result = await todos.find({ status: "DOING" });
      res.status(200).send({
        data: result,
        error: "null",
      });
    } catch (error) {
      res.status(500).send({
        data: "",
        error: error,
      });
    }
  }
  async showDoneTask(req, res, next) {
    try {
      var result = await todos.find({ status: "DONE" });
      res.status(200).send({
        data: result,
        error: "null",
      });
    } catch (error) {
      res.status(500).send({
        data: "",
        error: error,
      });
    }
  }
  async deleteTask(req, res, next) {
    try {
      var _id = req.body._id;
      var result = await todos.findOneAndUpdate(
        _id,
        { status: "DELETED" },
        { new: true }
      );
      res.status(200).send({
        data: result,
        error: "null",
      });
    } catch (error) {
      res.status(500).send({
        data: "",
        error: error,
      });
    }
  }
  async doneTask(req, res, next) {
    try {
      var _id = req.body._id;
      var result = await todos.findOneAndUpdate(
        _id,
        { status: "DONE" },
        { new: true }
      );
      res.status(200).send({
        data: result,
        error: "null",
      });
    } catch (error) {
      res.status(500).send({
        data: "",
        error: error,
      });
    }
  }
  async editTask(req, res, next) {
    try {
      var _id = req.params.id;
      var update = { title: req.body.title, subTitle: req.body.subTitle };

      var result = await todos.findOneAndUpdate(
        _id,
        update,
        { new: true }
      );
      res.status(200).send({
        data: result,
        error: "null",
      });
    } catch (error) {
      res.status(500).send({
        data: "",
        error: error,
      });
    }
  }
}
module.exports = new taskController();
