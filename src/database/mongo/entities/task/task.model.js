const { model, Schema } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const TaskSchema = new Schema(
  {
    taskId: {
      type: String,
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

TaskSchema.pre("validate", function (done) {
  if (!this.get("taskId")) {
    this.set("taskId", uuidv4());
  }

  done();
});

module.exports = model("Task", TaskSchema);
