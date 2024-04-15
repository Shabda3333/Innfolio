const express = require("express");
const Router = express.Router();

const {
    createWorkExp,
    getAllWorkExp,
    getSingleWorkExp,
    deleteWorkExp,
    updateWorkExp,
} = require("../Controllers/WorkController");

Router.post("/", createWorkExp);
Router.get("/", getAllWorkExp);
Router.get("/:id", getSingleWorkExp);

//Update & Delete
Router.delete("/:id", deleteWorkExp);

module.exports = Router;
