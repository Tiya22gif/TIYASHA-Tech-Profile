import React from "react";
import sunshineLogo from "../../assets/sunshine.svg";

import { FaGithub, FaExternalLinkAlt, FaArrowRight, } from "react-icons/fa";

import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiAxios,
  SiRender,
} from "react-icons/si";

import { FiShield, FiDroplet, FiHeart, FiMapPin, FiUsers, } from "react-icons/fi";

const technologies = [
  { icon: SiReact, name: "React" },
  { icon: SiVite, name: "Vite" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiJsonwebtokens, name: "JWT" },
  { icon: SiAxios, name: "Axios" },
  { icon: SiRender, name: "Render" },
];

const features = [
  {
    icon: FiUsers,
    title: "Help Connections",
    description: "Connect people seeking assistance with willing helpers.",
  },
  {
    icon: FiDroplet,
    title: "Blood Assistance",
    description: "Support blood and blood-component help connections.",
  },
  {
    icon: FiHeart,
    title: "Donation Support",
    description: "Connect people with potential organ and tissue donors.",
  },
  {
    icon: FiMapPin,
    title: "Nearby Resources",
    description: "Discover relevant resources through location-based access.",
  },
  {
    icon: FiShield,
    title: "Privacy-Conscious",
    description: "Designed with privacy-focused help request workflows.",
  },
];

function Projects() {
  return (
    <section
      id="Projects"
      className="relative isolate overflow-hidden bg-[#211F1D] px-6 py-28 text-[#F5F0E8] selection:bg-[#C77D4A] selection:text-white md:px-12 lg:px-20"
    >
      {/* Background accents — same as About */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C77D4A]/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-[#C77D4A]/5 blur-[110px]" />

      {/* Background grid — same as About */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Solutions <span className="text-[#C77D4A]">developed .</span>
          </h2>
        </div>

        {/* FEATURED PROJECT */}
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">

          {/* PROJECT INFORMATION */}
          <div className="lg:col-span-7">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#AFA69B]">
              Full-Stack Web Application
            </p>

            {/* PROBLEM */}
            <div className="mt-7">
              <h3 className="mb-3 text-xl font-semibold text-[#F5F0E8]">
                The Problem
              </h3>

              <p className="max-w-xl text-sm leading-7 text-[#B9B0A6] sm:text-base">
                Timely, trustworthy medical assistance remains difficult to access.
              </p>
            </div>

            {/* SOLUTION */}
            <div className="mt-7">
              <h3 className="mb-3 text-xl font-semibold text-[#F5F0E8]">
                The Solution
              </h3>

              <p className="max-w-xl text-sm leading-7 text-[#B9B0A6] sm:text-base">
                SUNSHINE connects people in need with the right help, resources, and support.
              </p>
                <div>
                  <p className="text-sm font-medium tracking-wide text-[#AFA69B] mt-10">
                    Built around one belief:
                    <span className="ml-2 font-semibold text-[#ae8265]">
                      Human is Human. That's it.
                    </span>
                  </p>
              </div>
            </div>

            {/* TECHNOLOGY ICONS */}
            <div className="mt-9">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#D99A70]">
                Built With 
              </p>

              <div className="flex max-w-lg flex-wrap items-center gap-x-6 gap-y-5">
                {technologies.map(({ icon: Icon, name }) => (
                  <div
                    key={name}
                    title={name}
                    aria-label={name}
                    className="text-[27px] text-[#C7BDB3] transition-all duration-300 hover:-translate-y-1 hover:text-[#D99A70]"
                  >
                    <Icon />
                  </div>
                ))}
              </div>
            </div>

            {/* PROJECT LINKS */}
            <div className="mt-10 flex flex-wrap items-center gap-4">

              <a
                href="https://sunshine-y6c6.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-md bg-[#C77D4A] px-6 py-3.5 text-sm font-bold text-[#211F1D] transition-all duration-300 hover:bg-[#D99A70]"
              >
                Explore Live Project
                <FaArrowRight />
              </a>

              <a
                href="https://github.com/Tiya22gif/SUNSHINE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-sm font-semibold text-[#E5DDD3] transition-all duration-300 hover:border-[#C77D4A] hover:text-[#D99A70]"
              >
                <FaGithub className="text-base" />
                Source Code
                <FaExternalLinkAlt className="text-xs" />
              </a>

            </div>
          </div>

          {/* SUNSHINE LOGO */}
          <div className="lg:col-span-5">

            <div className="flex flex-col items-center justify-center">

              {/* LOGO + PROJECT NAME */}
              <div className="flex items-center justify-center gap-3">
                <img
                  src={sunshineLogo}
                  alt="SUNSHINE project logo"
                  className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                />

                <h3 className="text-5xl font-bold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                  SUNSHINE
                </h3>
              </div>

              {/* FIVE FEATURES */}
              <div className="mt-8 space-y-5">
                  {features.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="flex items-start gap-3">
                        <Icon
                          size={19}
                          strokeWidth={1.6}
                          className="mt-0.5 shrink-0 text-[#C77D4A]"
                        />

                        <div>
                          <h4 className="text-sm font-semibold text-[#F5F0E8]">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-sm leading-6 text-[#AFA69B]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;

