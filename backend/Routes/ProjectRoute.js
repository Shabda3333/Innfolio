const express = require("express");
const Router = express.Router();
const upload = require("../Middlewares/PhotoUpload");

const {
  createProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject,
} = require("../Controllers/ProjectController");

Router.post("/", createProject);
Router.get("/", getAllProjects);
Router.get("/:id", getSingleProject);

// Update & Delete
Router.delete("/:id", deleteProject);
Router.patch("/", upload.array("photos", 5), updateProject); // Allow up to 5 photos

module.exports = Router;
