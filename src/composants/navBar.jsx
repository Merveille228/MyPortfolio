import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  //  Gestion du thème DaisyUI
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const links = [
    { name: "Accueil", id: "accueil" },
    { name: "Projets", id: "projets" },
    { name: "Compétences", id: "competences" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-4 right-4 z-50 backdrop-blur-xl shadow-lg border rounded-2xl border-white/20 gradient-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">AKIM</div>

        {/* grand écrans */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li
              key={link.id}
              className="font-medium text-white-700 hover:text-blue-600 cursor-pointer transition"
              onClick={() => scrollToSection(link.id)}
            >
              {link.name}
            </li>
          ))}

          {/* bouton thème */}
          <li>
            <label className="toggle text-base-content">
              <input
                type="checkbox"
                checked={theme === "light"}
                onChange={toggleTheme}
                className="theme-controller"
              />

              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>

              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
          </li>
        </ul>

        {/* Icon du hamburger */}
        <button
          className="md:hidden transition-all rounded-lg hover:bg-gray-100"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden shadow-sm border-t">
          <ul className="flex flex-col px-4 py-4 space-y-4">
            {links.map((link) => (
              <li
                key={link.id}
                className=" font-medium hover:text-blue-600 cursor-pointer transition"
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => scrollToSection(link.id), 150); // 🔥 CORRECTION ICI
                }}
              >
                {link.name}
              </li>
            ))}

            {/* bouton thème en mobile */}
            <li>
              <label className="toggle text-base-content">
                <input
                  type="checkbox"
                  checked={theme === "light"}
                  onChange={toggleTheme}
                  className="theme-controller"
                />

                <svg
                  aria-label="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </g>
                </svg>

                <svg
                  aria-label="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </g>
                </svg>
              </label>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
