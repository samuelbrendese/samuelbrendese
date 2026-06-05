import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";
import Dark_Blue_Download from "../images/icons/Dark_Blue_Download.svg";
import Footer_Email from "../images/icons/Footer_Email.svg";
import Footer_Phone from "../images/icons/Footer_Phone.svg";
import Footer_LinkedIn from "../images/icons/Footer_LinkedIn.svg";
import Footer_Github from "../images/icons/Footer_Github.svg";
import Footer_Dark_Email from "../images/icons/Footer_Dark_Email.svg";
import Footer_Dark_Phone from "../images/icons/Footer_Dark_Phone.svg";
import Footer_Dark_LinkedIn from "../images/icons/Footer_Dark_LinkedIn.svg";
import Footer_Dark_Github from "../images/icons/Footer_Dark_Github.svg";
import Resume from "../files/RESUME_SAMUEL_BRENDESE.pdf";


export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const location = useLocation();

  return (
   <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <Link to="/" onClick={() => {
            if (location.pathname === "/") { window.scrollTo(0,0); window.location.reload(); }
          }}>Portfolio</Link>

          <Link to="/about" onClick={() => {
            if (location.pathname === "/about") { window.scrollTo(0,0); window.location.reload(); }
          }}>About</Link>

          <Link to="/contact" onClick={() => {
            if (location.pathname === "/contact") { window.scrollTo(0,0); window.location.reload(); }
          }}>Contact</Link>

          <a href={Resume} download className="footer-resume-link">
            Resume
            <img src={Dark_Blue_Download} alt="Download_Icon" />
          </a>
        </div>

        <div className="footer-contact-icons">
          <a
            href="tel:5186942615"
            onMouseEnter={() => setHoveredIcon("phone")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <img
              src={hoveredIcon === "phone" ? Footer_Dark_Phone : Footer_Phone}
              alt="Phone"
            />
          </a>

          <a
            href="mailto:sambrendese@gmail.com"
            onMouseEnter={() => setHoveredIcon("email")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <img
              src={hoveredIcon === "email" ? Footer_Dark_Email : Footer_Email}
              alt="Email"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/samuel-brendese-4075721a8"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredIcon("linkedin")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <img
              src={hoveredIcon === "linkedin" ? Footer_Dark_LinkedIn : Footer_LinkedIn}
              alt="LinkedIn"
            />
          </a>

           <a
            href="https://github.com/samuelbrendese?tab=repositories"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHoveredIcon("github")}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <img
              src={hoveredIcon === "github" ? Footer_Dark_Github : Footer_Github}
              alt="GitHub"
            />
          </a>
          
        </div>
      </div>

      <div className="footer-line"></div>

      <p className="made-with-react">Made with React</p>
    </footer>
  );
}