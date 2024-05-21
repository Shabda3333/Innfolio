import React, { useState } from "react";
import UploadPhotoIcon from "../assets/upload_photo.svg";

const UploadField = () => {
  const [filePreview, setFilePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="upload-photo-input"
      />
      <label htmlFor="upload-photo-input">
        <div className="upload-photo-area h-[12rem] dashed-border flex justify-center items-center relative">
          {filePreview ? (
            <img
              src={filePreview}
              alt="Uploaded Preview"
              className=" p-4 w-full h-full object-contain"
            />
          ) : (
            <div className="icon-container w-14 h-14 bg-white flex justify-center items-center rounded-full">
              <img src={UploadPhotoIcon} alt="upload photo icon" />
            </div>
          )}
        </div>
      </label>
    </div>
  );
};

export default UploadField;
