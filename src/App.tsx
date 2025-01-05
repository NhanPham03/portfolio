import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <HashRouter>
      <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/projects"}>Projects</Link>
      <Link to={"/contact"}>Contact</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}