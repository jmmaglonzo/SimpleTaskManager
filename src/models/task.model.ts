import { Schema, models, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: [true, "Title is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Task = models.task || model("task", taskSchema);

export default Task;
