import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          shiltiyasha2004@gmail.com
        </li>
        
        <li className="flex gap-2 items-center">
          <CiLinkedin size={22} />
          <a
            href="https://www.linkedin.com/in/tiyasha-shil-5b7131327"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/tiyasha-shil-5b7131327
          </a>
        </li>
        
        <li className="flex gap-2 items-center">
          <FaGithub size={20} />

          <a
            href="https://github.com/Tiya22gif"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/Tiya22gif
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
