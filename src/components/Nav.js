import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Blue_Download from "../images/icons/Blue_Download.svg";
import White_Download from "../images/icons/White_Download.svg";
import Dark_Blue_Download from "../images/icons/Dark_Blue_Download.svg";
import SB from "../images/SB_Logo.png";
import Resume from "../files/RESUME_SAMUEL_BRENDESE.pdf";

export default function Nav() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo"><img src={SB} alt="SB_Logo" /></Link>

      <div className="nav-links">
        <Link to="/">Portfolio</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <a href={Resume} download className="nav-resume-button">
          Resume
          <img src={White_Download} alt="Download_Icon" />
        </a>
      </div>

      <div 
        className="mobile-menu-wrapper" 
        ref={menuRef}
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
      >
        <button
          className="hamburger-button"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {menuOpen && (
          <div className="mobile-menu">
            <Link to="/">Portfolio</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <a href={Resume} download>
              Resume
              <img src="/images/download-icon.png" alt="" />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}