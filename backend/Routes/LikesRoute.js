const express = require("express");
const Router = express.Router();

const {
    createLike,
    deleteLike,
} = require("../Controllers/LikesController");

Router.get("/", createLike);
Router.delete("/:id", deleteLike);

module.exports = Router;
