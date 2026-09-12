import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  return (
    
    <nav
        className="flex justify-between items-center text-white mx-4 md:mx-20 my-6 px-6 md:px-10 py-4 md:py-5 rounded-2xl"
      >
      {/* <span className="text-xl font-bold tracking-wide"> Tiyasha Shil | Tech Profile 💡</span> */}
      <h1 className="text-xl md:text-2xl font-bold">
        🌐 TIYASHA SHIL
        <span className="text-[#8cbdaa]"> | Tech Profile 💡 </span>
      </h1>
      <ul
        className={`${
          menu ? "block" : "hidden"
        }     mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-lg transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Skills">
          <li className="text-lg transition-all duration-300 p-1 md:p-0">
            Skills
          </li>
        </a>
        <a href="#Projects">
          <li className="text-lg transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Experience">
          <li className="text-lg transition-all duration-300 p-1 md:p-0">
            Experience
          </li>
        </a>
        <a href="#Footer">
          <li className="text-lg transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
        />
      )}
    </nav>
  );
};

export default Navbar;
