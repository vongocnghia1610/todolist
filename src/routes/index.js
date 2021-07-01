const task = require("./task");

function route(app) {
  app.use("/task", task);


  app.get("/api/info", (req, res) => res.send("Welcome to todolist SpiritRush"));
}
module.exports = route;
