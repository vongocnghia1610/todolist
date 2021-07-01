require("dotenv").config();
const express = require('express');
const app = express();
const route = require("./routes");
const db = require("./config/db");
console.log(process.env.PORT)
const port = process.env.PORT || 8000;
app.use(express.json());
route(app);
db.connect(process.env.DB_URL);

app.listen(port, () => {
  console.log(`App listening at http://localhost`, port);
});
