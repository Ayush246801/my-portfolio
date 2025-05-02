import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleHamClick = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-gray-800 fixed w-[100%] top-0">
      <div className="flex md:px-10 lg:px-20 xl:px-28 2xl:px-40 justify-between items-center px-4 py-3">
        <h1 className="text-gray-200 text-xl font-bold">aaYusH</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-200">
          <li>
            <AnchorLink
      
              href="#home"
              className={`hover:text-[#58A6FF] duration-200 ${
                activeSection === "hero" ? "text-[#58A6FF]" : ""
              }`}
            >
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
      
              activeClass="text-[#58A6FF]"
              offset={110}
              href="#about"
              className={`hover:text-[#58A6FF] duration-200 ${
                activeSection === "about" ? "text-[#58A6FF]" : ""
              }`}
            >
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
      
              activeClass="text-[#58A6FF]"
              href="#skill"
              className={`hover:text-[#58A6FF] duration-200 ${
                activeSection === "skill" ? "text-[#58A6FF]" : ""
              }`}
            >
              Skills
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
      
              activeClass="text-[#58A6FF]"
              href="#services"
              className={`hover:text-[#58A6FF] duration-200 ${
                activeSection === "services" ? "text-[#58A6FF]" : ""
              }`}
            >
              Services
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
      
              activeClass="text-[#58A6FF]"
              href="#contact"
              className={`hover:text-[#58A6FF] duration-200 ${
                activeSection === "contact" ? "text-[#58A6FF]" : ""
              }`}
            >
              Contact
            </AnchorLink>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={handleHamClick}
          className={`${
            showMenu ? "hidden text-gray-200" : "text-gray-200 md:hidden"
          }`}
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu size={20} />
        </button>
        <RxCross2
          size={20}
          onClick={handleHamClick}
          className={`${
            showMenu ? "inline-block text-gray-200" : "text-gray-200 hidden"
          }`}
        />
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <ul className="flex flex-col bg-gray-800 items-center gap-4 text-gray-200 md:hidden py-4">
          <li>
            <AnchorLink
      
              className={`hover:text-[#58A6FF] duration-200 ${
                activeSection === "hero" ? "text-[#58A6FF]" : ""
              }`}
              href="#home"
              onClick={() => setShowMenu(false)}
            >
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
      
              className={`hover:text-[#58A6FF] duration-200 ${
                activeSection === "about" ? "text-[#58A6FF]" : ""
              }`}
              href="#about"
              onClick={() => setShowMenu(false)}
            >
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              spy={true}
              className={`hover:text-[#58A6FF] duration-200  ${
                activeSection === "skill" ? "text-[#58A6FF]" : ""
              }`}
              href="#skill"
              onClick={() => setShowMenu(false)}
            >
              Skills
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              spy={true}
              className={`hover:text-[#58A6FF] duration-200 ${
                activeSection === "services" ? "text-[#58A6FF]" : ""
              }`}
              href="#services"
              onClick={() => setShowMenu(false)}
            >
              Services
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
      
              className={`hover:text-[#58A6FF] duration-200 ${
                activeSection === "contact" ? "text-[#58A6FF]" : ""
              }`}
              href="#contact"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </AnchorLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
