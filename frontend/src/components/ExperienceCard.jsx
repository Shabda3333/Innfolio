// import React from 'react'

const ExperienceCard = () => {
  return (
    <div className="w-fit bg-[rgba(255,255,255,0.1)] border-2 border-cyan flex flex-col justify-center items-center gap-2.5 px-10 py-8 rounded-xl background-blur-one">
      <p className="text-white text-base font-regular">May, 2023 - <span className="text-cyan font-medium">Present</span> • 1 mos</p>
      <p className="text-white text-2xl font-semibold">Frontend Developer</p>
      <div className="bottom flex flex-col justify-center items-center">
        <p className="text-cyan text-lg">Deerwalk Brandgurus</p>
        <p className="text-white">Sifal, Kathmandu</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
