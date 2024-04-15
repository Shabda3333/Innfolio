// import React from "react";
import { HashRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Homepage from "./pages/homepage.jsx";
import Signin from "./pages/signin.jsx";
import Signup from "./pages/signup.jsx";
import Profile from "./pages/profile.jsx";
import Explore from "./pages/explore.jsx";
import SetupAccount from "./pages/Account Setup/setup-account.jsx";
import ProfessionalRole from "./pages/Account Setup/professional-role.jsx";
import Skills from "./pages/Account Setup/skills.jsx";
import About from "./pages/Account Setup/about.jsx";
import UploadPhoto from "./pages/Account Setup/upload-photo.jsx";
import UploadProjectAsk from "./pages/Account Setup/upload-project-ask.jsx";
import UploadProject from "./pages/Account Setup/upload-project.jsx"
import Project from "./pages/project.jsx";
import ProjectDetails from "./pages/project_details.jsx"
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<Profile />} />
        <Route path="project" element={<Project />} />
        <Route path="project-details" element={<ProjectDetails />} />
        <Route path="explore" element={<Explore />} />
        <Route path="account-setup" element={<><Outlet /></>}>
          <Route index element = {<SetupAccount/>}/>
          <Route
            path="user-professional-role"
            element={<ProfessionalRole/>}
          />
          <Route path="user-about" element={<About/>}/>
          <Route path="user-skills" element={<Skills/>}/> 
          <Route path="upload-photo" element={<UploadPhoto/>}/>
          <Route path="upload-project-ask" element={<UploadProjectAsk/>}/>
          <Route path="upload-project" element={<UploadProject/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
