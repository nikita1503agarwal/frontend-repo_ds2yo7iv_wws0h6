import { useEffect, useState } from 'react';
import { LogIn, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'system';
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = stored === 'dark' || (stored === 'system' && prefersDark);
    setDark(shouldDark);
    document.documentElement.classList.toggle('dark', shouldDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 shadow-inner" />
          <span className="font-semibold text-lg tracking-tight text-slate-900 dark:text-slate-100">FaceAttend</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Fitur</a>
          <a href="#how" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Cara Kerja</a>
          <a href="#cta" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Mulai</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            {dark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
          </button>
          <a
            href="/login"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm font-medium shadow hover:shadow-md transition-shadow"
          >
            <LogIn size={16} />
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
