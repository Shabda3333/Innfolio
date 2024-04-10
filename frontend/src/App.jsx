// import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage.jsx";
import Signin from "./pages/signin.jsx";
import Signup from "./pages/signup.jsx";
import Profile from "./pages/profile.jsx";
import SetupAccount from "./pages/Account Setup/setup-account.jsx";
import ProfessionalRole from "./pages/Account Setup/professional-role.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<Profile />} />
        <Route path="setup-account/*" element={<SetupAccount />}>
          <Route
            path="professional-role"
            element={<ProfessionalRole/>}
          />
          <Route path="about" />
          <Route path="skills" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
