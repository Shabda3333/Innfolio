const Likes = require("../Models/LikesModel");
const bcrypt = require("bcrypt");

const createLike = async (req, res) => {
    try {
      const likes = new Likes({
        name: req.body.name,
      });
      const newlike = await Likes.save();
      res.status(201).json(newlike);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  


// Delete like
const deleteLike = async (req, res) => {
  try {
    const { id } = req.params;
    const likes = await Likes.findOneAndDelete({ _id: id });

    if (!likes) {
      return res.status(404).json({ error: "No like" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  createLike,
  deleteLike,
};
