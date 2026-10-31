
// import React from "react";

// import {
//   FaCss3,
//   FaHtml5,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaPython,
//   FaJava,
//   FaGitAlt,
//   FaGithub,
//   FaBootstrap,
// } from "react-icons/fa";

// import { VscVscode } from "react-icons/vsc";

// import {
//   SiMongodb,
//   SiTailwindcss,
//   SiMysql,
//   SiC,
//   SiCplusplus,
//   SiExpress,
//   SiBruno,
// } from "react-icons/si";

// const Skills = () => {
//   return (
//     <div id="Skills" className="p-10 md:p-24 text-white">

//       {/* Heading */}
//       <h1 className="text-2xl md:text-4xl font-bold mb-10">
//         Skills
//       </h1>

//       {/* Programming Languages */}
//       <div className="mb-10">
//         <h2 className="text-xl md:text-2xl font-semibold mb-5">
//           Programming Languages
//         </h2>

//         <div className="flex flex-wrap gap-5">

//           {/* C */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <SiC color="#A8B9CC" size={45} />
//           </span>

//           {/* C++ */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <SiCplusplus color="#00599C" size={45} />
//           </span>

//           {/* Python */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <FaPython color="#3776AB" size={45} />
//           </span>

//           {/* JavaScript */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <FaJs color="#F7DF1E" size={45} />
//           </span>

//           {/* Java */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <FaJava color="#ED8B00" size={45} />
//           </span>

//         </div>
//       </div>

//       {/* Frameworks & Libraries */}
//       <div className="mb-10">
//         <h2 className="text-xl md:text-2xl font-semibold mb-5">
//           Frameworks & Libraries
//         </h2>

//         <div className="flex flex-wrap gap-5">

//           {/* HTML */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <FaHtml5 color="#E34F26" size={45} />
//           </span>

//           {/* CSS */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <FaCss3 color="#1572B6" size={45} />
//           </span>

//           {/* React */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <FaReact color="#61DAFB" size={45} />
//           </span>

//           {/* Node.js */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <FaNodeJs color="#339933" size={45} />
//           </span>

//           {/* Tailwind CSS */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <SiTailwindcss color="#06B6D4" size={45} />
//           </span>

//           {/* Bootstrap */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <FaBootstrap color="#7952B3" size={45} />
//           </span>

//           {/* Express */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <SiExpress color="#FFFFFF" size={45} />
//           </span>

//         </div>
//       </div>

//       {/* Tools & Platforms */}
//       <div className="mb-10">
//         <h2 className="text-xl md:text-2xl font-semibold mb-5">
//           Tools & Platforms
//         </h2>

//         <div className="flex flex-wrap gap-5">

//           {/* Git */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <FaGitAlt color="#F05032" size={45} />
//           </span>

//           {/* GitHub */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <FaGithub color="#FFFFFF" size={45} />
//           </span>

//           {/* Bruno */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <SiBruno color="#F4AA41" size={45} />
//           </span>

//           {/* VS Code */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <VscVscode color="#007ACC" size={45} />
//           </span>

//         </div>
//       </div>

//       {/* Databases */}
//       <div className="mb-10">
//         <h2 className="text-xl md:text-2xl font-semibold mb-5">
//           Databases
//         </h2>

//         <div className="flex flex-wrap gap-5">

//           {/* MySQL */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <SiMysql color="#4479A1" size={45} />
//           </span>

//           {/* MongoDB */}
//           <span className="p-3 bg-zinc-950 rounded-2xl transition-all duration-300 hover:scale-110">
//             <SiMongodb color="#47A248" size={45} />
//           </span>

//         </div>
//       </div>

//       {/* Soft Skills */}
//       <div className="mb-10">
//         <h2 className="text-xl md:text-2xl font-semibold mb-5">
//           Soft Skills
//         </h2>

//         <div className="flex flex-wrap gap-3">
//           {[
//             "Communication",
//             "Problem Solving",
//             "Critical Thinking",
//             "Time Management",
//             "Decision Making",
//             "Adaptability",
//           ].map((skill) => (
//             <span
//               key={skill}
//               className="px-5 py-2 bg-zinc-950 rounded-full text-sm md:text-base transition-all duration-300 hover:scale-105"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Languages */}
//       <div>
//         <h2 className="text-xl md:text-2xl font-semibold mb-5">
//           Languages
//         </h2>

//         <div className="flex flex-wrap gap-3">
//           {["Bengali", "English", "Hindi"].map((language) => (
//             <span
//               key={language}
//               className="px-5 py-2 bg-zinc-950 rounded-full text-sm md:text-base transition-all duration-300 hover:scale-105"
//             >
//               {language}
//             </span>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Skills;






import React from "react";
import {
  FaCss3Alt,
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
  SiJavascript,
} from "react-icons/si";

import {
  ArrowUpRight,
  Code2,
  Database,
  Wrench,
  Users,
  Languages,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    description: "Languages I use to solve computational problems and build applications.",
    icon: Code2,
    skills: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: FaJs },
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
    ],
  },
  {
    number: "02",
    title: "Frontend & Backend",
    description: "Technologies for developing responsive interfaces and server-side applications.",
    icon: Code2,
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "React.js", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
  },
  {
    number: "03",
    title: "Databases",
    description: "Working with relational and document-oriented database systems.",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    number: "04",
    title: "Tools & Platforms",
    description: "Tools that support development, version control, and API testing.",
    icon: Wrench,
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Bruno", icon: SiBruno },
    ],
  },
];

const softSkills = [
  "Problem Solving",
  "Critical Thinking",
  "Communication",
  "Adaptability",
  "Time Management",
  "Decision Making",
];

const languages = ["Bengali", "English", "Hindi"];

const Skills = () => {
  return (
    <section
      id="Skills"
      className="px-5 sm:px-8 lg:px-20 py-24 md:py-32
      bg-white dark:bg-[#101010]
      transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row
          sm:items-end justify-between
          border-b border-zinc-200
          dark:border-white/10 pb-8 mb-16">

          <div>
            <p className="text-[#D98937] text-xs
              font-semibold tracking-[0.3em] uppercase">
              What I work with
            </p>

            <h2 className="mt-5 text-5xl sm:text-6xl
              lg:text-7xl font-semibold
              tracking-[-0.055em]
              text-zinc-900 dark:text-white">
              Technical <span className="text-[#D98937]">Skills.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base
              leading-7 text-zinc-500 dark:text-zinc-400">
              Technologies, tools, and concepts I use
              to transform ideas into functional software.
            </p>
          </div>

          <span className="mt-6 sm:mt-0 text-xs
            tracking-[0.2em] uppercase text-zinc-400">
            02 — Technical Stack
          </span>
        </div>

        {/* TECHNOLOGY GROUPS */}
        <div className="grid grid-cols-1 md:grid-cols-2
          gap-x-14 gap-y-14">

          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <div key={group.number}
                className="group">

                {/* GROUP HEADING */}
                <div className="flex items-start
                  justify-between pb-5
                  border-b border-zinc-200
                  dark:border-white/10">

                  <div className="flex gap-4">

                    <div className="w-11 h-11
                      flex items-center justify-center
                      rounded-lg bg-orange-50
                      dark:bg-[#D98937]/10
                      text-[#D98937]">
                      <GroupIcon size={21}
                        strokeWidth={1.6} />
                    </div>

                    <div>
                      <p className="text-xs font-mono
                        text-zinc-400 mb-1">
                        {group.number}
                      </p>

                      <h3 className="text-lg sm:text-xl
                        font-semibold tracking-tight
                        text-zinc-900 dark:text-white">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  <ArrowUpRight size={18}
                    className="text-zinc-400
                    group-hover:text-[#D98937]
                    transition-colors" />
                </div>

                {/* DESCRIPTION */}
                <p className="mt-5 mb-6 text-sm
                  leading-6 text-zinc-500
                  dark:text-zinc-400">
                  {group.description}
                </p>

                {/* SKILL GRID */}
                <div className="grid grid-cols-2
                  sm:grid-cols-3 gap-3">

                  {group.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div key={skill.name}
                        className="flex items-center gap-3
                        p-3.5 rounded-lg
                        border border-zinc-200
                        dark:border-white/10
                        bg-zinc-50 dark:bg-white/[0.02]
                        hover:border-[#D98937]/50
                        hover:bg-orange-50/60
                        dark:hover:bg-[#D98937]/5
                        transition-all duration-300">

                        <Icon size={22}
                          className="text-zinc-600
                          dark:text-zinc-300
                          flex-shrink-0
                          group-hover:text-[#D98937]
                          transition-colors" />

                        <span className="text-sm
                          font-medium text-zinc-700
                          dark:text-zinc-300">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* ADDITIONAL CAPABILITIES */}
        <div className="grid grid-cols-1
          lg:grid-cols-2 gap-12 mt-24 pt-12
          border-t border-zinc-200
          dark:border-white/10">

          {/* SOFT SKILLS */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <Users size={20}
                className="text-[#D98937]" />

              <h3 className="text-lg font-semibold
                text-zinc-900 dark:text-white">
                Professional Skills
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span key={skill}
                  className="px-4 py-2.5
                  text-sm rounded-full
                  border border-zinc-200
                  dark:border-white/10
                  text-zinc-600 dark:text-zinc-300
                  hover:border-[#D98937]/60
                  hover:text-[#D98937]
                  transition-all duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* LANGUAGES */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <Languages size={20}
                className="text-[#D98937]" />

              <h3 className="text-lg font-semibold
                text-zinc-900 dark:text-white">
                Languages
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {languages.map((language) => (
                <span key={language}
                  className="px-4 py-2.5
                  text-sm rounded-full
                  border border-zinc-200
                  dark:border-white/10
                  text-zinc-600 dark:text-zinc-300">
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER LINE */}
        <div className="mt-20 pt-8
          border-t border-zinc-200
          dark:border-white/10
          flex flex-col sm:flex-row
          justify-between gap-3">

          <span className="text-xs uppercase
            tracking-[0.2em] text-zinc-400">
            Tools are means. Problem-solving is the goal.
          </span>

          <span className="text-xs uppercase
            tracking-[0.2em] text-zinc-400">
            02 / Skills
          </span>
        </div>

      </div>
    </section>
  );
};

export default Skills;









