const express = require("express");
const Router = express.Router();

const {
    createInsight,
} = require("../Controllers/InsightsController");

Router.get("/", createInsight);

module.exports = Router;
