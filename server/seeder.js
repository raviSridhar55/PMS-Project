import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import user from "./data/users.js";
import User from "./Models/User.js";
import Stories from "./Models/Stories.js";
import Tasks from "./Models/Tasks.js";
import connectDB from "./config/db.js";
import users from "./data/users.js";
import stories from "./data/stories.js";
import tasks from "./data/tasks.js";

dotenv.config();

connectDB();

const importdata = async () => {
  try {
    await User.deleteMany();

    await Stories.deleteMany();
    await Tasks.deleteMany();
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleStoies = stories.map((story) => {
      return {
        ...story,
        user: adminUser,
      };
    });

    // const sampleTasks = tasks.map((task) => {
    //   return {
    //     ...task,
    //     user: adminUser,
    //   };
    // });

    await Stories.insertMany(sampleStoies);

    console.log("data imported successfully".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Tasks.deleteMany();
    await Stories.deleteMany();
    await User.deleteMany();
    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importdata();
}
