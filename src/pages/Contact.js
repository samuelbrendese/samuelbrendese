import './Contact.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Dark_Blue_Email from "../images/icons/Dark_Blue_Email.svg";
import Dark_Blue_Phone from "../images/icons/Dark_Blue_Phone.svg";
import Dark_Blue_LinkedIn from "../images/icons/Dark_Blue_LinkedIn.svg";


export default function Contact() {
  return (
    <div>
      <Nav />
      <main className="contact-page">
      {/* Contact Section */}
      <section className="contact-section">
        {/* Contact Header */}
        <h1>Contact Information</h1>

        {/* Contact Links */}
        <div className="contact-links">
          <a href="mailto:sambrendese@gmail.com" className="contact-item">
            <span><img src={Dark_Blue_Email} className="contact-icon-placeholder" alt="Email_Icon" /></span>
            <span className='contact-text'>sambrendese@gmail.com</span>
          </a>

          <a href="tel:5186942615" className="contact-item">
            <span><img src={Dark_Blue_Phone} className="contact-icon-placeholder" alt="Phone_Icon" /></span>
            <span className='contact-text'>(518) 694-2615</span>
          </a>

          <a
            href="https://www.linkedin.com/in/samuel-brendese-4075721a8/"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span><img src={Dark_Blue_LinkedIn} className="contact-icon-placeholder" alt="LinkedIn_Icon" style={{ width: "3.5rem", height: "3rem" }} /></span>
            <span className='contact-text'>LinkedIn: Samuel Brendese</span>
          </a>
        </div>
      </section>
    </main>
    <Footer />
    </div>
  );
}