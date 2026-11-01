import React, { useEffect, useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import PortfolioIcon from "../../assets/portfolio.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#About" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#Projects" },
    { name: "Experience", href: "#Experience" },
    { name: "Contact", href: "#Footer" },
  ];

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 md:px-8">
      <div
        className={`
          relative mx-auto flex items-center justify-between
          rounded-full border border-[#D7A17E]/30
          bg-[#575bcf]/90
          shadow-[0_8px_30px_rgba(30,20,15,0.10)]
          backdrop-blur-2xl
          transition-all duration-500 ease-in-out
          ${
            scrolled
              ? "mt-2.5 max-w-3xl px-4 py-2 md:px-6"
              : "mt-4 max-w-7xl px-5 py-3 md:px- md:py-3"
          }
        `}
      >
        {/* Logo and Name */}
        <a
          href="#Home"
          onClick={() => setMenu(false)}
          className="group flex shrink-0 items-center gap-2 text-[#FFF3E8]"
        >
          <img
            src={PortfolioIcon}
            alt="Tiyasha Shil Portfolio"
            className={`
              rounded-full object-contain cursor-not-allowed
              transition-all duration-300 group-hover:scale-110
              ${scrolled ? "h-9 w-9" : "h-9 w-9 md:h-10 md:w-10"}
            `}
          />

          <span className="whitespace-nowrap text-base cursor-not-allowed font-extrabold tracking-wide md:text-lg">
            TIYASHA
            <span className="ml-1 text-[#C77D4A]">SHIL.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-2 md:flex lg:gap-3">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="
                  block whitespace-nowrap rounded-full
                  border border-transparent px-3 py-2
                  text-lg font-semibold tracking-wide
                  text-[#e2e4df]
                  transition-all duration-300
                  hover:border-white/15
                  hover:bg-white/10
                  hover:text-[#FFD0AD]
                  lg:px-4
                "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="
            text-[#b0693b]
            transition-colors duration-300
            hover:text-[#FFD0AD] md:hidden
          "
          onClick={() => setMenu(!menu)}
          aria-label={menu ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menu}
        >
          {menu ? <RiCloseLine size={27} /> : <RiMenu2Line size={27} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`
            absolute left-0 right-0 top-full mt-3 overflow-hidden
            rounded-2xl border border-[#D7A17E]/30
            bg-[#A66F4F]/95 text-[#FFF3E8]
            shadow-xl backdrop-blur-2xl
            transition-all duration-300 md:hidden
            ${
              menu
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-3 opacity-0"
            }
          `}
        >
          <ul className="flex flex-col items-center gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full">
                <a
                  href={link.href}
                  onClick={() => setMenu(false)}
                  className="
                    block rounded-xl px-4 py-3 text-center
                    text-sm font-semibold tracking-wide
                    text-[#824b26]
                    transition-all duration-300
                    hover:bg-white/15 hover:text-[#FFD0AD]
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





