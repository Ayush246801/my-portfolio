import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r lg:max-w-[1024px] m-auto from-[#0D1117] via-[#161B22] to-[#0D1117] text-gray-300 px-6 py-16 lg:px-0 lg:py-24 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-[80px]">

        {/* Left: About Me Content */}
        <div className="lg:w-1/2 flex flex-col justify-between space-y-6 text-[16px] leading-relaxed text-gray-200 flex-1">
          <h2 className="text-[#58A6FF] font-bold text-4xl text-center mb-8 hover:text-[#facc15] transition-all duration-300 transform hover:scale-105">
            ABOUT ME
          </h2>

          <p className="text-center max-w-3xl mx-auto">
            Hey there! I’m <span className="text-[#fagicc15] font-semibold">Aayush Shrestha</span>, a passionate front-end developer based in <span className="text-[#58A6FF]">Dharan, Nepal</span>. I specialize in building sleek, responsive websites using <span className="text-[#facc15]">React.js</span>, <span className="text-[#facc15]">Tailwind CSS</span>, and <span className="text-[#facc15]">JavaScript</span>.
          </p>

          <p className="text-center max-w-3xl mx-auto">
            I'm passionate about crafting beautiful UIs that feel intuitive and perform well. Whether it's turning a rough idea into a polished design or optimizing performance, I enjoy every step of the development process. 
          </p>

          <p className="text-center max-w-3xl mx-auto">
            Outside of coding, I enjoy editing cinematic videos, capturing moments in nature, and exploring new tech gear. Creativity and curiosity fuel everything I do — from frontend development to video editing.
          </p>

          <p className="text-center max-w-3xl mx-auto">
            I’m always looking for opportunities to grow and collaborate on projects that make a difference. Let’s connect and build something impactful.
          </p>
        </div>

        {/* Right: Contact Details */}
        <div className="lg:w-1/3  max-w-md mx-auto lg:mx-0 bg-[#161B22] p-6 rounded-xl shadow-xl flex flex-col justify-between flex-1">
          <h3 className="text-[#58A6FF] font-semibold text-lg text-center mb-4">
            📫 Contact Details
          </h3>
          <ul className="space-y-2 text-center text-sm">
            <li><span className="font-semibold text-white">Full Name:</span> Aayush Shrestha</li>
            <li><span className="font-semibold text-white">Email:</span> <a href="mailto:shresthaaayush863@gmail.com" className="hover:text-[#facc15]">shresthaaayush863@gmail.com</a></li>
            <li><span className="font-semibold text-white">Location:</span> Dharan, Nepal</li>
            <li><span className="font-semibold text-white">Open to:</span> Freelance & Front-End Roles</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
