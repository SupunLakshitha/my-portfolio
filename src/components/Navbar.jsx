import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  // Track scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver — auto-highlight active section on scroll
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.querySelector(item.link)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  const navBg = darkMode
    ? scrolled
      ? "bg-gray-900/95 border-gray-700/50"
      : "bg-gray-900/70 border-transparent"
    : scrolled
    ? "bg-white/95 border-gray-200/80"
    : "bg-white/70 border-transparent";

  return (
    <div className="fixed top-4 left-0 w-full z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`flex items-center justify-between w-full max-w-5xl
          backdrop-blur-xl rounded-2xl px-5 lg:px-8 py-3
          border shadow-lg shadow-black/5 transition-all duration-300
          ${navBg}`}
      >
        {/* Logo */}
        <motion.a href="#home" whileHover={{ scale: 1.03 }}>
          <span className={`text-lg font-bold tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
            Supun<span className="text-orange-500">.</span>
          </span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <a
                key={item.name}
                href={item.link}
                className="relative px-4 py-2 rounded-xl group"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl bg-orange-500/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-orange-500"
                      : darkMode
                      ? "text-gray-300 group-hover:text-white"
                      : "text-gray-600 group-hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className={`p-2 rounded-xl transition-colors ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-yellow-300"
                : "bg-gray-100 hover:bg-gray-200 text-gray-600"
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>

          {/* Hire Me */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden lg:block px-5 py-2 text-sm font-semibold text-white rounded-xl
              bg-gradient-to-r from-orange-500 to-amber-500
              hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
          >
            Hire Me
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`lg:hidden p-2 rounded-xl ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-[72px] w-[calc(100%-2rem)] max-w-5xl
              rounded-2xl shadow-xl border p-2 lg:hidden
              ${darkMode
                ? "bg-gray-900/98 border-gray-700/60"
                : "bg-white/98 border-gray-200"
              }`}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.name.toLowerCase();
              return (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "text-orange-500 bg-orange-500/10"
                      : darkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-800"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="mt-2 pt-2 border-t border-gray-200/20 px-2 pb-1">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-full py-2.5 text-sm font-semibold
                  text-white rounded-xl bg-gradient-to-r from-orange-500 to-amber-500"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;