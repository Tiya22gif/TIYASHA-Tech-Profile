// import React from "react";
// import avatarImg from "../../assets/pic1.jpeg";
// import TextChange from "../TextChange";

// const Home = () => {
//   return (
//     <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
//       <div className="md:w-2/4 md:pt-10 space-y-4">
//         <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
//           <TextChange />
//         </h1>
//         <p className="text-sm md:text-2xl tracking-tight ">
//           I turn <i>Imagination</i> into <i>Ideas</i>, <i>Intuition</i> into <i>Direction</i>, and <i>Innovation</i> into <i>Impact</i>.
//         </p>
//         <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
//         onClick={() => {
//       document.getElementById("Footer").scrollIntoView({
//         behavior: "smooth",
//       });
//     }}
//     >
//           Contact Me
//         </button>
//       </div>
//       <div>
//         <img className="" src={avatarImg} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Home;





// import React, { useEffect, useRef } from "react";
// import {
//   FaArrowDown,
//   FaArrowRight,
//   FaGithub,
//   FaLinkedinIn,
// } from "react-icons/fa";
// import avatarImg from "../../assets/pic1.jpeg";
// import TextChange from "../TextChange";

// const Home = () => {
//   const imageRef = useRef(null);
//   const imageWrapperRef = useRef(null);

//   useEffect(() => {
//     const wrapper = imageWrapperRef.current;
//     const image = imageRef.current;

//     if (!wrapper || !image) return;

//     let ticking = false;

//     const handleScroll = () => {
//       if (ticking) return;

//       ticking = true;

//       window.requestAnimationFrame(() => {
//         const rect = wrapper.getBoundingClientRect();
//         const offset = (window.innerHeight / 2 - rect.top) * 0.07;

//         image.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
//         ticking = false;
//       });
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToContact = () => {
//     document.getElementById("Footer")?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section
//       id="Home"
//       className="relative isolate flex min-h-[90vh] items-center overflow-hidden bg-[#F5F2EC] px-6 py-20 text-[#292929] md:px-12 lg:px-20"
//     >
//       {/* Subtle background details */}
//       <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#C77D4A]/10" />
//       <div className="pointer-events-none absolute -right-24 -top-24 h-[350px] w-[350px] rounded-full bg-[#C77D4A]/[0.06] blur-3xl" />

//       <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-10 lg:gap-20">

//         {/* Introduction */}
//         <div className="relative z-10">

//           <div className="mb-8 flex items-center gap-3">
//             <span className="h-px w-10 bg-[#C77D4A]" />
//             <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B66C3E]">
//               Welcome to my portfolio
//             </p>
//           </div>

//           <h1 className="min-h-[2.2em] text-4xl font-bold leading-[1.15] tracking-[-0.04em] md:text-5xl lg:text-[4.25rem]">
//             <TextChange />
//             <span className="text-[#C77D4A]">.</span>
//           </h1>

//           <p className="mt-7 max-w-xl text-base leading-8 text-[#716A63] md:text-lg">
//             I turn{" "}
//             <span className="font-semibold text-[#292929]">Imagination</span>{" "}
//             into <span className="font-medium text-[#B66C3E]">Ideas</span>,{" "}
//             <span className="font-semibold text-[#292929]">Intuition</span>{" "}
//             into <span className="font-medium text-[#B66C3E]">Direction</span>,
//             and <span className="font-semibold text-[#292929]">Innovation</span>{" "}
//             into <span className="font-medium text-[#B66C3E]">Impact</span>.
//           </p>

//           <p className="mt-5 max-w-lg text-sm leading-7 text-[#8A827A]">
//             A Computer Science student, full-stack developer, and open-source
//             contributor who enjoys turning ideas into meaningful digital experiences.
//           </p>

//           {/* Actions */}
//           <div className="mt-9 flex flex-wrap items-center gap-5">
//             <button
//               onClick={scrollToContact}
//               className="group inline-flex items-center gap-3 rounded-full bg-[#292929] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#B66C3E]"
//             >
//               Let's Connect
//               <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
//             </button>

//             <a
//               href="#Projects"
//               className="group inline-flex items-center gap-2 text-sm font-semibold text-[#716A63] transition-colors hover:text-[#B66C3E]"
//             >
//               Explore My Work
//               <FaArrowDown className="text-xs transition-transform duration-300 group-hover:translate-y-1" />
//             </a>
//           </div>

//           {/* Social links */}
//           <div className="mt-12 flex items-center gap-5">
//             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A49B91]">
//               Find me on
//             </span>

//             <a
//               href="https://github.com/Tiya22gif"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="GitHub"
//               className="text-lg text-[#77716A] transition-colors hover:text-[#B66C3E]"
//             >
//               <FaGithub />
//             </a>

//             <a
//               href="https://www.linkedin.com/in/tiyasha-shil-5b7131327"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="text-lg text-[#77716A] transition-colors hover:text-[#B66C3E]"
//             >
//               <FaLinkedinIn />
//             </a>
//           </div>
//         </div>

//         {/* Profile image */}
//         <div
//           ref={imageWrapperRef}
//           className="relative mx-auto flex w-full max-w-[410px] items-center justify-center py-8 md:py-12"
//         >
//           {/* Decorative rings */}
//           <div className="absolute aspect-square w-[90%] rounded-full border border-[#C77D4A]/20" />
//           <div className="absolute aspect-square w-[76%] rounded-full border border-dashed border-[#C77D4A]/20" />

//           {/* Portrait */}
//           <div className="relative z-10 aspect-[4/5] w-[76%] overflow-hidden rounded-t-[48%] rounded-b-2xl border-[7px] border-white bg-[#EAE5DC] shadow-[0_25px_65px_rgba(50,40,25,0.16)]">
//             <img
//               ref={imageRef}
//               src={avatarImg}
//               alt="Portrait of Tiyasha Shil"
//               className="h-full w-full scale-[1.08] object-cover object-center transition-transform duration-200 ease-out will-change-transform"
//             />
//           </div>

//           {/* Floating identity label */}
//           <div className="absolute bottom-3 left-0 z-20 rounded-xl border border-[#E5DED3] bg-white px-5 py-4 shadow-[0_10px_30px_rgba(50,40,25,0.10)] md:bottom-8 md:left-0">
//             <p className="text-xs font-bold text-[#292929]">
//               Imagination. Intuition. Innovation.
//             </p>
//             <p className="mt-1 text-[10px] tracking-wide text-[#999087]">
//               My approach to building.
//             </p>
//           </div>

//           {/* Small accent */}
//           <div className="absolute right-0 top-12 z-20 h-12 w-12 rounded-full border border-[#C77D4A]/30 bg-[#F5F2EC] shadow-sm md:right-2">
//             <div className="absolute inset-3 rounded-full bg-[#C77D4A]" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;






import React, { useEffect, useRef } from "react";
import {
  FaArrowRight,
  FaArrowDown,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import avatarImg from "../../assets/pic1.jpeg";
import TextChange from "../TextChange";

const Home = () => {
  const imageRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const image = imageRef.current;

    if (!wrapper || !image) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const rect = wrapper.getBoundingClientRect();
        const offset = (window.innerHeight / 2 - rect.top) * 0.06;

        image.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("Footer")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="Home"
      className="relative isolate flex min-h-[90vh] items-center overflow-hidden bg-[#292725] px-6 py-20 text-[#F5F0E8] md:px-12 lg:px-20"
    >
      {/* Background details */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full border border-[#C77D4A]/15" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[380px] w-[380px] rounded-full bg-[#C77D4A]/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#C77D4A]/40 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-8 lg:gap-16">

        {/* Introduction */}
        <div className="relative z-10">

          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C77D4A]" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D99A70]">
              Welcome to my portfolio
            </p>
          </div>

          <h1 className="min-h-[2.2em] text-4xl font-bold leading-[1.15] tracking-[-0.04em] text-[#F5F0E8] md:text-5xl lg:text-[4.25rem]">
            <TextChange />
            <span className="text-[#C77D4A]">.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#C9C0B5] md:text-lg">
            I turn{" "}
            <span className="font-semibold text-[#F5F0E8]">Imagination</span>{" "}
            into <span className="font-medium text-[#D99A70]">Ideas</span>,{" "}
            <span className="font-semibold text-[#F5F0E8]">Intuition</span>{" "}
            into <span className="font-medium text-[#D99A70]">Direction</span>,
            and <span className="font-semibold text-[#F5F0E8]">Innovation</span>{" "}
            into <span className="font-medium text-[#D99A70]">Impact</span>.
          </p>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[#AFA69B]">
            A Computer Science student, full-stack developer, and open-source
            contributor who enjoys turning ideas into meaningful digital
            experiences.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-3 rounded-full bg-[#C77D4A] px-7 py-3.5 text-sm font-semibold text-[#211F1D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D99A70]"
            >
              Let's Connect
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#Projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D5CCC1] transition-colors hover:text-[#D99A70]"
            >
              Explore My Work
              <FaArrowDown className="text-xs" />
            </a>
          </div>

          {/* Social links */}
          <div className="mt-12 flex items-center gap-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8D847A]">
              Find me on
            </span>

            <a
              href="https://github.com/Tiya22gif"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-lg text-[#C9C0B5] transition-colors hover:text-[#D99A70]"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/tiyasha-shil-5b7131327"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-lg text-[#C9C0B5] transition-colors hover:text-[#D99A70]"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div
          ref={wrapperRef}
          className="relative mx-auto flex w-full max-w-[430px] items-center justify-center py-10"
        >
          {/* Warm glow */}
          <div className="absolute h-[85%] w-[85%] rounded-full bg-[#C77D4A]/20 blur-[80px]" />

          {/* Outer rings */}
          <div className="absolute aspect-square w-[92%] rounded-full border border-[#C77D4A]/25" />
          <div className="absolute aspect-square w-[78%] rounded-full border border-dashed border-[#D99A70]/20" />

          {/* Image */}
          <div className="relative z-10 aspect-[4/5] w-[76%] overflow-hidden rounded-t-[48%] rounded-b-2xl border border-[#D99A70]/40 bg-[#39332E] shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
            <img
              ref={imageRef}
              src={avatarImg}
              alt="Portrait of Tiyasha Shil"
              className="h-full w-full scale-[1.08] object-cover object-center transition-transform duration-200 ease-out will-change-transform"
            />
          </div>

          {/* Floating identity label */}
          <div className="absolute bottom-3 left-0 z-20 rounded-xl border border-white/10 bg-[#34312E]/95 px-5 py-4 shadow-xl md:bottom-8">
            <p className="text-xs font-bold text-[#F5F0E8]">
              Imagination. Intuition. Innovation.
            </p>
            <p className="mt-1 text-[10px] tracking-wide text-[#B9AFA4]">
              My approach to building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;




