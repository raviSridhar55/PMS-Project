// User registration - Only POST request where user can register into the website

import express from "express";
import {
  registerUser,
  authUser,
  getAllUsers,
  getAuthUser,
  getUserById,
  deleteUser,
  updateUser,
} from "../Controller/userController.js";
import { protect } from "../middleware/auth.js";
const router = express.Router();

router.route("/").post(registerUser).get(protect, getAuthUser);
router.route("/all-users").get(protect, getAllUsers);

router.route("/login").post(authUser);
router.route("/:id").get(getUserById).delete(deleteUser).put(updateUser);

export default router;

// router.get('/', auth,
