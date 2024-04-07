const express = require("express");
const Router = express.Router();

const {
    createWorkExp,
    getAllWorkExp,
    getSingleWorkExp,
    deleteWorkExp,
    updateWorkExp,
} = require("../Controllers/WorkController");

Router.get("/", createWorkExp);
Router.post("/", getAllWorkExp);
Router.get("/:id", getSingleWorkExp);

//Update & Delete
Router.delete("/:id", deleteWorkExp);
Router.patch("/:id", upload.single("avatar"), updateWorkExp);

module.exports = Router;
