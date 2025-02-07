import { useEffect, useMemo, useRef, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  // Variables declaration
  const [activeSection, setActiveSection] = useState<string>("home");

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(() => [
    { key: "home", ref: homeRef },
    { key: "about", ref: aboutRef },
    { key: "projects", ref: projectsRef },
    { key: "contact", ref: contactRef },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust threshold as needed (Default: 0.35)
      // If value == 1, section becomes active as soon as it appears
      // Else value approaches 0, section becomes active as it reaches top of viewport
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (const { key, ref } of sections) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(key);
            break;
          }
        }
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll); // Cleanup on re-render
  }, [sections]); // Changes when "sections" change

  // Returned component
  return (
    <div className="container">
      {/* Top navigation */}
      <nav className="nav-bar">
        {sections.map(({ key, ref }) => (
          <button key={key}
            className={`nav-button ${activeSection === key ? "active" : ""}`}
            onClick={() => ref.current?.scrollIntoView({ behavior: "smooth"})}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        {sections.map(({ key }) => (
          <div key={key} className={`indicator-dot ${activeSection === key ? "active-dot" : ""}`} />
        ))}
      </div>

      {/* Sections */}
      <div className="content">
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </div>
    </div>
  );
}