import React, { useState } from "react";
// import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
// import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleHamIcon = () => {
    setShowMenu(!showMenu);
  };
  const handleLinkClick = () => {
    if(showMenu) return setShowMenu(false)
  }

    return (
      <>
        <div className="container">
          <nav>
            <h1 className="name">aaYusH</h1>
            <ul className={showMenu ? "menu-mobile" : "menu-web"}>
              <li>
                <NavLink
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                  to="/skills"
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <GiHamburgerMenu onClick={handleHamIcon} className="delete-icon" />
          </nav>
        </div>
      </>
    );
};

export default Header;
