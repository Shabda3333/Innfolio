const express = require("express");
const Router = express.Router();

const {
    createView,
} = require("../Controllers/ViewsController");

Router.get("/", createView);

module.exports = Router;
