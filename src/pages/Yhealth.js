import "./Yhealth.css";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Small_Y_Health_Logo from '../images/Small_Y_Health_Logo.svg';

export default function Yhealth() {
  return (
    <div>
      <Nav />
      <main className="yhealth-page">
      {/* Case Study Content Section */}
      <section className="yhealth-section">
        {/* Top Project Overview Section */}
        <section className="yhealth-intro-section">
          {/* Project Intro Text */}
          <div className="yhealth-intro-text">
            <h1>Y-Health Corp</h1>

            <p>
              Y-Health is a behavioral health technology startup focused on
              helping hospitals streamline the patient referral process for
              individuals seeking mental health treatment. Healthcare staff are
              often responsible for managing large volumes of patients with
              highly specific treatment needs, while also navigating provider
              availability, insurance limitations, affordability concerns, and
              language barriers. These challenges - among many others - can
              delay treatment placement, increase administrative strain on
              hospitals, and contribute to repeat inpatient admissions when
              patients are unable to receive the care they need in time.
            </p>
          </div>

          {/* Project Image Placeholder */}
          <div><img src={Small_Y_Health_Logo} className="yhealth-image-placeholder" alt="Y-Health Logo" /></div>
        </section>

        {/* Problem / Solution Paragraph */}
        <section className="yhealth-content-block">
          <p>
            To address this problem, Y-Health developed a centralized referral
            platform that enables hospital staff to quickly identify and connect
            patients with therapists and behavioral health providers that best
            match their individual needs. Through detailed filtering capabilities
            and AI-assisted search functionality, staff can efficiently pair
            patients with providers based on treatment type, insurance coverage,
            specialty, language, and other critical factors. The platform
            improves both operational efficiency for healthcare organizations and
            accessibility to care for patients navigating severe behavioral
            health challenges.
          </p>
        </section>

        {/* My Work Section */}
        <section className="yhealth-content-block">
          <h2>My Work</h2>

          <p>
            As part of Y-Health’s early-stage growth, I contributed across
            several areas of product development, AI implementation, customer
            experience, and market research. I collaborated on AI-driven referral
            functionality by writing prompts and testing AI agents designed to
            improve the accuracy and speed of therapist-to-patient matching. In
            addition, I developed customer surveys, onboarding documentation,
            user manuals, and FAQ resources to support adoption and gather
            actionable user feedback. I also helped roadmap foundational platform
            features, including support workflows and account management
            functionality.
          </p>

          <p>
            Beyond product execution, I conducted market research to support
            Y-Health’s expansion strategy and identify high-value healthcare
            partnerships. I used a Python-based web scraper to collect and
            analyze operational and financial data from major hospitals across
            the Northeast, including inpatient utilization, hospital capacity,
            patient statistics, and revenue metrics. This research helped
            identify healthcare organizations that aligned most closely with
            Y-Health’s growth strategy.
          </p>
        </section>

        {/* Conclusion Section */}
        <section className="yhealth-content-block">
          <h2>Conclusion</h2>

          <p>
            My work with Y-Health allowed me to contribute directly to the
            development of a startup operating in a high-impact healthcare space
            while strengthening both my AI-focused and traditional product
            management skills. Through hands-on involvement in product strategy,
            user experience improvements, and customer research, I helped
            support a platform that is actively expanding its healthcare
            partnerships and improving access to behavioral health services.
          </p>
        </section>
      </section>
    </main>
      <Footer />
    </div>
  );
}