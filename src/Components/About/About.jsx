
// import React from "react";
// import AboutImg from "../../assets/pic2.jpeg";
// import { IoArrowForward } from "react-icons/io5";

// const About = () => {
//   return (
//     <div
//       id="About"
//       className="text-white mx-4 md:mx-20 my-10 rounded-2xl bg-zinc-950/70 border border-white/10 shadow-2xl p-4 md:p-6"
//     >
//       {/* Heading */}
//       <div className="text-center mb-14">
//         <h2 className="text-3xl md:text-5xl font-bold">
//           About <span className="text-[#465697]">Me</span>
//         </h2>

//         <p className="text-gray-400 mt-3 text-sm md:text-base">
//           Computer Science & Engineering Undergraduate
//         </p>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-32">

//         {/* Image */}
//         <div className="flex-shrink-0 lg:mr-4">
//           <div className="p-2 rounded-3xl bg-gradient-to-br from-[#465697]/50 via-white/10 to-transparent shadow-2xl">
//             <div className="rounded-2xl overflow-hidden bg-zinc-950">
//               <img
//                 src={AboutImg}
//                 alt="About me"
//                 className="w-80 h-[440px] md:w-[360px] md:h-[500px] object-cover object-center hover:scale-105 transition-transform duration-500"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="max-w-2xl w-full space-y-6">

//           {/* Education & DSA */}
//           <div className="group flex gap-4 p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#465697]/40 transition-all duration-300">
//             <span className="text-2xl mt-1 flex-shrink-0">
//               🎓
//             </span>

//             <div>
//               <h3 className="text-lg md:text-xl font-semibold mb-2">
//                 Computer Science & Engineering
//               </h3>

//               <p className="text-gray-400 text-sm md:text-base leading-relaxed">
//                 Undergraduate student with a strong foundation in{" "}
//                 <span className="text-white font-medium">
//                   Data Structures, Algorithms, and problem solving
//                 </span>
//                 , primarily using C++.
//               </p>
//             </div>
//           </div>

//           {/* Technical Skills */}
//           <div className="group flex gap-4 p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#465697]/40 transition-all duration-300">
//             <span className="text-2xl mt-1 flex-shrink-0">
//               💻
//             </span>

//             <div>
//               <h3 className="text-lg md:text-xl font-semibold mb-2">
//                 Technical Expertise
//               </h3>

//               <p className="text-gray-400 text-sm md:text-base leading-relaxed">
//                 Proficient in{" "}
//                 <span className="text-white font-medium">
//                   C, C++, Python, Java, JavaScript, React.js, Tailwind CSS,
//                   MongoDB, and MySQL
//                 </span>
//                 , with hands-on experience developing responsive web
//                 applications.
//               </p>
//             </div>
//           </div>

//           {/* Development Focus */}
//           <div className="group flex gap-4 p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#465697]/40 transition-all duration-300">
//             <span className="text-2xl mt-1 flex-shrink-0">
//               🚀
//             </span>

//             <div>
//               <h3 className="text-lg md:text-xl font-semibold mb-2">
//                 Development Focus
//               </h3>

//               <p className="text-gray-400 text-sm md:text-base leading-relaxed">
//                 Focused on building{" "}
//                 <span className="text-white font-medium">
//                   practical, responsive, and database-driven applications
//                 </span>{" "}
//                 while developing full-stack skills and exploring AI
//                 integration for real-world software solutions.
//               </p>
//             </div>
//           </div>

//           {/* Closing Line */}
//           <div className="flex items-center gap-2 pt-2 text-sm text-gray-400">
//             <span>Always learning, building, and improving.</span>
//             <IoArrowForward className="text-[#465697]" />
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;






// import React from "react";
// import AboutImg from "../../assets/pic2.jpeg";
// import {
//   GraduationCap,
//   Code2,
//   Laptop,
//   ArrowUpRight,
//   Braces,
//   Lightbulb,
// } from "lucide-react";

// const highlights = [
//   {
//     icon: GraduationCap,
//     number: "01",
//     title: "Academic Foundation",
//     description: (
//       <>
//         Pursuing a B.Tech in Computer Science and Engineering at{" "}
//         <strong>Kalyani Government Engineering College</strong>, with a
//         strong foundation in Data Structures, Algorithms, and problem-solving
//         using C++.
//       </>
//     ),
//   },
//   {
//     icon: Code2,
//     number: "02",
//     title: "Technical Expertise",
//     description: (
//       <>
//         Working with <strong>C++, JavaScript, React.js, Node.js, Express.js,
//         MongoDB, and MySQL</strong> to develop responsive and database-driven
//         web applications.
//       </>
//     ),
//   },
//   {
//     icon: Laptop,
//     number: "03",
//     title: "Development Approach",
//     description: (
//       <>
//         Interested in building practical software solutions through
//         <strong> clean code, thoughtful problem-solving, and continuous
//         experimentation</strong>. I enjoy debugging and understanding how
//         things work beneath the surface.
//       </>
//     ),
//   },
// ];

// const About = () => {
//   return (
//     <section
//       id="About"
//       className="px-5 md:px-12 lg:px-20 py-24"
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* Section Heading */}
//         <div className="mb-16">
//           <p className="text-[#E9953C] text-sm font-semibold tracking-[0.25em] uppercase mb-4">
//             Get to know me
//           </p>

//           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
//             <div>
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-white">
//                 About <span className="text-[#E9953C]">Me.</span>
//               </h2>

//               <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-base md:text-lg">
//                 Computer Science Undergraduate & Developer
//               </p>
//             </div>

//             <span className="text-xs tracking-widest text-zinc-400 uppercase">
//               01 / Introduction
//             </span>
//           </div>
//         </div>

//         {/* Main Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

//           {/* Profile Image */}
//           <div className="lg:col-span-5">
//             <div className="relative max-w-md mx-auto lg:mx-0">

//               <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#E9953C]/60 rounded-tl-2xl" />

//               <div className="relative overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
//                 <img
//                   src={AboutImg}
//                   alt="Tiyasha Shil"
//                   className="w-full h-[420px] md:h-[520px] object-cover object-center transition-transform duration-700 hover:scale-105"
//                 />
//               </div>

//               <div className="absolute -bottom-5 -right-3 md:-right-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-xl px-5 py-4 shadow-xl">
//                 <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
//                   My approach
//                 </p>
//                 <p className="text-sm font-semibold text-zinc-900 dark:text-white mt-1">
//                   Learn. Build. Improve.
//                 </p>
//               </div>
//             </div>

//             {/* Personal Philosophy */}
//             <div className="mt-14 lg:mt-16 border-l-2 border-[#E9953C] pl-5 py-1">
//               <Lightbulb className="text-[#E9953C] mb-3" size={22} />

//               <p className="text-lg md:text-xl leading-relaxed font-medium text-zinc-800 dark:text-zinc-200">
//                 "I turn Imagination into Ideas, Intuition into Direction, and
//                 Innovation into Impact."
//               </p>
//             </div>
//           </div>

//           {/* Information */}
//           <div className="lg:col-span-7">

//             {/* Introductory Text */}
//             <div className="mb-10">
//               <h3 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white leading-snug">
//                 Building with curiosity.
//                 <span className="text-[#E9953C]"> Growing through code.</span>
//               </h3>

//               <p className="mt-5 text-zinc-600 dark:text-zinc-400 leading-8 text-base">
//                 I'm Tiyasha, a Computer Science undergraduate interested in
//                 software development, problem-solving, and creating technology
//                 that serves a meaningful purpose. I enjoy turning concepts
//                 into working applications and continuously strengthening my
//                 technical foundation.
//               </p>
//             </div>

//             {/* Highlight Cards */}
//             <div className="space-y-4">
//               {highlights.map((item) => {
//                 const Icon = item.icon;

//                 return (
//                   <article
//                     key={item.number}
//                     className="group flex gap-5 p-5 md:p-6 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/[0.025] hover:border-[#E9953C]/50 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300"
//                   >
//                     <div className="flex-shrink-0">
//                       <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-orange-50 dark:bg-[#E9953C]/10 text-[#D9822B] dark:text-[#E9953C] group-hover:bg-[#E9953C] group-hover:text-white transition-colors duration-300">
//                         <Icon size={23} strokeWidth={1.7} />
//                       </div>
//                     </div>

//                     <div className="flex-1">
//                       <div className="flex items-center justify-between gap-3 mb-2">
//                         <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">
//                           {item.title}
//                         </h4>

//                         <span className="text-xs font-mono text-zinc-400">
//                           {item.number}
//                         </span>
//                       </div>

//                       <p className="text-sm md:text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
//                         {item.description}
//                       </p>
//                     </div>
//                   </article>
//                 );
//               })}
//             </div>

//             {/* Closing Statement */}
//             <div className="mt-9 flex items-center gap-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">
//               <Braces size={19} className="text-[#E9953C]" />
//               <span>Consistently learning, building, and evolving.</span>
//               <ArrowUpRight size={17} className="text-[#E9953C]" />
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;








import React from "react";
import AboutImg from "../../assets/pic2.jpeg";
import {
  ArrowUpRight,
  GraduationCap,
  Code2,
  Layers3,
  Lightbulb,
} from "lucide-react";

const expertise = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Academic Foundation",
    description:
      "Pursuing B.Tech in Computer Science and Engineering at Kalyani Government Engineering College. Building a strong foundation in data structures, algorithms, and computational thinking, primarily with C++.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Engineering & Development",
    description:
      "Working across frontend and backend technologies, including JavaScript, React, Node.js, Express, MongoDB, and MySQL. Interested in building structured, responsive, and practical web applications.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Problem-Solving Mindset",
    description:
      "Approaching challenges through logical reasoning, experimentation, and continuous refinement. I enjoy debugging, understanding underlying systems, and turning ideas into working solutions.",
  },
];

const About = () => {
  return (
    <section
      id="About"
      className="relative px-5 sm:px-8 lg:px-20 py-24 md:py-32
      bg-[#FAF9F6] dark:bg-[#101010]
      transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end
          justify-between border-b border-zinc-200
          dark:border-white/10 pb-8 mb-16">

          <div>
            <span className="text-[#D98937] text-xs font-semibold
              tracking-[0.3em] uppercase">
              A little introduction
            </span>

            <h2 className="mt-5 text-5xl sm:text-6xl lg:text-7xl
              font-semibold tracking-[-0.055em]
              text-[#202020] dark:text-white">
              About
              <span className="text-[#D98937]"> me.</span>
            </h2>
          </div>

          <p className="mt-6 sm:mt-0 text-xs tracking-[0.2em]
            uppercase text-zinc-400">
            01 — Who I am
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12
          gap-14 lg:gap-20">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5">

            {/* IMAGE */}
            <div className="relative max-w-[460px]">

              <div className="absolute -top-3 -left-3
                w-full h-full border border-[#D98937]/40
                rounded-sm" />

              <div className="relative overflow-hidden
                bg-zinc-200 dark:bg-zinc-800 rounded-sm">

                <img
                  src={AboutImg}
                  alt="Portrait of Tiyasha Shil"
                  className="w-full h-[440px] sm:h-[550px]
                    object-cover object-center
                    transition-transform duration-700
                    hover:scale-[1.025]"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0
                p-6 bg-gradient-to-t from-black/70 to-transparent">

                <p className="text-white text-xs tracking-[0.25em]
                  uppercase">
                  Tiyasha Shil
                </p>

                <p className="text-white/70 text-sm mt-2">
                  Computer Science & Engineering
                </p>
              </div>
            </div>

            {/* PHILOSOPHY */}
            <div className="mt-12 pl-5 border-l-2
              border-[#D98937]">

              <Lightbulb
                size={20}
                className="text-[#D98937] mb-5"
                strokeWidth={1.5}
              />

              <p className="text-xl sm:text-2xl
                leading-relaxed font-medium
                tracking-tight text-zinc-800
                dark:text-zinc-200">
                "I turn Imagination into Ideas,
                Intuition into Direction, and
                Innovation into Impact."
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7">

            {/* INTRODUCTION */}
            <div className="mb-16">

              <p className="text-sm font-semibold
                uppercase tracking-[0.22em]
                text-[#D98937] mb-6">
                Beyond the code
              </p>

              <h3 className="text-3xl sm:text-4xl
                lg:text-[42px] leading-[1.2]
                tracking-[-0.04em] font-medium
                text-zinc-900 dark:text-white">

                Curious by nature.
                <span className="text-zinc-400
                  dark:text-zinc-500">
                  {" "}Driven by the process of building.
                </span>
              </h3>

              <p className="mt-7 text-base sm:text-lg
                leading-8 text-zinc-600
                dark:text-zinc-400 max-w-2xl">

                I'm a Computer Science undergraduate
                interested in software engineering,
                problem-solving, and building meaningful
                digital experiences. I enjoy exploring
                how technology works, translating
                concepts into practical applications,
                and continuously improving the way
                I approach problems.

              </p>
            </div>

            {/* EXPERTISE */}
            <div>

              <div className="flex items-center
                justify-between pb-5 border-b
                border-zinc-200 dark:border-white/10">

                <h4 className="text-xs font-semibold
                  uppercase tracking-[0.25em]
                  text-zinc-500 dark:text-zinc-400">
                  Areas of focus
                </h4>

                <span className="text-xs text-zinc-400">
                  01 — 03
                </span>
              </div>

              <div>
                {expertise.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.number}
                      className="group grid grid-cols-[42px_1fr]
                        sm:grid-cols-[55px_1fr]
                        gap-4 sm:gap-6 py-8
                        border-b border-zinc-200
                        dark:border-white/10"
                    >
                      <div className="flex flex-col
                        items-start gap-4">

                        <span className="text-xs
                          font-mono text-zinc-400">
                          {item.number}
                        </span>

                        <Icon
                          size={21}
                          strokeWidth={1.5}
                          className="text-[#D98937]
                            transition-transform
                            duration-300
                            group-hover:-translate-y-1"
                        />
                      </div>

                      <div>
                        <h5 className="text-lg sm:text-xl
                          font-semibold tracking-tight
                          text-zinc-900 dark:text-white
                          group-hover:text-[#D98937]
                          transition-colors duration-300">

                          {item.title}
                        </h5>

                        <p className="mt-3 text-sm
                          sm:text-[15px] leading-7
                          text-zinc-500
                          dark:text-zinc-400">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* CLOSING LINE */}
            <div className="mt-10 flex items-center
              justify-between gap-5">

              <p className="text-sm text-zinc-500
                dark:text-zinc-400">
                Always learning. Always building.
              </p>

              <a
                href="#Projects"
                className="group inline-flex
                  items-center gap-2 text-sm
                  font-semibold text-[#D98937]
                  hover:gap-3 transition-all duration-300"
              >
                Explore my work
                <ArrowUpRight size={17} />
              </a>
            </div>

          </div>
        </div>

        {/* BOTTOM SIGNATURE */}
        <div className="mt-24 pt-8 border-t
          border-zinc-200 dark:border-white/10
          flex flex-col sm:flex-row
          justify-between gap-3">

          <span className="text-xs uppercase
            tracking-[0.2em] text-zinc-400">
            Tiyasha Shil
          </span>

          <span className="text-xs uppercase
            tracking-[0.2em] text-zinc-400">
            Imagination · Intuition · Innovation
          </span>
        </div>

      </div>
    </section>
  );
};

export default About;




