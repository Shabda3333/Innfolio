// import React from 'react'
import SecondLayout from "../../layouts/secondLayout";
import ContinueButton from "../../components/LoginSignupButton.jsx";
import UploadPhotoIcon from "../../assets/upload_photo.svg";

const professional_role = () => {
  return (
    <div>
      <SecondLayout>
        <div className="margin-wrapper position-center w-full h-[38rem] px-[120px]">
          <div className="content-wrapper w-full h-full flex flex-col justify-between items-end p-20 form-background border-[1px] border-dark-grey px-20 rounded-[1.875rem]">
            <div className="top-elements w-full flex flex-col gap-9">
              <h3 className="text-white text-4xl font-semibold">
                Account Setup
              </h3>
              <form action="">
                <div className="upload-photo flex flex-col gap-4">
                  <label htmlFor="upload-photo" className="text-lg text-white">
                    Upload Your Photo
                  </label>
                  <button>
                      <div className="upload-photo-area h-[12rem] dashed-border flex justify-center items-center">
                        <div className="icon-container w-14 h-14 bg-white flex justify-center items-center rounded-full">
                          <img src={UploadPhotoIcon} alt="upload photo icon" />
                        </div>
                      </div>
                  </button>
                </div>
              </form>
            </div>
            <button className="w-3/12">
              <ContinueButton title="Continue" />
            </button>
          </div>
        </div>
      </SecondLayout>
    </div>
  );
};

export default professional_role;
