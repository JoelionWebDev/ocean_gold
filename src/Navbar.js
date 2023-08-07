import "./nav.css";
import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Img1 from "./asset/logo2.png";

const Navbar = () => {
  const navStyle = ({ isActive }) => {
    return {};
  };

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <div className="navBrand">
            <NavLink to="/" style={navStyle}>
              <img src={Img1} alt="missing" width="50vw" />
            </NavLink>

            <div className="nav-header">
              <button
                className="nav-toggle fixed positionFixed"
                onClick={toggleLinks}
              >
                <FaBars />
              </button>
            </div>
          </div>
          <div
            className="links-container positionFixed"
            ref={linksContainerRef}
          >
            <ul className="links" ref={linksRef}>
              <NavLink to="/" style={navStyle}>
                Home
              </NavLink>
              <NavLink to="about" style={navStyle}>
                About
              </NavLink>
              <NavLink to="services" style={navStyle}>
                Services
              </NavLink>
              <a
                // target="_blank"
                href="https://trillionmagnet.github.io/oceangoldinc/TRillion-magnet-contact-form/index.html.html"
                style={{
                  backgroundColor: "none",
                }}
              >
                Contact
              </a>
              {/* <NavLink to="blogs" style={navStyle}>
                Blogs
              </NavLink> */}
              {/* <NavLink to="cover" style={navStyle}>
                Cover
              </NavLink> */}
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
// npm install react-router-dom
