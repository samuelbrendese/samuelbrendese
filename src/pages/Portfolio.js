import { useState } from "react";
import "./Portfolio.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Wave from "../components/Wave";
import WebinarsLogo from "../images/Webinars_Logo.svg";
import RecommenderLogo from "../images/Recommender_Logo.svg";
import Y_Health_Logo from "../images/Y_Health_Logo.svg";
import Fuscos_Logo from "../images/Fuscos_Logo.svg";
import Blue_Download from "../images/icons/Blue_Download.svg";
import White_Download from "../images/icons/White_Download.svg";
import Data from "../images/icons/Data.svg";
import UX from "../images/icons/UX.svg";
import User from "../images/icons/User.svg";
import Gear from "../images/icons/Gear.svg";
import Resume from "../files/RESUME_SAMUEL_BRENDESE.pdf";

const resumeFile = "/assets/Sam-Brendese-Resume.pdf";
const downloadIcon = "/assets/download-icon.png";


export default function Portfolio() {
  const [resumeIcon, setResumeIcon] = useState(Blue_Download);

  return (
    <>
      <Nav />

      <main>
        {/* Header Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h2>Sam Brendese</h2>
            <h1>Product Innovator</h1>

            <p>
              With an eye for data and UX, I’m passionate about building
              innovative, user-centered products. I aim to empower teams with
              clarity and efficiency without sacrificing quality. I thrive on
              thoughtful execution to deliver products with truly impactful
              experiences.
            </p>
          </div>

          <div><Wave /></div>
        </section>

        {/* Projects Section */}
        <section className="projects-section">
          <div className="section-title">
            <h2>Projects</h2>
            <div></div>
          </div>

          <div className="project-group">
            <h3>Professional</h3>

            <div className="project-grid">
              <a href="/webinars" className="project-card">
                <img src={WebinarsLogo} alt="Webinars" />
              </a>

              <a href="/recommender" className="project-card">
                <img src={RecommenderLogo} alt="Recommender" />
              </a>
            </div>
          </div>

          <div className="project-group">
            <h3>Personal</h3>

            <div className="project-grid">
              <a href="/y-health" className="project-card">
                <img src={Y_Health_Logo} alt="Y_Health" />
              </a>

              <a href="/fuscos-detailing" className="project-card">
                <img src={Fuscos_Logo} alt="Fuscos" />
              </a>
            </div>
          </div>
        </section>

        {/* My Background Section */}
        <section className="background-section">
          <div className="background-intro">
            <h2>My Background</h2>

            <p>
              My experience is rooted in B2B SaaS behavioral health technology,
              backed by a computer science background. I specialize in bridging
              business needs and technical execution, leading cross-functional
              teams to deliver scalable features.
            </p>

            <a
              href={Resume}
              download
              className="background-resume-button"
              onMouseEnter={() => setResumeIcon(White_Download)}
              onMouseLeave={() => setResumeIcon(Blue_Download)}
            >
              Resume
              <img src={resumeIcon} alt="Download" />
            </a>
          </div>

          <div className="background-grid">
            <div className="background-card">
              <img src={UX} alt="UX_Icon" />
              <h3>Product UX & Delivery</h3>
              <p>
                When product ideas are vague, I turn them into clear,
                deliverable increments by defining user flows, priorities, and
                acceptance criteria, ensuring intuitive and high-quality
                experiences.
              </p>
            </div>

            <div className="background-card">
              <img src={Data} alt="Data_Icon" />
              <h3>Data-Driven</h3>
              <p>
                I use metrics and user insights to guide product decisions, and
                continuously improve product performance.
              </p>
            </div>

            <div className="background-card">
              <img src={User} alt="User_Icon" />
              <h3>User Focused</h3>
              <p>
                User needs are the center of product innovation. I turn feedback
                into intuitive solutions that drive engagement and satisfaction.
              </p>
            </div>

            <div className="background-card">
              <img src={Gear} alt="Gear_Icon" />
              <h3>Workflow Efficiency</h3>
              <p>
                I streamline processes using various tools and AI to improve
                speed, accuracy, and team collaboration.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>      
  );
}