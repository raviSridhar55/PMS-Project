import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../Models/User.js";

// @desc    Register a new user
// @route   POST /api/user
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  //res.send("Hello");

  const { name, email, phone, password } = req.body;

  console.log(name, email, phone, password);
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    phone,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Auth user & get token
// @route   POST /api/user/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //   res.json({
  //     email,
  //     password,
  //   });
  const user = await User.findOne({ email });
  console.log(user);

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      isPM: user.isPM,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @route    GET api/auth
// @desc     Get logged user
// @access   Private
const getAuthUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Admin controller
// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin

const getAllUsers = asyncHandler(async (req, res) => {
  const data = await User.find({}).select("-password");
  //console.log("backend pm", data);
  res.send(data);
});

// Admin controller
// @desc    Get user by id
// @route   GET /api/users/:id
// @access  Private/Admin

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  //console.log("helloworld");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new error("User not found");
  }
});

// Admin controller
// @desc    Delete user
// @route   DELETE /api/user/:ids
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove(res.json({ message: "User removed" }));
  } else {
    res.status(404);
    throw new error("User not found");
  }
});

// Admin controller
// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;
    user.password = req.body.password || user.password;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      password: updatedUser.password,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  registerUser,
  authUser,
  getAuthUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
};
