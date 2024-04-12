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
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<Profile />} />
        <Route path="explore" element={<Explore />} />
        <Route path="account-setup" element={<><Outlet /></>}>
          <Route index element = {<SetupAccount/>}/>
          <Route
            path="user-professional-role"
            element={<ProfessionalRole/>}
          />
          <Route path="user-about" element={<About/>}/>
          <Route path="user-skills" element={<Skills/>}/> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
