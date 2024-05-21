import React, { useState } from "react";
import UploadPhotoIcon from "../assets/upload_photo.svg";

const UploadMultiple = ({ onChange }) => {
  const [filePreviews, setFilePreviews] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      const newPreviews = files.map((file) => ({
        file,
        previewUrl: URL.createObjectURL(file),
      }));
      setFilePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
      onChange(files);
    }
  };

  const handleDeletePreview = (index) => {
    setFilePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="upload-photo-input"
        multiple // Allow multiple file selection
      />
      <div className="upload-photo-area h-[12rem] dashed-border flex justify-center items-center relative">
        {filePreviews.map((preview, index) => (
          <div key={index} className="h-[12rem] grid grid-cols-2 gap-2 relative">
            <img
              src={preview.previewUrl}
              alt={`Uploaded Preview ${index}`}
              className="p-4 h-[12rem] object-contain"
            />
            <button
              className="absolute bg-red-500 text-white rounded-full"
              onClick={() => handleDeletePreview(index)}
            >
              x
            </button>
          </div>
        ))}
        {filePreviews.length === 0 && (
          <div className="icon-container w-14 h-14 bg-white flex justify-center items-center rounded-full">
            <img src={UploadPhotoIcon} alt="upload photo icon" />
          </div>
        )}
        <label htmlFor="upload-photo-input" className="absolute inset-0"></label>
      </div>
    </div>
  );
};

export default UploadMultiple;
