import "./Fuscos.css";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Small_Fusco_Logo from '../images/Small_Fusco_Logo.png';

export default function Fuscos() {
  return (
    <div>
      <Nav />
      <main className="fuscos-page">
      {/* Case Study Content Section */}
      <section className="fuscos-section">
        {/* Top Project Overview Section */}
        <section className="fuscos-intro-section">
          {/* Project Text Content */}
          <div className="fuscos-intro-text">
            <h1>Fusco’s Detailing</h1>

            <p>
              Fusco’s Detailing is a mobile interior and exterior car detailing
              business focused on providing high-quality cleaning services
              directly to customers. While the business was generating moderate
              attention, it still lacked a centralized place where customers
              could easily view service options, pricing, contact information,
              and booking details.
            </p>

            <p>
              To solve this problem, I designed and developed a dedicated
              landing page for Fusco’s Detailing that provides customers with a
              simple and professional way to explore services and schedule
              appointments. The website includes detailing packages, pricing,
              contact information, and direct links to social media channels,
              creating a more streamlined and accessible customer experience.
            </p>
          </div>

          {/* Project Image Placeholder */}
          <div><img src={Small_Fusco_Logo} className="fuscos-image-placeholder" alt="Fusco's Detailing Logo" /></div>
        </section>

        {/* Project Results Section */}
        <section className="fuscos-content-block">
          <p>
            Since launching the website, Fusco’s Detailing has experienced
            increased bookings and continued business growth, expanding from a
            one-person operation to a team of four mobile employees to help meet
            demand. To continue supporting the business, I am currently
            developing an integrated
            scheduling system and a photo gallery page to further improve the
            customer experience and strengthen the company’s online presence.
          </p>
        </section>

        {/* Project Link Section */}
        <section className="fuscos-link-section">
          <a
            href="https://www.fuscodetailing.com"
            target="_blank"
            rel="noreferrer"
            className="fuscos-project-link"
          >
            <span className="fuscos-link-text">Visit Fusco’s Detailing →</span>
          </a>
        </section>
      </section>
    </main>
      <Footer />
    </div>
  );
}