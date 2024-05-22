const Project = require("../Models/ProjectModel");

const createProject = async (req, res) => {
  try {
    const Project = new Project({
      name: req.body.name,
    });
    const newProject = await Project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingleProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findOneAndDelete({ _id: id });

    if (!project) {
      return res.status(404).json({ error: "No such user" });
    }
    return res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const { user_id, title, introduction, role, skills, summary } = req.body;
    const project = new Project({
      user_id: user_id,
    });

    // await Project.findById(req.params.id);
    // if (!project) {
    //   console.log("no project");
    //   return res.status(404).json({ message: "Project not found" });
    // }

    if (title) project.title = title;
    if (introduction) project.introduction = introduction;
    if (role) project.role = role;
    if (skills) project.skills = skills;
    if (summary) project.summary = summary;
    // if (link) project.link = link;

    if (req.files && req.files.length > 0) {
      project.photos = req.files.map((file) => file.filename);
      project.thumbnail = project.photos[0];
    }

    const updatedProject = await project.save();
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject,
};
