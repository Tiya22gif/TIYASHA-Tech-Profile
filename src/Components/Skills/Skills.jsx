import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiC,
  SiCplusplus,
  SiExpress,
  SiBruno,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: FaJs },
      { name: "Java", icon: FaJava },
      { name: "C", icon: SiC },
      { name: "Python", icon: FaPython },
    ],
  },
  {
    title: "Frontend & Backend",
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
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Bruno", icon: SiBruno },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="Skills"
      className="relative overflow-hidden bg-[#DCE5CE] px-6 py-24 text-[#25211E] md:px-12 md:py-28 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Technical <span className="text-[#A65F3F]">Expertise</span>
          </h2>
        </div>

        {/* SKILL CATEGORIES */}
        <div className="grid gap-x-16 gap-y-16 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div key={group.title}>

              {/* CATEGORY HEADING */}
              <div className="mb-7 flex items-center gap-4 border-b border-[#C3CEB5] pb-4">
                <span className="font-mono text-sm font-semibold text-[#A65F3F]">
                  0{index + 1}
                </span>

                <h3 className="text-xl font-semibold tracking-tight text-[#292D25] sm:text-2xl">
                  {group.title}
                </h3>
              </div>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group inline-flex items-center gap-3 rounded-xl border border-[#C3CEB5] bg-[#EDF1E7] px-5 py-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#A65F3F]/60 hover:shadow-[0_6px_20px_rgba(40,55,30,0.10)]"
                    >
                      <Icon
                        size={26}
                        className="text-[#65745A] transition-colors duration-200 group-hover:text-[#A65F3F]"
                      />

                      <span className="text-base font-semibold text-[#343B30] sm:text-lg">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;




