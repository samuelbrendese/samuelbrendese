import "./Recommender.css";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Small_Recommender from '../images/Small_Recommender_Logo.png';
import Recommender_UX from '../images/Recommender_UX.png';
import Recommender_Page from '../images/Recommender_Page.png';
import Blue_Magnifying_Glass from "../images/icons/Blue_Magnifying_Glass.svg";
import Blue_People from "../images/icons/Blue_People.svg";
import Blue_Low_Engagement from "../images/icons/Blue_Low_Engagement.svg";


export default function Recommender() {
  return (
    <div>
      <Nav />
      <main className="ai-recommender-page">
      {/* Case Study Main Container */}
      <section className="ai-recommender-section">
        {/* Top Hero Image Placeholder */}
        <div className="ai-hero-wrapper"><img src={Small_Recommender} className="ai-hero-image" alt="Recommender Logo" /></div>

        {/* Intro Section */}
        <section className="ai-intro-section">
          {/* Intro Text */}
          <div className="ai-intro-text">
            <p>
              RethinkCare provides behavioral health services for
              neurodivergent individuals through one-on-one sessions with
              certified behavioral analysts and an on-demand content library
              designed to help users build essential life skills.
            </p>

            <p>
              To improve content discovery and enhance the user experience, I
              led the implementation of an AI-driven homepage recommendation
              tool that personalizes course suggestions based on each user’s
              viewing behavior.
            </p>
          </div>

         
        </section>

        {/* The Problem Section */}
        <section className="ai-content-block">
          <h2>The Problem</h2>

          <div className="ai-problem-list">
            <div className="ai-problem-item">
              <span><img src={Blue_Magnifying_Glass} className="ai-problem-icon" alt="Magnifying_Glass" /></span>
              <p>
                RethinkCare has cultivated a large and diverse content library,
                which made it difficult and time-consuming for users to discover
                relevant courses.
              </p>
            </div>

            <div className="ai-problem-item">
              <span><img src={Blue_People} className="ai-problem-icon" alt="2_People" /></span>
              <p>
                No personalization – Despite serving 70,000+ monthly active users
                with diverse needs and preferences, RethinkCare offered the same
                homepage experience to every user with no personalized content
                recommendations.
              </p>
            </div>

            <div className="ai-problem-item">
              <span><img src={Blue_Low_Engagement} className="webinars-problem-icon" alt="Low_Engagement" /></span>
              <p>
                Low homepage engagement - Less than 1% of sessions played were
                accessed from the homepage.
              </p>
            </div>
          </div>

          <p>
            Additionally, multiple user interviews and feedback surveys had
            cited difficulty in discovering relevant content.
          </p>
        </section>

        {/* The Solution Section */}
        <section className="ai-content-block">
          <h2>The Solution</h2>

          <p>
            Whether users are new to the platform or long-time customers, the
            homepage serves as the central hub for discovering and accessing
            content efficiently. As the primary entry point into the platform, it
            plays a critical role in shaping the overall user experience and
            first impression of the product.
          </p>

          <p>
            To enhance this key part of the user experience, I implemented an
            AI-powered content recommendation tool that personalizes courses
            displayed on the homepage based on each user’s preferences, viewing
            history, and search activity.
          </p>

           {/* Intro Image Placeholder */}
          <div><img src={Recommender_Page} className="ai-intro-image" alt="Recommender Page" /></div>

          <p>
            <strong>How it works:</strong>
          </p>

          <p>
            RethinkCare’s content library is organized into three primary
            categories: Parenting Skills, Professional Resilience, and Personal
            Well-being. Each category contains multiple subcategories, and every
            course is tagged accordingly with one or multiple subcategories.
          </p>

          <p>
            When users first log into the platform, they are prompted to select
            up to five subcategories that align with their interests and goals.
            This provides an initial understanding of their needs and helps
            surface the most relevant content. Users can update these
            preferences at any time.
          </p>

          <p>
            Once onboarding is complete, users are directed to the homepage where
            they are presented with a new “Recommended For You” section featuring
            three personalized content swim lanes. Recommendations are generated
            using the user’s selected interests, recently viewed courses, and
            search history. The recommendation engine refreshes daily to
            continuously deliver relevant and engaging content.
          </p>

          {/* Solution Image Placeholder */}
          <div><img src={Recommender_UX} className="ai-solution-image" alt="Recommender UX" /></div>

          <p className="ai-kpi-text">
            <strong>KPIs:</strong>
            <br />
            1. Maintain 97% session helpfulness rating.
            <br />
            2. Boost sessions completed per month by 5% with an increase in
            engagement from homepage content.
          </p>
        </section>

        {/* Execution Section */}
        <section className="ai-content-block">
          <h2>Execution</h2>

          <div className="ai-execution-grid">
            <div className="ai-execution-card">
              <h3>STEP 1</h3>
              <h4>Discovery & Definition</h4>
              <ul>
                <li>
                  Validated customer demand through targeted polls to measure
                  interest in personalized AI-driven content recommendations.
                </li>
                <li>
                  Defined MVP: An AI-powered “Recommended For You” homepage
                  section that displays personalized course recommendations
                  based on user-selected interests, viewing history, and search
                  activity, with suggestions refreshing daily.
                </li>
              </ul>
            </div>

            <div className="ai-execution-card">
              <h3>STEP 2</h3>
              <h4>Design & Requirements</h4>
              <ul>
                <li>
                  Ensured the new “Recommended For You” section designs easily
                  catch the user’s attention.
                </li>
                <li>
                  Collaborated with development teams to define recommendation
                  logic, AI prompting strategy, and user journey.
                </li>
                <li>
                  Established requirements for secure user data handling within
                  the AI recommendation workflow.
                </li>
              </ul>
            </div>

            <div className="ai-execution-card">
              <h3>STEP 3</h3>
              <h4>Cross-Functional Alignment</h4>
              <ul>
                <li>
                  Conducted A/B testing to evaluate user engagement and
                  preference between displaying a single AI-recommended course
                  versus multiple personalized recommendations at once.
                </li>
                <li>
                  Aligned with stakeholders to review and finalize OKRs to ensure
                  success metrics and business goals were clearly defined prior
                  to release.
                </li>
              </ul>
            </div>

            <div className="ai-execution-card">
              <h3>STEP 4</h3>
              <h4>Delivery & Launch</h4>
              <ul>
                <li>
                  Facilitated QA and feature-flagged the AI recommender with
                  test clients before full platform rollout.
                </li>
                <li>
                  Recorded demos, hosted training sessions, and coordinated
                  launch readiness with internal teams.
                </li>
                <li>
                  Tracked engagement metrics driven by AI-powered recommendations
                  post-launch.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="ai-content-block">
          <h2>Results</h2>

          <div className="ai-results-grid">
            <div className="ai-result-card">
              <h3>97.5%</h3>
              <p>Session helpfulness rating</p>
            </div>

            <div className="ai-result-card">
              <h3>+10%</h3>
              <p>Increase in sessions completed per month</p>
            </div>

            <div className="ai-result-card">
              <h3>5%</h3>
              <p>Of all completed sessions are AI recommended</p>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="ai-content-block">
          <h2>Conclusion</h2>

          <p>
            This initiative transformed the homepage into a personalized
            experience that improved content accessibility and engagement. By
            leading this feature from conception to launch, I delivered a
            scalable AI-driven recommendation solution that exceeded engagement
            goals while maintaining user satisfaction. The recommender drove
            measurable business impact while validating the value of
            personalization for RethinkCare’s diverse group of users.
          </p>
        </section>
      </section>
    </main>
      <Footer />
    </div>
  );
}