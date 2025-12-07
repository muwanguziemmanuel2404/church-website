import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Mission from "./pages/Mission/Mission";
import Branches from "./pages/Branches/Branches";
import TithesOfferings from "./pages/TitheOfferings/TitheOfferings";
import Sermons from "./pages/Sermons/Sermons";
import Gallery from "./pages/Gallery/Gallery";
import Donations from "./pages/Donations/Donations";
import Contact from "./pages/Contact/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/titheofferings" element={<TithesOfferings />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
