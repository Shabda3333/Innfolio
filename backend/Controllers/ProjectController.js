const Project = require("../Models/ProjectModel");


// Create a new Project
const createProject = async (req, res) => {
  console.log("outsied")

  try {
    const { user_id, title, introduction, role, skills, summary  } = req.body;

    const skillsString = skills;
    // const thumbnail = req.file.thumbnail;
    console.log("file",req.file);

    const project = await Project.create({
      user_id,
      title,
      introduction,
      role,
      skills: skillsString,
      summary,
    
      thumbnail: req.file.filename,
    });

    console.log("DATA",project)
    res.status(201).json(project);
  } catch (err) {
    console.log("err")
    res.status(400).json({ message: err.message });
  }
};

// Get all Projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single Project
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

// Delete a Project
const deleteProject = async (req, res) => {
  try {
    const {id}=req.params
     const project = await Project.findOneAndDelete({ _id: id });
 
   if (!project) {
     return res.status(404).json({ error: "No such user" });
   }
   } catch (err) {
     res.status(500).json({ message: err.message });
 }
  // try {
  //   const Project = await Project.findById(req.params.id);
  //   if (!Project) {
  //     return res.status(404).json({ message: "Project not found" });
  //   }
  //   await Project.remove();
  //   res.json({ message: "Project deleted" });
  // } catch (err) {
  //   res.status(500).json({ message: err.message });
  // }
};

// Update a Project
const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    if (req.body.title != null) {
      project.title = req.body.title;
    }
    if (req.body.introduction != null) {
      project.introduction = req.body.introduction;
    }
    if (req.body.role != null) {
      project.role = req.body.role;
    }
    
    if (req.body.skills != null) {
      project.skills = req.body.skills;
    }
    if (req.body.summary != null) {
      project.summary = req.body.summary;
    }
    if (req.body.link != null) {
      project.link = req.body.link;
    }
    if (req.file) {
      project.photos = req.file.filename;
    }
    if (req.file) {
      project.thumbnail = req.file.filename;
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

