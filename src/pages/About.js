import "./About.css";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Sam from '../images/Sam_Brendese.jpg';

export default function About() {
  return (
    <>
      <Nav />
      <main className="about-page">
      {/* About Page Content Section */}
      <section className="about-section">
        {/* About Text Content */}
        <div className="about-content">
          <h1>About Me</h1>

          <div className="about-text">
            <p>
              I’m a product owner with over 3 years of experience crafting
              complex solutions for B2B SaaS products.
            </p>

            <p>
              I currently oversee new feature implementations at RethinkCare,
              which specializes in behavioral health technology that supports
              neurodivergent individuals through online clinical support and
              resources.
            </p>

            <p>
              I’m always drawn to figuring out how things work—and more
              importantly, how they can work better. In my spare time I enjoy
              creating independent React projects to continue building my
              development skills.
            </p>

            <p>
              Looking to collaborate or discuss product opportunities? Let’s get
              in touch.
            </p>
          </div>

          <a href="/contact" className="about-contact-button">
            Contact
          </a>
        </div>

        {/* About Image Placeholder */}
        <div className="about-image-wrapper">
          <div className="about-image-placeholder">
            <img src={Sam} className="about-image-placeholder" alt="Sam Brendese" />
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}