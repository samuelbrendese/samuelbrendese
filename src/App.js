import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Webinars from "./pages/Webinars";
import Recommender from "./pages/Recommender";
import Yhealth from "./pages/Yhealth";
import Fuscos from "./pages/Fuscos";
import NoPage from "./pages/NoPage";
import { ScrollRestoration } from "./components/ScrollRestoration";



export default function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <ScrollRestoration />
        <Routes>
          <Route index element={<Portfolio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/recommender" element={<Recommender />} />
          <Route path="/y-health" element={<Yhealth />} />
          <Route path="/fuscos-detailing" element={<Fuscos />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

