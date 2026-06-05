import "./Webinars.css";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Small_Webinars from '../images/Small_Webinars_Logo.png';
import Webinar_Page from '../images/Webinar_Page.png';
import Blue_Roadblock from "../images/icons/Blue_Roadblock.svg";
import Blue_Time from "../images/icons/Blue_Time.svg";
import Blue_Down_Arrow from "../images/icons/Blue_Down_Arrow.svg";




export default function Webinars() {
  return (
    <div>
      <Nav />
      <main className="webinars-page">
      {/* Case Study Main Container */}
      <section className="webinars-section">
        {/* Top Hero Image Placeholder */}
        <div className="webinars-hero-wrapper"><img src={Small_Webinars} className="webinars-hero-image" alt="Webinars Logo" /></div>

        {/* Intro Section */}
        <section className="webinars-intro-section">
          {/* Intro Text */}
          <div className="webinars-intro-text">
            <p>
              RethinkCare’s team of clinical experts host monthly webinars where
              users can attend and learn about various life skills to help them
              on their wellness journeys.
            </p>

            <p>
              While webinars are consistently popular, they were previously
              available only through live sessions at predetermined times, which
              made them inaccessible to many users.
            </p>
          </div>

          
        </section>

        {/* The Problem Section */}
        <section className="webinars-content-block">
          <h2>The Problem</h2>

          <p>
            Despite consistent live attendance, users repeatedly reported
            challenges with webinars:
          </p>

          <div className="webinars-problem-list">
            <div className="webinars-problem-item">
              <span><img src={Blue_Roadblock} className="webinars-problem-icon" alt="Roadblock" /></span>
              <p>
                Inaccessibility - Webinars occurred only once per month, with no
                replay option.
              </p>
            </div>

            <div className="webinars-problem-item">
              <span><img src={Blue_Time} className="webinars-problem-icon" alt="Time" /></span>
              <p>
                Timing conflicts - Sessions occurred at inconvenient times,
                particularly for international users.
              </p>
            </div>

            <div className="webinars-problem-item">
              <span><img src={Blue_Down_Arrow} className="webinars-problem-icon" alt="Down_Arrow" style={{ width: '3.25rem', height: '2.5rem' }} /></span>
              <p>
                Missed engagement - Users unable to attend had no way to benefit
                from valuable webinar content.
              </p>
            </div>
          </div>

          <p>
            This meant that high-demand content was locked to limited
            availability, preventing us from fully engaging users and missing
            opportunities to boost platform usage, satisfaction, and retention.
          </p>
        </section>

        {/* The Solution Section */}
        <section className="webinars-content-block">
          <h2>The Solution</h2>

          <p>
            I drove webinar engagement and improved content accessibility by
            creating a dedicated page that houses all recorded webinars and lets
            user filter them by topic.
          </p>

          {/* Intro Image Placeholder */}
          <div><img src={Webinar_Page} className="webinars-intro-image" alt="Webinar Page" /></div>

          <p className="webinars-kpi-text">
            <strong>KPIs:</strong>
            <br />
            1. Increase total unique webinar views per month &#40;live +
            on-demand&#41; by 60%.
            <br />
            2. Achieve an 80%+ satisfaction rate with the on demand webinars
            page through in-app surveys.
          </p>
        </section>

        {/* Execution Section */}
        <section className="webinars-content-block">
          <h2>Execution</h2>

          <div className="webinars-execution-grid">
            <div className="webinars-execution-card">
              <h3>STEP 1</h3>
              <h4>Discovery & Definition</h4>
              <ul>
                <li>
                  Validated demand for the webinars page by collecting feedback
                  through user interviews and targeted surveys.
                </li>
                <li>
                  Defined MVP: A centralized on-demand webinars page that hosts
                  recorded sessions by release date, with filtering capabilities
                  for category, newest, most viewed, and favorites.
                </li>
              </ul>
            </div>

            <div className="webinars-execution-card">
              <h3>STEP 2</h3>
              <h4>Design & Requirements</h4>
              <ul>
                <li>
                  Created low-fidelity wireframes and worked with design to
                  finalize mockups that are focused on organization and
                  discoverability of content.
                </li>
                <li>
                  Presented prototypes and PRDs to the development team, then
                  conducted formal refinement and backlog grooming for
                  established work items.
                </li>
              </ul>
            </div>

            <div className="webinars-execution-card">
              <h3>STEP 3</h3>
              <h4>Cross-Functional Alignment</h4>
              <ul>
                <li>
                  Aligned on launch goals with marketing, sales, support,
                  development, and clinical experts.
                </li>
                <li>
                  Educated stakeholders on the value add and functionality of
                  the webinars page.
                </li>
              </ul>
            </div>

            <div className="webinars-execution-card">
              <h3>STEP 4</h3>
              <h4>Delivery & Launch</h4>
              <ul>
                <li>Facilitated QA and UAT to confirm launch readiness.</li>
                <li>
                  Recorded demos and hosted training sessions with internal
                  teams before launch.
                </li>
                <li>
                  Managed communications to promote the webinars page: release
                  notes, email blasts, in-app notifications, and post-watch
                  surveys.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="webinars-content-block">
          <h2>Results</h2>

          <div className="webinars-results-grid">
            <div className="webinars-result-card">
              <h3>+300%</h3>
              <p>
                Increase in total monthly webinar viewers &#40;live +
                on-demand&#41;
              </p>
              <p className="webinars-result-note">Initial goal was 60%</p>
            </div>

            <div className="webinars-result-card">
              <h3>90%</h3>
              <p>Satisfaction rate</p>
              <p className="webinars-result-note">Initial goal was 80%</p>
            </div>

            <div className="webinars-result-card">
              <h3>+7,000</h3>
              <p>
                New users engaged with webinars within the first quarter of
                launch
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="webinars-content-block">
          <h2>Conclusion</h2>

          <p>
            This initiative transformed webinars from a limited, live-only
            experience into a scalable on-demand content platform that
            significantly improved accessibility, engagement, and user
            satisfaction. By leading this project end-to-end, I delivered a
            feature that exceeded adoption goals and created lasting value for
            both users and the business.
          </p>
        </section>
      </section>
    </main>
      <Footer />
    </div>
  );
}