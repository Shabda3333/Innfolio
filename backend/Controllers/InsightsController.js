const Insights = require("../Models/InsightsModel");
const bcrypt = require("bcrypt");

const createInsight = async (req, res) => {
    try {
      const insights = new Insights({
        name: req.body.name,
      });
      const newInsight = await Insights.save();
      res.status(201).json(newInsight);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  


module.exports = {
  createInsight,
};
