import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Error from "../images/icons/Error.svg";

export default function NoPage() {
  return (
    <>
      <Nav />
      <div className="app-content">
        <h1 style={{ color: "#5d8df4", textAlign: "center" }}>Error 404</h1>
        <h2 style={{ color: "#07176d", textAlign: "center" }}>Page Not Found</h2>
        <img src={Error} alt="Error_Icon" style={{ display: "block", margin: "0 auto", width: "3rem", height: "3rem" }} />
      </div>
      <Footer />
    </>
  );
}