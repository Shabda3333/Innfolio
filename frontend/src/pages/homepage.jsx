
// import React from "react";
import MainLayout from "../layouts/mainLayout";


const Homepage = () => {
  return (
    <MainLayout>
      <div>
        <img src="./src/assets/innfolio..svg" alt="" />
      </div>

      <div className=" bg-transparent text-white font-general-sans h-[80vh] flex flex-col justify-center items-center ">
        <h2 className=" font-thin text-2xl">
          Welcome, to <span className="text-cyan">Innfolio</span>
        </h2>
        <h1 className=" font-semibold text-7xl pt-[32px] pd-[10px]">
          Unlock Your
        </h1>
        <h1 className=" font-semibold text-7xl pt-[10px] pd-[32px]">
          Professional Brilliance
        </h1>
        <h2 className=" font-medium text-5xl pt-[32px] ">
          <span className="text-cyan font-semibold">Craft</span> Portfolio of
          Excellence
        </h2>
      </div>
     
    </MainLayout>
  );
};

export default Homepage;
