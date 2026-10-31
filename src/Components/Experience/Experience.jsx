
// import React from "react";
// import { FaGithub } from "react-icons/fa";
// import { SiSmartthings } from "react-icons/si";

// const Experience = () => {
//   return (
//     <div id="Experience" className="p-10 md:p-24 text-white">

//       <h1 className="text-2xl md:text-4xl font-bold mb-10">
//         Experience
//       </h1>

//       {/* GSSoC'26 */}
//       <div className="flex gap-6 items-start">
//         <span className="p-3 bg-zinc-950 rounded-2xl">
//           <FaGithub size={45} />
//         </span>

//         <div>
//           <h2 className="text-xl md:text-2xl font-semibold">
//             GSSoC'26 Contributor
//           </h2>

//           <p className="text-sm md:text-base text-gray-400">
//             GirlScript Summer of Code 2026
//           </p>

//           <p className="text-sm md:text-base mt-2 leading-relaxed">
//             Contributing to open-source projects and working on
//             frontend and AI-related issues through GitHub.
//           </p>

//         </div>
//       </div>

            
        
//     </div>
//   );
// };

// export default Experience;





// import React from "react";
// import {
//   FaAward,
//   FaCertificate,
//   FaExternalLinkAlt,
//   FaGithub,
//   FaArrowRight,
// } from "react-icons/fa";

// const Experience = () => {
//   const certificatePath = "/certificates/GSSoC_2026_Certificate.jpeg";

//   const achievements = [
//     {
//       value: "#830",
//       label: "Global Rank",
//     },
//     {
//       value: "Top 2%",
//       label: "Participant Ranking",
//     },
//     {
//       value: "47,900+",
//       label: "Participants",
//     },
//   ];

//   return (
//     <section
//       id="Experience"
//       className="relative overflow-hidden bg-[#FAF9F6] px-6 py-24 text-[#202020] transition-colors duration-300 dark:bg-[#101010] dark:text-[#F5F5F5] md:px-12 lg:px-20"
//     >
//       <div className="mx-auto max-w-7xl">

//         {/* Section heading */}
//         <div className="mb-16">
//           <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D98937]">
//             Experience & Recognition
//           </p>

//           <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
//             <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
//               Beyond the code
//               <span className="text-[#D98937]">.</span>
//             </h2>

//             <p className="max-w-md text-sm leading-7 text-gray-600 dark:text-gray-400 md:text-base">
//               Learning through collaboration, contributing to open source,
//               and growing as an engineer.
//             </p>
//           </div>
//         </div>

//         {/* GSSoC recognition card */}
//         <article className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-[#171717]">

//           {/* Top label */}
//           <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 px-6 py-5 dark:border-white/10 md:px-9">
//             <div className="flex items-center gap-3">
//               <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D98937]/10 text-xl text-[#D98937]">
//                 <FaAward />
//               </span>

//               <div>
//                 <p className="text-sm font-semibold">
//                   Recognition
//                 </p>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   2026 · Open Source
//                 </p>
//               </div>
//             </div>

//             <span className="rounded-full border border-[#D98937]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D98937]">
//               GSSoC'26
//             </span>
//           </div>

//           <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

//             {/* Achievement details */}
//             <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">

//               <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D98937]">
//                 GirlScript Summer of Code
//               </p>

//               <h3 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
//                 Open-Source
//                 <br />
//                 Contributor
//                 <span className="text-[#D98937]">.</span>
//               </h3>

//               <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">
//                 GirlScript Summer of Code 2026
//               </p>

//               <p className="mb-7 text-sm leading-7 text-gray-500 dark:text-gray-400">
//                 Selected as a Contributor / Mentee, engaging with the
//                 open-source ecosystem and exploring AI & Agents through
//                 collaborative development.
//               </p>

//               {/* Ranking statistics */}
//               <div className="mb-8 grid grid-cols-3 gap-3">
//                 {achievements.map((item) => (
//                   <div
//                     key={item.label}
//                     className="border-l-2 border-[#D98937] pl-3"
//                   >
//                     <p className="text-xl font-bold tracking-tight md:text-2xl">
//                       {item.value}
//                     </p>
//                     <p className="mt-1 text-[10px] leading-4 text-gray-500 dark:text-gray-400 md:text-xs">
//                       {item.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               {/* Focus areas */}
//               <div className="mb-8">
//                 <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
//                   Areas of Focus
//                 </p>

//                 <div className="flex flex-wrap gap-2">
//                   {["Open Source", "AI & Agents", "GitHub", "Collaboration"].map(
//                     (item) => (
//                       <span
//                         key={item}
//                         className="rounded-md border border-black/10 bg-[#FAF9F6] px-3 py-2 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-[#222] dark:text-gray-300"
//                       >
//                         {item}
//                       </span>
//                     )
//                   )}
//                 </div>
//               </div>

//               {/* Links */}
//               <div className="flex flex-wrap items-center gap-4">
//                 <a
//                   href={certificatePath}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 rounded-lg bg-[#202020] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#D98937] dark:bg-white dark:text-black dark:hover:bg-[#D98937]"
//                 >
//                   <FaCertificate />
//                   View Certificate
//                   <FaExternalLinkAlt className="text-xs" />
//                 </a>

//                 <a
//                   href="https://github.com/Tiya22gif"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#D98937]"
//                 >
//                   <FaGithub className="text-lg" />
//                   GitHub
//                   <FaArrowRight className="text-xs" />
//                 </a>
//               </div>
//             </div>

//             {/* Actual certificate preview */}
//             <div className="flex flex-col justify-center border-t border-black/10 bg-[#F0EDE7] p-5 dark:border-white/10 dark:bg-[#20201E] md:p-8 lg:border-l lg:border-t-0">
//               <div className="mb-4 flex items-center justify-between">
//                 <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-600 dark:text-gray-300">
//                   Certificate of Participation
//                 </p>

//                 <FaCertificate className="text-lg text-[#D98937]" />
//               </div>

//               <div className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-xl shadow-black/10 dark:border-white/10">
//                 <iframe
//                   src={`${certificatePath}#toolbar=0&navpanes=0&scrollbar=0`}
//                   title="GirlScript Summer of Code 2026 Certificate"
//                   className="aspect-[1.414/1] w-full"
//                 />
//               </div>

//               <p className="mt-4 text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
//                 Official certificate issued by GirlScript Foundation
//               </p>
//             </div>
//           </div>
//         </article>

//         {/* Closing statement */}
//         <div className="mt-12 flex flex-col justify-between gap-4 border-b border-black/10 pb-8 dark:border-white/10 md:flex-row md:items-center">
//           <p className="max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300">
//             Every contribution counts. Every collaboration creates room to
//             grow.
//           </p>

//           <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D98937]">
//             Learn · Build · Contribute
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;








// import React from "react";
// import {
//   FaAward,
//   FaCertificate,
//   FaExternalLinkAlt,
//   FaGithub,
//   FaArrowRight,
// } from "react-icons/fa";

// const Experience = () => {
//   const certificatePath = `${import.meta.env.BASE_URL}certificates/GSSoC_2026_Certificate.jpeg`;

//   const achievements = [
//     {
//       value: "#830",
//       label: "Global Rank",
//     },
//     {
//       value: "Top 2%",
//       label: "Participant Ranking",
//     },
//     {
//       value: "47,900+",
//       label: "Participants",
//     },
//   ];

//   const focusAreas = [
//     "Open Source",
//     "AI & Agents",
//     "GitHub",
//     "Collaboration",
//   ];

//   return (
//     <section
//       id="Experience"
//       className="relative overflow-hidden bg-[#FAF9F6] px-6 py-24 text-[#202020] transition-colors duration-300 dark:bg-[#101010] dark:text-[#F5F5F5] md:px-12 lg:px-20"
//     >
//       <div className="mx-auto max-w-7xl">

//         {/* Section heading */}
//         <div className="mb-16">
//           <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D98937]">
//             Experience & Recognition
//           </p>

//           <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
//             <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
//               Beyond the code
//               <span className="text-[#D98937]">.</span>
//             </h2>

//             <p className="max-w-md text-sm leading-7 text-gray-600 dark:text-gray-400 md:text-base">
//               Learning through collaboration, contributing to open source,
//               and growing as an engineer.
//             </p>
//           </div>
//         </div>

//         {/* GSSoC recognition card */}
//         <article className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-[#171717]">

//           {/* Recognition header */}
//           <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 px-6 py-5 dark:border-white/10 md:px-9">
//             <div className="flex items-center gap-3">
//               <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D98937]/10 text-xl text-[#D98937]">
//                 <FaAward />
//               </span>

//               <div>
//                 <p className="text-sm font-semibold">
//                   Recognition
//                 </p>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   2026 · Open Source
//                 </p>
//               </div>
//             </div>

//             <span className="rounded-full border border-[#D98937]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D98937]">
//               GSSoC'26
//             </span>
//           </div>

//           <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

//             {/* Achievement details */}
//             <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">

//               <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#D98937]">
//                 GirlScript Summer of Code
//               </p>

//               <h3 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
//                 Open-Source
//                 <br />
//                 Contributor
//                 <span className="text-[#D98937]">.</span>
//               </h3>

//               <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">
//                 GirlScript Summer of Code 2026
//               </p>

//               <p className="mb-7 text-sm leading-7 text-gray-500 dark:text-gray-400">
//                 Selected as a Contributor / Mentee, engaging with the
//                 open-source ecosystem and exploring AI & Agents through
//                 collaborative development.
//               </p>

//               {/* Achievement statistics */}
//               <div className="mb-8 grid grid-cols-3 gap-3">
//                 {achievements.map((item) => (
//                   <div
//                     key={item.label}
//                     className="border-l-2 border-[#D98937] pl-3"
//                   >
//                     <p className="text-xl font-bold tracking-tight md:text-2xl">
//                       {item.value}
//                     </p>

//                     <p className="mt-1 text-[10px] leading-4 text-gray-500 dark:text-gray-400 md:text-xs">
//                       {item.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               {/* Focus areas */}
//               <div className="mb-8">
//                 <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
//                   Areas of Focus
//                 </p>

//                 <div className="flex flex-wrap gap-2">
//                   {focusAreas.map((item) => (
//                     <span
//                       key={item}
//                       className="rounded-md border border-black/10 bg-[#FAF9F6] px-3 py-2 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-[#222] dark:text-gray-300"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Links */}
//               <div className="flex flex-wrap items-center gap-4">
//                 <a
//                   href={certificatePath}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 rounded-lg bg-[#202020] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#D98937] dark:bg-white dark:text-black dark:hover:bg-[#D98937]"
//                 >
//                   <FaCertificate />
//                   View Certificate
//                   <FaExternalLinkAlt className="text-xs" />
//                 </a>

//                 <a
//                   href="https://github.com/Tiya22gif"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#D98937]"
//                 >
//                   <FaGithub className="text-lg" />
//                   GitHub
//                   <FaArrowRight className="text-xs" />
//                 </a>
//               </div>
//             </div>

//             {/* JPEG certificate preview */}
//             <div className="flex flex-col justify-center border-t border-black/10 bg-[#F0EDE7] p-5 dark:border-white/10 dark:bg-[#20201E] md:p-8 lg:border-l lg:border-t-0">

//               <div className="mb-4 flex items-center justify-between">
//                 <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-600 dark:text-gray-300">
//                   Certificate of Participation
//                 </p>

//                 <FaCertificate className="text-lg text-[#D98937]" />
//               </div>

//               <a
//                 href={certificatePath}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Open full-size GSSoC 2026 certificate"
//                 className="group block overflow-hidden rounded-lg border border-black/10 bg-white shadow-xl shadow-black/10 transition-transform duration-300 hover:-translate-y-1 dark:border-white/10"
//               >
//                 <img
//                   src={certificatePath}
//                   alt="Tiyasha Shil's GirlScript Summer of Code 2026 Certificate of Participation"
//                   loading="lazy"
//                   className="block h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
//                 />
//               </a>

//               <p className="mt-4 text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
//                 Official certificate issued by GirlScript Foundation
//               </p>

//               <p className="mt-2 text-center text-xs text-[#D98937]">
//                 Click certificate to view full size
//               </p>
//             </div>
//           </div>
//         </article>

//         {/* Closing statement */}
//         <div className="mt-12 flex flex-col justify-between gap-4 border-b border-black/10 pb-8 dark:border-white/10 md:flex-row md:items-center">
//           <p className="max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300">
//             Every contribution counts. Every collaboration creates room to
//             grow.
//           </p>

//           <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D98937]">
//             Learn · Build · Contribute
//           </span>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Experience;







// import React from "react";
// import {
//   FaAward,
//   FaGithub,
//   FaExternalLinkAlt,
// } from "react-icons/fa";
// import GSSoCCertificate from "../../assets/GSSoC_2026_Certificate.jpeg";

// const Experience = () => {
//   const certificatePath = GSSoCCertificate;

//   const achievements = [
//     { value: "#830", label: "Global Rank" },
//     { value: "Top 2%", label: "Participant Ranking" },
//     { value: "47,900+", label: "Participants" },
//   ];

//   return (
//     <section
//       id="Experience"
//       className="bg-transparent px-6 py-24 text-[#292929] md:px-12 lg:px-20"
//     >
//       <div className="mx-auto max-w-7xl">

//         {/* Heading */}
//         <div className="mb-14">
//           <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C77D4A]">
//             Experience & Recognition
//           </p>

//           <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
//             Beyond the code<span className="text-[#C77D4A]">.</span>
//           </h2>

//           <p className="mt-4 max-w-xl text-sm leading-7 text-[#77716A] md:text-base">
//             Learning through collaboration, contributing to open source,
//             and growing as an engineer.
//           </p>
//         </div>

//         {/* Achievement */}
//         <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

//           {/* Left: Achievement details */}
//           <div>
//             <div className="mb-6 flex items-center gap-3">
//               <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C77D4A]/10 text-2xl text-[#C77D4A]">
//                 <FaAward />
//               </span>

//               <div>
//                 <p className="font-semibold">GirlScript Summer of Code</p>
//                 <p className="text-sm text-[#888078]">2026 · GSSoC'26</p>
//               </div>
//             </div>

//             <h3 className="text-3xl font-bold leading-tight md:text-4xl">
//               Open-Source Contributor
//               <span className="text-[#C77D4A]">.</span>
//             </h3>

//             <p className="mt-5 text-sm leading-7 text-[#77716A] md:text-base">
//               Selected as a Contributor / Mentee, engaging with the
//               open-source ecosystem and exploring AI & Agents through
//               collaborative development.
//             </p>

//             {/* Statistics */}
//             <div className="my-8 grid grid-cols-3 gap-4">
//               {achievements.map((item) => (
//                 <div
//                   key={item.label}
//                   className="border-l-2 border-[#C77D4A] pl-3"
//                 >
//                   <p className="text-xl font-bold md:text-2xl">
//                     {item.value}
//                   </p>
//                   <p className="mt-1 text-xs text-[#888078]">
//                     {item.label}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Focus areas */}
//             <div className="mb-8 flex flex-wrap gap-2">
//               {["Open Source", "AI & Agents", "GitHub", "Collaboration"].map(
//                 (item) => (
//                   <span
//                     key={item}
//                     className="rounded-full border border-[#D8D0C5] bg-white px-4 py-2 text-xs font-medium text-[#5F5851]"
//                   >
//                     {item}
//                   </span>
//                 )
//               )}
//             </div>

//             <a
//               href="https://github.com/Tiya22gif"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 text-sm font-semibold text-[#292929] transition-colors hover:text-[#C77D4A]"
//             >
//               <FaGithub className="text-lg" />
//               Explore my GitHub
//               <FaExternalLinkAlt className="text-xs" />
//             </a>
//           </div>

//           {/* Right: Actual certificate image */}
//           <div className="rounded-2xl border border-[#E5DED3] bg-white p-4 shadow-[0_15px_50px_rgba(60,45,30,0.10)] md:p-6">
//             <div className="mb-4 flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-semibold text-[#292929]">
//                   My Achievement
//                 </p>
//                 <p className="mt-1 text-xs text-[#999087]">
//                   Certificate of Participation · 2026
//                 </p>
//               </div>

//               <FaAward className="text-2xl text-[#C77D4A]" />
//             </div>

//             <a
//               href={certificatePath}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="View full-size GSSoC certificate"
//               className="block"
//             >
//               <img
//                 src={certificatePath}
//                 alt="Tiyasha Shil - GSSoC 2026 Certificate of Participation"
//                 className="h-auto w-full rounded-lg object-contain"
//               />
//             </a>

//             <p className="mt-4 text-center text-xs text-[#999087]">
//               GirlScript Summer of Code 2026 · GirlScript Foundation
//             </p>
//           </div>
//         </div>

//         {/* Closing line */}
//         <div className="mt-16 border-t border-[#E5DED3] pt-7">
//           <p className="text-sm text-[#77716A]">
//             Every contribution counts. Every collaboration creates room to grow.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Experience;







import React from "react";
import {
  FaAward,
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
} from "react-icons/fa";
import GSSoCCertificate from "../../assets/GSSoC_2026_Certificate.jpg";

const Experience = () => {
  const achievements = [
    { value: "#830", label: "Global Rank" },
    { value: "Top 2%", label: "Overall Ranking" },
    { value: "47,900+", label: "Participants" },
  ];

  const focusAreas = [
    "Open Source",
    "AI & Agents",
    "GitHub",
    "Collaboration",
  ];

  return (
    <section
      id="Experience"
      className="bg-[#F5F2EC] px-6 py-24 text-[#292929] md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#C77D4A]">
            Experience & Recognition
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Recognition
              <span className="text-[#C77D4A]">.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-[#77716A] md:text-base">
              Opportunities to learn, contribute, collaborate, and grow
              beyond the classroom.
            </p>
          </div>
        </div>

        {/* Main achievement layout */}
        <article className="grid overflow-hidden rounded-2xl border border-[#E5DED3] bg-white shadow-[0_12px_45px_rgba(50,40,25,0.06)] lg:grid-cols-[0.85fr_1.15fr]">

          {/* Left: Achievement information */}
          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">

            {/* Organization */}
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C77D4A]/10 text-xl text-[#C77D4A]">
                <FaAward />
              </div>

              <div>
                <p className="text-sm font-bold text-[#292929]">
                  GirlScript Summer of Code
                </p>
                <p className="mt-1 text-xs text-[#999087]">
                  2026 · Contributor / Mentee
                </p>
              </div>
            </div>

            {/* Role */}
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#C77D4A]">
              Open Source Program
            </p>

            <h3 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Open-Source
              <br />
              Contributor
              <span className="text-[#C77D4A]">.</span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#77716A]">
              Selected as a Contributor / Mentee for GirlScript Summer of
              Code 2026. Exploring the open-source ecosystem, contributing
              through collaborative development, and learning about
              AI & Agents.
            </p>

            {/* Achievement statistics */}
            <div className="my-9 grid grid-cols-3 border-y border-[#EAE5DC] py-5">
              {achievements.map((item, index) => (
                <div
                  key={item.label}
                  className={`${index !== 0 ? "border-l border-[#EAE5DC] pl-3 md:pl-5" : ""}`}
                >
                  <p className="text-xl font-bold tracking-tight text-[#292929] md:text-2xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[10px] leading-4 text-[#999087] md:text-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Focus areas */}
            <div className="mb-8">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#999087]">
                Areas of Focus
              </p>

              <div className="flex flex-wrap gap-2">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[#E5DED3] bg-[#FAF9F6] px-3 py-2 text-xs font-medium text-[#625B53]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub link */}
            <div>
              <a
                href="https://github.com/Tiya22gif"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#292929] transition-colors hover:text-[#C77D4A]"
              >
                <FaGithub className="text-lg" />
                Explore my GitHub
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          </div>

          {/* Right: Certificate showcase */}
          <div className="flex flex-col justify-center border-t border-[#EAE5DC] bg-[#FAF9F6] p-5 md:p-8 lg:border-l lg:border-t-0 lg:p-10">

            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#292929]">
                  Certificate of Participation
                </p>
                <p className="mt-1 text-xs text-[#999087]">
                  Official recognition · 2026
                </p>
              </div>

              <span className="rounded-full border border-[#C77D4A]/30 bg-[#C77D4A]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#B66C3E]">
                GSSoC'26
              </span>
            </div>

            {/* Actual certificate */}
            <a
              href={GSSoCCertificate}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open full-size GSSoC 2026 certificate"
              className="group block overflow-hidden rounded-xl border border-[#E5DED3] bg-white p-2 shadow-[0_8px_30px_rgba(50,40,25,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(50,40,25,0.14)]"
            >
              <img
                src={GSSoCCertificate}
                alt="Tiyasha Shil's GirlScript Summer of Code 2026 Certificate of Participation"
                className="block h-auto w-full rounded-md object-contain"
              />
            </a>

            <div className="mt-5 flex items-center justify-between gap-3">
              <p className="text-xs leading-5 text-[#999087]">
                Issued by GirlScript Foundation
              </p>

              <a
                href={GSSoCCertificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-[#C77D4A] transition-colors hover:text-[#292929]"
              >
                View full size
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </div>
          </div>
        </article>

        {/* Closing statement */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-[#E5DED3] pt-7 md:flex-row md:items-center">
          <p className="text-sm text-[#77716A]">
            Every contribution counts. Every collaboration creates room to grow.
          </p>

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C77D4A]">
            Learn · Build · Contribute
          </span>
        </div>

      </div>
    </section>
  );
};

export default Experience;




