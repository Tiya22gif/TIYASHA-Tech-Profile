
import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiSmartthings } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 text-white">

      <h1 className="text-2xl md:text-4xl font-bold mb-10">
        Experience
      </h1>

      {/* GSSoC'26 */}
      <div className="flex gap-6 items-start">
        <span className="p-3 bg-zinc-950 rounded-2xl">
          <FaGithub size={45} />
        </span>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold">
            GSSoC'26 Contributor
          </h2>

          <p className="text-sm md:text-base text-gray-400">
            GirlScript Summer of Code 2026
          </p>

          <p className="text-sm md:text-base mt-2 leading-relaxed">
            Contributing to open-source projects and working on
            frontend and AI-related issues through GitHub.
          </p>

          <a
            href="https://gssoc.girlscript.org/profile/f8b4c710-25f8-4464-8b8c-55b2fed865b6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:underline"
          >
            View GSSoC'26 Profile →
          </a>
        </div>
      </div>

            
        
    </div>
  );
};

export default Experience;



