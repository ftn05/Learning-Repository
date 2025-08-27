
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const CV_URL = "https://drive.google.com/file/d/17LtvsCkQI-MDQRBW2Nu5vtr9Ijqj8b3G/view?usp=sharing;" // Update with your CV path if needed

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Removed Services from the navLinks array
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    // { name: "Services", href: "#services" }, // Removed
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-black/70 backdrop-blur-md py-3 shadow-md"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white animate-text-glow">
          Portfolio<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          {/* Download CV button/section */}
          <a
            href={CV_URL}
            download
            className="ml-4 inline-flex items-center gap-2 bg-cyan-500 px-4 py-2 rounded-full text-white font-semibold shadow-md hover:bg-cyan-600 transition-colors"
            title="Download CV"
          >
            <Download size={18} className="mr-1" />
            CV
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-gray-900/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-3 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Download CV button/section */}
            <a
              href={CV_URL}
              download
              className="mt-2 inline-flex items-center gap-2 bg-cyan-500 px-4 py-2 rounded-full text-white font-semibold shadow-md hover:bg-cyan-600 transition-colors justify-center"
              title="Download CV"
            >
              <Download size={18} className="mr-1" />
              Download CV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
