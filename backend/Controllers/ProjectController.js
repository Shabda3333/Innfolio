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
    const Project = await Project.findById(req.params.id);
    if (!Project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(Project);
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
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProject = async (req, res) => {
  try {
    console.log(req.body);
    const Project = new Project({
      user_id: req.body.user_id,
    });
    // console.log("Request body:", req.body);
    // console.log("Request files:", req.files);

    // const project = await Project.findById(req.params.id);
    // if (!project) {
    //   return res.status(404).json({ message: "Project not found" });
    // }

    if (req.body.title != null) {
      Project.title = req.body.title;
    }
    if (req.body.introduction != null) {
      Project.introduction = req.body.introduction;
    }
    if (req.body.role != null) {
      Project.role = req.body.role;
    }
    if (req.body.skills != null) {
      Project.skills = req.body.skills;
    }
    if (req.body.summary != null) {
      Project.summary = req.body.summary;
    }
    if (req.body.link != null) {
      Project.link = req.body.link;
    }
    if (req.files) {
      Project.photos = req.files.map((file) => file.filename);
      Project.thumbnail = Project.photos.at(0);
    }

    const updatedProject = await Project.save();
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
