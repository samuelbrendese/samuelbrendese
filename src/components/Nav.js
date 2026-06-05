import { useEffect, useRef, useState } from "react";
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
      <a href="/" className="nav-logo"><img src={SB} alt="SB_Logo" /></a>

      <div className="nav-links">
        <a href="/">Portfolio</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>

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
            <a href="/">Portfolio</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/resume.pdf" download>
              Resume
              <img src="/images/download-icon.png" alt="" />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}