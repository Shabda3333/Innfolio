// import React from "react";
import MainLayout from "../layouts/mainLayout.jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Signup = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <MainLayout>
        <Footer />
      </MainLayout>
    </div>
  );
};

export default Signup;
