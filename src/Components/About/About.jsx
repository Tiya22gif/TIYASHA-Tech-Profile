
import React from "react";
import AboutImg from "../../assets/pic2.jpeg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white mx-4 md:mx-20 my-10 rounded-2xl bg-zinc-950/70 border border-white/10 shadow-2xl p-4 md:p-6"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold">
          About <span className="text-[#465697]">Me</span>
        </h2>

        <p className="text-gray-400 mt-3 text-sm md:text-base">
          Computer Science & Engineering Undergraduate
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-32">

        {/* Image */}
        <div className="flex-shrink-0 lg:mr-4">
          <div className="p-2 rounded-3xl bg-gradient-to-br from-[#465697]/50 via-white/10 to-transparent shadow-2xl">
            <div className="rounded-2xl overflow-hidden bg-zinc-950">
              <img
                src={AboutImg}
                alt="About me"
                className="w-80 h-[440px] md:w-[360px] md:h-[500px] object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl w-full space-y-6">

          {/* Education & DSA */}
          <div className="group flex gap-4 p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#465697]/40 transition-all duration-300">
            <span className="text-2xl mt-1 flex-shrink-0">
              🎓
            </span>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Computer Science & Engineering
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Undergraduate student with a strong foundation in{" "}
                <span className="text-white font-medium">
                  Data Structures, Algorithms, and problem solving
                </span>
                , primarily using C++.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="group flex gap-4 p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#465697]/40 transition-all duration-300">
            <span className="text-2xl mt-1 flex-shrink-0">
              💻
            </span>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Technical Expertise
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Proficient in{" "}
                <span className="text-white font-medium">
                  C, C++, Python, Java, JavaScript, React.js, Tailwind CSS,
                  MongoDB, and MySQL
                </span>
                , with hands-on experience developing responsive web
                applications.
              </p>
            </div>
          </div>

          {/* Development Focus */}
          <div className="group flex gap-4 p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#465697]/40 transition-all duration-300">
            <span className="text-2xl mt-1 flex-shrink-0">
              🚀
            </span>

            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Development Focus
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Focused on building{" "}
                <span className="text-white font-medium">
                  practical, responsive, and database-driven applications
                </span>{" "}
                while developing full-stack skills and exploring AI
                integration for real-world software solutions.
              </p>
            </div>
          </div>

          {/* Closing Line */}
          <div className="flex items-center gap-2 pt-2 text-sm text-gray-400">
            <span>Always learning, building, and improving.</span>
            <IoArrowForward className="text-[#465697]" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;