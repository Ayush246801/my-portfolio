import React from "react";

const Skill = () => {
  return (
    <>
      <div className="flex px-5 lg:px-[7px] lg:max-w-[1024px] m-auto py-30 flex-col justify-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-[#58A6FF]">SKILLS</h1>
          <p className="text-gray-300 text-center mt-2">
            Languages, frameworks, and tools I’m skilled in and learning.
          </p>
        </div>
        <div className="flex lg:grid lg:grid-cols-2 lg:gap-7 mt-10 gap-3 text-gray-300 flex-col">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h1 className="font-bold">HTML</h1>
              <span className="font-bold">90%</span>
            </div>
            <span className="w-[90%] rounded-3xl mt-2 h-3 bg-[#58A6FF]"></span>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h1 className="font-bold">CSS</h1>
              <span className="font-bold">90%</span>
            </div>
            <span className="w-[90%] rounded-3xl mt-2 h-3 bg-[#58A6FF]"></span>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h1 className="font-bold">JAVASCRIPT</h1>
              <span className="font-bold">80%</span>
            </div>
            <span className="w-[80%] rounded-3xl mt-2 h-3 bg-[#58A6FF]"></span>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h1 className="font-bold">REACT</h1>
              <span className="font-bold">90%</span>
            </div>
            <span className="w-[90%] rounded-3xl mt-2 h-3 bg-[#58A6FF]"></span>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h1 className="font-bold">TAILWIND CSS</h1>
              <span className="font-bold">90%</span>
            </div>
            <span className="w-[90%] rounded-3xl mt-2 h-3 bg-[#58A6FF]"></span>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h1 className="font-bold">NODE JS</h1>
              <span className="font-bold">40%</span>
            </div>
            <span className="w-[40%] rounded-3xl mt-2 h-3 bg-[#58A6FF]"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
