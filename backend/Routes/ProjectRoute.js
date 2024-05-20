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

Router.post("/",upload.single("thumbnail") ,createProject);
Router.get("/", getAllProjects);
Router.get("/:id", getSingleProject);

//Update & Delete
Router.delete("/:id", deleteProject);
Router.patch("/:id", upload.single("avatar"), updateProject);

module.exports = Router;