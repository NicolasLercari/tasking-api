const { model, Schema } = require("mongoose");

const TaskSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  }
});

module.exports = model("Task", TaskSchema);
