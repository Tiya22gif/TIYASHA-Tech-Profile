// import React from "react";
// import { MdOutlineEmail } from "react-icons/md";
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div
//       id="Footer"
//       className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
//     >
//       <div>
//         <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
//         <h3 className="text-sm md:text-2xl font-normal">
//           Feel Free To reach out!
//         </h3>
//       </div>

//       <ul className="text-sm md:text-xl">
//         <li className="flex gap-1 items-center">
//           <MdOutlineEmail size={20} />
//           shiltiyasha2004@gmail.com
//         </li>
        
//         <li className="flex gap-2 items-center">
//           <CiLinkedin size={22} />
//           <a
//             href="https://www.linkedin.com/in/tiyasha-shil-5b7131327"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:underline"
//           >
//             linkedin.com/in/tiyasha-shil-5b7131327
//           </a>
//         </li>
        
//         <li className="flex gap-2 items-center">
//           <FaGithub size={20} />

//           <a
//             href="https://github.com/Tiya22gif"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:underline"
//           >
//             github.com/Tiya22gif
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Footer;



import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="bg-[#FAF9F6] px-6 py-12 text-[#202020] transition-colors duration-300 dark:bg-[#101010] dark:text-white md:px-16"
    >
      <div className="mx-auto max-w-6xl">

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

          {/* Contact heading */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Get in touch<span className="text-[#D98937]">.</span>
            </h2>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Feel free to reach out!
            </p>
          </div>

          {/* Contact information */}
          <div className="space-y-4 text-sm">

            <a
              href="mailto:shiltiyasha2004@gmail.com"
              className="flex items-center gap-3 transition-colors hover:text-[#D98937]"
            >
              <MdOutlineEmail size={19} />
              shiltiyasha2004@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/tiyasha-shil-5b7131327"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-[#D98937]"
            >
              <FaLinkedinIn size={18} />
              LinkedIn
            </a>

            <a
              href="https://github.com/Tiya22gif"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-[#D98937]"
            >
              <FaGithub size={18} />
              GitHub
            </a>

          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;


