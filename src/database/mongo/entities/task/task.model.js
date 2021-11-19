const { model, Schema } = require("mongoose");
const { v1: uuidv1 } = require("uuid");

const TaskSchema = new Schema(
  {
    taskId: {
      type: String,
      default: () => uuidv1(),
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

module.exports = model("Task", TaskSchema);
