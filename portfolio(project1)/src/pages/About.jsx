import React from 'react';
import AboutCard from '../components/AboutCard.jsx';

const About = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f2f3f5]">
    <div className="max-w-md w-full mx-auto p-4  rounded-xl  bg-white">
       <AboutCard />
    </div>
    </div>
  );
};

export default About;
