import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../Models/User.js";
import Stories from "../Models/Stories.js";
import Tasks from "../Models/Tasks.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // console.log(req.headers.authorization);

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // console.log(decoded.user);
      // req.user = await User.findById(decoded.id).select("-password");
      req.user = decoded.id;
      // console.log(req.user, "auth");
      req.story = await Stories.find({ user: decoded.id });
      req.task = await Tasks.find({ user: decoded.id });
      req.story_tasks = await Tasks.find({user: decoded.id})

      // console.log(req.story);

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

//Project manager authrisation
const projectManager = (req, res, next) => {
  if (req.user && req.user.isPM) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};

export { protect, projectManager };
