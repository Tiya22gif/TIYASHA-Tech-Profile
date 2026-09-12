
import React from "react";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-10">
        Projects
      </h1>

      <div className="w-full">

        {/* Sunshine */}
        <div className="mb-8">
          <h2 className="text-xl md:text-3xl font-semibold">
            Sunshine
          </h2>

          <p className="text-sm md:text-lg mt-3 text-gray-300">
            Currently developing a full-stack assistance platform focused on
            connecting people seeking urgent help with nearby individuals
            willing to assist. The project includes privacy-aware
            communication, location-based matching, request management,
            and AI-assisted features.
          </p>

          <p className="text-sm md:text-base mt-3 text-gray-400">
            Tech Stack: React.js, JavaScript, Tailwind CSS, Node.js,
            Express.js, MongoDB
          </p>

          <span className="inline-block mt-4 px-4 py-2 bg-zinc-950 rounded-full text-sm">
            🚧 In Development
          </span>
        </div>


      </div>
    </div>
  );
};

export default Projects;


