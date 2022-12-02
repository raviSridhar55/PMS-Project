import asyncHandler from "express-async-handler";
import Tasks from "../Models/Tasks.js";
import generateToken from "../utils/generateToken.js";

// @desc    ADD NEW TASK
// @route   POST /api/task/addtask
// @access  Public

const addtask = asyncHandler(async (req, res) => {
  //   res.send("Hello");

  const { story, taskname, taskdescription, duedate, status } = req.body;

  console.log(req.user);

  const task = await Tasks.create({
    user: req.user,
    story,
    taskname,
    taskdescription,
    duedate,
    status,
  });
  console.log(task);
  if (task) {
    res.status(201).json({
      _id: task._id,
      taskname: task.taskname,
      taskdescription: task.taskdescription,
      duedate: task.duedate,
      status: task.status,
      //token: generateToken(user._id),
      user: req.user,
    });
  } else {
    res.status(400);
    throw new Error("Invalid story data");
  }
  // res.json(task);
});

// Admin controller
// @desc    Get all Tasks
// @route   GET /api/task
// @access  Private/Admin

const getAllTasks = asyncHandler(async (req, res) => {
  const data = await Tasks.find({ user: req.user });
  res.send(data);
  // console.log(data);
  // console.log(req.user);
});

// Admin controller
// @desc    Get task by id
// @route   GET /api/task/:id
// @access  Private/Admin

const getTaskById = asyncHandler(async (req, res) => {
  const task = await Tasks.findById(req.params.id);
  //console.log("helloworld");

  if (task) {
    res.json(task);
  } else {
    res.status(404);
    throw new error("task not found");
  }
});

// Admin controller
// @desc    Delete task
// @route   DELETE /api/task/:ids
// @access  Private/Admin
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Tasks.findById(req.params.id);
  if (task) {
    await task.remove(res.json({ message: "Task removed" }));
  } else {
    res.status(404);
    throw new error("Task not found");
  }
});

// Admin controller
// @desc    Update task
// @route   PUT /api/task/:id
// @access  Private/Admin
const updateTask = asyncHandler(async (req, res) => {
  const task = await Tasks.findById(req.params.id);

  if (task) {
    task.taskname = req.body.taskname || task.taskname;
    task.taskdescription = req.body.taskdescription || task.taskdescription;
    task.duedate = req.body.duedate || task.duedate;
    task.status = req.body.status || task.status;

    const updateTask = await task.save();

    res.json({
      _id: updateTask._id,
      taskname: updateTask.taskname,
      taskdescription: updateTask.taskdescription,
      duedate: updateTask.duedate,
      status: updateTask.status,
    });
  } else {
    res.status(404);
    throw new Error("task not found");
  }
});

export { addtask, getAllTasks, deleteTask, getTaskById, updateTask };
