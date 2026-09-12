
import React from "react";

import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";

import {
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiC,
  SiCplusplus,
  SiExpress,
  SiBruno,
} from "react-icons/si";

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24 text-white">

      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-bold mb-10">
        Skills
      </h1>

      {/* Programming Languages */}
      <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-5">
          Programming Languages
        </h2>

        <div className="flex flex-wrap gap-5">

          {/* C */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <SiC color="#A8B9CC" size={45} />
          </span>

          {/* C++ */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <SiCplusplus color="#00599C" size={45} />
          </span>

          {/* Python */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <FaPython color="#3776AB" size={45} />
          </span>

          {/* JavaScript */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <FaJs color="#F7DF1E" size={45} />
          </span>

          {/* Java */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <FaJava color="#ED8B00" size={45} />
          </span>

        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-5">
          Frameworks & Libraries
        </h2>

        <div className="flex flex-wrap gap-5">

          {/* HTML */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <FaHtml5 color="#E34F26" size={45} />
          </span>

          {/* CSS */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <FaCss3 color="#1572B6" size={45} />
          </span>

          {/* React */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <FaReact color="#61DAFB" size={45} />
          </span>

          {/* Node.js */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <FaNodeJs color="#339933" size={45} />
          </span>

          {/* Tailwind CSS */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <SiTailwindcss color="#06B6D4" size={45} />
          </span>

          {/* Bootstrap */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <FaBootstrap color="#7952B3" size={45} />
          </span>

          {/* Express */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <SiExpress color="#FFFFFF" size={45} />
          </span>

        </div>
      </div>

      {/* Tools & Platforms */}
      <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-5">
          Tools & Platforms
        </h2>

        <div className="flex flex-wrap gap-5">

          {/* Git */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <FaGitAlt color="#F05032" size={45} />
          </span>

          {/* GitHub */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <FaGithub color="#FFFFFF" size={45} />
          </span>

          {/* Bruno */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <SiBruno color="#F4AA41" size={45} />
          </span>

          {/* VS Code */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <VscVscode color="#007ACC" size={45} />
          </span>

        </div>
      </div>

      {/* Databases */}
      <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-5">
          Databases
        </h2>

        <div className="flex flex-wrap gap-5">

          {/* MySQL */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <SiMysql color="#4479A1" size={45} />
          </span>

          {/* MongoDB */}
          <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
            <SiMongodb color="#47A248" size={45} />
          </span>

        </div>
      </div>

      {/* Soft Skills */}
      <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-5">
          Soft Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            "Communication",
            "Problem Solving",
            "Critical Thinking",
            "Time Management",
            "Decision Making",
            "Adaptability",
          ].map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 bg-zinc-950 rounded-full text-sm md:text-base transition-all duration-300 hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-5">
          Languages
        </h2>

        <div className="flex flex-wrap gap-3">
          {["Bengali", "English", "Hindi"].map((language) => (
            <span
              key={language}
              className="px-5 py-2 bg-zinc-950 rounded-full text-sm md:text-base transition-all duration-300 hover:scale-105"
            >
              {language}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Skills;



