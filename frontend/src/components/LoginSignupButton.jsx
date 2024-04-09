// import React from "react";

const LoginSignupButton = ({ title }) => {
  return (
    <div className="button-wrapper w-[16.25rem] flex justify-center items-center gap-2.5 py-3 rounded-full gradient-two ext-shadow-one upload-project-button-shadow">
      <p className="text-white font-semibold text-xl">{title}</p>
    </div>
  );
};

export default LoginSignupButton;
