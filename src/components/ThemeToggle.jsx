import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={handleChangeTheme}
      aria-label="Alternar tema oscuro/claro"
      className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-indigo-500"
    >
      {theme === "dark" ? <FaMoon /> : <FaSun />}
      <span className="hidden sm:inline">
        {theme === "dark" ? "" : ""}
      </span>
    </button>
  );
}

export default ThemeToggle;