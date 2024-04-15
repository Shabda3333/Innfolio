
import { ToastContainer, toast } from "react-toastify";import MainLayout from "../layouts/mainLayout.jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import SearchBar from "../components/SearchBar.jsx";


const Search = () => {

 
  return (
    <div className="bg-black">
      <div className="background-gradients z-10">
        {/* <div className="first-gradient w-[62rem] h-[62rem] rotate-[78deg] absolute top-[-437px] left-[-517px] bg-white rounded-full gradient-one z-10 blur-[150px] opacity-40"></div> */}
       
      </div>
      <Navbar />
      <MainLayout>
      <div className=" pt-32 pb-96"><SearchBar/></div>
       
        <Footer />
        <ToastContainer/>
      </MainLayout>
     
    </div>
    
  );
};

export default Search;
