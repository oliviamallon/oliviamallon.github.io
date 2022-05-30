import About from "./pages/About";

import Projects from "./pages/Projects";

import Experience from "./pages/Experience";

import Home from "./pages/Home.js";

import Navbar from "./components/Navbar";

import Socials from "./components/Socials";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// <About />

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Socials />
    </Router>
  );
}

export default App;
