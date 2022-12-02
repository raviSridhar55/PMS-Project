import asyncHandler from "express-async-handler";
import Stories from "../Models/Stories.js";
import generateToken from "../utils/generateToken.js";

// @desc    ADD NEW STORIES
// @route   POST /api/story/addstories
// @access  PRIVATE

const addstories = asyncHandler(async (req, res) => {
  //res.send("Hello");

  const { user, storyname, description, duedate, status } = req.body;

  console.log(storyname, description, duedate, status);

  const story = await Stories.create({
    user,
    storyname,
    description,
    duedate,
    status,
  });

  if (story) {
    res.status(201).json({
      _id: story._id,
      user: story.user,
      storyname: story.storyname,
      description: story.description,
      duedate: story.duedate,
      status: story.status,
      //token: generateToken(story._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid story data");
  }
});

// @desc    Get all story
// @route   GET /api/users/getAllStory
// @access  Private/User

const getAllStory = asyncHandler(async (req, res) => {
  //   const data = await Stories.find({ user: req.user.id });
  // console.log(req.story);
  res.send(req.story);
});

// Admin controller
// @desc    Get all story
// @route   GET /api/users/getAllStory
// @access  Private/Admin

const adminGetAllStory = asyncHandler(async (req, res) => {
  const data = await Stories.find({});
  res.send(data);
});
// Admin controller
// @desc    Get user by id
// @route   GET /api/story/:id
// @access  Private/Admin

const getStoryById = asyncHandler(async (req, res) => {
  const story = await Stories.findById(req.params.id);
  //console.log("helloworld");

  if (story) {
    res.json(story);
  } else {
    res.status(404);
    throw new error("User not found");
  }
});

// Admin controller
// @desc    Delete story
// @route   DELETE /api/story/:ids
// @access  Private/Admin
const deleteStory = asyncHandler(async (req, res) => {
  const story = await Stories.findById(req.params.id);
  if (story) {
    await story.remove(res.json({ message: "Story removed" }));
  } else {
    res.status(404);
    throw new error("Story not found");
  }
});

// Admin controller
// @desc    Update story
// @route   PUT /api/story/:id
// @access  Private/Admin
const updateStory = asyncHandler(async (req, res) => {
  const story = await Stories.findById(req.params.id);

  if (story) {
    story.storyname = req.body.storyname || story.storyname;
    story.description = req.body.description || story.description;
    story.duedate = req.body.duedate || story.duedate;
    story.status = req.body.status || story.status;

    const updatedStory = await story.save();

    res.json({
      _id: updatedStory._id,
      storyname: updatedStory.storyname,
      description: updatedStory.description,
      duedate: updatedStory.duedate,
      status: updatedStory.status,
    });
  } else {
    res.status(404);
    throw new Error("story not found");
  }
});

export {
  addstories,
  getAllStory,
  getStoryById,
  deleteStory,
  updateStory,
  adminGetAllStory,
};
