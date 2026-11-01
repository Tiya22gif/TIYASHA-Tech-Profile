
import React from "react";
import myPic from "../../assets/myPic.png";

import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import { GraduationCap, Code2, Brain } from "lucide-react";

const focusAreas = [
  {
    icon: Code2,
    title: "Core Computer Science",
    topics: "OOP · DBMS · Operating Systems · Computer Networks",
  },
  {
    icon: Brain,
    title: "Data Structures & Algorithms",
    topics: "Data Structures · Algorithms · Complexity Analysis · Problem-Solving",
  },
];

const About = () => {
  return (
    <section
      id="About"
      className="relative isolate overflow-hidden bg-[#211F1D] px-40 pt-48 py-28 text-[#F5F0E8] selection:bg-[#C77D4A] selection:text-white md:px-52 lg:px-32"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C77D4A]/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-[#C77D4A]/5 blur-[110px]" />

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Who <span className="text-[#C77D4A]">I</span> am .
          </h2>
        </div>

        {/* MAIN INTRODUCTION */}
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">

          {/* PORTRAIT */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[430px]">

              <div className="absolute -right-3 -top-3 h-full w-full rounded-sm border border-[#C77D4A]/40" />

              <div className="relative overflow-hidden rounded-sm border border-white/10 bg-[#302B27]">
                <img
                  src={myPic}
                  alt="Portrait of Tiyasha Shil"
                  loading="eager"
                  className="h-[420px] w-full scale-[0.94]  object-contain object-center sm:h-[540px]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#211F1D] via-[#211F1D]/60 to-transparent px-6 pb-6 pt-20">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FFF3E8]">
                    Tiyasha Shil
                  </p>

                  <p className="mt-2 text-sm text-[#C7BDB3]">
                    Computer Science & Engineering
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden h-20 w-20 border-b border-l border-[#C77D4A]/50 sm:block" />
            </div>
          </div>

          {/* INTRODUCTION & ACADEMICS */}
          <div className="lg:col-span-7">
            <h3 className="max-w-2xl text-3xl font-semibold leading-[1.2] tracking-[-0.04em] sm:text-4xl lg:text-[46px]">
              Curious by nature.
              <span className="text-[#A99D91]">
                {" "}Driven to build.
              </span>
            </h3>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#B9B0A6] sm:text-lg">
              I love to debug, explore new technologies, and turn ideas into working solutions.
            </p>

            {/* ACADEMICS + CORE KNOWLEDGE */}
            <div className="mt-9 grid gap-18 md:grid-cols-2">

              {/* ACADEMIC BACKGROUND */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <GraduationCap size={22} className="text-[#C77D4A]" />
                  <h4 className="text-lg font-semibold text-[#F5F0E8]">
                    Academic Background
                  </h4>
                </div>

                <div className="space-y-4 border-l border-white/15 pl-5">
                  <div>
                    <p className="font-semibold text-[#F5F0E8]">
                      B.Tech — Computer Science & Engineering
                    </p>
                    <p className="mt-1 text-sm text-[#AFA69B]">
                      KGEC · 2024–2028
                    </p>
                    <p className="mt-1 text-sm text-[#D99A70]">
                      Current CGPA - 7.67
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#F5F0E8]">
                      Higher Secondary (Class XII)
                    </p>
                    <p className="mt-1 text-sm text-[#AFA69B]">
                      NNV · Naihati · 2022 · 83%
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#F5F0E8]">
                      Secondary (Class X)
                    </p>
                    <p className="mt-1 text-sm text-[#AFA69B]">
                      P.S.G.H.S · Naihati · 2020 · 89%
                    </p>
                  </div>
                </div>
              </div>

              {/* CORE KNOWLEDGE */}
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <Code2 size={22} className="text-[#C77D4A]" />
                  <h4 className="text-lg font-semibold text-[#F5F0E8]">
                    Core Computer Science
                  </h4>
                </div>

                <div className="space-y-8 border-l border-white/15 pl-5">
                  <div>
                    <p className="text-sm leading-7 text-[#AFA69B]">
                      OOP · DBMS · Operating Systems · Computer Networks
                    </p>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <Brain size={22} className="text-[#C77D4A]" />
                      <h4 className="text-lg font-semibold text-[#F5F0E8]">
                        DSA & Problem Solving
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-[#AFA69B]">
                      Data Structures · Algorithms · Complexity Analysis · Problem Solving
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-9 flex flex-wrap items-center gap-3">

              <a
                href="https://github.com/Tiya22gif"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-[#E5DDD3] transition-all duration-300 hover:border-[#C77D4A]/60 hover:bg-[#C77D4A]/10 hover:text-[#D99A70]"
              >
                <FaGithub size={17} />
                GitHub
                <FaArrowUpRightFromSquare size={13} />
              </a>

              <a
                href="#Skills"
                className="inline-flex items-center gap-2 rounded-md bg-[#C77D4A] px-5 py-3 text-sm font-bold text-[#211F1D] transition-all duration-300 hover:bg-[#D99A70]"
              >
                Skills
                <FaArrowUpRightFromSquare size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/tiyasha-shil-5b7131327"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-[#E5DDD3] transition-all duration-300 hover:border-[#C77D4A]/60 hover:bg-[#C77D4A]/10 hover:text-[#D99A70]"
              >
                <FaLinkedinIn size={17} />
                LinkedIn
                <FaArrowUpRightFromSquare size={13} />
              </a>

              <a
                href="#Projects"
                className="inline-flex items-center gap-2 rounded-md bg-[#C77D4A] px-5 py-3 text-sm font-bold text-[#211F1D] transition-all duration-300 hover:bg-[#D99A70]"
              >
                View Projects
                <FaArrowUpRightFromSquare size={14} />
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;



