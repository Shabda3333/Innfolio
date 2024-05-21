import React, { useState } from 'react';
import ThirdLayout from '../layouts/thirdLayout.jsx';
import ContinueButton from '../components/LoginSignupButton.jsx';
import UploadMultiple from '../components/UploadMultiple.jsx';
import { useAuth } from '../context/AuthContext.jsx';

const UploadProject = () => {
  const { user } = useAuth();
  const userData = user || {};

  const [inputValue, setInputValue] = useState({
    user_id: userData._id,
    title: '',
    role: '',
    introduction: '',
    skills: '',
    summary: '',
    photos: [],
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handlePhotosChange = (files) => {
    setInputValue({
      ...inputValue,
      photos: files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user_id', inputValue.user_id);
    formData.append('title', inputValue.title);
    formData.append('role', inputValue.role);
    formData.append('introduction', inputValue.introduction);
    formData.append('skills', inputValue.skills);
    formData.append('summary', inputValue.summary);
    inputValue.photos.forEach((photo) => {
      formData.append('photos', photo);
    });

    try {
      const response = await fetch('http://localhost:3333/api/project/', {
        method: 'PATCH',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to upload project');
      }
      // Redirect or show success message
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ThirdLayout>
        <div className="margin-wrapper position-center pt-[150px] w-full h-screen px-[120px] pb-[150px]">
          <div className="content-wrapper w-full flex flex-col gap-9 justify-between items-end p-20 form-background border-[1px] border-dark-grey px-20 rounded-[1.875rem]">
            <div className="top-elements w-full flex flex-col gap-9 pb-9">
              <h3 className="text-white text-4xl font-semibold">Upload Project</h3>
              <form onSubmit={handleSubmit}>
                <div className="title flex flex-col gap-4 pb-10">
                  <label htmlFor="title" className="text-lg text-white">
                    Project Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={inputValue.title}
                    onChange={handleOnChange}
                    placeholder=" "
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                  />
                </div>
                <div className="role flex flex-col gap-4 pb-10">
                  <label htmlFor="role" className="text-lg text-white">
                    Your Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={inputValue.role}
                    onChange={handleOnChange}
                    placeholder=" "
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                  />
                </div>
                <div className="introduction flex flex-col gap-4 pb-10">
                  <label htmlFor="introduction" className="text-lg text-white">
                    Introduction
                  </label>
                  <textarea
                    rows={6}
                    id="introduction"
                    name="introduction"
                    value={inputValue.introduction}
                    onChange={handleOnChange}
                    placeholder=" "
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-2xl"
                  />
                </div>
                <div className="skills flex flex-col gap-4 pb-10">
                  <label htmlFor="skills" className="text-lg text-white">
                    Skills Used
                  </label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={inputValue.skills}
                    onChange={handleOnChange}
                    placeholder=" "
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-full"
                  />
                </div>
                <div className="summary flex flex-col gap-4 pb-10">
                  <label htmlFor="summary" className="text-lg text-white">
                    Summary
                  </label>
                  <textarea
                    rows={6}
                    id="summary"
                    name="summary"
                    value={inputValue.summary}
                    onChange={handleOnChange}
                    placeholder=" "
                    className="bg-[rgba(255,255,255,0.1)] border-[1px] border-[#8f8f8f] text-white px-10 py-3 rounded-2xl"
                  />
                </div>
                <div className="thumbnail flex flex-col gap-4 pb-10">
                  <label htmlFor="thumbnail" className="text-lg text-white">
                    Upload Photos
                  </label>
                  <UploadMultiple onChange={handlePhotosChange} />
                </div>
                <button type="submit" className="w-3/12 pt-6">
                  <ContinueButton title="Upload" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </ThirdLayout>
    </div>
  );
};

export default UploadProject;
