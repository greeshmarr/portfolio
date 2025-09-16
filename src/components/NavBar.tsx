import { useCallback, useState, useEffect } from "react";
import logoImage from "../assets/logo.png";

export const NavBar = ({
  onNavigate,
  currentSection,
}: {
  onNavigate: (section: string) => void;
  currentSection?: string;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { label: "Home", section: "hero" },
    { label: "About", section: "about" },
    { label: "Experience", section: "experience" },
    { label: "Skills", section: "skills" },
    { label: "Projects", section: "projects" },
    // { label: "Publications", section: "publications" },
    { label: "Contact", section: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down past a certain threshold
        setIsScrollingUp(false);
      } else {
        // Scrolling up
        setIsScrollingUp(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = useCallback(
    (section: string) => {
      onNavigate(section);
    },
    [onNavigate]
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        isScrollingUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-4 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <button
          onClick={() => handleNavClick("hero")}
          className="transition-all duration-300 hover:scale-110 hover:rotate-3 focus:outline-none focus:ring-2 focus:ring-[oklab(0.278187_0.0396484_0.114655)] focus:ring-opacity-50 rounded-full"
        >
          <img
            src={logoImage}
            alt="Logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-md"
          />
        </button>
        <div className={`flex items-center gap-3 md:gap-5 px-4 py-2 rounded-2xl`}>
          {navItems.slice(1).map((item) => (
            <button
              key={item.section}
              onClick={() => handleNavClick(item.section)}
              className={`text-sm md:text-base font-semibold tracking-wide transition-all duration-300 relative px-4 py-2.5 rounded-xl
                ${
                  currentSection === item.section
                    ? "text-white bg-black shadow-lg shadow-black/20 scale-105"
                    : "text-black hover:bg-black/10 hover:scale-102"
                }
                focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};