import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHamClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gray-800 fixed w-[100%] top-0">
      <div className="flex md:px-10 lg:px-20 xl:px-28 2xl:px-40 justify-between items-center px-4 py-3">
        <h1 className="text-gray-200 text-xl font-bold">aaYusH</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-200">
          <li>
            <AnchorLink href="#home" className="hover:text-white">
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset={110} href="#about" className="hover:text-white">
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink a href="#skill" className="hover:text-white">
              Skills
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#services" className="hover:text-white">
              Services
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact" className="hover:text-white">
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
            <AnchorLink href="#home" onClick={() => setShowMenu(false)}>
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about" onClick={() => setShowMenu(false)}>
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#skill" onClick={() => setShowMenu(false)}>
              Skills
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#services" onClick={() => setShowMenu(false)}>
              Services
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact" onClick={() => setShowMenu(false)}>
              Contact
            </AnchorLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
