import React from "react";
import {
  FaAward,
  FaGithub,
  FaExternalLinkAlt,
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
      className="relative isolate overflow-hidden bg-[#DCE5CE] px-6 py-24 text-[#25211E] md:px-12 lg:px-20"
    >
      {/* BACKGROUND DESIGN */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#A6B895]/20 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#C77D4A]/10 blur-[120px]" />

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#52634A 1px, transparent 1px), linear-gradient(90deg, #52634A 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Bottom accent */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#A65F3F]/40 to-transparent" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <div className="mb-16">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-4xl font-bold tracking-tight text-[#25211E] md:text-5xl lg:text-6xl">
              Experience
            </h2>
          </div>
        </div>

        {/* MAIN ACHIEVEMENT LAYOUT */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

          {/* LEFT CONTENT */}
          <div className="py-3">

            {/* ORGANIZATION */}
            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#A65F3F]/20 bg-[#A65F3F]/10 text-xl text-[#A65F3F]">
                <FaAward />
              </div>

              <div>
                <h3 className="text-base font-bold text-[#25211E]">
                  GirlScript Summer of Code
                </h3>

                <p className="mt-1 text-xs text-[#68715F]">
                  2026 · Contributor / Mentee
                </p>
              </div>

            </div>

            {/* ROLE */}
            <h3 className="text-3xl font-bold leading-tight tracking-tight text-[#A65F3F] md:text-4xl">
              Open-Source Contributor
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#596052] md:text-base">
              Selected as a Contributor / Mentee for GirlScript
              Summer of Code 2026, participating in collaborative
              open-source development with a focus on AI & Agents.
            </p>

            {/* ACHIEVEMENT STATISTICS */}
            <div className="my-9 grid grid-cols-3 border-y border-[#87947B]/40 py-6">

              {achievements.map((item, index) => (
                <div
                  key={item.label}
                  className={`${
                    index !== 0
                      ? "border-l border-[#87947B]/40 pl-3 md:pl-6"
                      : ""
                  }`}
                >

                  <p className="text-2xl font-bold tracking-tight text-[#25211E] md:text-3xl">
                    {item.value}
                  </p>

                  <p className="mt-2 text-[10px] font-medium text-[#68715F] md:text-xs">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

            {/* FOCUS AREAS */}
            <div className="mb-9">

              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#78836D]">
                Areas of Focus
              </p>

              <div className="flex flex-wrap gap-2">

                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[#A6B395]/60 bg-[#EDF1E7] px-3 py-2 text-xs font-medium text-[#46503F] transition-all duration-200 hover:border-[#A65F3F]/50 hover:bg-[#A65F3F]/10 hover:text-[#A65F3F]"
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>

            {/* GITHUB LINK */}
            <a
              href="https://github.com/Tiya22gif"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-sm font-bold text-[#25211E] transition-colors hover:text-[#A65F3F]"
            >
              <FaGithub className="text-xl" />
              Explore my GitHub

              <FaExternalLinkAlt className="text-xs transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

          </div>

          {/* RIGHT CONTENT - CERTIFICATE */}
          <div className="rounded-2xl border border-[#A6B395]/50 bg-[#EDF1E7] p-5 shadow-[0_15px_50px_rgba(48,58,40,0.10)] md:p-7">

            {/* CERTIFICATE HEADER */}
            <div className="mb-6 flex items-center justify-between gap-3">

              <div>
                <p className="text-sm font-bold text-[#25211E]">
                  Certificate of Participation
                </p>

                <p className="mt-1 text-xs text-[#68715F]">
                  GirlScript Summer of Code · 2026
                </p>
              </div>

              <span className="shrink-0 rounded-md border border-[#A65F3F]/30 bg-[#A65F3F]/10 px-3 py-2 text-[10px] font-bold tracking-wide text-[#A65F3F]">
                GSSoC'26
              </span>

            </div>

            {/* CERTIFICATE IMAGE */}
            <a
              href={GSSoCCertificate}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View full-size GSSoC 2026 certificate"
              className="block overflow-hidden rounded-lg border border-[#A6B395]/40 bg-white p-2 transition-all duration-300 hover:border-[#A65F3F]/50"
            >
              <img
                src={GSSoCCertificate}
                alt="Tiyasha Shil's GirlScript Summer of Code 2026 Certificate"
                loading="lazy"
                className="block h-auto w-full object-contain"
              />
            </a>

            {/* CERTIFICATE FOOTER */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">

              <p className="text-xs text-[#68715F]">
                Issued by GirlScript Foundation
              </p>

              <a
                href={GSSoCCertificate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#A65F3F] transition-colors hover:text-[#25211E]"
              >
                View Certificate
                <FaExternalLinkAlt className="text-[10px]" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;





