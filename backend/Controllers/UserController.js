const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");

// Create a new User
// const createUser = async (req, res) => {
//   try {
//     const user = new User({
//       email: req.body.email,
//       username: req.body.username,
//       password: req.body.password,
//       role: req.body.role,
//       skills: req.body.skills,
//       picture: req.body.picture,
//     });
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// Get all Users

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message });
  }
};

// Get single User
const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a User
const deleteUser = async (req, res) => {
  try {
   const {id}=req.params
    const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }
  //   await user.findOneAndDelete();
  //   res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
}
};

// Update a User
const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (req.body.email != null) {
      user.email = req.body.email;
    }
    if (req.body.username != null) {
      user.username = req.body.username;
    }
    if (req.body.password != null) {
      user.password = req.body.password;
    }
    if (req.body.role != null) {
      user.role = req.body.role;
    }
    if (req.body.about != null) {
      user.about = req.body.about;
    }
    if (req.body.skills != null) {
      user.skills = req.body.skills;
    }
    if (req.file) {
      user.picture = req.file.filename;
    }

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  // createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
};
