// User registration - Only POST request where user can register into the website

import express from "express";
import {
  addstories,
  getAllStory,
  getStoryById,
  deleteStory,
  updateStory,
  adminGetAllStory,
} from "../Controller/storyController.js";
import { protect } from "../middleware/auth.js";
import Stories from "../Models/Stories.js";

const router = express.Router();

router.route("/").post(addstories).get(protect, getAllStory);

router.route("/adminGetAllStory").get(protect, adminGetAllStory);

router.route("/:id").get(getStoryById).delete(deleteStory).put(updateStory);

export default router;
