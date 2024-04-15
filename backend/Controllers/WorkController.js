const WorkExp = require("../Models/WorkModel");
const bcrypt = require("bcrypt");

const createWorkExp = async (req, res) => {
  console.log("outsied")

  try {
    const { user_id, role, dateFrom, dateTo, company, address } = req.body;

    const workExp = await WorkExp.create({
      user_id,
      role,
      dateFrom,
      dateTo,
      company,
      address
    });

    console.log("DATA",workExp)
    res.status(201).json(workExp);
  } catch (err) {
    console.log("err")
    res.status(400).json({ message: err.message });
  }
};
  
const getAllWorkExp = async (req, res) => {
  try {
    const workExp = await WorkExp.find();
    res.json(workExp);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// Get single Work
const getSingleWorkExp = async (req, res) => {
  try {
    const workExp = await WorkExp.findById(req.params.id);
    if (!workExp) {
      return res.status(404).json({ message: "Work Experience not found" });
    }
    res.json(workExp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a Work
const deleteWorkExp = async (req, res) => {
  try {
    const { id } = req.params;
    const workExp = await WorkExp.findOneAndDelete({ _id: id });

    if (!workExp) {
      return res.status(404).json({ error: "No such Work" });
    }
    //   await user.findOneAndDelete();
    //   res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a Work
const updateWorkExp = async (req, res) => {
  try {
    const workExp = await WorkExp.findById(req.params.id);
    if (!workExp) {
      return res.status(404).json({ message: "Work experience not found" });
    }

    if (req.body.role != null) {
        workExp.role = req.body.role;
    }
    if (req.body.dateFrom != null) {
        workExp.dateFrom = req.body.dateFrom;
    }
    if (req.body.dateTo != null) {
        workExp.dateTo = req.body.dateTo;
    }
    if (req.body.company != null) {
        workExp.company = req.body.company;
    }
    if (req.body.address != null) {
        workExp.address = req.body.address;
    }

    const updatedWorkExp = await workExp.save();
    res.json(updatedWorkExp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createWorkExp,
  getAllWorkExp,
  getSingleWorkExp,
  deleteWorkExp,
  updateWorkExp,
};
