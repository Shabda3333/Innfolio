const Views = require("../Models/ViewsModel");
const bcrypt = require("bcrypt");

const createView = async (req, res) => {
    try {
      const views = new Views({
        name: req.body.name,
      });
      const newView = await Views.save();
      res.status(201).json(newView);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  


module.exports = {
  createView,
};
