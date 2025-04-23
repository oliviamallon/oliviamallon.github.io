import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-sans">
        {/* Simple Top Nav */}
        <Navbar />

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="mt-32 text-center text-sm text-gray-500 pb-10">
          © {new Date().getFullYear()} Olivia Mallon · All rights reserved
        </footer>
      </div>
    </Router>
  );
}

export default App;
