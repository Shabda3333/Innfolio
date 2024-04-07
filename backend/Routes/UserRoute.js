const express = require("express");
const Router = express.Router();
const upload = require("../Middlewares/PhotoUpload");

const {
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
} = require("../Controllers/UserController");

Router.get("/", getAllUsers);
Router.get("/:id", getSingleUser);

//Update & Delete
Router.delete("/:id", deleteUser);
Router.patch("/:id", upload.single("avatar"), updateUser);

module.exports = Router;
