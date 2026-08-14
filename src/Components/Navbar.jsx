import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import CursorDot from "./CursorDot";
import useCursorDot from "./useCursorDot";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const { position, moveCursor, hideCursor } = useCursorDot();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const closeMenu = () => setMenuOpen(false);
  const changeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return <nav id="navbar" onMouseMove={moveCursor} onMouseLeave={hideCursor} className="fixed top-0 z-50 w-full cursor-none border-b border-slate-200 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-[#0a0a0a]/95">
    <CursorDot position={position} />
    <div className="relative mx-auto flex h-16 max-w-7xl items-center px-5 sm:px-6 lg:px-8">
      <div className="absolute left-1/2 hidden -translate-x-1/2 gap-6 md:flex">{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-slate-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400">{link}</a>)}</div>
      <div className="ml-auto flex gap-3"><button type="button" onClick={changeTheme} aria-label="Change colour theme" className="rounded-full border border-slate-200 bg-slate-100 p-2.5 dark:border-white/10 dark:bg-white/5">{theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}</button><button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu" aria-expanded={menuOpen} className="rounded-xl border border-slate-200 bg-slate-100 p-2.5 md:hidden dark:border-white/10 dark:bg-white/5">{menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}</button></div>
    </div>
    {menuOpen && <div className="border-t border-slate-200 bg-white px-6 py-3 md:hidden dark:border-white/10 dark:bg-[#0a0a0a]">{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu} className="block border-b border-slate-200 py-3 text-sm text-slate-600 last:border-0 dark:border-white/10 dark:text-gray-400">{link}</a>)}</div>}
  </nav>;
}
