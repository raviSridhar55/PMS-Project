import mongoose, { Schema } from "mongoose";

const storyschema = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    // team: {
    //   type: String,
    //   required: true,
    // },
    storyname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duedate: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Stories = mongoose.model("Stories", storyschema);

export default Stories;
