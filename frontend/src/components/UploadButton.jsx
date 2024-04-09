// import React from "react";
import UploadIcon from '../assets/upload.svg'

const UploadButton = () => {
  return (
    <div className="button-wrapper w-fit flex justify-center items-center gap-2.5 px-10 py-3 rounded-full gradient-two ext-shadow-one upload-project-button-shadow">
      <img src={UploadIcon} alt="upload" />
      <p className="text-white font-semibold text-xl">Upload Project</p>
    </div>
  );
};

export default UploadButton;
