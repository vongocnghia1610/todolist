const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Todos = new Schema(
  {
    title: { type: String, require: true },
    subTitle: { type: String, require: true },
    status: { type: String, require: true, default: "DOING" },
  },
  {
    timestamps: true,
  }
);

// add plugin
// mongoose.plugin(slug);
// Course.plugin(mongooseDelete, {
//   overrideMethods: 'all',
//    deletedAt : true,
//  });

module.exports = mongoose.model("Todos", Todos);
