import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Midnight from "./components/Blog/Midnight";
import Casino from "./components/Blog/Casino";
import Hyper from "./components/Blog/Hyper";
import Toxie from "./components/Blog/Toxie";
import Train from "./components/Blog/Train";


import BackgroundStars from "./components/BackgroundStars";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <BackgroundStars count={20} />
        <Navbar />
        <ScrollToTop />

        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />

          {/* Project pages */}
          <Route path="/project/midnight-delivery" element={<Midnight />} />
          <Route path="/project/hyperfist" element={<Hyper />} />
          <Route path="/project/casino-menu-ui" element={<Casino />} />
          <Route path="/project/toxie-plant" element={<Toxie />} />
          <Route path="/project/train-wreck" element={<Train />} />
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
