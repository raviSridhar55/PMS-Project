import mongoose, { Schema } from "mongoose";

const taskschema = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    story: {
      type: Schema.Types.ObjectId,
      ref: "Stories",
    },
    taskname: {
      type: String,
      required: true,
    },
    taskdescription: {
      type: String,
      required: true,
    },
    duedate: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Tasks = mongoose.model("Tasks", taskschema);

export default Tasks;
