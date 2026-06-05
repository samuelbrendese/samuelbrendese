import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";
import Blue_Download from "../images/icons/Blue_Download.svg";
import White_Download from "../images/icons/White_Download.svg";
import Dark_Blue_Download from "../images/icons/Dark_Blue_Download.svg";
import Black_Download from "../images/icons/Black_Download.svg";
import SB from "../images/SB_Logo.png";
import Resume from "../files/RESUME_SAMUEL_BRENDESE.pdf";

export default function Nav() {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

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
        <Link to="/" onClick={() => {
          if (location.pathname === "/") { window.scrollTo(0,0); window.location.reload(); }
        }}>Portfolio</Link>

        <Link to="/about" onClick={() => {
          if (location.pathname === "/about") { window.scrollTo(0,0); window.location.reload(); }
        }}>About</Link>

        <Link to="/contact" onClick={() => {
          if (location.pathname === "/contact") { window.scrollTo(0,0); window.location.reload(); }
        }}>Contact</Link>

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
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          ☰
        </button>

        {menuOpen && (
          <div className="mobile-menu">
            <Link to="/" onClick={() => {
              setMenuOpen(false);
              if (location.pathname === "/") { window.scrollTo(0,0); window.location.reload(); }
            }}>Portfolio</Link>

            <Link to="/about" onClick={() => {
              setMenuOpen(false);
              if (location.pathname === "/about") { window.scrollTo(0,0); window.location.reload(); }
            }}>About</Link>

            <Link to="/contact" onClick={() => {
              setMenuOpen(false);
              if (location.pathname === "/contact") { window.scrollTo(0,0); window.location.reload(); }
            }}>Contact</Link>

            <a href={Resume} download onClick={() => setMenuOpen(false)}>
              Resume
              <img src={Black_Download} alt="Download_Icon" style={{ marginLeft: '.25rem' }} />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}