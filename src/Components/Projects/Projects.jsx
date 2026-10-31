
// import React from "react";

// const Projects = () => {
//   return (
//     <div
//       id="Projects"
//       className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
//     >
//       <h1 className="text-2xl md:text-4xl font-bold mb-10">
//         Projects
//       </h1>

//       <div className="w-full">

//         {/* Sunshine */}
//         <div className="mb-8">
//           <h2 className="text-xl md:text-3xl font-semibold">
//             Sunshine
//           </h2>

//           <p className="text-sm md:text-lg mt-3 text-gray-300">
//             Currently developing a full-stack assistance platform focused on
//             connecting people seeking urgent help with nearby individuals
//             willing to assist. The project includes privacy-aware
//             communication, location-based matching, request management,
//             and AI-assisted features.
//           </p>

//           <p className="text-sm md:text-base mt-3 text-gray-400">
//             Tech Stack: React.js, JavaScript, Tailwind CSS, Node.js,
//             Express.js, MongoDB
//           </p>

//           <span className="inline-block mt-4 px-4 py-2 bg-zinc-950 rounded-full text-sm">
//             🚧 In Development
//           </span>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default Projects;




import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";
import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiShield,
  FiGlobe,
} from "react-icons/fi";

const project = {
  name: "SUNSHINE",
  category: "Full-Stack Web Application",
  description:
    "A medical-help connection platform designed to connect people seeking assistance with people willing to help. SUNSHINE aims to make access to support more organised, approachable, and meaningful.",
  focus:
    "Built with a focus on full-stack development, authentication, database integration, REST API development, and user-centred design.",
  technologies: [
    "React.js",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
  ],
  github: "https://github.com/Tiya22gif/SUNSHINE",
  live: "https://sunshine-cqqr.onrender.com",
};

const technicalHighlights = [
  {
    icon: <FiLayers />,
    title: "Full-Stack Architecture",
    description:
      "A React-based frontend connected to a Node.js and Express backend.",
  },
  {
    icon: <FiShield />,
    title: "Authentication",
    description:
      "JWT-based authentication and protected application routes.",
  },
  {
    icon: <FiDatabase />,
    title: "Database Integration",
    description:
      "MongoDB and Mongoose for structured application data management.",
  },
  {
    icon: <FiCode />,
    title: "REST API Development",
    description:
      "Backend APIs designed to support communication between frontend and server.",
  },
];

function Projects() {
  return (
    <section
      id="Projects"
      className="relative overflow-hidden bg-[#FAF9F6] px-6 py-24 text-[#202020] transition-colors duration-300 dark:bg-[#101010] dark:text-[#F5F5F5] md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D98937]">
            Selected Work
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Projects<span className="text-[#D98937]">.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-gray-600 dark:text-gray-400 md:text-base">
              Turning ideas into functional applications through thoughtful
              engineering and continuous learning.
            </p>
          </div>
        </div>

        {/* Featured project */}
        <article className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-[#171717]">
          <div className="grid lg:grid-cols-2">
            {/* Project information */}
            <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
              <div>
                <div className="mb-8 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[#D98937]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D98937]">
                    Featured Project
                  </span>

                  <span className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {project.category}
                  </span>
                </div>

                <h3 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
                  {project.name}
                  <span className="text-[#D98937]">.</span>
                </h3>

                <p className="mb-5 text-base leading-8 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <p className="mb-9 text-sm leading-7 text-gray-500 dark:text-gray-400">
                  {project.focus}
                </p>

                {/* Technologies */}
                <div className="mb-9">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                    Technology Stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-black/10 bg-[#FAF9F6] px-3 py-2 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-[#202020] dark:text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project links */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#202020] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#D98937] dark:bg-white dark:text-black dark:hover:bg-[#D98937]"
                >
                  <FaGithub className="text-base" />
                  View Source
                  <FaExternalLinkAlt className="text-xs" />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-black/15 px-5 py-3 text-sm font-medium transition-all duration-300 hover:border-[#D98937] hover:text-[#D98937] dark:border-white/20"
                >
                  Live Preview
                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>

            {/* Visual panel */}
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#F0EDE7] p-7 dark:bg-[#20201E] md:min-h-[480px] md:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#D98937]/20" />
              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-[#D98937]/20" />

              <div className="relative w-full max-w-md">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A66A2B] dark:text-[#D98937]">
                    Project Overview
                  </span>
                  <FiGlobe className="text-xl text-[#D98937]" />
                </div>

                <div className="rounded-xl border border-black/10 bg-white p-5 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-[#151515] md:p-7">
                  <div className="mb-7 flex items-center justify-between border-b border-black/10 pb-5 dark:border-white/10">
                    <div>
                      <p className="text-2xl font-bold tracking-tight">
                        SUNSHINE
                      </p>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Human is Human. That's it.
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D98937]/10 text-xl text-[#D98937]">
                      ☀
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Frontend Development",
                      "Backend & REST APIs",
                      "Database Integration",
                      "Authentication",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-lg border border-black/5 bg-[#FAF9F6] p-3 dark:border-white/5 dark:bg-[#202020]"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#D98937]/10 text-xs font-semibold text-[#D98937]">
                          0{index + 1}
                        </span>

                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-black/10 pt-5 dark:border-white/10">
                    <p className="text-xs leading-6 text-gray-500 dark:text-gray-400">
                      Built to connect people through technology and make
                      meaningful help easier to access.
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-right text-xs tracking-wider text-gray-500">
                  IMAGINATION · INTUITION · INNOVATION
                </p>
              </div>
            </div>
          </div>

          {/* Technical highlights */}
          <div className="border-t border-black/10 px-7 py-9 dark:border-white/10 md:px-10 lg:px-12">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              Engineering Highlights
            </p>

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {technicalHighlights.map((item) => (
                <div key={item.title}>
                  <div className="mb-4 text-2xl text-[#D98937]">
                    {item.icon}
                  </div>

                  <h4 className="mb-2 text-sm font-semibold">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Closing statement */}
        <div className="mt-16 flex flex-col justify-between gap-5 border-b border-black/10 pb-8 dark:border-white/10 md:flex-row md:items-center">
          <p className="max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Every project is an opportunity to learn, solve problems, and build
            something that matters.
          </p>

          <a
            href="https://github.com/Tiya22gif"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-3 text-sm font-semibold transition-colors hover:text-[#D98937]"
          >
            More on GitHub
            <FaArrowRight className="text-[#D98937]" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

